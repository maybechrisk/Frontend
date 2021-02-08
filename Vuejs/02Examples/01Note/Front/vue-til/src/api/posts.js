// 글 등록과 관련된 CRUD API 함수 파일
import { posts } from './index';

// 노트 조회 API
function fetchPosts() {
  return posts.get('/');
}

// 노트 새 글 생성 API
function createPost(postData) {
  return posts.post('/', postData);
}

export { fetchPosts, createPost };
