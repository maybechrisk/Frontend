// 글 등록과 관련된 CRUD API 함수 파일
import { posts } from './index';

// 조회 API
function fetchPosts() {
  return posts.get('/');
}

// 특정 글 조회 api
function fetchPost(postId) {
  return posts.get(postId);
}

// 새 글 생성 API
function createPost(postData) {
  return posts.post('/', postData);
}

// 글 삭제 API
function deletePost(postId) {
  return posts.delete(postId);
}

// 글 수정 api
function editPost(postId, postData) {
  return posts.put(postId, postData);
}

export { fetchPosts, createPost, deletePost, fetchPost, editPost };
