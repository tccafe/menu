/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
}

/* CSS Variables */
:root {
    --brand-teal: hsl(170, 57%, 30%);
    --brand-cream: hsl(39, 31%, 89%);
    --brand-gold: hsl(32, 40%, 62%);
    --emerald-600: hsl(160, 84%, 39%);
    --white: #ffffff;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

/* Container */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

@media (min-width: 768px) {
    .container {
        padding: 0 2rem;
    }
}

/* Typography */
.font-playfair {
    font-family: 'Playfair Display', serif;
}

/* Button Styles */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    font-size: 1rem;
}

.btn-primary {
    background: linear-gradient(135deg, var(--brand-teal), var(--emerald-600));
    color: white;
    box-shadow: var(--shadow-lg);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
}

.btn-secondary {
    background: transparent;
    color: var(--brand-cream);
    border: 2px solid var(--brand-cream);
    backdrop-filter: blur(10px);
}

.btn-secondary:hover {
    background: var(--brand-cream);
    color: var(--brand-teal);
    transform: translateY(-2px);
}

.btn-full {
    width: 100%;
    justify-content: center;
    padding: 1rem 2rem;
}

/* Animations */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

@keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.floating-animation {
    animation: float 6s ease-in-out infinite;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.navbar.scrolled {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: var(--shadow-lg);
}

.nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
}

.nav-brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.nav-logo {
    width: 3rem;
    height: 3rem;
    background: linear-gradient(135deg, var(--brand-teal), var(--emerald-600));
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--brand-cream);
    font-size: 1.25rem;
    box-shadow: var(--shadow-lg);
}

.nav-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--brand-teal);
}

.nav-menu {
    display: none;
    gap: 2rem;
}

@media (min-width: 768px) {
    .nav-menu {
        display: flex;
    }
}

.nav-link {
    position: relative;
    color: var(--gray-700);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    transition: all 0.3s ease;
}

.nav-link:hover {
    color: var(--brand-teal);
    background: rgba(52, 138, 124, 0.1);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--brand-teal);
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.nav-link:hover::after {
    width: 80%;
}

.nav-toggle {
    display: block;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--gray-700);
    cursor: pointer;
}

@media (min-width: 768px) {
    .nav-toggle {
        display: none;
    }
}

/* Mobile Navigation */
.nav-menu.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    padding: 1rem;
    box-shadow: var(--shadow-lg);
}

/* Hero Section */
.hero {
    min-height: 100vh;
    background: linear-gradient(135deg, var(--brand-teal) 0%, var(--brand-teal) 50%, var(--emerald-600) 100%);
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.floating-element {
    position: absolute;
    border-radius: 50%;
    blur: 60px;
    opacity: 0.1;
}

.floating-1 {
    top: 5rem;
    left: 2.5rem;
    width: 18rem;
    height: 18rem;
    background: var(--brand-cream);
    animation: float 6s ease-in-out infinite;
}

.floating-2 {
    bottom: 5rem;
    right: 2.5rem;
    width: 24rem;
    height: 24rem;
    background: var(--brand-gold);
    animation: float 6s ease-in-out infinite 2s;
}

.floating-3 {
    top: 50%;
    left: 33%;
    width: 16rem;
    height: 16rem;
    background: rgba(255, 255, 255, 0.5);
    animation: float 6s ease-in-out infinite 4s;
}

.hero-content {
    position: relative;
    z-index: 10;
    text-align: center;
    color: white;
    max-width: 4rem;
    margin: 0 auto;
    padding: 5rem 0;
}

.hero-logo {
    margin-bottom: 2rem;
}

.logo-container {
    position: relative;
    display: inline-block;
    margin-bottom: 1rem;
}

.coffee-icon {
    width: 8rem;
    height: 8rem;
    background: var(--brand-cream);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    box-shadow: 0 0 40px rgba(52, 138, 124, 0.4);
    animation: float 6s ease-in-out infinite;
}

.coffee-icon i {
    font-size: 2.5rem;
    color: var(--brand-teal);
}

.steam {
    position: absolute;
    top: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.25rem;
}

.steam-line {
    width: 0.375rem;
    background: var(--brand-teal);
    border-radius: 50px;
    opacity: 0.7;
    animation: pulse 2s ease-in-out infinite;
}

.steam-line:nth-child(1) {
    height: 1rem;
    animation-delay: 0s;
}

.steam-line:nth-child(2) {
    height: 1.25rem;
    animation-delay: 0.2s;
}

.steam-line:nth-child(3) {
    height: 1rem;
    animation-delay: 0.4s;
}

.hero-title h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: var(--brand-cream);
    margin-bottom: 0.5rem;
}

.hero-title p {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.3em;
    color: rgba(240, 232, 213, 0.9);
}

@media (min-width: 768px) {
    .hero-title h1 {
        font-size: 4.5rem;
    }
    
    .hero-title p {
        font-size: 2.5rem;
    }
}

.hero-description {
    font-size: 1.25rem;
    color: rgba(240, 232, 213, 0.9);
    max-width: 32rem;
    margin: 0 auto 2rem;
    line-height: 1.7;
}

@media (min-width: 768px) {
    .hero-description {
        font-size: 1.5rem;
    }
}

.hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

@media (min-width: 640px) {
    .hero-buttons {
        flex-direction: row;
        justify-content: center;
        gap: 1.5rem;
    }
}

.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    color: var(--brand-cream);
    font-size: 1.5rem;
    animation: float 2s ease-in-out infinite;
}

/* Section Backgrounds */
.section-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.bg-decoration {
    position: absolute;
    border-radius: 50%;
    blur: 60px;
    opacity: 0.05;
}

.bg-decoration-1 {
    top: 0;
    left: 0;
    width: 24rem;
    height: 24rem;
    background: var(--brand-teal);
    transform: translate(-12rem, -12rem);
}

.bg-decoration-2 {
    bottom: 0;
    right: 0;
    width: 24rem;
    height: 24rem;
    background: var(--brand-gold);
    transform: translate(12rem, 12rem);
}

.bg-decoration-3 {
    top: 5rem;
    right: 0;
    width: 20rem;
    height: 20rem;
    background: var(--brand-teal);
    transform: translateX(10rem);
}

.bg-decoration-4 {
    bottom: 5rem;
    left: 0;
    width: 20rem;
    height: 20rem;
    background: var(--brand-gold);
    transform: translateX(-10rem);
}

.bg-decoration-5 {
    top: 0;
    left: 0;
    width: 24rem;
    height: 24rem;
    background: var(--brand-teal);
    transform: translate(-12rem, -12rem);
}

.bg-decoration-6 {
    bottom: 0;
    right: 0;
    width: 24rem;
    height: 24rem;
    background: var(--brand-gold);
    transform: translate(12rem, 12rem);
}

/* Section Headers */
.section-header {
    text-align: center;
    margin-bottom: 5rem;
}

.section-title {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    font-weight: 700;
    color: var(--brand-teal);
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 8rem;
    height: 0.25rem;
    background: linear-gradient(to right, var(--brand-teal), var(--brand-gold));
    border-radius: 50px;
}

@media (min-width: 768px) {
    .section-title {
        font-size: 3.75rem;
    }
}

.section-description {
    font-size: 1.25rem;
    color: var(--gray-600);
    max-width: 48rem;
    margin: 2rem auto 0;
    line-height: 1.7;
}

/* Menu Section */
.menu-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, var(--gray-50) 0%, white 50%, var(--gray-100) 100%);
    position: relative;
    overflow: hidden;
}

/* Search and Filter Styles */
.search-filter-section {
    max-width: 64rem;
    margin: 0 auto 3rem;
}

.search-filter-container {
    background: white;
    border-radius: 1.5rem;
    box-shadow: var(--shadow-lg);
    padding: 1.5rem;
    border: 1px solid var(--gray-100);
}

.search-filter-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
}

@media (min-width: 768px) {
    .search-filter-content {
        flex-direction: row;
        align-items: center;
    }
}

.search-bar {
    position: relative;
    flex: 1;
}

.search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--brand-teal);
    pointer-events: none;
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

.search-input:focus + .search-icon {
    transform: translateY(-50%) scale(1.1);
    color: var(--brand-teal);
}

.search-input {
    width: 100%;
    padding: 1rem 1.25rem 1rem 3rem;
    border: 3px solid transparent;
    border-radius: 1.25rem;
    font-size: 1.1rem;
    background: white;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    font-weight: 500;
}

.search-input::placeholder {
    color: var(--gray-400);
    font-weight: 400;
}

.search-input:focus {
    border-color: var(--brand-teal);
    box-shadow: 0 12px 35px rgba(52, 138, 124, 0.2), 0 0 0 4px rgba(52, 138, 124, 0.15);
    transform: translateY(-2px);
}

.clear-search-btn {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    background: var(--gray-100);
    border: none;
    color: var(--gray-500);
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.clear-search-btn:hover {
    background: #ef4444;
    color: white;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
}

.filter-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 1.75rem;
    border-radius: 1.25rem;
    border: 3px solid transparent;
    background: linear-gradient(135deg, white, rgba(252, 248, 227, 0.5));
    color: var(--gray-700);
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 600;
    white-space: nowrap;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    position: relative;
    overflow: hidden;
}

.filter-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
}

.filter-btn:hover::before {
    left: 100%;
}

.filter-btn:hover {
    border-color: var(--brand-teal);
    color: var(--brand-teal);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(52, 138, 124, 0.2);
}

.filter-btn.active {
    background: linear-gradient(135deg, var(--brand-teal), var(--emerald-600));
    color: white;
    border-color: var(--brand-teal);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(52, 138, 124, 0.3);
}

.clear-filters-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: none;
    border: none;
    color: var(--gray-600);
    cursor: pointer;
    border-radius: 0.5rem;
    transition: color 0.2s ease;
    font-size: 0.875rem;
    font-weight: 500;
}

.clear-filters-btn:hover {
    color: var(--brand-teal);
}

.filter-dropdown {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--gray-100);
}

.filter-categories {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.category-btn {
    padding: 0.75rem 1.5rem;
    border-radius: 1rem;
    background: linear-gradient(135deg, var(--gray-100), var(--gray-50));
    color: var(--gray-700);
    border: 2px solid transparent;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.category-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    transition: left 0.6s;
}

.category-btn:hover::before {
    left: 100%;
}

.category-btn:hover {
    background: linear-gradient(135deg, rgba(52, 138, 124, 0.1), rgba(52, 138, 124, 0.05));
    color: var(--brand-teal);
    border-color: var(--brand-teal);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(52, 138, 124, 0.15);
}

.category-btn.active {
    background: linear-gradient(135deg, var(--brand-teal), var(--emerald-600));
    color: white;
    box-shadow: 0 8px 25px rgba(52, 138, 124, 0.3);
    transform: translateY(-2px);
    border-color: var(--brand-teal);
}

.active-filters {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
    font-size: 0.875rem;
    color: var(--gray-600);
}

.active-filters-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.filter-tag {
    background: rgba(52, 138, 124, 0.1);
    color: var(--brand-teal);
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.875rem;
}

.no-results {
    text-align: center;
    padding: 4rem 0;
}

.no-results-content {
    background: white;
    border-radius: 1.5rem;
    box-shadow: var(--shadow-lg);
    padding: 3rem;
    max-width: 28rem;
    margin: 0 auto;
}

.no-results-icon {
    font-size: 4rem;
    color: var(--gray-300);
    margin-bottom: 1rem;
}

.no-results h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--gray-800);
    margin-bottom: 0.5rem;
}

.no-results p {
    color: var(--gray-600);
    margin-bottom: 1.5rem;
}

/* Main Content Layout */
.main-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

@media (min-width: 1280px) {
    .main-content {
        flex-direction: row;
        gap: 2rem;
    }
}

.menu-content {
    flex: 1;
}

.cart-sidebar {
    width: 100%;
}

@media (min-width: 1280px) {
    .cart-sidebar {
        width: 24rem;
        flex-shrink: 0;
    }
}

/* Cart Styles */
.cart-toggle-btn {
    display: block;
    width: 100%;
    background: linear-gradient(135deg, var(--brand-teal), var(--emerald-600));
    color: white;
    border: 3px solid transparent;
    padding: 1.25rem 1.75rem;
    border-radius: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 10px 30px rgba(52, 138, 124, 0.3);
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    font-weight: 600;
}

.cart-toggle-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.cart-toggle-btn:hover::before {
    left: 100%;
}

@media (min-width: 1280px) {
    .cart-toggle-btn {
        display: none;
    }
}

.cart-toggle-btn:hover {
    background: linear-gradient(135deg, var(--emerald-600), var(--brand-teal));
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(52, 138, 124, 0.4);
    border-color: rgba(255, 255, 255, 0.2);
}

.cart-toggle-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart-toggle-left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
}

.cart-content {
    background: linear-gradient(135deg, white, rgba(252, 248, 227, 0.3));
    border-radius: 2rem;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    padding: 2rem;
    border: 3px solid rgba(52, 138, 124, 0.1);
    position: sticky;
    top: 6rem;
    display: none;
    backdrop-filter: blur(10px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (min-width: 1280px) {
    .cart-content {
        display: block;
    }
}

.cart-content.show {
    display: block;
}

.cart-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
}

.cart-icon {
    width: 3rem;
    height: 3rem;
    background: linear-gradient(135deg, var(--brand-teal), var(--emerald-600));
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.125rem;
}

.cart-info h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--brand-teal);
    margin: 0;
}

.cart-info p {
    font-size: 0.875rem;
    color: var(--gray-600);
    margin: 0;
}

.cart-empty {
    text-align: center;
    padding: 3rem 0;
}

.cart-empty-icon {
    font-size: 4rem;
    color: var(--gray-300);
    margin-bottom: 1rem;
}

.cart-empty p {
    color: var(--gray-600);
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.cart-empty span {
    color: var(--gray-500);
    font-size: 0.875rem;
}

.cart-items {
    max-height: 24rem;
    overflow-y: auto;
    margin-bottom: 1.5rem;
}

.cart-item {
    background: var(--gray-50);
    border-radius: 0.75rem;
    padding: 1rem;
    margin-bottom: 1rem;
}

.cart-item:last-child {
    margin-bottom: 0;
}

.cart-item-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
}

.cart-item-name {
    font-weight: 600;
    color: var(--gray-900);
    font-size: 0.875rem;
    line-height: 1.3;
    flex: 1;
    margin-right: 0.5rem;
}

.cart-item-remove {
    background: none;
    border: none;
    color: var(--gray-400);
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 0.25rem;
    transition: color 0.2s ease;
}

.cart-item-remove:hover {
    color: #ef4444;
}

.cart-item-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.quantity-controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.quantity-btn {
    width: 2.5rem;
    height: 2.5rem;
    background: linear-gradient(135deg, white, rgba(252, 248, 227, 0.5));
    border: 2px solid var(--gray-200);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 0.9rem;
    color: var(--gray-600);
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.quantity-btn:hover {
    background: linear-gradient(135deg, var(--brand-teal), var(--emerald-600));
    border-color: var(--brand-teal);
    color: white;
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(52, 138, 124, 0.25);
}

.quantity-btn:active {
    transform: scale(1.05);
}

.quantity-display {
    font-weight: 500;
    color: var(--gray-900);
    width: 2rem;
    text-align: center;
}

.cart-item-price {
    text-align: right;
}

.cart-item-price .unit-price {
    font-size: 0.75rem;
    color: var(--gray-600);
    margin-bottom: 0.25rem;
}

.cart-item-price .total-price {
    font-weight: 700;
    color: var(--brand-teal);
    font-size: 1rem;
}

.cart-summary {
    border-top: 1px solid var(--gray-200);
    padding-top: 1rem;
}

.cart-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.cart-total span:first-child {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--gray-900);
}

.cart-total span:last-child {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--brand-teal);
}

.cart-actions {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.btn-secondary {
    background: linear-gradient(135deg, var(--gray-100), var(--gray-50));
    color: var(--gray-700);
    border: 2px solid var(--gray-200);
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 600;
}

.btn-secondary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
}

.btn-secondary:hover::before {
    left: 100%;
}

.btn-secondary:hover {
    background: linear-gradient(135deg, var(--gray-200), var(--gray-100));
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: var(--gray-300);
}

/* Add to Cart Button in Menu Items */
.menu-item {
    position: relative;
}

.menu-item-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-left: 1rem;
}

.add-to-cart-btn {
    background: linear-gradient(135deg, var(--brand-teal), var(--emerald-600));
    color: white;
    border: none;
    padding: 0.75rem 1.25rem;
    border-radius: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    box-shadow: 0 6px 20px rgba(52, 138, 124, 0.25);
    position: relative;
    overflow: hidden;
    border: 2px solid transparent;
}

.add-to-cart-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s;
}

.add-to-cart-btn:hover::before {
    left: 100%;
}

.add-to-cart-btn:hover {
    background: linear-gradient(135deg, var(--emerald-600), var(--brand-teal));
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 12px 35px rgba(52, 138, 124, 0.4);
    border-color: rgba(255, 255, 255, 0.2);
}

.add-to-cart-btn:active {
    transform: translateY(-1px) scale(1.02);
    box-shadow: 0 8px 25px rgba(52, 138, 124, 0.3);
}

.menu-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
}

@media (min-width: 1024px) {
    .menu-grid {
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }
}

.menu-card {
    background: white;
    border-radius: 1.5rem;
    padding: 2rem;
    box-shadow: var(--shadow-xl);
    border-left: 4px solid var(--brand-teal);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.menu-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-2xl);
}

.menu-card::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 8rem;
    height: 8rem;
    background: linear-gradient(135deg, rgba(52, 138, 124, 0.05), rgba(193, 147, 80, 0.05));
    border-radius: 50%;
    transform: translate(4rem, -4rem);
}

.menu-card-header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    position: relative;
    z-index: 10;
}

.menu-icon {
    width: 3.5rem;
    height: 3.5rem;
    background: linear-gradient(135deg, var(--brand-teal), var(--emerald-600));
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.25rem;
    margin-right: 1rem;
    box-shadow: var(--shadow-lg);
}

.menu-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--brand-teal);
}

.menu-items {
    position: relative;
    z-index: 10;
}

.menu-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    border-radius: 0.75rem;
    transition: all 0.2s ease;
    margin-bottom: 1.25rem;
}

.menu-item:last-child {
    margin-bottom: 0;
}

.menu-item:hover {
    background: var(--gray-50);
}

.menu-item-content {
    flex: 1;
}

.menu-item-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
}

.menu-item-name {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--gray-800);
    transition: color 0.2s ease;
}

.menu-item:hover .menu-item-name {
    color: var(--brand-teal);
}

.menu-item-dots {
    flex: 1;
    border-bottom: 1px dotted var(--gray-300);
    margin: 0 0.5rem;
    transition: border-color 0.2s ease;
}

.menu-item:hover .menu-item-dots {
    border-color: var(--brand-teal);
}

.menu-item-description {
    font-size: 0.875rem;
    color: var(--gray-600);
    line-height: 1.5;
}

.menu-item-price {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--brand-teal);
    background: rgba(52, 138, 124, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    margin-left: 1rem;
}

/* About Section */
.about-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, white 0%, var(--gray-50) 50%, white 100%);
    position: relative;
    overflow: hidden;
}

.about-content {
    display: grid;
    gap: 4rem;
    align-items: center;
    grid-template-columns: 1fr;
}

@media (min-width: 1024px) {
    .about-content {
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
    }
}

.about-image {
    position: relative;
}

.about-image::before {
    content: '';
    position: absolute;
    inset: -1rem;
    background: linear-gradient(135deg, var(--brand-teal), var(--brand-gold));
    border-radius: 1.5rem;
    opacity: 0.2;
    blur: 20px;
}

.about-image img {
    width: 100%;
    height: auto;
    border-radius: 1.5rem;
    box-shadow: var(--shadow-2xl);
    position: relative;
    z-index: 10;
    transition: transform 0.3s ease;
}

.about-image:hover img {
    transform: translateY(-5px);
}

.about-text {
    position: relative;
    z-index: 10;
}

.about-text .section-title {
    text-align: left;
    margin-bottom: 1.5rem;
}

.about-text .section-title::after {
    left: 0;
    transform: none;
    width: 10rem;
}

.about-text p {
    font-size: 1.125rem;
    color: var(--gray-600);
    line-height: 1.7;
    margin-bottom: 1.5rem;
}

.features {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
}

.feature {
    text-align: center;
}

.feature-icon {
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: white;
    font-size: 1.5rem;
    box-shadow: var(--shadow-lg);
    transition: transform 0.3s ease;
}

.feature:hover .feature-icon {
    transform: scale(1.1);
}

.feature-icon-1 {
    background: linear-gradient(135deg, var(--brand-teal), var(--emerald-600));
}

.feature-icon-2 {
    background: linear-gradient(135deg, var(--brand-gold), #f59e0b);
}

.feature h4 {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--gray-800);
    margin-bottom: 0.5rem;
}

.feature p {
    color: var(--gray-600);
    font-size: 0.875rem;
}

/* Contact Section */
.contact-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, var(--gray-50) 0%, white 50%, var(--gray-100) 100%);
    position: relative;
    overflow: hidden;
}

.contact-content {
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr;
    max-width: 72rem;
    margin: 0 auto;
}

@media (min-width: 1024px) {
    .contact-content {
        grid-template-columns: 1fr 1fr;
    }
}

.contact-info,
.contact-form-container {
    background: white;
    border-radius: 1.5rem;
    padding: 2rem;
    box-shadow: var(--shadow-xl);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.contact-info {
    border-left: 4px solid var(--brand-teal);
}

.contact-form-container {
    border-left: 4px solid var(--brand-gold);
}

.contact-info:hover,
.contact-form-container:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-2xl);
}

.contact-info::before,
.contact-form-container::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    transform: translate(4rem, -4rem);
}

.contact-info::before {
    background: linear-gradient(135deg, rgba(52, 138, 124, 0.05), rgba(193, 147, 80, 0.05));
}

.contact-form-container::before {
    background: linear-gradient(135deg, rgba(193, 147, 80, 0.05), rgba(52, 138, 124, 0.05));
}

.contact-info h3,
.contact-form-container h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--brand-teal);
    margin-bottom: 2rem;
    position: relative;
    z-index: 10;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 10;
}

.contact-icon {
    width: 3rem;
    height: 3rem;
    background: rgba(52, 138, 124, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--brand-teal);
    flex-shrink: 0;
}

.contact-details h4 {
    font-weight: 600;
    color: var(--gray-800);
    margin-bottom: 0.25rem;
}

.contact-details p {
    color: var(--gray-600);
    line-height: 1.5;
}

.social-links {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--gray-100);
    position: relative;
    z-index: 10;
}

.social-links h4 {
    font-weight: 600;
    color: var(--gray-800);
    margin-bottom: 1rem;
}

.social-icons {
    display: flex;
    gap: 1rem;
}

.social-icon {
    width: 2.5rem;
    height: 2.5rem;
    background: rgba(52, 138, 124, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--brand-teal);
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-icon:hover {
    background: var(--brand-teal);
    color: white;
    transform: translateY(-2px);
}

/* Form Styles */
.contact-form {
    position: relative;
    z-index: 10;
}

.form-row {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;
}

@media (min-width: 768px) {
    .form-row {
        grid-template-columns: 1fr 1fr;
    }
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    font-weight: 500;
    color: var(--gray-700);
    margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: white;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--brand-teal);
    box-shadow: 0 0 0 3px rgba(52, 138, 124, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

/* Footer */
.footer {
    background: var(--brand-teal);
    color: var(--brand-cream);
    padding: 3rem 0;
}

.footer-content {
    text-align: center;
}

.footer-brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
}

.footer-logo {
    width: 2.5rem;
    height: 2.5rem;
    background: var(--brand-cream);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--brand-teal);
    font-size: 1.125rem;
}

.footer-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 600;
}

.footer-description {
    color: rgba(240, 232, 213, 0.8);
    margin-bottom: 1.5rem;
    max-width: 32rem;
    margin-left: auto;
    margin-right: auto;
}

.footer-social {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.footer-social-link {
    color: rgba(240, 232, 213, 0.8);
    font-size: 1.25rem;
    transition: color 0.3s ease;
}

.footer-social-link:hover {
    color: var(--brand-cream);
}

.footer-bottom {
    padding-top: 1.5rem;
    border-top: 1px solid rgba(240, 232, 213, 0.2);
}

.footer-bottom p {
    color: rgba(240, 232, 213, 0.6);
    font-size: 0.875rem;
}

/* Responsive Design */
@media (max-width: 767px) {
    .hero-content {
        max-width: 100%;
        padding: 3rem 0;
    }
    
    .hero-title h1 {
        font-size: 3rem;
    }
    
    .hero-title p {
        font-size: 1.5rem;
    }
    
    .section-title {
        font-size: 2.5rem;
    }
    
    .menu-card,
    .contact-info,
    .contact-form-container {
        padding: 1.5rem;
    }
    
    .features {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .about-content {
        gap: 2rem;
    }
}

/* Utility Classes */
.text-center { text-align: center; }
.hidden { display: none; }
.block { display: block; }
.flex { display: flex; }
.grid { display: grid; }
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }

/* Smooth scrolling enhancement */
@media (prefers-reduced-motion: no-preference) {
    html {
        scroll-behavior: smooth;
    }
}
