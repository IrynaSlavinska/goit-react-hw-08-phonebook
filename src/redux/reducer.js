import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';
import { authReducer } from './auth/authSlice';
import { sortReducer } from './group/groupSlice.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  sort: sortReducer,
  auth: persistReducer(authPersistConfig, authReducer),
};
