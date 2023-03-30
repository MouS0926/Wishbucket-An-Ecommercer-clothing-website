let LSdata = JSON.parse(PlocalStorage.getItem("product")) || []
let searchIn = document.getElementById("search")
searchIn.addEventListener("input", function() {
    let filtered = LSdata.filter(function(el, i) {
        if (el.title.toUpperCase().includes(searchIn.value.toUpperCase()) == true) {
            return true
        } else {
            return false
        }
    })
    displayProduct(filtered)
})

function displayProduct(data) {
    productRow.innerHTML = ""

    let totalProd = document.getElementById("total-product")
    totalProd.innerText = data.length


    data.filter((ele) => {
            return ele.cat == "woman"
        })
        .forEach(function(el) {
            let prodCol = document.createElement("div")
            prodCol.setAttribute("class", "col-md-4")

            let card = document.createElement("div")
            card.setAttribute("class", "card")

            let image = document.createElement("img")
            let brand = document.createElement("h5")
            let title = document.createElement("p")
            let category = document.createElement("p")
            let price = document.createElement("p")
            let cartBtn = document.createElement("button")
            cartBtn.setAttribute("class", "btn btn-outline-primary")
            cartBtn.setAttribute("type", "button")

            image.setAttribute("src", el.image)
            brand.innerText = el.brand
            title.innerText = el.title
            category.innerText = el.category
            price.innerText = el.price
            cartBtn.innerText = "Add to Cart"

            productRow.append(prodCol)
            prodCol.append(card)
            card.append(image, brand, title, category, price, cartBtn)



        })


}