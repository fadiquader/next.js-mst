import { types, getParent, flow } from "mobx-state-tree"
import axios from 'axios';

export const AuthStore = types
  .model("AuthStore", {
    isAuthenticated: false,
    token: types.optional(types.string, ''),
    username: types.optional(types.string, ''),
  })
  .views(self => ({
    get store() {
      return getParent(self)
    }
  }))
  .actions(self => ({
    authenticate(data) {
      self.isAuthenticated = true;
      self.token = data.token;
      self.username = data.me.username
    }
  }));