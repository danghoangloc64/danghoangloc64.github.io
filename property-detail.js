// Property detail functionality
let currentProperty = null;
let phoneRevealed = false;

// Sample images for gallery
const sampleImages = [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop"
];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadPropertyDetail();
});

// Load property detail from URL parameter or sample data
function loadPropertyDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('id');
    
    // In real app, this would be an API call
    if (propertyId && sampleProperties) {
        currentProperty = sampleProperties.find(p => p.id == propertyId);
    }
    
    // Fallback to first property if no ID or property not found
    if (!currentProperty && sampleProperties && sampleProperties.length > 0) {
        currentProperty = sampleProperties[0];
    }
    
    if (currentProperty) {
        displayPropertyDetail(currentProperty);
        loadSimilarProperties();
    } else {
        // Show error or redirect
        document.querySelector('.detail-title').textContent = 'Không tìm thấy bất động sản';
    }
}

// Display property details
function displayPropertyDetail(property) {
    // Update title and location
    document.getElementById('propertyTitle').textContent = property.title;
    document.getElementById('propertyLocation').innerHTML = `
        <i class="fas fa-map-marker-alt"></i>
        <span>${property.location}</span>
    `;
    
    // Update price
    document.getElementById('propertyPrice').textContent = property.price;
    
    // Calculate price per m2 (simplified)
    const area = parseFloat(property.area.replace(/[^\d]/g, ''));
    const price = parseFloat(property.price.replace(/[^\d.]/g, ''));
    if (area && price) {
        const pricePerM2 = ((price * 1000000000) / area).toLocaleString('vi-VN');
        document.getElementById('pricePerM2').textContent = `~${pricePerM2} VNĐ/m²`;
    }
    
    // Update main image
    document.getElementById('mainImage').src = property.image;
    
    // Load image gallery
    loadImageGallery();
    
    // Load property specs
    loadPropertySpecs(property);
    
    // Load description
    loadPropertyDescription(property);
    
    // Update page title
    document.title = `${property.title} - BĐS 3 Miền`;
}

// Load image gallery
function loadImageGallery() {
    const gallery = document.getElementById('imageGallery');
    const mainImage = document.getElementById('mainImage');
    
    gallery.innerHTML = sampleImages.map((img, index) => `
        <img src="${img}" alt="Hình ${index + 1}" class="thumb-image ${index === 0 ? 'active' : ''}" 
             onclick="changeMainImage('${img}', this)">
    `).join('');
}

// Change main image
function changeMainImage(src, thumbElement) {
    document.getElementById('mainImage').src = src;
    
    // Update active thumbnail
    document.querySelectorAll('.thumb-image').forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbElement.classList.add('active');
}

// Load property specifications
function loadPropertySpecs(property) {
    const specs = [];
    
    if (property.area) {
        specs.push({
            icon: 'fas fa-ruler-combined',
            value: property.area,
            label: 'Diện tích'
        });
    }
    
    if (property.bedrooms > 0) {
        specs.push({
            icon: 'fas fa-bed',
            value: property.bedrooms,
            label: 'Phòng ngủ'
        });
    }
    
    if (property.bathrooms > 0) {
        specs.push({
            icon: 'fas fa-bath',
            value: property.bathrooms,
            label: 'Phòng tắm'
        });
    }
    
    // Add more specs
    specs.push(
        {
            icon: 'fas fa-compass',
            value: 'Đông Nam',
            label: 'Hướng nhà'
        },
        {
            icon: 'fas fa-certificate',
            value: 'Sổ đỏ',
            label: 'Pháp lý'
        }
    );
    
    const specsContainer = document.getElementById('propertySpecs');
    specsContainer.innerHTML = specs.map(spec => `
        <div class="spec-item">
            <div class="spec-icon">
                <i class="${spec.icon}"></i>
            </div>
            <div class="spec-value">${spec.value}</div>
            <div class="spec-label">${spec.label}</div>
        </div>
    `).join('');
}

// Load property description
function loadPropertyDescription(property) {
    const descriptions = {
        'nha-o': `
            Nhà phố thiết kế hiện đại, không gian thoáng mát với đầy đủ tiện nghi. 
            Vị trí thuận lợi gần trường học, bệnh viện, chợ và các tiện ích công cộng.
            Giao thông thuận tiện, dễ dàng di chuyển đến trung tâm thành phố.
            Khu vực an ninh tốt, môi trường sống văn minh.
        `,
        'can-ho': `
            Căn hộ cao cấp với thiết kế sang trọng, view đẹp, đầy đủ nội thất.
            Tòa nhà có đầy đủ tiện ích: hồ bơi, gym, sân chơi trẻ em, siêu thị mini.
            An ninh 24/7, thang máy hiện đại, hầm để xe rộng rãi.
            Vị trí trung tâm, gần các trung tâm thương mại và văn phòng.
        `,
        'dat-nen': `
            Đất nền dự án quy hoạch đồng bộ, hạ tầng hoàn thiện.
            Vị trí đắc địa, tiềm năng phát triển cao trong tương lai.
            Pháp lý rõ ràng, sổ đỏ trao tay ngay khi ký hợp đồng.
            Khu vực có nhiều tiện ích xung quanh: trường học, bệnh viện, chợ.
        `,
        'mat-bang': `
            Mặt bằng kinh doanh vị trí đắc địa, mặt tiền rộng, thuận lợi kinh doanh.
            Giao thông thuận tiện, dễ dàng tiếp cận khách hàng.
            Khu vực đông dân cư, tiềm năng kinh doanh cao.
            Có thể kinh doanh đa ngành nghề, phù hợp mọi loại hình.
        `
    };
    
    const description = descriptions[property.type] || descriptions['nha-o'];
    document.getElementById('propertyDescription').textContent = description.trim();
}

// Load similar properties
function loadSimilarProperties() {
    if (!currentProperty || !sampleProperties) return;
    
    // Find similar properties (same type, different ID)
    const similar = sampleProperties
        .filter(p => p.id !== currentProperty.id && p.type === currentProperty.type)
        .slice(0, 3);
    
    const container = document.getElementById('similarProperties');
    
    if (similar.length === 0) {
        container.innerHTML = '<p>Không có tin đăng tương tự</p>';
        return;
    }
    
    container.innerHTML = similar.map(property => `
        <div class="similar-item" onclick="viewSimilarProperty(${property.id})">
            <img src="${property.image}" alt="${property.title}" class="similar-image">
            <div class="similar-info">
                <div class="similar-title">${property.title}</div>
                <div class="similar-price">${property.price}</div>
            </div>
        </div>
    `).join('');
}

// View similar property
function viewSimilarProperty(id) {
    window.location.href = `property-detail.html?id=${id}`;
}

// Show phone number
function showPhone() {
    if (!phoneRevealed) {
        document.getElementById('phoneNumber').textContent = '0901234678';
        phoneRevealed = true;
        
        // Track contact action (in real app, send to analytics)
        console.log('Phone number revealed for property:', currentProperty?.id);
    }
}

// Open chat
function openChat() {
    // In real app, this would open chat interface
    alert('Chức năng chat sẽ được phát triển trong phiên bản tiếp theo');
    
    // Track contact action
    console.log('Chat initiated for property:', currentProperty?.id);
}

// Save property
function saveProperty() {
    // In real app, this would save to user's favorites
    const saved = localStorage.getItem('savedProperties') || '[]';
    const savedList = JSON.parse(saved);
    
    if (!savedList.includes(currentProperty.id)) {
        savedList.push(currentProperty.id);
        localStorage.setItem('savedProperties', JSON.stringify(savedList));
        alert('Đã lưu tin vào danh sách yêu thích');
    } else {
        alert('Tin này đã có trong danh sách yêu thích');
    }
    
    console.log('Property saved:', currentProperty?.id);
}

// Utility function to format number
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Back to search results
function goBack() {
    if (document.referrer && document.referrer.includes(window.location.hostname)) {
        window.history.back();
    } else {
        window.location.href = 'index.html';
    }
}