// Tetakawi Transport Department - Modern Interactive Features
// =========================================================

class TransportApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupTabs();
        this.setupSmoothScrolling();
        this.setupScrollAnimations();
        this.setupSearchFunctionality();
        this.setupContactForms();
        this.setupThemeDetection();
        this.setupPerformanceOptimizations();
        
        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
        } else {
            this.onDOMReady();
        }
    }

    onDOMReady() {
        this.updateCurrentYear();
        this.initializeAnimations();
        this.setupKeyboardNavigation();
        console.log('🚛 Tetakawi Transport App initialized successfully');
    }

    // Navigation functionality
    setupNavigation() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close mobile menu when clicking on a link
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }

        // Update active nav link based on scroll position
        this.updateActiveNavLink();
        window.addEventListener('scroll', () => this.updateActiveNavLink());
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Tab functionality for directorio section
    setupTabs() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }

                // Animate tab change
                this.animateTabChange(targetContent);
            });
        });
    }

    animateTabChange(targetContent) {
        if (targetContent) {
            targetContent.style.opacity = '0';
            targetContent.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                targetContent.style.transition = 'all 0.3s ease';
                targetContent.style.opacity = '1';
                targetContent.style.transform = 'translateY(0)';
            }, 50);
        }
    }

    // Smooth scrolling for navigation links
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Scroll animations and effects
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.card, .contact-card, .formato-card, .incidencia-card, .ruta-card');
        animateElements.forEach(el => observer.observe(el));

        // Header scroll effect
        this.setupHeaderScrollEffect();
    }

    setupHeaderScrollEffect() {
        const header = document.querySelector('.header');
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
            
            // Add shadow on scroll
            if (scrollTop > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // Search functionality for contacts and routes
    setupSearchFunctionality() {
        this.createSearchBar();
    }

    createSearchBar() {
        const directorio = document.getElementById('directorio');
        if (!directorio) return;

        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <div class="search-box">
                <i class="fas fa-search"></i>
                <input type="text" id="contactSearch" placeholder="Buscar contacto por nombre o puesto..." class="search-input">
                <button class="search-clear" id="clearSearch">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        const sectionHeader = directorio.querySelector('.section-header');
        sectionHeader.appendChild(searchContainer);

        const searchInput = document.getElementById('contactSearch');
        const clearButton = document.getElementById('clearSearch');

        searchInput.addEventListener('input', (e) => this.filterContacts(e.target.value));
        clearButton.addEventListener('click', () => {
            searchInput.value = '';
            this.filterContacts('');
        });
    }

    filterContacts(searchTerm) {
        const contactCards = document.querySelectorAll('.contact-card');
        const searchLower = searchTerm.toLowerCase();

        contactCards.forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            const position = card.querySelector('.position').textContent.toLowerCase();
            
            if (name.includes(searchLower) || position.includes(searchLower)) {
                card.style.display = 'block';
                card.classList.add('search-match');
            } else {
                card.style.display = searchTerm ? 'none' : 'block';
                card.classList.remove('search-match');
            }
        });

        // Show "no results" message if needed
        this.toggleNoResultsMessage(searchTerm);
    }

    toggleNoResultsMessage(searchTerm) {
        const activeTab = document.querySelector('.tab-content.active');
        let noResultsMsg = activeTab.querySelector('.no-results-message');
        
        if (searchTerm) {
            const visibleCards = activeTab.querySelectorAll('.contact-card[style*="block"], .contact-card:not([style*="none"])');
            
            if (visibleCards.length === 0) {
                if (!noResultsMsg) {
                    noResultsMsg = document.createElement('div');
                    noResultsMsg.className = 'no-results-message';
                    noResultsMsg.innerHTML = `
                        <div class="no-results-content">
                            <i class="fas fa-search"></i>
                            <h3>No se encontraron resultados</h3>
                            <p>No hay contactos que coincidan con "${searchTerm}"</p>
                        </div>
                    `;
                    activeTab.appendChild(noResultsMsg);
                }
            } else if (noResultsMsg) {
                noResultsMsg.remove();
            }
        } else if (noResultsMsg) {
            noResultsMsg.remove();
        }
    }

    // Contact form enhancements
    setupContactForms() {
        // Add click tracking for external links
        const externalLinks = document.querySelectorAll('a[href^="https://docs.google.com"], a[href^="https://forms.google.com"]');
        
        externalLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                this.trackLinkClick(link.href, link.textContent);
                this.showLoadingState(link);
            });
        });

        // Add copy functionality for contact details
        this.setupContactCopy();
    }

    setupContactCopy() {
        const contactDetails = document.querySelectorAll('.contact-details span');
        
        contactDetails.forEach(detail => {
            const text = detail.textContent.trim();
            if (text.includes('622-') || text.includes('Ext:')) {
                detail.style.cursor = 'pointer';
                detail.title = 'Click para copiar';
                
                detail.addEventListener('click', () => {
                    const textToCopy = text.replace(/.*?: /, ''); // Remove label
                    this.copyToClipboard(textToCopy, detail);
                });
            }
        });
    }

    async copyToClipboard(text, element) {
        try {
            await navigator.clipboard.writeText(text);
            this.showToast(`📋 Copiado: ${text}`, 'success');
            
            // Visual feedback
            element.style.background = 'var(--success-color)';
            element.style.color = 'white';
            element.style.borderRadius = 'var(--border-radius)';
            element.style.padding = '2px 6px';
            
            setTimeout(() => {
                element.style.background = '';
                element.style.color = '';
                element.style.borderRadius = '';
                element.style.padding = '';
            }, 1000);
            
        } catch (err) {
            this.showToast('❌ Error al copiar', 'error');
        }
    }

    trackLinkClick(url, text) {
        console.log(`📊 Link clicked: ${text} -> ${url}`);
        // Here you could send analytics data to your tracking service
    }

    showLoadingState(button) {
        const originalText = button.innerHTML;
        button.classList.add('loading');
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando...';
        
        setTimeout(() => {
            button.classList.remove('loading');
            button.innerHTML = originalText;
        }, 2000);
    }

    // Theme and accessibility
    setupThemeDetection() {
        // Detect user's preferred color scheme
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode-preferred');
        }

        // Detect reduced motion preference
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.classList.add('reduce-motion');
        }
    }

    setupKeyboardNavigation() {
        // Enhanced keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Quick search with Ctrl+K or Cmd+K
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.getElementById('contactSearch');
                if (searchInput) {
                    searchInput.focus();
                    searchInput.select();
                }
            }

            // Navigate sections with arrow keys when focused
            if (e.target.classList.contains('nav-link')) {
                const navLinks = Array.from(document.querySelectorAll('.nav-link'));
                const currentIndex = navLinks.indexOf(e.target);
                
                if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : navLinks.length - 1;
                    navLinks[prevIndex].focus();
                } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextIndex = currentIndex < navLinks.length - 1 ? currentIndex + 1 : 0;
                    navLinks[nextIndex].focus();
                }
            }
        });
    }

    // Performance optimizations
    setupPerformanceOptimizations() {
        // Lazy load images when they become visible
        this.setupLazyLoading();
        
        // Preload critical resources
        this.preloadCriticalResources();
        
        // Setup service worker for caching (if HTTPS)
        if ('serviceWorker' in navigator && location.protocol === 'https:') {
            this.registerServiceWorker();
        }
    }

    setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            });
        }
    }

    preloadCriticalResources() {
        const criticalResources = [
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        ];

        criticalResources.forEach(url => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = url;
            document.head.appendChild(link);
        });
    }

    registerServiceWorker() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ Service Worker registered successfully');
            })
            .catch(error => {
                console.log('❌ Service Worker registration failed');
            });
    }

    // Utility functions
    initializeAnimations() {
        // Add entrance animations to cards
        const cards = document.querySelectorAll('.card, .contact-card, .formato-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }

    updateCurrentYear() {
        const yearElements = document.querySelectorAll('.current-year');
        const currentYear = new Date().getFullYear();
        yearElements.forEach(element => {
            element.textContent = currentYear;
        });
    }

    showToast(message, type = 'info') {
        // Remove existing toasts
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-message">${message}</span>
                <button class="toast-close">×</button>
            </div>
        `;

        document.body.appendChild(toast);

        // Auto remove after 3 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 3000);

        // Manual close
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.remove();
        });

        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 100);
    }

    // Public API for external use
    static getInstance() {
        if (!TransportApp.instance) {
            TransportApp.instance = new TransportApp();
        }
        return TransportApp.instance;
    }
}

// Initialize the application
const app = TransportApp.getInstance();

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TransportApp;
}

// Additional CSS for JavaScript features
const additionalStyles = `
<style>
.search-container {
    margin-top: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.search-box {
    position: relative;
    display: flex;
    align-items: center;
}

.search-input {
    width: 100%;
    padding: 12px 20px 12px 45px;
    border: 2px solid var(--gray-200);
    border-radius: var(--border-radius-full);
    font-size: var(--font-size-base);
    transition: var(--transition);
    background: var(--white);
}

.search-input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.search-box i.fa-search {
    position: absolute;
    left: 15px;
    color: var(--gray-400);
    z-index: 1;
}

.search-clear {
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    color: var(--gray-400);
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    transition: var(--transition);
}

.search-clear:hover {
    background: var(--gray-100);
    color: var(--gray-600);
}

.search-match {
    background: rgba(59, 130, 246, 0.05);
    border-left-color: var(--accent-color);
}

.no-results-message {
    text-align: center;
    padding: 3rem;
    color: var(--gray-500);
}

.no-results-content i {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--gray-300);
}

.header.scrolled {
    box-shadow: var(--shadow-lg);
}

.toast {
    position: fixed;
    top: -100px;
    right: 20px;
    background: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-xl);
    border-left: 4px solid var(--primary-color);
    padding: 0;
    z-index: 10000;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    min-width: 300px;
    max-width: 500px;
}

.toast.show {
    top: 20px;
}

.toast-success {
    border-left-color: var(--success-color);
}

.toast-error {
    border-left-color: var(--danger-color);
}

.toast-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
}

.toast-message {
    flex: 1;
    font-weight: 500;
}

.toast-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--gray-400);
    padding: 0;
    margin-left: 1rem;
    line-height: 1;
}

.toast-close:hover {
    color: var(--gray-600);
}

@media (max-width: 768px) {
    .toast {
        right: 10px;
        left: 10px;
        min-width: unset;
    }
    
    .search-container {
        margin-top: 1rem;
    }
}
</style>
`;

// Add additional styles to head
document.head.insertAdjacentHTML('beforeend', additionalStyles); 
 
// Protección básica de acceso 
const TETAKAWI_ACCESS = "TRANSPORT2024"; 
if (!sessionStorage.getItem('tetakawi_verified')) { 
    const code = prompt("Código de acceso Tetakawi:"); 
    if (code !== TETAKAWI_ACCESS) { 
        alert("Acceso denegado"); 
        document.body.innerHTML = "^<h1^>Acceso Restringido^</h1^>"; 
    } else { 
        sessionStorage.setItem('tetakawi_verified', 'true'); 
    } 
} 
