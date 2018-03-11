import { types, applySnapshot, getEnv } from "mobx-state-tree"
import { PostStore } from "./PostStore"
import { LoginStore } from "./LoginStore"
import { AuthStore } from "./AuthStore"

let store = null
export const Store = types
  .model('Store', {
    postStore: types.optional(PostStore, {
      posts: {}
      // posts: []
    }),
    name: 'fadi quader',
    loginStore: types.optional(LoginStore, {}),
    authStore: types.optional(AuthStore, {}),
  })
  .views(self => ({
    // get isLoading() {
    //   return self.bookStore.isLoading
    // },
    // get posts() {
    //   return self.postStore.posts
    // }
  }))
  .actions(self => ({
    afterCreate() {
      // self.postStore.loadPosts()
    }
  }));


// const Store = types
//   .model({
//     lastUpdate: types.Date,
//     light: false
//   })
//   .actions((self) => {
//     let timer
//     function start () {
//       timer = setInterval(() => {
//         // mobx-state-tree doesn't allow anonymous callbacks changing data
//         // pass off to another action instead
//         self.update()
//       }, 1000)
//     }
//
//     function update () {
//       self.lastUpdate = Date.now()
//       self.light = true
//     }
//
//     function stop () {
//       clearInterval(timer)
//     }
//
//     return { start, stop, update }
//   })

export function initStore(isServer, snapshot = null) {
  // const fetcher = url => fetch(url).then(response => response.json());
  if(isServer) {
    store = Store.create(
      {},
      {
        // fetch: fetcher,
        alert: m => console.log(m) // Noop for demo: window.alert(m)
      }
    )
  }
  if(store === null) {
    store = Store.create(
      {},
      {
        // fetch: fetcher,
        alert: m => console.log(m) // Noop for demo: window.alert(m)
      }
    )
  }
  if (snapshot) {
    applySnapshot(store, snapshot)
  }
  return store
}
