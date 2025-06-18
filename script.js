// Menu Data
const menuData = [
  {
    title: "Hot Beverages",
    icon: "fas fa-mug-hot",
    items: [
      { name: "Cappuccino", price: "₹13", description: "Rich espresso with steamed milk foam" },
      { name: "Americano", price: "₹12", description: "Bold espresso with hot water" },
      { name: "Espresso", price: "₹10", description: "Pure, concentrated coffee shot" },
      { name: "Latte", price: "₹10", description: "Smooth espresso with steamed milk" },
      { name: "Cold Coffee", price: "₹10", description: "Refreshing iced coffee blend" },
      { name: "Caffe Mocha", price: "₹10", description: "Coffee with chocolate and steamed milk" },
      { name: "Frappe Coffee", price: "₹10", description: "Blended iced coffee drink" }
    ]
  },
  {
    title: "Premium Teas",
    icon: "fas fa-leaf",
    items: [
      { name: "Saffron Tea", price: "₹79", description: "Luxurious tea with golden saffron" },
      { name: "Green Tea", price: "₹30", description: "Antioxidant-rich healthy blend" },
      { name: "Ginger Honey Tea", price: "₹25", description: "Warming ginger with natural honey" },
      { name: "Lemon Tea", price: "₹20", description: "Refreshing citrus blend" },
      { name: "Mint Tea", price: "₹20", description: "Fresh and invigorating" },
      { name: "Ginger Tea", price: "₹20", description: "Traditional spiced tea" },
      { name: "Cinnamon Tea", price: "₹20", description: "Warm spice blend" },
      { name: "Cardamom Tea", price: "₹20", description: "Aromatic Indian spice tea" }
    ]
  },
  {
    title: "Fresh Juices",
    icon: "fas fa-glass-whiskey",
    items: [
      { name: "Mango", price: "₹99", description: "Fresh tropical mango juice" },
      { name: "Pineapple", price: "₹99", description: "Sweet and tangy pineapple" },
      { name: "Chikku", price: "₹99", description: "Sweet sapodilla fruit juice" },
      { name: "Avocado", price: "₹99", description: "Creamy and nutritious" },
      { name: "Apple", price: "₹99", description: "Fresh crisp apple juice" },
      { name: "Pomegranate", price: "₹99", description: "Antioxidant-rich superfruit" },
      { name: "Watermelon", price: "₹99", description: "Refreshing summer favorite" },
      { name: "Papaya Honey", price: "₹99", description: "Sweet papaya with natural honey" },
      { name: "Orange, Carrot & Mango", price: "₹99", description: "Vitamin-rich blend" },
      { name: "Pistachio", price: "₹99", description: "Rich nutty delight" },
      { name: "Strawberry", price: "₹99", description: "Fresh berry goodness" }
    ]
  },
  {
    title: "Signature Shakes",
    icon: "fas fa-blender",
    items: [
      { name: "T'Castle Shake", price: "₹79", description: "Our signature house special" },
      { name: "Spanish Delight", price: "₹99", description: "Rich and indulgent flavor" },
      { name: "Lotus Biscoff", price: "₹99", description: "Caramelized biscuit delight" },
      { name: "All Berry Shake", price: "₹99", description: "Mixed berry goodness" },
      { name: "Strawberry Shake", price: "₹99", description: "Fresh strawberry cream" },
      { name: "Avocado Shake", price: "₹99", description: "Creamy green smoothness" },
      { name: "Mango Shake", price: "₹99", description: "Tropical mango cream" },
      { name: "Mixed Dry Fruits", price: "₹89", description: "Nutritious nuts and dates blend" },
      { name: "Dates Shake", price: "₹79", description: "Natural sweetness of dates" },
      { name: "Oreo", price: "₹79", description: "Cookies and cream classic" }
    ]
  },
  {
    title: "Food Items",
    icon: "fas fa-hamburger",
    items: [
      { name: "Chicken Club", price: "₹110", description: "Layered chicken sandwich" },
      { name: "Beef Club", price: "₹110", description: "Premium beef club sandwich" },
      { name: "Chicken", price: "₹110", description: "Grilled chicken special" },
      { name: "Veg Burger", price: "₹99", description: "Fresh vegetarian burger" },
      { name: "Egg Burger", price: "₹99", description: "Classic egg burger" },
      { name: "Beef Burger", price: "₹99", description: "Juicy beef patty burger" },
      { name: "Chicken Nuggets", price: "₹79", description: "Golden crispy nuggets" },
      { name: "Kids Burger", price: "₹13", description: "Perfect size for little ones" },
      { name: "Normal Burger", price: "₹12", description: "Classic beef burger" },
      { name: "Zinger Burger", price: "₹10", description: "Spicy chicken burger" }
    ]
  },
  {
    title: "Desserts & Specials",
    icon: "fas fa-ice-cream",
    items: [
      { name: "Royal Falooda", price: "₹99", description: "Traditional sweet dessert drink" },
      { name: "Normal Falooda", price: "₹79", description: "Classic falooda dessert" },
      { name: "Kannur Cocktail", price: "₹70", description: "Regional specialty drink" },
      { name: "Blue Curacao", price: "₹70", description: "Tropical blue mocktail" },
      { name: "Blueberry", price: "₹70", description: "Fresh blueberry special" },
      { name: "Green Apple", price: "₹70", description: "Fresh green apple drink" },
      { name: "Raspberry", price: "₹70", description: "Tangy raspberry delight" },
      { name: "Strawberry Special", price: "₹70", description: "Premium strawberry treat" }
    ]
  }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const menuGrid = document.getElementById('menu-grid');
const contactForm = document.getElementById('contact-form');

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

// Menu generation
function generateMenu() {
  if (!menuGrid) return;

  menuGrid.innerHTML = '';

  menuData.forEach(category => {
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
            <div class="menu-item-price">${item.price}</div>
          </div>
        `).join('')}
      </div>
    `;
    
    menuGrid.appendChild(menuCard);
  });
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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const loading = showLoading();
  
  // Initialize all functionality
  setTimeout(() => {
    initNavigation();
    generateMenu();
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