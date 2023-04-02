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
         dec.setAttribute("class", "incBTn")

         let qty = document.createElement("span")

         let inc = document.createElement("button")
         inc.setAttribute("class", "incBTn")

         let price = document.createElement("h5")
         price.setAttribute("class", "pricecls")

         let deleBtn = document.createElement("button")
         deleBtn.setAttribute("class", "incBTn")




         prodImg.setAttribute("src", el.image)
         title.innerText = el.title
         desc.innerText = `Description: ${el.description}`
         brand.innerText = el.brand
         dec.innerText = "-"
         qty.innerText = +el.quantity
         inc.innerText = "+"
         price.innerText = `₹ ${el.price * el.quantity}`
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


 let nocartText = document.getElementById("nocart")
 if (datacart.length == 0) {
     nocartText.innerText = "Your Cart Is Empty"

 } else {
     displayProduct(datacart)
 }


 let sum = 0
 for (let i = 0; i < datacart.length; i++) {
     sum += datacart[i].price * datacart[i].quantity
 }

 orderDetails()

 function orderDetails() {
     let ordertbody = document.getElementById("orderDetails")
     let tr1 = document.createElement("tr")
     let tr2 = document.createElement("tr")
     let tr3 = document.createElement("tr")


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

     let proceed = document.createElement("td")
     proceed.setAttribute("colspan", "2")
     proceed.setAttribute("class", "proceed-btn")
     tr3.append(proceed)

     proceed.innerText = "PROCEED TO SHIPPING"

     ordertbody.append(tr1, tr2, tr3)
 }





 //  store data in LS for checkout
 let checkoutLS = JSON.parse(localStorage.getItem("checkout")) || []
 let proceedBtn = document.querySelector(".proceed-btn")


 proceedBtn.addEventListener("click", function() {
     datacart.forEach(function(e) {

         if (!checkAvailable(e)) {
             checkoutLS.push(e)
             localStorage.setItem("checkout", JSON.stringify(checkoutLS))
             window.location.href = "checkout.html"
         } else {
             window.location.href = "checkout.html"
         }

     })


 })

 function checkAvailable(ele) {
     for (let i = 0; i < checkoutLS.length; i++) {
         if (ele.id == checkoutLS[i].id) {
             return true
         }
     }
     return false
 }