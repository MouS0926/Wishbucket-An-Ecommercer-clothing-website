let regform = document.getElementById("regisFrom")
let nameIn = document.getElementById("name")
let emailIn = document.getElementById("email")
let passwordIn = document.getElementById("psw")

let regData = JSON.parse(localStorage.getItem("register")) || []

regform.addEventListener("submit", function(e) {
    e.preventDefault()
    let data = {
        name: nameIn.value,
        email: emailIn.value,
        password: passwordIn.value
    }



    let exist = regData.some(function(ele) {
        return ele.email == data.email
    })
    console.log(exist)

    if (!exist) {
        alert("Registered Successfully")
        regData.push(data)
        localStorage.setItem("register", JSON.stringify(regData))
        regform.reset();
    } else {
        alert("Email already exist")
        regform.reset();
    }

})