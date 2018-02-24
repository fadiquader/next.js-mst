import { types, getParent, flow } from "mobx-state-tree"
import axios from 'axios';

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
    tryLogin: flow(function* login({ username, password }) {
      try {
        console.log('username ', username, 'password ', password)
        const res = yield axios.post("/api/login", {
          username,
          password
        });
        localStorage.setItem('token', res.data.token)

      } catch (err) {
        console.error("Failed to login ", err)
      }
    }),
  }));