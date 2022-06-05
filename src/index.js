let shop = document.querySelector('#shop')
let cartArea = document.querySelector('#amount')

let items = [{
    type: 'Casual Shirt',

    id: 1,
    desc: `Lorem ipsum dolor sit amet 
    consectetur, adipisicing elit. Labore, reiciendis cumque accusantium aspernatur impedit aliquam?`,
    src: "images/img-1.jpg"

}, {
    type: ' T-Shirt',
    id: 2,
    desc: `Lorem ipsum dolor sit amet 
    consectetur, adipisicing elit. Labore, reiciendis cumque accusantium aspernatur impedit aliquam?`,
    src: "images/img-2.jpg"
}, {
    type: 'Menu Shirt',
    id: 3,
    desc: `Lorem ipsum dolor sit amet 
    consectetur, adipisicing elit. Labore, reiciendis cumque accusantium aspernatur impedit aliquam?`,
    src: "images/img-3.jpg"
}, {
    type: 'Office Shirt',
    id: 4,
    desc: `Lorem ipsum dolor sit amet 
    consectetur, adipisicing elit. Labore, reiciendis cumque accusantium aspernatur impedit aliquam?`,
    src: "images/img-4.jpg"
}]

// Data from local Storage 
let basket = JSON.parse(localStorage.getItem('data')) || [];
const generateshop = () => {
    return (items.map((x) => {
        let { src, id, desc, type } = x
        let serarch = basket.find((x) => x.id === id) || []
        return (shop.innerHTML += ` <div class="item">
        <div class="image">
            <img width="250" src=${src} alt="">
            <div class="details">
                <h2>${type}</h2>
                <div class="details">
                    <p>${desc}</p>
                    <div class="calculation">
                        <h2> $ 45</h2>
                        <div class="quantity">
                            <i  onClick='decrement(this,${id})'  class="bi bi-dash-lg buttons"></i>
                            <div class="singleItem"> 
                            ${serarch.quantity === undefined ? 0 : serarch.quantity}
                            </div>
                            <i onClick=increment(this,${id})  class="bi bi-plus-lg buttons"></i>
    
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    
    </div>`)
    }))
}
generateshop();


//   All items Quantity is here 
// let basket = []



// Increment  quantity
const increment = (el, id) => {

    let quantityArea = el.previousElementSibling
    // let itemQuantity = parseInt(currentItem.innerHTML)
    let search = basket.find((x) => x.id === id)
    if (search === undefined) {
        basket.push({
            id: id,
            quantity: 1

        })
    }
    else {
        search.quantity += 1
    }

    update(id, quantityArea)
    localStorage.setItem('data', JSON.stringify(basket))

}
// Decrement  quantity
const decrement = (el, id) => {


    let quantityArea = el.nextElementSibling;
    // let itemQuantity = parseInt(currentItem.innerHTML)
    let search = basket.find((x) => x.id === id)

    if (search === undefined) return
    else if (search.quantity === 0) return
    else {

        search.quantity = search.quantity - 1

    }
    update(id, quantityArea)
    basket = basket.filter((x) => x.quantity !== 0)

    localStorage.setItem('data', JSON.stringify(basket))

}


// Update item Quantity
const update = (id, quantityArea) => {
    let search = basket.find((x) => x.id === id)
    quantityArea.innerHTML = search.quantity
    // console.log(basket)

    updataCart()

}
// Update Cart 
const updataCart = () => {
    let quantity = basket.map((x) => x.quantity)
    let totalQuantity = quantity.reduce((x, y) => x + y, 0);
    cartArea.innerHTML = totalQuantity

}
updataCart()

// local Storage 





















