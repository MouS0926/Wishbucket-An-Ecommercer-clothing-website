let checkoutLS = JSON.parse(localStorage.getItem("checkout")) || []
let cartRow = document.getElementById("cart-row")


function displayProduct(data) {

    cartRow.innerHTML = ""



    data.forEach(function(el, i) {
        let cartProduct = document.createElement("div")
        cartProduct.setAttribute("class", "card cartProd")

        let cartR = document.createElement("div")
        cartR.setAttribute("class", "row")

        let div1 = document.createElement("div")
        div1.setAttribute("class", "col-md-4")

        let div2 = document.createElement("div")
        div2.setAttribute("class", "col-md-4")

        let div3 = document.createElement("div")
        div3.setAttribute("class", "col-md-4")

        let prodImg = document.createElement("img")
        prodImg.style.width = "100%"

        let brand = document.createElement("h6")
        let title = document.createElement("p")
        let desc = document.createElement("p")

        let qty = document.createElement("span")
        let price = document.createElement("h5")

        prodImg.setAttribute("src", el.image)
        title.innerText = el.title
        desc.innerText = el.description
        brand.innerText = el.brand
        qty.innerText = `Quantity:${el.quantity }`

        price.innerText = el.price * el.quantity







        div3.append(qty, price)
        div2.append(brand, title, desc)
        div1.append(prodImg)
        cartR.append(div1, div2, div3)
        cartProduct.append(cartR)
        cartRow.append(cartProduct)






        // localStorage.setItem("product", JSON.stringify(productData))

    })


}



displayProduct(checkoutLS)

let sum = 0
for (let i = 0; i < checkoutLS.length; i++) {
    sum += checkoutLS[i].price * checkoutLS[i].quantity
}

orderDetails()

function orderDetails() {
    let ordertbody = document.getElementById("orderDetails")
    let tr1 = document.createElement("tr")
    let tr2 = document.createElement("tr")



    let head = document.createElement("td")
    head.setAttribute("colspan", "2")
    head.setAttribute("class", "order-head")

    head.innerText = "ORDER DETAILS"
    tr1.append(head)

    let amountTd = document.createElement("td")
    amountTd.innerText = "Total Amount:"
    let amount = document.createElement("td")
    amount.innerText = `₹${sum}`
    tr2.append(amountTd, amount)

    ordertbody.append(tr1, tr2)
}








// show-shipping-address
let address = JSON.parse(localStorage.getItem("address")) || {}



let addreShow = document.getElementById("showAdd")
addreShow.setAttribute("class", "card show-address")

let addHead = document.createElement("h5")
let addrs = document.createElement("p")
let cit = document.createElement("p")
let pincode = document.createElement("p")

addHead.innerText = "Delivery Address"
addrs.innerText = `Address: ${address.address}`
cit.innerText = `City: ${address.city}`
pincode.innerText = `Pincode: ${address.pin}`

addreShow.append(addHead, addrs, cit, pincode)


// card-button-payment

let cardBtn = document.getElementById("CardBtn")
cardBtn.addEventListener("click", function(e) {
    e.preventDefault()
    window.location.href = "otp.html"
})