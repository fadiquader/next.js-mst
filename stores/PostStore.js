import { types, getParent, flow } from "mobx-state-tree"
import axios from 'axios';

export const Post = types.model("Post", {
  id: types.identifier(types.number),
  // id: types.number,
  userId: types.number,
  title: types.string,
  body: types.string
})

export const PostStore = types
  .model("PostStore", {
    isLoading: false,
    posts: types.map(Post)
    // posts: types.array(Post)
  })
  .views(self => ({
    get store() {
      return getParent(self)
    }
  }))
  .actions(self => ({
    markLoading(loading) {
      self.isLoading = loading
    },
    updatePosts(data) {
      data.forEach(post => {
        if(typeof post.userId === 'string') return;
        self.posts.put(post)
      })
    },
    loadPosts: flow(function* loadPosts() {
      try {
        // self.markLoading(true);
        const res = yield axios.get("https://jsonplaceholder.typicode.com/posts");
        self.updatePosts(res.data)
        self.markLoading(false);
      } catch (err) {
        console.error("Failed to load posts ", err)
      }
    }),
  }));

function sortBooks(books) {
  return books
    .filter(b => b.isAvailable)
    .sort((a, b) => (a.name > b.name ? 1 : a.name === b.name ? 0 : -1))
}