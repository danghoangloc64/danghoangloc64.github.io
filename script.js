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

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sampleProperties,
        createPropertyCard,
        filterProperties,
        checkPriceRange
    };
}