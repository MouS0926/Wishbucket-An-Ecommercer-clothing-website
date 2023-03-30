let productData = [{
        id: 1,
        title: "Floral Print Anarkali Kurta with Tie-Up",
        brand: "AKS",
        image: "../Image/Product/Women/1.jpg",
        description: "Cotton Machine wash No Darts",
        price: 1300,
        category: "Kurtas & Kurtis",
        cat: "woman"
    },
    {
        id: 2,
        title: "Paisley Print Straight Kurta",
        brand: "AKS",
        image: "../Image/Product/Women/2.jpg",
        description: "Cotton Machine wash No Darts",
        price: 1360,
        category: "Kurtas & Kurtis",
        cat: "woman"
    },
    {
        id: 3,
        title: "Checked Printed Regular Top",
        brand: "JAIPUR KURTI",
        image: "../Image/Product/Women/3.jpg",
        description: "We recommend you buy a size larger Hand wash, cotton, Fitted",
        price: 790,
        category: "Tops",
        cat: "woman"
    },
    {
        id: 4,
        title: "Checked Top with Mandarin Collar",
        brand: "JAIPUR KURTI",
        image: "../Image/Product/Women/4.jpg",
        description: "We recommend you buy a size larger Hand wash, cotton, Fitted",
        price: 670,
        category: "Tops",
        cat: "woman"
    },
    {
        id: 5,
        title: "Checked Top with Mandarin Collar",
        brand: "JAIPUR KURTI",
        image: "../Image/Product/Women/5.jpg",
        description: "We recommend you buy a size larger Hand wash, cotton, Fitted",
        price: 670,
        category: "Tops",
        cat: "woman"
    },
    {
        id: 6,
        title: "Checked Top with Mandarin Collar",
        brand: "JAIPUR KURTI",
        image: "../Image/Product/Women/6.jpg",
        description: "We recommend you buy a size larger Hand wash, cotton, Fitted",
        price: 670,
        category: "Tops",
        cat: "woman"
    },
    {
        id: 7,
        title: "Checked Top with Mandarin Collar",
        brand: "JAIPUR KURTI",
        image: "../Image/Product/Women/7.jpg",
        description: "We recommend you buy a size larger Hand wash, cotton, Fitted",
        price: 670,
        category: "Tops",
        cat: "woman"
    },
    {
        id: 8,
        title: "Checked Top with Mandarin Collar",
        brand: "JAIPUR KURTI",
        image: "../Image/Product/Women/8.jpg",
        description: "We recommend you buy a size larger Hand wash, cotton, Fitted",
        price: 670,
        category: "Tops",
        cat: "woman"
    },
    {
        id: 9,
        title: "Checked Top with Mandarin Collar",
        brand: "JAIPUR KURTI",
        image: "../Image/Product/Women/9.jpg",
        description: "We recommend you buy a size larger Hand wash, cotton, Fitted",
        price: 670,
        category: "Tops",
        cat: "woman"
    },
    {
        id: 10,
        title: "Checked Top with Mandarin Collar",
        brand: "JAIPUR KURTI",
        image: "../Image/Product/Women/10.jpg",
        description: "We recommend you buy a size larger Hand wash, cotton, Fitted",
        price: 670,
        category: "Tops",
        cat: "woman"
    },


    {
        id: 11,
        title: "Checked Top with Mandarin Collar",
        brand: "JAIPUR KURTI",
        image: "../Image/Product/Man/1.jpg",
        description: "We recommend you buy a size larger Hand wash, cotton, Fitted",
        price: 670,
        category: "Tops",
        cat: "Man"
    },
]





let productRow = document.getElementById("product-row")
displayProduct(productData)

let allCheckboxes = document.querySelectorAll('input[type=checkbox]');

// sort by price
let sortprice = document.getElementById("sortprice")
sortprice.addEventListener("change", function() {


    if (sortprice.value == "") {
        displayProduct(productData)
    }

    if (sortprice.value == "htl") {
        productData.sort((a, b) => {
            return b.price - a.price
        })
        displayProduct(productData)
    }

    if (sortprice.value == "lth") {
        productData.sort((a, b) => {
            return a.price - b.price
        })
        displayProduct(productData)
    }



})

let cartData = JSON.parse(localStorage.getItem("cart")) || []
    // sort by price

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


            productRow.append(prodCol)
            prodCol.append(card)
            card.append(image, brand, title, category, price, cartBtn)

            localStorage.setItem("product", JSON.stringify(productData))

        })
}

function checkAvailable(ele) {
    for (let i = 0; i < cartData.length; i++) {
        if (ele.id == cartData[i].id) {
            return true
        }
    }
    return false
}

// search
let searchIn = document.getElementById("search")
searchIn.addEventListener("input", function() {
    let filtered = productData.filter(function(el, i) {
        if (el.title.toUpperCase().includes(searchIn.value.toUpperCase()) == true) {
            return true
        } else {
            return false
        }
    })
    displayProduct(filtered)
})

// search End