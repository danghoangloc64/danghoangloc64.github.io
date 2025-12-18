// Dữ liệu mẫu bất động sản
const sampleProperties = [
    {
        id: 1,
        title: "Nhà phố 3 tầng mặt tiền đường lớn Nguyễn Văn Linh",
        price: "2.5 tỷ",
        location: "Quận 7, TP.HCM",
        area: "80m²",
        bedrooms: 3,
        bathrooms: 2,
        type: "nha-o",
        region: "mien-nam",
        isVip: true,
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        title: "Căn hộ Vinhomes Central Park view sông Sài Gòn tuyệt đẹp",
        price: "3.2 tỷ",
        location: "Quận Bình Thạnh, TP.HCM", 
        area: "75m²",
        bedrooms: 2,
        bathrooms: 2,
        type: "can-ho",
        region: "mien-nam",
        isVip: false,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        title: "Đất nền dự án Vinhomes Smart City Tây Mỗ",
        price: "1.8 tỷ",
        location: "Hà Đông, Hà Nội",
        area: "120m²",
        bedrooms: 0,
        bathrooms: 0,
        type: "dat-nen",
        region: "mien-bac",
        isVip: true,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        title: "Mặt bằng kinh doanh mặt tiền Trần Phú trung tâm Đà Nẵng",
        price: "4.5 tỷ",
        location: "Hải Châu, Đà Nẵng",
        area: "150m²",
        bedrooms: 0,
        bathrooms: 1,
        type: "mat-bang",
        region: "mien-trung",
        isVip: false,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        title: "Villa Saigon Mystery Villas Q2 sân vườn rộng 500m²",
        price: "8.5 tỷ",
        location: "Thủ Đức, TP.HCM",
        area: "200m²",
        bedrooms: 4,
        bathrooms: 3,
        type: "nha-o",
        region: "mien-nam",
        isVip: true,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        title: "Căn hộ studio The Manor Mỹ Đình gần ĐH FPT",
        price: "950 triệu",
        location: "Cầu Giấy, Hà Nội",
        area: "45m²",
        bedrooms: 1,
        bathrooms: 1,
        type: "can-ho",
        region: "mien-bac",
        isVip: false,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop"
    },
    {
        id: 7,
        title: "Penthouse Landmark 81 tầng cao view toàn thành phố",
        price: "15.8 tỷ",
        location: "Quận 1, TP.HCM",
        area: "180m²",
        bedrooms: 3,
        bathrooms: 3,
        type: "can-ho",
        region: "mien-nam",
        isVip: true,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop"
    },
    {
        id: 8,
        title: "Shophouse Phú Mỹ Hưng kinh doanh sầm uất",
        price: "12.5 tỷ",
        location: "Quận 7, TP.HCM",
        area: "100m²",
        bedrooms: 0,
        bathrooms: 2,
        type: "mat-bang",
        region: "mien-nam",
        isVip: true,
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
    },
    {
        id: 9,
        title: "Biệt thự Ecopark Grand The Island view hồ tuyệt đẹp",
        price: "6.2 tỷ",
        location: "Văn Giang, Hưng Yên",
        area: "250m²",
        bedrooms: 4,
        bathrooms: 4,
        type: "nha-o",
        region: "mien-bac",
        isVip: true,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
    },
    {
        id: 10,
        title: "Căn hộ Monarchy Đà Nẵng view biển Mỹ Khê",
        price: "2.8 tỷ",
        location: "Sơn Trà, Đà Nẵng",
        area: "85m²",
        bedrooms: 2,
        bathrooms: 2,
        type: "can-ho",
        region: "mien-trung",
        isVip: false,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop"
    },
    {
        id: 11,
        title: "Đất nền Gem Sky World Long Thành sân bay quốc tế",
        price: "1.2 tỷ",
        location: "Long Thành, Đồng Nai",
        area: "100m²",
        bedrooms: 0,
        bathrooms: 0,
        type: "dat-nen",
        region: "mien-nam",
        isVip: false,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"
    },
    {
        id: 12,
        title: "Nhà mặt phố Hoàn Kiếm kinh doanh đắc địa",
        price: "25.5 tỷ",
        location: "Hoàn Kiếm, Hà Nội",
        area: "60m²",
        bedrooms: 3,
        bathrooms: 2,
        type: "nha-o",
        region: "mien-bac",
        isVip: true,
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop"
    }
];

// Biến lưu trữ dữ liệu hiện tại
let currentProperties = [...sampleProperties];
let currentSearchType = 'ban';

// Khởi tạo trang
document.addEventListener('DOMContentLoaded', function() {
    loadProperties();
    setupEventListeners();
});

// Thiết lập event listeners
function setupEventListeners() {
    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentSearchType = this.dataset.type;
        });
    });

    // Search input events
    document.getElementById('searchKeyword').addEventListener('input', debounce(filterProperties, 300));
    document.getElementById('regionSelect').addEventListener('change', filterProperties);
    document.getElementById('propertyType').addEventListener('change', filterProperties);
    document.getElementById('priceRange').addEventListener('change', filterProperties);
}

// Debounce function để tránh gọi API quá nhiều
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Load và hiển thị properties
function loadProperties(properties = sampleProperties) {
    const grid = document.getElementById('propertiesGrid');
    
    if (properties.length === 0) {
        grid.innerHTML = '<div class="no-results"><p>Không tìm thấy bất động sản phù hợp</p></div>';
        return;
    }

    // Sắp xếp: VIP trước, sau đó theo ID giảm dần
    const sortedProperties = properties.sort((a, b) => {
        if (a.isVip && !b.isVip) return -1;
        if (!a.isVip && b.isVip) return 1;
        return b.id - a.id;
    });

    grid.innerHTML = sortedProperties.map(property => createPropertyCard(property)).join('');
}

// Tạo card bất động sản
function createPropertyCard(property) {
    // Use enhanced card if available
    if (typeof createEnhancedPropertyCard === 'function') {
        return createEnhancedPropertyCard(property);
    }
    
    // Fallback to basic card
    const bedroomInfo = property.bedrooms > 0 ? `${property.bedrooms} PN` : '';
    const bathroomInfo = property.bathrooms > 0 ? `${property.bathrooms} WC` : '';
    const details = [bedroomInfo, bathroomInfo, property.area].filter(Boolean).join(' • ');
    
    return `
        <div class="property-card" onclick="viewProperty(${property.id})">
            <div class="property-image" style="background-image: url('${property.image}')">
                ${property.isVip ? '<div class="property-badge vip"><i class="fas fa-crown"></i> VIP</div>' : '<div class="property-badge">Thường</div>'}
            </div>
            <div class="property-info">
                <div class="property-price">${property.price}</div>
                <div class="property-title">${property.title}</div>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${property.location}
                </div>
                <div class="property-details">${details}</div>
            </div>
        </div>
    `;
}

// Tìm kiếm bất động sản
function searchProperties() {
    filterProperties();
}

// Lọc bất động sản
function filterProperties() {
    const keyword = document.getElementById('searchKeyword').value.toLowerCase();
    const region = document.getElementById('regionSelect').value;
    const propertyType = document.getElementById('propertyType').value;
    const priceRange = document.getElementById('priceRange').value;

    let filtered = sampleProperties.filter(property => {
        // Lọc theo từ khóa
        const matchKeyword = !keyword || 
            property.title.toLowerCase().includes(keyword) ||
            property.location.toLowerCase().includes(keyword);

        // Lọc theo khu vực
        const matchRegion = !region || property.region === region;

        // Lọc theo loại BĐS
        const matchType = !propertyType || property.type === propertyType;

        // Lọc theo giá (đơn giản hóa)
        const matchPrice = !priceRange || checkPriceRange(property.price, priceRange);

        return matchKeyword && matchRegion && matchType && matchPrice;
    });

    currentProperties = filtered;
    loadProperties(filtered);
}

// Kiểm tra khoảng giá (đơn giản hóa)
function checkPriceRange(priceStr, range) {
    const price = parseFloat(priceStr.replace(/[^\d.]/g, ''));
    
    switch(range) {
        case '0-1': return price < 1;
        case '1-3': return price >= 1 && price <= 3;
        case '3-5': return price >= 3 && price <= 5;
        case '5+': return price > 5;
        default: return true;
    }
}

// Lọc theo khu vực từ region cards
function filterByRegion(region) {
    document.getElementById('regionSelect').value = region;
    filterProperties();
    
    // Scroll to properties section
    document.querySelector('.featured-properties').scrollIntoView({
        behavior: 'smooth'
    });
}

// Xem chi tiết bất động sản
function viewProperty(id) {
    const property = sampleProperties.find(p => p.id === id);
    if (property) {
        // Chuyển hướng đến trang chi tiết
        window.location.href = `property-detail.html?id=${id}`;
    }
}

// Utility functions
function formatPrice(price) {
    // Format giá tiền (có thể mở rộng thêm)
    return price;
}

function formatArea(area) {
    // Format diện tích
    return area;
}

// Thêm hiệu ứng loading khi tìm kiếm
function showLoading() {
    const grid = document.getElementById('propertiesGrid');
    grid.innerHTML = '<div class="loading"><i class="fas fa-spinner"></i> Đang tìm kiếm...</div>';
}

// Mô phỏng API call (sẽ thay thế bằng API thật)
function mockApiCall(filters) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(currentProperties);
        }, 500);
    });
}

// Mobile Menu Functions
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    navMenu.classList.toggle('mobile-active');
    menuToggle.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('mobile-active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (navMenu.classList.contains('mobile-active') && 
        !navMenu.contains(e.target) && 
        !menuToggle.contains(e.target)) {
        toggleMobileMenu();
    }
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu.classList.contains('mobile-active')) {
            toggleMobileMenu();
        }
    });
});

// Touch and swipe support for property cards on mobile
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        const propertiesGrid = document.getElementById('propertiesGrid');
        if (window.innerWidth <= 768 && propertiesGrid) {
            if (diff > 0) {
                // Swipe left - scroll right
                propertiesGrid.scrollBy({ left: 300, behavior: 'smooth' });
            } else {
                // Swipe right - scroll left
                propertiesGrid.scrollBy({ left: -300, behavior: 'smooth' });
            }
        }
    }
}

// Add touch events to properties grid
document.addEventListener('DOMContentLoaded', function() {
    const propertiesGrid = document.getElementById('propertiesGrid');
    if (propertiesGrid) {
        propertiesGrid.addEventListener('touchstart', handleTouchStart, { passive: true });
        propertiesGrid.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
});

// Mobile-specific optimizations
function isMobile() {
    return window.innerWidth <= 768;
}

// Optimize scroll performance on mobile
let ticking = false;

function updateScrollPosition() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Update parallax effects only on desktop
    if (!isMobile()) {
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
    }
    
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick, { passive: true });

// Lazy loading for images on mobile
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
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
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Pull to refresh functionality (basic implementation)
let startY = 0;
let currentY = 0;
let pullDistance = 0;
const pullThreshold = 100;

function handlePullStart(e) {
    if (window.pageYOffset === 0) {
        startY = e.touches[0].clientY;
    }
}

function handlePullMove(e) {
    if (window.pageYOffset === 0 && startY) {
        currentY = e.touches[0].clientY;
        pullDistance = currentY - startY;
        
        if (pullDistance > 0) {
            e.preventDefault();
            const pullIndicator = document.querySelector('.pull-to-refresh');
            if (pullIndicator) {
                if (pullDistance > pullThreshold) {
                    pullIndicator.classList.add('active');
                    pullIndicator.textContent = 'Thả để làm mới';
                } else {
                    pullIndicator.textContent = 'Kéo để làm mới';
                }
            }
        }
    }
}

function handlePullEnd(e) {
    if (pullDistance > pullThreshold) {
        // Trigger refresh
        refreshContent();
    }
    
    const pullIndicator = document.querySelector('.pull-to-refresh');
    if (pullIndicator) {
        pullIndicator.classList.remove('active');
    }
    
    startY = 0;
    currentY = 0;
    pullDistance = 0;
}

function refreshContent() {
    // Simulate content refresh
    showLoading();
    setTimeout(() => {
        loadProperties();
    }, 1000);
}

// Add pull to refresh events
if (isMobile()) {
    document.addEventListener('touchstart', handlePullStart, { passive: false });
    document.addEventListener('touchmove', handlePullMove, { passive: false });
    document.addEventListener('touchend', handlePullEnd, { passive: true });
}

// Viewport height fix for mobile browsers
function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setViewportHeight);
setViewportHeight();

// Enhanced property card creation for mobile
function createMobileOptimizedCard(property) {
    const bedroomInfo = property.bedrooms > 0 ? `${property.bedrooms} PN` : '';
    const bathroomInfo = property.bathrooms > 0 ? `${property.bathrooms} WC` : '';
    const details = [bedroomInfo, bathroomInfo, property.area].filter(Boolean).join(' • ');
    
    return `
        <div class="property-card swipe-item" onclick="viewProperty(${property.id})" data-id="${property.id}">
            <div class="property-image" style="background-image: url('${property.image}')">
                ${property.isVip ? '<div class="property-badge vip"><i class="fas fa-crown"></i> VIP</div>' : '<div class="property-badge">Thường</div>'}
                <button class="property-favorite" onclick="toggleFavorite(${property.id}, event)" aria-label="Yêu thích">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="property-info">
                <div class="property-price">${property.price}</div>
                <div class="property-title">${property.title}</div>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${property.location}
                </div>
                <div class="property-details">${details}</div>
                <div class="property-actions">
                    <button class="btn-action" onclick="callProperty(${property.id}, event)">
                        <i class="fas fa-phone"></i>
                    </button>
                    <button class="btn-action" onclick="chatProperty(${property.id}, event)">
                        <i class="fas fa-comments"></i>
                    </button>
                    <button class="btn-action" onclick="shareProperty(${property.id}, event)">
                        <i class="fas fa-share"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Mobile-specific property actions
function toggleFavorite(id, event) {
    event.stopPropagation();
    const button = event.currentTarget;
    const icon = button.querySelector('i');
    
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        button.classList.add('favorited');
        showToast('Đã thêm vào yêu thích');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        button.classList.remove('favorited');
        showToast('Đã xóa khỏi yêu thích');
    }
}

function callProperty(id, event) {
    event.stopPropagation();
    // Simulate phone call
    showToast('Đang kết nối cuộc gọi...');
}

function chatProperty(id, event) {
    event.stopPropagation();
    // Open chat
    showToast('Mở chat...');
}

function shareProperty(id, event) {
    event.stopPropagation();
    
    if (navigator.share) {
        const property = sampleProperties.find(p => p.id === id);
        navigator.share({
            title: property.title,
            text: `${property.title} - ${property.price}`,
            url: `${window.location.origin}/property-detail.html?id=${id}`
        });
    } else {
        // Fallback for browsers without Web Share API
        const url = `${window.location.origin}/property-detail.html?id=${id}`;
        navigator.clipboard.writeText(url).then(() => {
            showToast('Đã copy link vào clipboard');
        });
    }
}

// Toast notification system
function showToast(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    // Add toast styles if not already added
    if (!document.querySelector('#toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            .toast {
                position: fixed;
                bottom: 2rem;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 0.75rem 1.5rem;
                border-radius: var(--radius-lg);
                font-size: 0.875rem;
                z-index: 10000;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            .toast.show {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Hide and remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, duration);
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sampleProperties,
        createPropertyCard,
        filterProperties,
        checkPriceRange,
        toggleMobileMenu,
        isMobile
    };
}