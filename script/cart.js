 let datacart = JSON.parse(localStorage.getItem("cart")) || []





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


         let dec = document.createElement("button")
         let qty = document.createElement("span")
         let inc = document.createElement("button")
         let price = document.createElement("h5")
         let deleBtn = document.createElement("button")





         prodImg.setAttribute("src", el.image)
         title.innerText = el.title
         desc.innerText = el.description
         brand.innerText = el.brand
         dec.innerText = "-"
         qty.innerText = +el.quantity
         inc.innerText = "+"
         price.innerText = el.price * el.quantity
         deleBtn.innerText = "Remove"

         deleBtn.addEventListener("click", function() {
             datacart = datacart.filter(function(ele, ind) {
                 if (ind == i) {
                     return false
                 } else {
                     return true
                 }
             })
             localStorage.setItem("cart", JSON.stringify(datacart))
             displayProduct(datacart)
         })



         inc.addEventListener("click", function() {
             el.quantity++
                 localStorage.setItem("cart", JSON.stringify(datacart))
             displayProduct(datacart)
         })

         dec.addEventListener("click", function() {
             if (el.quantity > 1) {
                 el.quantity--
                     localStorage.setItem("cart", JSON.stringify(datacart))
                 displayProduct(datacart)
             }
         })

         div3.append(dec, qty, inc, price, deleBtn)
         div2.append(brand, title, desc)
         div1.append(prodImg)
         cartR.append(div1, div2, div3)
         cartProduct.append(cartR)
         cartRow.append(cartProduct)






         // localStorage.setItem("product", JSON.stringify(productData))

     })


 }


 if (datacart.length == 0) {
     alert("No Product")

 } else {
     displayProduct(datacart)
 }