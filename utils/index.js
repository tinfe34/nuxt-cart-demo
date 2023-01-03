export const isAuthenticated = () => {
  if(process.client) {
    return JSON.parse(localStorage.getItem('isLoggedIn'));
  }
}
