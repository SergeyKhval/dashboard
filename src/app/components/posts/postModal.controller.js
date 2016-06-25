'use strict';
const _uibModalInstance = new WeakMap();
const _postsService = new WeakMap();
const _toaster = new WeakMap();

export default class PostsModalController {
  constructor($uibModalInstance, PostsService, toaster) {
    _uibModalInstance.set(this, $uibModalInstance);
    _postsService.set(this, PostsService);
    _toaster.set(this, toaster);

    this.post = {};


  }


  addPost(post) {
    post.createdAt = Firebase.ServerValue.TIMESTAMP;

    return _postsService.get(this).addPost(post)
      .then(() => {
        this.post = {};
        this.postform.$setPristine();
        this.postform.$setUntouched();
        _toaster.get(this).pop('success', 'New post saved');
      })
      .catch(e => {
        _toaster.get(this).pop('error', 'Oops', `Our API seems to be unavailable ${e}`);
      });
  }

  cancel() {
    _uibModalInstance.get(this).dismiss('cancel');
  }
}

PostsModalController.$inject = ['$uibModalInstance', 'PostsService', 'toaster'];
