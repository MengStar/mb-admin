// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority() {
  return localStorage.getItem('mb-admin-authority');
}

export function setAuthority(authority) {
  return localStorage.setItem('mb-admin-authority', authority);
}

export function setToken(token) {
  return localStorage.setItem('mb-admin-token', token);
}

export function getToken() {
  return localStorage.getItem('mb-admin-token');
}
