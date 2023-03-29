 localStorage.getItem("user-name", current_user.name)
 let nameShow = document.getElementById("userN")
 let logoutbtn = document.getElementById("logoutBtn")

 function logout() {
     localStorage.removeItem('user-name');
     localStorage.removeItem('user-email');
     logoutbtn.innerHTML = null
 }