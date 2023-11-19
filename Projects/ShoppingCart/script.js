const productsData = [
    { id: 1, name: 'Matrix Sunglasses', price: 49.99 },
    { id: 2, name: 'Cyberpunk Hoodie', price: 39.99 },
    { id: 3, name: 'Digital Code Coffee Mug', price: 14.99 },
    { id: 4, name: 'Matrix Keyboard', price: 89.99 },
    { id: 5, name: 'Trinity\'s Leather Jacket', price: 129.99 },
    { id: 6, name: 'VR Headset with Matrix', price: 299.99 },
  ];

  const cart = [];
  let total = 0;

  function renderProducts() {
    const productsContainer = document.querySelector('.products');
  
    productsData.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price.toFixed(2)}</p>
        <input type="number" min="1" value="1" class="product-quantity">
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      `;
  
      productsContainer.appendChild(productCard);
  
      const addToCartBtn = productCard.querySelector('.add-to-cart');
      addToCartBtn.addEventListener('click', addToCart);
    });
  }
  
  function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const product = productsData.find((p) => p.id === productId);
    const quantityInput = event.target.parentElement.querySelector('.product-quantity');
    const quantity = parseInt(quantityInput.value);
  
    if (product && quantity > 0) {
      const existingItem = cart.find((item) => item.id === product.id);
  
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.push({ ...product, quantity });
      }
  
      updateCart();
      updateTotal();
    }
  }
  
  function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
  
    cart.forEach((item) => {
      const cartItem = document.createElement('li');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <span>${item.name} (Qty: ${item.quantity})</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
        <button class="delete-from-cart" data-id="${item.id}">Delete</button>
      `;
  
      cartItemsList.appendChild(cartItem);
  
      const deleteBtn = cartItem.querySelector('.delete-from-cart');
      deleteBtn.addEventListener('click', deleteFromCart);
    });
  }
  
  function deleteFromCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const itemIndex = cart.findIndex((item) => item.id === productId);
  
    if (itemIndex !== -1) {
      cart.splice(itemIndex, 1);
      updateCart();
      updateTotal();
    }
  }
  
  function updateTotal() {
    total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
  }
  
  renderProducts();
  
  const emptyCartBtn = document.getElementById('empty-cart');
  emptyCartBtn.addEventListener('click', () => {
    cart.length = 0;
    updateCart();
    updateTotal();
  });
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let matrix = "01";
matrix = matrix.split("");

const font_size = 10;
let device_pixel_ratio = window.devicePixelRatio || 1;
let drops = [];
let animationInterval;

function resizeCanvas() {
  canvas.width = window.innerWidth * device_pixel_ratio;
  canvas.height = window.innerHeight * device_pixel_ratio;
  ctx.scale(device_pixel_ratio, device_pixel_ratio);
}

function initializeDrops() {
  const columns = Math.ceil(canvas.width / font_size);
  const drops = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * -canvas.height / font_size);
  }

  return drops;
}

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = font_size + "px arial";

  for (let i = 0; i < drops.length; i++) {
    const text = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
      drops[i] = Math.floor(Math.random() * -canvas.height / font_size);
    }

    drops[i]++;
  }
}

function initializeMatrix() {
  clearInterval(animationInterval);
  resizeCanvas();
  drops = initializeDrops();
  drawMatrix();
  animationInterval = setInterval(drawMatrix, 35);
}

window.addEventListener("resize", initializeMatrix);
initializeMatrix();
  