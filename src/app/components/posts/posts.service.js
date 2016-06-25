'use strict';

const _postsRef = new WeakMap();
const _firebaseArray = new WeakMap();

export class PostsService {
  constructor(Ref, $firebaseArray) {
    _postsRef.set(this, Ref.child('posts'));
    _firebaseArray.set(this, $firebaseArray);

    this.posts = this.getPosts();
  }

  addPost(post) {
    return this.posts.$add(post);
  }

  getPosts() {
    return _firebaseArray.get(this)(_postsRef.get(this));
  }
}

PostsService.$inject = ['Ref', '$firebaseArray'];
