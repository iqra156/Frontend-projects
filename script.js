document.addEventListener('DOMContentLoaded', function () {
    // The cart array will store all cart items
    const cart = [];

    // Attach event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productItem = this.closest('.product-item');
            const id = parseInt(productItem.getAttribute('data-id'));
            const name = productItem.querySelector('h3').textContent;
            const price = parseFloat(productItem.getAttribute('data-price'));

            addToCart(id, name, price);
        });


        // Function to add an item to the cart
        function addToCart(id, name, price) {
            const existingItem = cart.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }

            updateCartDisplay();
        }

        // Function to update the cart display
        function updateCartDisplay() {
            const cartItemsContainer = document.querySelector('#cart-items tbody');
            cartItemsContainer.innerHTML = ''; // Clear the current cart items
            let totalAmount = 0; // Initialize the total amount

            // Loop through the cart items and create table rows
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                totalAmount += itemTotal;

                const row = document.createElement('tr');
                row.innerHTML = `
                <td>${item.name}</td>
                <td>Rs. ${item.price}</td>
                <td>
                    <div class="cart-actions">
                        <button class="decrease-quantity" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase-quantity" data-id="${item.id}">+</button>
                    </div>
                </td>
                <td>Rs. ${itemTotal} </td>
                <td>
                    <button class="remove-from-cart" data-id="${item.id}">
                        <img src="images/removed.png" style="width: 25px;height: 25px;"/>
                    </button>
                </td>
            `;
                cartItemsContainer.appendChild(row);
            });

            // Update the total amount displayed in the cart summary
            document.getElementById('cart-total').textContent = `Rs. ${totalAmount.toFixed(2)}`;

            // Attach event listeners to the cart action buttons
            attachCartEventListeners();
        }

        // Function to attach event listeners to cart action buttons
        function attachCartEventListeners() {

            document.querySelectorAll('.remove-from-cart').forEach(button => {
                button.addEventListener('click', function () {
                    const id = parseInt(this.getAttribute('data-id'));
                    removeFromCart(id);
                });
            });

            document.querySelectorAll('.increase-quantity').forEach(button => {
                button.addEventListener('click', function () {
                    const id = parseInt(this.getAttribute('data-id'));
                    increaseQuantity(id);
                });
            });

            document.querySelectorAll('.decrease-quantity').forEach(button => {
                button.addEventListener('click', function () {
                    const id = parseInt(this.getAttribute('data-id'));
                    decreaseQuantity(id);
                });
            });

        }



        // Function to remove an item from the cart
        function removeFromCart(id) {
            const index = cart.findIndex(item => item.id === id);
            if (index !== -1) {
                cart.splice(index, 1);
            }

            updateCartDisplay();
        }

        // Function to increase the quantity of an item in the cart
        function increaseQuantity(id) {
            const item = cart.find(item => item.id === id);
            if (item) {
                item.quantity++;
            }

            updateCartDisplay();
        }

        // Function to decrease the quantity of an item in the cart
        function decreaseQuantity(id) {
            const item = cart.find(item => item.id === id);
            if (item && item.quantity > 1) {
                item.quantity--;
            }

            updateCartDisplay();
        }

    });
});
// hero

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
    });
});
