let cart = [];

function addToCart(id, name, price) {
alert(name + " added to cart"); // TEST LINE

```
let item = cart.find(p => p.id === id);

if (item) {
    item.quantity++;
} else {
    cart.push({ id, name, price, quantity: 1 });
}

updateCart();
```

}

function updateCart() {
let cartItems = document.getElementById("cart-items");
let total = 0;

```
cartItems.innerHTML = "";

cart.forEach(item => {
    let li = document.createElement("li");
    let itemTotal = item.price * item.quantity;
    total += itemTotal;

    li.innerHTML = `
        ${item.name} (x${item.quantity}) - ₹${itemTotal}
    `;

    cartItems.appendChild(li);
});

document.getElementById("total").innerText = total;
```

}
