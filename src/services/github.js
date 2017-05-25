import http from './http'

export const getUser = (user) => {
   return http.get(`/users/${user}`);
}
export const getFollowing = (user) => {
   return http.get(`/users/${user}/following`);
}
