let logform = document.getElementById("loginFrom")

let emailIn = document.getElementById("email")
let passwordIn = document.getElementById("psw")


let regData = JSON.parse(localStorage.getItem("register")) || []

logform.addEventListener("submit", function(e) {
    e.preventDefault()

    let exist = regData.some(function(ele) {
        return ele.email == emailIn.value && ele.password == passwordIn.value
    })

    let loginStatus = false

    if (exist) {
        alert("SignedIn Successfully")
        loginStatus = true
        console.log(loginStatus)
        let current_user = regData.filter(function(el) {
            return el.email == emailIn.value && el.password == passwordIn.value
        })[0]

        localStorage.setItem("user-name", current_user.name)
        localStorage.setItem("user-email", current_user.email)
        localStorage.setItem("loginStatus", loginStatus)

        window.location.href = "index.html"

    } else {

        alert("Incorrect login credentials")
    }

    // if (loginStatus == false) {
    //     document.getElementById("logoutBtn").style.display = "none"
    // } else {
    //     document.getElementById("logoutBtn").classList.remove("hide")
    // }

    if (loginStatus == true) {
        document.getElementById("userN").style.display = "none"
    } else {
        document.getElementById("userN").classList.remove("hide")
    }

})