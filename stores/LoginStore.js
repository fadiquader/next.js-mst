import { types, getParent, flow } from "mobx-state-tree"
import axios from 'axios';
import { signIn, redirectIfAuthenticated } from "../lib/auth";

export const LoginStore = types
  .model("PostStore", {
    status: 'pending',
    username: types.optional(types.string, ''),
    password: types.optional(types.string, ''),
  })
  .views(self => ({
    get store() {
      return getParent(self)
    }
  }))
  .actions(self => ({
    changeStatus(status) {
      self.status = status
    },
    tryLogin: flow(function* login({ email, password }) {
      try {
        const res = yield signIn(email, password)

      } catch (err) {
        console.error("Failed to login ", err)
      }
    }),
  }));