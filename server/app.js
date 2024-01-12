require('dotenv').config();

const express = require('express');
const serverConfig = require('./config/serverConfig');
const path = require('path');
const app = express();
const indexRoutes = require('./routers/index.router');
const PORT = process.env.PORT || 3000;

serverConfig(app);
// vite делает билд в папку dist
app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use('/', indexRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => console.log(`Server has been started at port: ${PORT}`));
