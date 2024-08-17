document.addEventListener('DOMContentLoaded', () => {
  const cartButton = document.querySelector('.cart-button');
  const cartPopup = document.querySelector('.cart-popup');
  const closeButton = document.querySelector('.cart-popup .close-popup');
  const cartItems = document.querySelector('#cart-items');
  const totalPriceElement = document.querySelector('#total-price');
  const checkoutButton = document.querySelector('#checkout-btn');
  const cartStatusElement = document.querySelector('#cart-status');
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  let cart = [];

  function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    let totalItems = 0;
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.classList.add('cart-item');
      li.setAttribute('data-index', index); // Set data-index pada li
      li.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover;">
        <div class="cart-item-details">
          <div>${item.name}</div>
          <div>Rp. ${item.price.toLocaleString('id-ID')}</div>
          <div class="cart-item-buttons">
            <button class="decrease" data-index="${index}">-</button>
            <span style="margin: 0 0.5rem;">Jumlah: ${item.quantity}</span>
            <button class="increase" data-index="${index}">+</button>
            <button class="cart-item-remove" data-index="${index}">Hapus</button>
          </div>
        </div>
      `;
      cartItems.appendChild(li);
      total += item.price * item.quantity;
      totalItems += item.quantity;
    });
    totalPriceElement.textContent = `Total: Rp. ${total.toLocaleString('id-ID')}`;
    cartStatusElement.textContent = `${totalItems} items`;
  }

  function openCartPopup() {
    cartPopup.classList.remove('hide');
    cartPopup.classList.add('show');
  }

  function closeCartPopup() {
    cartPopup.classList.remove('show');
    cartPopup.classList.add('hide');
  }

  function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
  }

  cartButton.addEventListener('click', openCartPopup);
  closeButton.addEventListener('click', closeCartPopup);

  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = parseInt(button.getAttribute('data-price'));
      const image = button.getAttribute('data-image');
      const quantity = 1;

      // Validate input
      if (isNaN(price) || price < 0 || quantity < 1) {
        alert('Harga atau kuantitas tidak valid.');
        return;
      }

      const existingItem = cart.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ name, price, quantity, image });
      }
      updateCart();
    });
  });

  cartItems.addEventListener('click', (event) => {
    const target = event.target;
    const index = parseInt(target.getAttribute('data-index'));
    if (isNaN(index)) return;

    if (target.classList.contains('increase')) {
      cart[index].quantity++;
    } else if (target.classList.contains('decrease')) {
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
      }
    } else if (target.classList.contains('cart-item-remove')) {
      removeItem(index);
    }
    updateCart();
  });

  checkoutButton.addEventListener('click', () => {
    const cartMessage = cart.map(item => 
      `${item.name} - Rp. ${item.price.toLocaleString('id-ID')} x ${item.quantity}`
    ).join('\n');
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const message = encodeURIComponent(`Keranjang Saya:\n${cartMessage}\n\nTotal: Rp. ${totalPrice.toLocaleString('id-ID')}`);
    window.location.href = `https://wa.me/+628999974?text=${message}`;
  });

  function hideLoading() {
    document.body.classList.add('loaded');
  }
  setTimeout(hideLoading, 100);

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
});
