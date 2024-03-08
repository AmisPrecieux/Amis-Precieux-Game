export function checkLogin(){
    this.isLogin = false
    const token = sessionStorage.getItem('token');
    if (token) {
      this.isLogin = true
    }
    return this.isLogin
  }


