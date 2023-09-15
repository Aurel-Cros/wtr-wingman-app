import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './features/settingsSlice';

export default configureStore({
    reducer: {
        settings: settingsReducer
    }
})