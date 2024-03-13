import { configureStore } from '@reduxjs/toolkit';

import favorites from './favorites';

const store = configureStore({
	reducer: {
		favorites,
	},
});

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
export default store;
