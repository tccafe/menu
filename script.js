// Menu Data
const menuData = [
  {
{
  "title": "Main Course",
  "icon": "fas fa-drumstick-bite",
  "items": [
    {
      "name": "Shawaya - Full",
      "price": "₹440",
      "description": "Whole grilled chicken marinated in aromatic spices, cooked to juicy perfection."
    },
    {
      "name": "Shawaya - Half",
      "price": "₹220",
      "description": "Half portion of our signature grilled chicken, packed with flavor and tenderness."
    },
    {
      "name": "Shawaya - Quater",
      "price": "₹110",
      "description": "Quarter piece of deliciously seasoned and grilled chicken, ideal for light meals."
    },
    {
      "name": "Shawarma - Plate",
      "price": "₹100",
      "description": "Sliced grilled chicken served on a plate with sauces and fresh accompaniments."
    },
    {
      "name": "Shawarma - Roll",
      "price": "₹80",
      "description": "Spiced chicken wrapped in soft bread with veggies and garlic sauce – a classic favorite."
    }
  ]
}

  
  
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
