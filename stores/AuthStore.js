import { types, getParent, flow } from "mobx-state-tree"
import axios from 'axios';

export const AuthStore = types
  .model("AuthStore", {
    isAuthenticated: false,
    _id: types.optional(types.string, ''),
    username: types.optional(types.string, ''),
    firstName: types.optional(types.string, ''),
    lastName: types.optional(types.string, ''),
    csrfToken: types.optional(types.string, ''),
  })
  .views(self => ({
    get store() {
      return getParent(self)
    }
  }))
  .actions(self => ({
    authenticate(data) {
      // self.isAuthenticated = true;
      self.username = data.user.username
      self.firstName = data.user.firstName
      self.lastName = data.user.lastName
      self._id =  data.user._id.toString()
    },
    signout() {
      self.isAuthenticated = false;
      self.token = '';
      self.username = '';
    }
  }));