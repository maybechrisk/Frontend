// 브라우저 저장소에 쿠키 저장
// 쿠키 저장
function saveAuthToCookie(value) {
  document.cookie = `my_auth=${value}`;
}
// 유저 저장
function saveUserToCookie(value) {
  document.cookie = `my_user=${value}`;
}
// 쿠키 가져오기
function getAuthFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)my_auth\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}
// 유저 정보 가져오기
function getUserFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)my_user\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}
// 쿠키 삭제
function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  deleteCookie,
};
