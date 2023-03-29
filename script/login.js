let logform = document.getElementById("loginFrom")

let emailIn = document.getElementById("email")
let passwordIn = document.getElementById("psw")

let regData = JSON.parse(localStorage.getItem("register")) || []

logform.addEventListener("submit", function(e) {
    e.preventDefault()

    let exist = regData.some(function(ele) {
        return ele.email == emailIn.value && ele.password == passwordIn.value
    })

    if (exist) {
        alert("SignedIn Successfully")

        let current_user = regData.filter(function(el) {
            return el.email == emailIn.value && el.password == passwordIn.value
        })[0]

        localStorage.setItem("user-name", current_user.name)
        localStorage.setItem("user-email", current_user.email)

        window.location.href = "index.html"

    } else {
        alert("Incorrect login credentials")
    }
})