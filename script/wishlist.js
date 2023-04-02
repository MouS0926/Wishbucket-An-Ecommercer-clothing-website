let wishData = JSON.parse(localStorage.getItem("wish")) || []


let cartData = JSON.parse(localStorage.getItem("cart")) || []


let wishRow = document.getElementById("wishlist-row")

displayProduct(wishData)

function displayProduct(data) {

    wishRow.innerHTML = ""

    let totalProd = document.getElementById("total-product")
    totalProd.innerText = data.length


    data.forEach(function(el, i) {
        let prodCol = document.createElement("div")
        prodCol.setAttribute("class", "col-md-3")

        let card = document.createElement("div")
        card.setAttribute("class", "card product-card")

        let image = document.createElement("img")
        let brand = document.createElement("h6")
        let title = document.createElement("p")
        let category = document.createElement("p")
        let price = document.createElement("p")

        let btndiv = document.createElement("div")
        let cartBtn = document.createElement("button")

        let remove = document.createElement("button")
        btndiv.append(cartBtn, remove)

        remove.setAttribute("class", "btn btn-outline-primary cartBTn")
        remove.setAttribute("type", "button")

        price.style.fontWeight = "700"
        cartBtn.setAttribute("class", "btn btn-outline-primary cartBTn")
        cartBtn.setAttribute("type", "button")


        image.setAttribute("src", el.image)
        brand.innerText = el.brand
        title.innerText = el.title
        category.innerText = el.category
        price.innerText = `₹ ${el.price}`
        cartBtn.innerText = "Add to Cart"
        remove.innerText = "Remove"

        cartBtn.addEventListener("click", function() {
            if (checkAvailable(el)) {
                alert("Product is Already in the Cart")
            } else {
                cartData.push({...el,
                    quantity: 1
                })

                localStorage.setItem("cart", JSON.stringify(cartData))
                alert("Product Added To Cart")
            }
        })

        remove.addEventListener("click", function() {
            wishData = wishData.filter(function(ele, ind) {
                if (ind == i) {
                    return false
                } else {
                    return true
                }
            })
            localStorage.setItem("wish", JSON.stringify(wishData))

            displayProduct(wishData)
        })





        wishRow.append(prodCol)
        prodCol.append(card)
        card.append(image, brand, title, category, price, btndiv)



    })
}


// cart-availability
function checkAvailable(ele) {
    for (let i = 0; i < cartData.length; i++) {
        if (ele.id == cartData[i].id) {
            return true
        }
    }
    return false
}

let nocartText = document.getElementById("nocart")
if (wishData.length == 0) {
    nocartText.innerText = "Your Cart Is Empty"

} else {
    displayProduct(datacart)
}