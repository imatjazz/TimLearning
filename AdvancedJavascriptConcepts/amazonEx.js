//Amazon shopping
const user = {
    name: 'Tim',
    active: true,
    cart: [],
    purchases: []
}

const compose = (f,g) => (...args) => f(g(...args));
purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user,{name: 'laptop', price:200})


// function purchaseItem(user, item){
//     return Object.assign({},user, {purchases: item})
// }

function purchaseItem(...fns){
    return fns.reduce(compose)
} 

function addItemToCart(user, item){
    const updateCart = user.cart.concat([item])
    return Object.assign({}, user, {cart: updateCart})
}

function applyTaxToItems(user){
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    })
    return Object.assign({}, user, {cart: updatedCart})
}

function buyItem(user){
    return Object.assign({}, user, {cart: updatedCart})
}

function emptyCart(){
    return user
}

console.log(purchaseItem())


//Implement a cart feature:
// 1. Add items to cart. 
// 2. Add 3% tax to item in cart
// 3. Buy item: cart--> purchases
// 4. Empty cart

//Bonus
// accept refunds.
// track user history




// Functions
// createItem = function(name, price, adjPrice){
//     adjPrice = item.price*1.03
//     return item={name:name, price:price, adjPrice:adjPrice}  
//  }

// addToCart = function(item){
//     return user.cart.push(item)
// }

// emptyCart(cart){
//     return user.cart.r = []
// }