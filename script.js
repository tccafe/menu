// Menu Data
const menuData = [
  {
    title: "Main Course",
    icon: "fas fa-drumstick-bite",
    items: [
      { name: "Shawaya - Full", price: "₹440", description: "Whole grilled chicken marinated in aromatic spices, cooked to juicy perfection." },
      { name: "Shawaya - Half", price: "₹220", description: "Half portion of our signature grilled chicken, packed with flavor and tenderness." },
      { name: "Shawaya - Quarter", price: "₹110", description: "Quarter piece of deliciously seasoned and grilled chicken, ideal for light meals." },
      { name: "Shawarma - Plate", price: "₹100", description: "Sliced grilled chicken served on a plate with sauces and fresh accompaniments." },
      { name: "Shawarma - Roll", price: "₹80", description: "Spiced chicken wrapped in soft bread with veggies and garlic sauce – a classic favorite." }
    ]
  },
  {
    title: "Sandwiches",
    icon: "fas fa-sandwich",
    items: [
      { name: "Veg Sandwich", price: "₹70", description: "Fresh vegetables with flavorful spices" },
      { name: "Egg Sandwich", price: "₹50", description: "Perfectly cooked eggs with fresh bread" },
      { name: "Chicken Sandwich", price: "₹99", description: "Tender chicken with fresh ingredients" },
      { name: "Chicken Club", price: "₹120", description: "Layered chicken club sandwich" }
    ]
  },
  {
    title: "Fresh Juice",
    icon: "fas fa-glass-whiskey",
    items: [
      { name: "Apple", price: "₹90", description: "Fresh crisp apple juice" },
      { name: "Anar (Pomegranate)", price: "₹90", description: "Antioxidant-rich pomegranate juice" },
      { name: "Watermelon", price: "₹30", description: "Refreshing summer favorite" },
      { name: "Grape", price: "₹40", description: "Sweet and tangy grape juice" }
    ]
  },
  {
    title: "Shakes",
    icon: "fas fa-blender",
    items: [
      { name: "Chikoo", price: "₹64", description: "Sweet sapodilla fruit shake" },
      { name: "Sharja", price: "₹59", description: "Special regional blend" },
      { name: "Mango", price: "₹79", description: "Tropical mango cream shake" },
      { name: "Avocado", price: "₹89", description: "Creamy green smoothness" },
      { name: "Anar (Pomegranate)", price: "₹79", description: "Rich pomegranate shake" },
      { name: "Seethi", price: "₹89", description: "Traditional sweet flavor" },
      { name: "Kashmiri", price: "₹79", description: "Exotic Kashmiri blend" },
      { name: "Tender Coconut", price: "₹79", description: "Fresh coconut delight" },
      { name: "Mango (Premium)", price: "₹99", description: "Premium mango shake" },
      { name: "Tender Strawberry", price: "₹99", description: "Fresh strawberry cream" },
      { name: "Tender Cocoa", price: "₹99", description: "Rich chocolate cocoa shake" },
      { name: "Avocado (Premium)", price: "₹99", description: "Premium creamy avocado" },
      { name: "Dry Fruits", price: "₹120", description: "Nutritious mixed dry fruits" },
      { name: "Fruit Mix", price: "₹120", description: "Assorted fresh fruit blend" },
      { name: "Oreo Shake", price: "₹79", description: "Cookies and cream classic" },
      { name: "KitKat", price: "₹84", description: "Chocolate wafer delight" },
      { name: "Snickers", price: "₹84", description: "Peanut chocolate shake" }
    ]
  },
  {
    title: "Drinks",
    icon: "fas fa-cocktail",
    items: [
      { name: "Fresh Lime", price: "₹20", description: "Zesty fresh lime water" },
      { name: "Mint Lime", price: "₹25", description: "Refreshing mint and lime blend" },
      { name: "Cold Coffee", price: "₹49", description: "Chilled coffee perfection" },
      { name: "Blue Lime", price: "₹40", description: "Cool blue lime special" },
      { name: "Mango Lime", price: "₹40", description: "Tropical mango lime fusion" },
      { name: "Blue Cool", price: "₹49", description: "Refreshing blue mocktail" },
      { name: "Choco Daddy", price: "₹44", description: "Rich chocolate drink" },
      { name: "Cool Daddy", price: "₹49", description: "Ultimate refreshing beverage" }
    ]
  }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const menuGrid = document.getElementById('menu-grid');
const contactForm = document.getElementById('contact-form');

// Search and Filter Elements
const searchInput = document.getElementById('menu-search');
const clearSearchBtn = document.getElementById('clear-search');
const filterToggleBtn = document.getElementById('filter-toggle');
const clearFiltersBtn = document.getElementById('clear-filters');
const filterDropdown = document.getElementById('filter-dropdown');
const filterCategories = document.getElementById('filter-categories');
const activeFiltersDiv = document.getElementById('active-filters');
const activeFiltersList = document.getElementById('active-filters-list');
const noResults = document.getElementById('no-results');
const clearAllFiltersBtn = document.getElementById('clear-all-filters');

// Search and Filter State
let currentSearchTerm = '';
let selectedCategory = 'all';
let showFilters = false;

// Cart State
let cart = [];
let showCart = false;

// Navigation functionality
function initNavigation() {
  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth scroll for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Scroll to section function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Search and Filter Functions
function initSearchAndFilter() {
  if (!searchInput || !filterToggleBtn) return;

  // Initialize filter categories
  generateFilterCategories();
  
  // Search input event listeners
  searchInput.addEventListener('input', handleSearch);
  clearSearchBtn.addEventListener('click', clearSearch);
  
  // Filter event listeners
  filterToggleBtn.addEventListener('click', toggleFilters);
  clearFiltersBtn.addEventListener('click', clearAllFilters);
  clearAllFiltersBtn.addEventListener('click', clearAllFilters);
  
  // Initial menu generation
  generateFilteredMenu();
}

function generateFilterCategories() {
  if (!filterCategories) return;
  
  const categories = ['all', ...menuData.map(category => category.title)];
  
  filterCategories.innerHTML = categories.map(category => `
    <button class="category-btn ${category === selectedCategory ? 'active' : ''}" 
            data-category="${category}">
      ${category === 'all' ? 'All Categories' : category}
    </button>
  `).join('');
  
  // Add click listeners to category buttons
  filterCategories.addEventListener('click', handleCategoryFilter);
}

function handleSearch(e) {
  currentSearchTerm = e.target.value.trim();
  
  // Show/hide clear search button
  if (clearSearchBtn) {
    clearSearchBtn.style.display = currentSearchTerm ? 'block' : 'none';
  }
  
  generateFilteredMenu();
  updateActiveFilters();
}

function clearSearch() {
  currentSearchTerm = '';
  searchInput.value = '';
  if (clearSearchBtn) {
    clearSearchBtn.style.display = 'none';
  }
  generateFilteredMenu();
  updateActiveFilters();
}

function toggleFilters() {
  showFilters = !showFilters;
  
  if (filterDropdown) {
    filterDropdown.style.display = showFilters ? 'block' : 'none';
  }
  
  // Update button state
  if (showFilters || selectedCategory !== 'all') {
    filterToggleBtn.classList.add('active');
  } else {
    filterToggleBtn.classList.remove('active');
  }
}

function handleCategoryFilter(e) {
  if (!e.target.classList.contains('category-btn')) return;
  
  const category = e.target.dataset.category;
  selectedCategory = category;
  
  // Update button states
  filterCategories.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  e.target.classList.add('active');
  
  generateFilteredMenu();
  updateActiveFilters();
}

function clearAllFilters() {
  currentSearchTerm = '';
  selectedCategory = 'all';
  showFilters = false;
  
  // Reset UI
  if (searchInput) searchInput.value = '';
  if (clearSearchBtn) clearSearchBtn.style.display = 'none';
  if (filterDropdown) filterDropdown.style.display = 'none';
  if (filterToggleBtn) filterToggleBtn.classList.remove('active');
  
  // Update category buttons
  generateFilterCategories();
  
  generateFilteredMenu();
  updateActiveFilters();
}

function updateActiveFilters() {
  if (!activeFiltersDiv || !activeFiltersList) return;
  
  const hasActiveFilters = currentSearchTerm || selectedCategory !== 'all';
  
  if (hasActiveFilters) {
    activeFiltersDiv.style.display = 'flex';
    clearFiltersBtn.style.display = 'flex';
    
    let filtersHTML = '';
    
    if (currentSearchTerm) {
      filtersHTML += `<span class="filter-tag">Search: "${currentSearchTerm}"</span>`;
    }
    
    if (selectedCategory !== 'all') {
      filtersHTML += `<span class="filter-tag">Category: ${selectedCategory}</span>`;
    }
    
    activeFiltersList.innerHTML = filtersHTML;
  } else {
    activeFiltersDiv.style.display = 'none';
    clearFiltersBtn.style.display = 'none';
  }
}

function getFilteredMenuData() {
  let filtered = menuData;
  
  // Filter by category
  if (selectedCategory !== 'all') {
    filtered = filtered.filter(category => category.title === selectedCategory);
  }
  
  // Filter by search term
  if (currentSearchTerm) {
    filtered = filtered.map(category => ({
      ...category,
      items: category.items.filter(item =>
        item.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(currentSearchTerm.toLowerCase())
      )
    })).filter(category => category.items.length > 0);
  }
  
  return filtered;
}

function generateFilteredMenu() {
  if (!menuGrid) return;

  const filteredData = getFilteredMenuData();
  
  if (filteredData.length === 0) {
    menuGrid.style.display = 'none';
    if (noResults) noResults.style.display = 'block';
    return;
  }
  
  menuGrid.style.display = 'grid';
  if (noResults) noResults.style.display = 'none';
  
  menuGrid.innerHTML = '';

  filteredData.forEach(category => {
    const menuCard = document.createElement('div');
    menuCard.className = 'menu-card';
    
    menuCard.innerHTML = `
      <div class="menu-card-header">
        <div class="menu-icon">
          <i class="${category.icon}"></i>
        </div>
        <h3 class="menu-card-title">${category.title}</h3>
      </div>
      <div class="menu-items">
        ${category.items.map((item, index) => `
          <div class="menu-item">
            <div class="menu-item-content">
              <div class="menu-item-header">
                <span class="menu-item-name">${item.name}</span>
                <div class="menu-item-dots"></div>
              </div>
              <p class="menu-item-description">${item.description}</p>
            </div>
            <div class="menu-item-actions">
              <div class="menu-item-price">${item.price}</div>
              <button class="add-to-cart-btn" onclick="addToCart('${item.name}', '${item.price}', ${parseInt(item.price.replace('₹', ''))})">
                <i class="fas fa-plus"></i>
                Add
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    
    menuGrid.appendChild(menuCard);
  });
}

// Legacy function for backward compatibility
function generateMenu() {
  generateFilteredMenu();
}

// Contact form handling
function initContactForm() {
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };
    
    // Simulate form submission (in a real application, you would send this to a server)
    console.log('Form submitted:', data);
    
    // Show success message
    showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
  });
}

// Notification system
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
    max-width: 300px;
    word-wrap: break-word;
  `;
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(0)';
  }, 10);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Intersection Observer for animations
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements that should animate in
  const animateElements = document.querySelectorAll('.menu-card, .feature, .contact-info, .contact-form-container');
  animateElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(element);
  });
}

// Smooth scroll for buttons
function initSmoothScroll() {
  // Add click handlers to all buttons that should scroll
  document.addEventListener('click', (e) => {
    const button = e.target.closest('button[onclick^="scrollToSection"]');
    if (button) {
      e.preventDefault();
      const sectionId = button.getAttribute('onclick').match(/scrollToSection\('(.+?)'\)/)[1];
      scrollToSection(sectionId);
    }
  });
}

// Loading animation
function showLoading() {
  const loading = document.createElement('div');
  loading.id = 'loading';
  loading.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, hsl(170, 57%, 30%), hsl(160, 84%, 39%));
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    opacity: 1;
    transition: opacity 0.5s ease;
  `;
  
  loading.innerHTML = `
    <div style="text-align: center; color: white;">
      <div style="width: 80px; height: 80px; border: 3px solid rgba(240, 232, 213, 0.3); border-top: 3px solid hsl(39, 31%, 89%); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
      <h2 style="font-family: 'Playfair Display', serif; font-size: 1.5rem; margin: 0;">T'Castle Cafe</h2>
      <p style="margin: 0.5rem 0 0; opacity: 0.8;">Loading...</p>
    </div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;
  
  document.body.appendChild(loading);
  
  return loading;
}

function hideLoading(loading) {
  if (loading) {
    loading.style.opacity = '0';
    setTimeout(() => {
      if (loading.parentNode) {
        loading.parentNode.removeChild(loading);
      }
    }, 500);
  }
}

// Parallax effect for hero section
function initParallax() {
  const hero = document.querySelector('.hero');
  const floatingElements = document.querySelectorAll('.floating-element');
  
  if (!hero || floatingElements.length === 0) return;
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroHeight = hero.offsetHeight;
    const scrollPercent = scrolled / heroHeight;
    
    if (scrollPercent <= 1) {
      floatingElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    }
  });
}

// Enhanced form validation
function initFormValidation() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const inputs = form.querySelectorAll('input, select, textarea');
  
  inputs.forEach(input => {
    input.addEventListener('blur', validateField);
    input.addEventListener('input', clearFieldError);
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    inputs.forEach(input => {
      if (!validateField({ target: input })) {
        isValid = false;
      }
    });
    
    if (isValid) {
      // Simulate form submission
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;
      
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitButton.disabled = true;
      
      setTimeout(() => {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        form.reset();
      }, 2000);
    }
  });
}

function validateField(e) {
  const field = e.target;
  const value = field.value.trim();
  let isValid = true;
  let errorMessage = '';
  
  // Remove existing error
  clearFieldError({ target: field });
  
  // Required field validation
  if (field.hasAttribute('required') && !value) {
    errorMessage = `${getFieldLabel(field)} is required`;
    isValid = false;
  }
  
  // Email validation
  if (field.type === 'email' && value && !isValidEmail(value)) {
    errorMessage = 'Please enter a valid email address';
    isValid = false;
  }
  
  // Phone validation
  if (field.type === 'tel' && value && !isValidPhone(value)) {
    errorMessage = 'Please enter a valid phone number';
    isValid = false;
  }
  
  if (!isValid) {
    showFieldError(field, errorMessage);
  }
  
  return isValid;
}

function clearFieldError(e) {
  const field = e.target;
  const errorElement = field.parentNode.querySelector('.field-error');
  if (errorElement) {
    errorElement.remove();
  }
  field.style.borderColor = '';
}

function showFieldError(field, message) {
  field.style.borderColor = '#ef4444';
  
  const errorElement = document.createElement('div');
  errorElement.className = 'field-error';
  errorElement.style.cssText = `
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  `;
  errorElement.textContent = message;
  
  field.parentNode.appendChild(errorElement);
}

function getFieldLabel(field) {
  const label = field.parentNode.querySelector('label');
  return label ? label.textContent : field.name;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[\+]?[\d\s\-\(\)]{10,}$/.test(phone);
}

// Cart Functions
function addToCart(name, price, priceValue) {
  const existingItem = cart.find(item => item.name === name);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      priceValue: priceValue,
      quantity: 1
    });
  }
  
  updateCartDisplay();
  showNotification(`${name} added to cart!`, 'success');
}

function updateQuantity(name, change) {
  const itemIndex = cart.findIndex(item => item.name === name);
  if (itemIndex !== -1) {
    cart[itemIndex].quantity += change;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
  }
  updateCartDisplay();
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  updateCartDisplay();
  showNotification('Item removed from cart', 'info');
}

function clearCart() {
  cart = [];
  updateCartDisplay();
  showNotification('Cart cleared', 'info');
}

function getTotalPrice() {
  return cart.reduce((total, item) => total + (item.priceValue * item.quantity), 0);
}

function getTotalItems() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function toggleCartDisplay() {
  showCart = !showCart;
  const cartContent = document.getElementById('cart-content');
  if (cartContent) {
    if (showCart) {
      cartContent.classList.add('show');
    } else {
      cartContent.classList.remove('show');
    }
  }
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cart-count');
  const cartItemsCount = document.getElementById('cart-items-count');
  const cartTotal = document.getElementById('cart-total');
  const cartTotalMobile = document.getElementById('cart-total-mobile');
  const cartEmpty = document.getElementById('cart-empty');
  const cartItems = document.getElementById('cart-items');
  const cartSummary = document.getElementById('cart-summary');
  
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  
  // Update counts and totals
  if (cartCount) cartCount.textContent = totalItems;
  if (cartItemsCount) cartItemsCount.textContent = totalItems;
  if (cartTotal) cartTotal.textContent = `₹${totalPrice}`;
  if (cartTotalMobile) cartTotalMobile.textContent = `₹${totalPrice}`;
  
  // Show/hide cart sections
  if (cart.length === 0) {
    if (cartEmpty) cartEmpty.style.display = 'block';
    if (cartItems) cartItems.style.display = 'none';
    if (cartSummary) cartSummary.style.display = 'none';
  } else {
    if (cartEmpty) cartEmpty.style.display = 'none';
    if (cartItems) cartItems.style.display = 'block';
    if (cartSummary) cartSummary.style.display = 'block';
    
    // Update cart items
    if (cartItems) {
      cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-header">
            <div class="cart-item-name">${item.name}</div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.name}')">
              <i class="fas fa-trash"></i>
            </button>
          </div>
          <div class="cart-item-controls">
            <div class="quantity-controls">
              <button class="quantity-btn" onclick="updateQuantity('${item.name}', -1)">
                <i class="fas fa-minus"></i>
              </button>
              <span class="quantity-display">${item.quantity}</span>
              <button class="quantity-btn" onclick="updateQuantity('${item.name}', 1)">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="cart-item-price">
              <div class="unit-price">${item.price} each</div>
              <div class="total-price">₹${item.priceValue * item.quantity}</div>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

function initCart() {
  const cartToggle = document.getElementById('cart-toggle');
  const clearCartBtn = document.getElementById('clear-cart');
  
  if (cartToggle) {
    cartToggle.addEventListener('click', toggleCartDisplay);
  }
  
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', clearCart);
  }
  
  // Initialize cart display
  updateCartDisplay();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const loading = showLoading();
  
  // Initialize all functionality
  setTimeout(() => {
    initNavigation();
    initSearchAndFilter();
    initCart();
    initContactForm();
    initAnimations();
    initSmoothScroll();
    initParallax();
    initFormValidation();
    
    hideLoading(loading);
  }, 1000);
});

// Handle page visibility for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause animations when page is not visible
    document.body.style.animationPlayState = 'paused';
  } else {
    // Resume animations when page becomes visible
    document.body.style.animationPlayState = 'running';
  }
});

// Expose scrollToSection function globally for onclick handlers
window.scrollToSection = scrollToSection;