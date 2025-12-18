// Enhanced Features JavaScript
// Quản lý các tính năng nâng cao của website

// State management
let isAdvancedSearchOpen = false;
let isFabMenuOpen = false;
let savedProperties = JSON.parse(localStorage.getItem('savedProperties') || '[]');
let currentView = 'grid';
let currentSort = 'newest';

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', function() {
    initializeEnhancedFeatures();
    updateSavedCount();
    initializeAnimations();
});

// Initialize all enhanced features
function initializeEnhancedFeatures() {
    // Add scroll effects
    window.addEventListener('scroll', handleScroll);
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Initialize tooltips
    initializeTooltips();
    
    // Add loading states
    addLoadingStates();
    
    // Initialize property cards hover effects
    initializePropertyCardEffects();
}

// Handle scroll effects
function handleScroll() {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    
    // Header background opacity
    if (scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'var(--bg-primary)';
        header.style.backdropFilter = 'none';
    }
    
    // Show/hide scroll to top button
    const fabContainer = document.querySelector('.fab-container');
    if (scrollY > 500) {
        fabContainer.style.opacity = '1';
        fabContainer.style.visibility = 'visible';
    } else {
        fabContainer.style.opacity = '0';
        fabContainer.style.visibility = 'hidden';
    }
}

// Keyboard shortcuts
function handleKeyboardShortcuts(e) {
    // Ctrl/Cmd + K: Focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('searchKeyword').focus();
    }
    
    // Escape: Close modals
    if (e.key === 'Escape') {
        closeAllModals();
    }
    
    // Ctrl/Cmd + Enter: Quick search
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        searchProperties();
    }
}

// Advanced search toggle
function toggleAdvancedSearch() {
    const panel = document.getElementById('advancedSearchPanel');
    const btn = document.querySelector('.advanced-search-btn');
    
    isAdvancedSearchOpen = !isAdvancedSearchOpen;
    
    if (isAdvancedSearchOpen) {
        panel.classList.add('active');
        btn.innerHTML = '<i class="fas fa-times"></i> Đóng tìm kiếm nâng cao';
        
        // Animate panel
        panel.style.maxHeight = '0px';
        panel.style.opacity = '0';
        setTimeout(() => {
            panel.style.maxHeight = '200px';
            panel.style.opacity = '1';
        }, 10);
    } else {
        panel.classList.remove('active');
        btn.innerHTML = '<i class="fas fa-sliders-h"></i> Tìm kiếm nâng cao';
    }
}

// Voice search (mock implementation)
function startVoiceSearch() {
    const btn = document.querySelector('.voice-search');
    const originalIcon = btn.innerHTML;
    
    // Show recording state
    btn.innerHTML = '<i class="fas fa-stop recording"></i>';
    btn.style.color = 'var(--danger-color)';
    
    // Mock voice recognition
    setTimeout(() => {
        const searchInput = document.getElementById('searchKeyword');
        searchInput.value = 'Căn hộ Quận 7';
        searchInput.focus();
        
        // Reset button
        btn.innerHTML = originalIcon;
        btn.style.color = '';
        
        // Trigger search
        filterProperties();
        
        // Show success message
        showNotification('Đã nhận diện giọng nói: "Căn hộ Quận 7"', 'success');
    }, 2000);
}

// Quick search suggestions
function quickSearch(keyword) {
    document.getElementById('searchKeyword').value = keyword;
    filterProperties();
    
    // Scroll to results
    document.querySelector('.featured-properties').scrollIntoView({
        behavior: 'smooth'
    });
}

// Change view (grid/list)
function changeView(view) {
    currentView = view;
    
    // Update buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-view="${view}"]`).classList.add('active');
    
    // Update grid class
    const grid = document.getElementById('propertiesGrid');
    if (view === 'list') {
        grid.classList.add('list-view');
    } else {
        grid.classList.remove('list-view');
    }
    
    // Re-render properties with new view
    loadProperties(currentProperties);
}

// Sort properties
function sortProperties() {
    const sortBy = document.getElementById('sortBy').value;
    currentSort = sortBy;
    
    let sorted = [...currentProperties];
    
    switch (sortBy) {
        case 'price-asc':
            sorted.sort((a, b) => parseFloat(a.price.replace(/[^\d.]/g, '')) - parseFloat(b.price.replace(/[^\d.]/g, '')));
            break;
        case 'price-desc':
            sorted.sort((a, b) => parseFloat(b.price.replace(/[^\d.]/g, '')) - parseFloat(a.price.replace(/[^\d.]/g, '')));
            break;
        case 'area-desc':
            sorted.sort((a, b) => parseFloat(b.area.replace(/[^\d]/g, '')) - parseFloat(a.area.replace(/[^\d]/g, '')));
            break;
        case 'vip':
            sorted.sort((a, b) => {
                if (a.isVip && !b.isVip) return -1;
                if (!a.isVip && b.isVip) return 1;
                return b.id - a.id;
            });
            break;
        default: // newest
            sorted.sort((a, b) => b.id - a.id);
    }
    
    loadProperties(sorted);
    showNotification(`Đã sắp xếp theo ${getSortLabel(sortBy)}`, 'info');
}

function getSortLabel(sortBy) {
    const labels = {
        'newest': 'mới nhất',
        'price-asc': 'giá thấp đến cao',
        'price-desc': 'giá cao đến thấp',
        'area-desc': 'diện tích lớn nhất',
        'vip': 'VIP trước'
    };
    return labels[sortBy] || 'mới nhất';
}

// Load more properties (pagination simulation)
function loadMoreProperties() {
    const btn = document.querySelector('.load-more-btn');
    const originalText = btn.innerHTML;
    
    // Show loading
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang tải...';
    btn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Add more sample properties (duplicate with new IDs)
        const moreProperties = sampleProperties.map((prop, index) => ({
            ...prop,
            id: prop.id + 100 + index,
            title: prop.title + ' (Tin mới)',
        }));
        
        currentProperties = [...currentProperties, ...moreProperties];
        loadProperties(currentProperties);
        
        // Reset button
        btn.innerHTML = originalText;
        btn.disabled = false;
        
        showNotification(`Đã tải thêm ${moreProperties.length} bất động sản`, 'success');
    }, 1500);
}

// Modal management
function showLoginModal() {
    showModal('loginModal');
}

function showPostPropertyModal() {
    showModal('postPropertyModal');
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Animate modal
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });
    document.body.style.overflow = '';
}

// Floating Action Button
function toggleFabMenu() {
    const menu = document.getElementById('fabMenu');
    const mainFab = document.querySelector('.main-fab');
    
    isFabMenuOpen = !isFabMenuOpen;
    
    if (isFabMenuOpen) {
        menu.classList.add('active');
        mainFab.style.transform = 'rotate(45deg)';
    } else {
        menu.classList.remove('active');
        mainFab.style.transform = 'rotate(0deg)';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Close FAB menu
    if (isFabMenuOpen) {
        toggleFabMenu();
    }
}

// Saved properties management
function toggleSavedProperties() {
    // Show saved properties modal (to be implemented)
    showNotification(`Bạn có ${savedProperties.length} tin đã lưu`, 'info');
}

function updateSavedCount() {
    const countElement = document.querySelector('.saved-count');
    if (countElement) {
        countElement.textContent = savedProperties.length;
        countElement.style.display = savedProperties.length > 0 ? 'flex' : 'none';
    }
}

// Notifications
function toggleNotifications() {
    showNotification('Bạn có 3 thông báo mới', 'info');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add to page
    let container = document.querySelector('.notifications-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'notifications-container';
        document.body.appendChild(container);
    }
    
    container.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'warning': 'exclamation-triangle',
        'info': 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Property card enhancements
function initializePropertyCardEffects() {
    // Add intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe property cards
    document.querySelectorAll('.property-card').forEach(card => {
        observer.observe(card);
    });
}

// Enhanced property card creation
function createEnhancedPropertyCard(property) {
    const bedroomInfo = property.bedrooms > 0 ? `${property.bedrooms} PN` : '';
    const bathroomInfo = property.bathrooms > 0 ? `${property.bathrooms} WC` : '';
    const details = [bedroomInfo, bathroomInfo, property.area].filter(Boolean).join(' • ');
    
    const isSaved = savedProperties.includes(property.id);
    
    return `
        <div class="property-card enhanced" onclick="viewProperty(${property.id})" data-id="${property.id}">
            <div class="property-image" style="background-image: url('${property.image}')">
                ${property.isVip ? '<div class="property-badge vip"><i class="fas fa-crown"></i> VIP</div>' : '<div class="property-badge">Thường</div>'}
                <div class="property-actions">
                    <button class="action-btn save-btn ${isSaved ? 'saved' : ''}" onclick="event.stopPropagation(); toggleSaveProperty(${property.id})" title="${isSaved ? 'Bỏ lưu' : 'Lưu tin'}">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="action-btn share-btn" onclick="event.stopPropagation(); shareProperty(${property.id})" title="Chia sẻ">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
                <div class="property-stats">
                    <span class="stat-item">
                        <i class="fas fa-eye"></i>
                        ${Math.floor(Math.random() * 500) + 100}
                    </span>
                </div>
            </div>
            <div class="property-info">
                <div class="property-price">${property.price}</div>
                <div class="property-title">${property.title}</div>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${property.location}
                </div>
                <div class="property-details">${details}</div>
                <div class="property-meta">
                    <span class="posted-time">
                        <i class="fas fa-clock"></i>
                        ${getRandomTimeAgo()}
                    </span>
                    <span class="property-type">${getPropertyTypeLabel(property.type)}</span>
                </div>
            </div>
        </div>
    `;
}

// Helper functions
function getRandomTimeAgo() {
    const times = ['2 giờ trước', '5 giờ trước', '1 ngày trước', '2 ngày trước', '3 ngày trước'];
    return times[Math.floor(Math.random() * times.length)];
}

function getPropertyTypeLabel(type) {
    const labels = {
        'nha-o': 'Nhà ở',
        'can-ho': 'Căn hộ',
        'dat-nen': 'Đất nền',
        'mat-bang': 'Mặt bằng'
    };
    return labels[type] || 'BĐS';
}

function toggleSaveProperty(id) {
    const index = savedProperties.indexOf(id);
    if (index > -1) {
        savedProperties.splice(index, 1);
        showNotification('Đã bỏ lưu tin', 'info');
    } else {
        savedProperties.push(id);
        showNotification('Đã lưu tin vào danh sách yêu thích', 'success');
    }
    
    localStorage.setItem('savedProperties', JSON.stringify(savedProperties));
    updateSavedCount();
    
    // Update button state
    const btn = document.querySelector(`[data-id="${id}"] .save-btn`);
    if (btn) {
        btn.classList.toggle('saved');
        btn.title = savedProperties.includes(id) ? 'Bỏ lưu' : 'Lưu tin';
    }
}

function shareProperty(id) {
    const property = sampleProperties.find(p => p.id === id);
    if (property && navigator.share) {
        navigator.share({
            title: property.title,
            text: `${property.title} - ${property.price}`,
            url: `${window.location.origin}/property-detail.html?id=${id}`
        });
    } else {
        // Fallback: copy to clipboard
        const url = `${window.location.origin}/property-detail.html?id=${id}`;
        navigator.clipboard.writeText(url).then(() => {
            showNotification('Đã copy link tin đăng', 'success');
        });
    }
}

// Initialize tooltips
function initializeTooltips() {
    // Simple tooltip implementation
    document.querySelectorAll('[title]').forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = e.target.title;
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
    
    e.target.title = '';
    e.target._originalTitle = tooltip.textContent;
}

function hideTooltip(e) {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
    if (e.target._originalTitle) {
        e.target.title = e.target._originalTitle;
    }
}

// Add loading states
function addLoadingStates() {
    // Add loading class to buttons on click
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn') && !e.target.disabled) {
            e.target.classList.add('loading');
            setTimeout(() => {
                e.target.classList.remove('loading');
            }, 1000);
        }
    });
}

// Initialize animations
function initializeAnimations() {
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .property-card {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }
        
        .property-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .notification {
            animation: slideInRight 0.3s ease;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .recording {
            animation: pulse 1s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
    `;
    document.head.appendChild(style);
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('mobile-active');
}

// Calculator modal (placeholder)
function showCalculatorModal() {
    showNotification('Tính năng tính toán vay sẽ có trong phiên bản tiếp theo', 'info');
}

// Export functions for global access
window.toggleAdvancedSearch = toggleAdvancedSearch;
window.startVoiceSearch = startVoiceSearch;
window.quickSearch = quickSearch;
window.changeView = changeView;
window.sortProperties = sortProperties;
window.loadMoreProperties = loadMoreProperties;
window.showLoginModal = showLoginModal;
window.showPostPropertyModal = showPostPropertyModal;
window.closeModal = closeModal;
window.toggleFabMenu = toggleFabMenu;
window.scrollToTop = scrollToTop;
window.toggleSavedProperties = toggleSavedProperties;
window.toggleNotifications = toggleNotifications;
window.toggleMobileMenu = toggleMobileMenu;
window.showCalculatorModal = showCalculatorModal;