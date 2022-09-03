import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

// eslint-disable-next-line no-shadow
enum ActionType {
  SET_USERS = 'SET_USERS',
  SET_USER_POSTS = 'SET_USER_POSTS',
  SET_USER_ALBOMS = 'SET_USER_ALBOMS',
  SET_SELECT_USER = 'SET_SELECT_USER',
}

const initialState:State = {
  users: [],
  userPosts: [],
  userAlboms: [],
  selectUser: undefined,
};

export const setUsers = createAction<User[]>(ActionType.SET_USERS);
export const setUserPosts = createAction<Post[]>(ActionType.SET_USER_POSTS);
export const setUserAlboms = createAction<Album[]>(ActionType.SET_USER_ALBOMS);
export const setSelectUser = createAction<User>(ActionType.SET_SELECT_USER);

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setUsers, (state, action) => {
    // eslint-disable-next-line no-param-reassign
    state.users = action.payload;
  });

  builder.addCase(setUserPosts, (state, action) => {
    // eslint-disable-next-line no-param-reassign
    state.userPosts = action.payload;
  });

  builder.addCase(setUserAlboms, (state, action) => {
    // eslint-disable-next-line no-param-reassign
    state.userAlboms = action.payload;
  });

  builder.addCase(setSelectUser, (state, action) => {
    // eslint-disable-next-line no-param-reassign
    state.selectUser = action.payload;
  });
});

export const store = configureStore({
  reducer,
});
