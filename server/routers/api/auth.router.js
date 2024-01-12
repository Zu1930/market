const bcrypt = require('bcrypt');
const router = require('express').Router();
const { User } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');
const cookiesConfig = require('../../config/cookiesConfig');

router.post('/registration', async (req, res) => {
  const { email, name, password } = req.body;
  console.log(email, name, password);
  let userInDb;

  try {
    userInDb = await User.findOne({ where: { email } });

    if (!userInDb) {
      const hashPassword = await bcrypt.hash(password, 10);

      userInDb = await User.create({
        email,
        name,
        password: hashPassword,
      });

      if (userInDb) {
        const { accessToken, refreshToken } = generateTokens({
          user: { id: userInDb.id, email: userInDb.email, name: userInDb.name },
        });

        res
          .cookie(cookiesConfig.refresh, refreshToken, {
            maxAge: cookiesConfig.maxAgeRefresh,
            httpOnly: true,
          })
          .cookie(cookiesConfig.access, accessToken, {
            maxAge: cookiesConfig.maxAgeAccess,
            httpOnly: true,
          })
          .status(201)
          .json({ message: 'success', userInDb });
        return;
      }
    }
    res.status(409).json({ error: 'Такой пользователь уже зарегистрирован' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post('/authorization', async (req, res) => {
  const { email, password } = req.body;

  try {
    let userInDb = await User.findOne({ where: { email } });

    if (userInDb) {
      const isPasswordChek = await bcrypt.compare(password, userInDB.password);

      if (isPasswordChek) {
        const { accessToken, refreshToken } = generateTokens({
          user: { id: userInDb.id, email: userInDb.email, name: userInDb.name },
        });

        res
          .cookie(cookiesConfig.refresh, refreshToken, {
            maxAge: cookiesConfig.maxAgeRefresh,
            httpOnly: true,
          })
          .cookie(cookiesConfig.access, accessToken, {
            maxAge: cookiesConfig.maxAgeAccess,
            httpOnly: true,
          })
          .status(201)
          .json({ message: 'success', userInDb });
        return;
      }
    }
    // сделать ридер
    res.status(409).json({ message: 'Ваша почта или пароль не соответствуют' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/logout', async (req, res) => {
  try {
    const { access } = req.cookies;

    if (access) {
      res.locals.user = {};
      res
        .clearCookie(cookiesConfig.refresh)
        .clearCookie(cookiesConfig.access)
        .json({ message: 'logout' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/check', async (req, res) => {
  if (res.locals.user) {
    const { user } = res.locals;
    const userInDb = await User.findOne({ where: { id: user?.id } });
    if (user && userInDb) {
      res.status(200).json({
        user: { id: user.id, email: user.email, name: user.name },
      });
    } else {
      res.status(400).json({ user: false });
    }
  }
});

module.exports = router;
