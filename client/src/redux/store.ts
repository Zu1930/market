import { legacy_createStore as createStore } from 'redux';
import { useDispatch } from 'react-redux';
import rootReducer from './rootReducer';

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;
