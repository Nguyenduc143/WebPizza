// ========================================
// DATA - PRODUCTS DATABASE
// DỮ LIỆU - CƠ SỞ DỮ LIỆU SẢN PHẨM
// ========================================

/**
 * Mảng chứa dữ liệu mẫu của các sản phẩm Pizza
 * Mỗi sản phẩm bao gồm:
 * - id: Mã định danh duy nhất
 * - name: Tên pizza
 * - description: Mô tả ngắn
 * - fullDescription: Mô tả chi tiết
 * - price: Giá cơ bản (VND)
 * - image: Đường dẫn ảnh
 * - category: Danh mục (classic/vegetarian/special)
 * - featured: Đánh dấu sản phẩm nổi bật
 * - ingredients: Mảng các nguyên liệu
 * - sizes: Mảng các kích thước và giá tương ứng
 * - nutrition: Thông tin dinh dưỡng
 * - rating: Đánh giá trung bình
 * - reviews: Số lượt đánh giá
 */
const productsData = [
    {
        id: 1,
        name: "Margherita",
        description: "Cà chua, phô mai mozzarella tươi, húng quế",
        fullDescription: "Pizza Margherita là một trong những loại pizza cổ điển nhất của Ý, với sự kết hợp hoàn hảo giữa sốt cà chua tươi, phô mai mozzarella chất lượng cao và lá húng quế thơm ngát. Đế bánh mỏng giòn được nướng trong lò đá truyền thống, tạo nên hương vị đặc trưng khó quên.",
        price: 320000,
        image: "assets/images/pizza-1.jpg",
        category: "classic",
        featured: true,
        ingredients: ["Sốt cà chua", "Phô mai Mozzarella", "Húng quế tươi", "Dầu ô liu", "Muối biển"],
        sizes: [
            { name: "Nhỏ (20cm)", price: 320000 },
            { name: "Vừa (25cm)", price: 420000 },
            { name: "Lớn (30cm)", price: 520000 }
        ],
        nutrition: { calories: 250, protein: 12, carbs: 32, fat: 10 },
        rating: 4.8,
        reviews: 156
    },
    {
        id: 2,
        name: "Pepperoni",
        description: "Xúc xích pepperoni, phô mai, sốt cà chua",
        fullDescription: "Pizza Pepperoni với những lát xúc xích pepperoni cay nhẹ được xếp đều trên nền phô mai mozzarella béo ngậy và sốt cà chua đậm đà. Khi nướng, pepperoni tạo nên những chiếc chén nhỏ chứa đầy dầu thơm ngon, mang đến trải nghiệm ẩm thực tuyệt vời.",
        price: 390000,
        image: "assets/images/pizza-2.jpg",
        category: "classic",
        featured: true,
        ingredients: ["Xúc xích Pepperoni", "Phô mai Mozzarella", "Sốt cà chua", "Oregano", "Ớt đỏ"],
        sizes: [
            { name: "Nhỏ (20cm)", price: 390000 },
            { name: "Vừa (25cm)", price: 490000 },
            { name: "Lớn (30cm)", price: 590000 }
        ],
        nutrition: { calories: 320, protein: 15, carbs: 30, fat: 18 },
        rating: 4.9,
        reviews: 234
    },
    {
        id: 3,
        name: "Vegetarian",
        description: "Nấm, ớt chuông, hành tây, ô liu, cà chua",
        fullDescription: "Pizza Vegetarian là lựa chọn hoàn hảo cho những người yêu thích rau củ. Với sự kết hợp hài hòa của nấm tươi, ớt chuông đầy màu sắc, hành tây caramel hóa, ô liu đen và cà chua cherry, mỗi miếng pizza đều mang đến sự tươi mát và bổ dưỡng.",
        price: 340000,
        image: "assets/images/pizza-3.jpg",
        category: "vegetarian",
        featured: true,
        ingredients: ["Nấm tươi", "Ớt chuông", "Hành tây", "Ô liu đen", "Cà chua cherry", "Phô mai Mozzarella"],
        sizes: [
            { name: "Nhỏ (20cm)", price: 340000 },
            { name: "Vừa (25cm)", price: 440000 },
            { name: "Lớn (30cm)", price: 540000 }
        ],
        nutrition: { calories: 220, protein: 10, carbs: 35, fat: 8 },
        rating: 4.6,
        reviews: 98
    },
    {
        id: 4,
        name: "Hawaiian",
        description: "Giăm bông, dứa, phô mai",
        fullDescription: "Pizza Hawaiian là sự kết hợp độc đáo giữa giăm bông mặn và dứa ngọt, tạo nên một hương vị cân bằng đặc biệt. Lớp phô mai mozzarella tan chảy kết nối tất cả các nguyên liệu, mang đến một trải nghiệm vị giác thú vị và khác biệt.",
        price: 360000,
        image: "assets/images/pizza-4.jpg",
        category: "special",
        featured: true,
        ingredients: ["Giăm bông", "Dứa tươi", "Phô mai Mozzarella", "Sốt cà chua", "Oregano"],
        sizes: [
            { name: "Nhỏ (20cm)", price: 360000 },
            { name: "Vừa (25cm)", price: 460000 },
            { name: "Lớn (30cm)", price: 560000 }
        ],
        nutrition: { calories: 280, protein: 14, carbs: 38, fat: 12 },
        rating: 4.5,
        reviews: 187
    },
    {
        id: 5,
        name: "BBQ Chicken",
        description: "Gà nướng, sốt BBQ, hành tây, phô mai",
        fullDescription: "Pizza BBQ Chicken với thịt gà được ướp và nướng kỹ lưỡng, phủ lên trên là sốt BBQ ngọt ngào với hương khói đặc trưng. Hành tây tím thái lát mỏng và phô mai mozzarella béo ngậy hoàn thiện chiếc pizza với hương vị đậm đà khó cưỡng.",
        price: 410000,
        image: "assets/images/pizza-5.jpg",
        category: "special",
        featured: false,
        ingredients: ["Thịt gà nướng", "Sốt BBQ", "Hành tây tím", "Phô mai Mozzarella", "Ngò tây"],
        sizes: [
            { name: "Nhỏ (20cm)", price: 410000 },
            { name: "Vừa (25cm)", price: 510000 },
            { name: "Lớn (30cm)", price: 610000 }
        ],
        nutrition: { calories: 310, protein: 22, carbs: 32, fat: 14 },
        rating: 4.7,
        reviews: 145
    },
    {
        id: 6,
        name: "Four Cheese",
        description: "Mozzarella, parmesan, gorgonzola, phô mai dê",
        fullDescription: "Pizza Four Cheese là thiên đường cho những tín đồ phô mai. Bốn loại phô mai cao cấp - Mozzarella Ý, Parmesan lâu năm, Gorgonzola thơm nồng và phô mai dê thanh mát - hòa quyện tạo nên một bản giao hưởng hương vị phong phú và sang trọng.",
        price: 430000,
        image: "assets/images/pizza-6.jpg",
        category: "classic",
        featured: false,
        ingredients: ["Phô mai Mozzarella", "Phô mai Parmesan", "Phô mai Gorgonzola", "Phô mai dê", "Mật ong"],
        sizes: [
            { name: "Nhỏ (20cm)", price: 430000 },
            { name: "Vừa (25cm)", price: 530000 },
            { name: "Lớn (30cm)", price: 630000 }
        ],
        nutrition: { calories: 380, protein: 18, carbs: 28, fat: 24 },
        rating: 4.8,
        reviews: 112
    },
    {
        id: 7,
        name: "Veggie Supreme",
        description: "Rau cải, bông cải xanh, nấm, cà rốt",
        fullDescription: "Pizza Veggie Supreme là sự lựa chọn tuyệt vời cho những ai yêu thích ăn uống lành mạnh. Với nhiều loại rau củ tươi ngon như bông cải xanh, nấm, cà rốt và rau cải, pizza này mang đến nguồn vitamin phong phú cùng hương vị thơm ngon tự nhiên.",
        price: 360000,
        image: "assets/images/pizza-7.jpg",
        category: "vegetarian",
        featured: false,
        ingredients: ["Bông cải xanh", "Nấm đông cô", "Cà rốt", "Rau cải", "Phô mai Mozzarella", "Tỏi"],
        sizes: [
            { name: "Nhỏ (20cm)", price: 360000 },
            { name: "Vừa (25cm)", price: 460000 },
            { name: "Lớn (30cm)", price: 560000 }
        ],
        nutrition: { calories: 200, protein: 9, carbs: 30, fat: 7 },
        rating: 4.4,
        reviews: 76
    },
    {
        id: 8,
        name: "Meat Lovers",
        description: "Xúc xích, thịt bò, thịt xông khói, giăm bông",
        fullDescription: "Pizza Meat Lovers là sự lựa chọn hoàn hảo cho những người yêu thịt. Với bốn loại thịt chất lượng cao - xúc xích Ý, thịt bò xay, thịt xông khói giòn và giăm bông thơm - tất cả được xếp đều trên lớp phô mai mozzarella tan chảy, tạo nên một bữa tiệc thịt đích thực.",
        price: 450000,
        image: "assets/images/pizza-8.jpg",
        category: "special",
        featured: false,
        ingredients: ["Xúc xích Ý", "Thịt bò xay", "Thịt xông khói", "Giăm bông", "Phô mai Mozzarella"],
        sizes: [
            { name: "Nhỏ (20cm)", price: 450000 },
            { name: "Vừa (25cm)", price: 550000 },
            { name: "Lớn (30cm)", price: 650000 }
        ],
        nutrition: { calories: 420, protein: 28, carbs: 30, fat: 26 },
        rating: 4.9,
        reviews: 203
    },
    {
        id: 9,
        name: "Seafood Deluxe",
        description: "Tôm, mực, cua, sốt trắng, hành tây",
        fullDescription: "Pizza Seafood Deluxe mang đến hương vị biển cả với sự kết hợp tuyệt vời của tôm tươi, mực giòn và thịt cua ngọt. Sốt trắng kem béo ngậy cùng hành tây caramel tạo nên một chiếc pizza hải sản cao cấp, đáp ứng mọi khẩu vị sành điệu.",
        price: 480000,
        image: "assets/images/pizza-5.jpg",
        category: "special",
        featured: true,
        ingredients: ["Tôm sú", "Mực ống", "Thịt cua", "Sốt kem trắng", "Hành tây", "Tỏi", "Ngò tây"],
        sizes: [
            { name: "Nhỏ (20cm)", price: 480000 },
            { name: "Vừa (25cm)", price: 580000 },
            { name: "Lớn (30cm)", price: 680000 }
        ],
        nutrition: { calories: 290, protein: 24, carbs: 28, fat: 12 },
        rating: 4.7,
        reviews: 89
    },
    {
        id: 10,
        name: "Buffalo Chicken",
        description: "Gà buffalo cay, xà lách, sốt ranch, phô mai",
        fullDescription: "Pizza Buffalo Chicken với thịt gà được tẩm sốt buffalo cay nồng đặc trưng kiểu Mỹ. Kết hợp cùng xà lách tươi giòn, sốt ranch mát lạnh và phô mai mozzarella béo ngậy, tạo nên sự cân bằng hoàn hảo giữa cay - mát - béo.",
        price: 400000,
        image: "assets/images/pizza-6.jpg",
        category: "special",
        featured: true,
        ingredients: ["Thịt gà", "Sốt Buffalo", "Xà lách", "Sốt Ranch", "Phô mai Mozzarella", "Hành lá"],
        sizes: [
            { name: "Nhỏ (20cm)", price: 400000 },
            { name: "Vừa (25cm)", price: 500000 },
            { name: "Lớn (30cm)", price: 600000 }
        ],
        nutrition: { calories: 340, protein: 20, carbs: 30, fat: 16 },
        rating: 4.6,
        reviews: 134
    }
];

// Initialize products in localStorage only if no products exist
// Products will be managed entirely from admin panel
if (!localStorage.getItem('products')) {
    // First time: initialize with demo data (can be removed in production)
    localStorage.setItem('products', JSON.stringify(productsData));
    console.log('Products initialized with demo data');
}

// ========================================
// UTILITY FUNCTIONS
// CÁC HÀM TIỆN ÍCH
// ========================================

/**
 * Tạo skeleton loading cho product card
 * @param {number} count - Số lượng skeleton cards cần tạo
 * @returns {string} HTML skeleton cards
 */
function createSkeletonCards(count = 6) {
    let html = '';
    for (let i = 0; i < count; i++) {
        html += `
            <div class="skeleton-card">
                <div class="skeleton-image skeleton"></div>
                <div class="skeleton-content">
                    <div class="skeleton-title skeleton"></div>
                    <div class="skeleton-text skeleton"></div>
                    <div class="skeleton-text short skeleton"></div>
                    <div class="skeleton-price skeleton"></div>
                    <div class="skeleton-button skeleton"></div>
                </div>
            </div>
        `;
    }
    return html;
}

/**
 * Hiển thị spinner loading toàn trang
 * @param {string} message - Thông báo hiển thị (mặc định: 'Đang tải...')
 */
function showSpinner(message = 'Đang tải...') {
    // Xóa spinner cũ nếu có
    hideSpinner();
    
    const spinner = document.createElement('div');
    spinner.id = 'globalSpinner';
    spinner.className = 'spinner-overlay';
    spinner.innerHTML = `
        <div class="spinner"></div>
        <div class="spinner-text">${message}</div>
    `;
    document.body.appendChild(spinner);
}

/**
 * Ẩn spinner loading
 */
function hideSpinner() {
    const spinner = document.getElementById('globalSpinner');
    if (spinner) {
        spinner.remove();
    }
}

/**
 * Thêm loading state vào button
 * @param {HTMLElement} button - Element button
 * @param {string} loadingText - Text hiển thị khi loading
 */
function setButtonLoading(button, loadingText = '') {
    button.classList.add('btn-loading');
    button.dataset.originalText = button.innerHTML;
    if (loadingText) {
        button.innerHTML = loadingText;
    }
}

/**
 * Xóa loading state khỏi button
 * @param {HTMLElement} button - Element button
 */
function removeButtonLoading(button) {
    button.classList.remove('btn-loading');
    if (button.dataset.originalText) {
        button.innerHTML = button.dataset.originalText;
    }
}

/**
 * Định dạng giá tiền sang đơn vị VND
 * @param {number} price - Giá tiền cần định dạng
 * @returns {string} Chuỗi giá tiền đã được định dạng (vd: 320.000 ₫)
 */
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { 
        style: 'currency', 
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

/**
 * Lấy danh sách sản phẩm từ localStorage
 * Tự động chuyển đổi giá từ USD sang VND nếu phát hiện dữ liệu cũ
 * @returns {Array} Mảng các sản phẩm
 */
function getProducts() {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    
    // Tự động chuyển đổi giá USD sang VND nếu cần
    // Giá USD thường < 100, giá VND thường > 10000
    if (products.length > 0 && products[0].price < 1000) {
        // Phát hiện dữ liệu USD cũ, reset về dữ liệu VND
        localStorage.setItem('products', JSON.stringify(productsData));
        products = productsData;
        console.log('Products migrated from USD to VND');
    }
    
    return products;
}

/**
 * Lưu danh sách sản phẩm vào localStorage
 * @param {Array} products - Mảng các sản phẩm cần lưu
 */
function saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
}

/**
 * Lấy giỏ hàng của người dùng hiện tại từ localStorage
 * Mỗi người dùng có giỏ hàng riêng (theo số điện thoại)
 * @returns {Array} Mảng các sản phẩm trong giỏ hàng
 */
function getCart() {
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));
    if (!currentUser) {
        return [];
    }
    // Key giỏ hàng: cart_{số điện thoại}
    const cartKey = `cart_${currentUser.phone}`;
    return JSON.parse(localStorage.getItem(cartKey)) || [];
}

/**
 * Lưu giỏ hàng của người dùng hiện tại vào localStorage
 * @param {Array} cart - Mảng các sản phẩm trong giỏ hàng
 */
function saveCart(cart) {
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));
    if (!currentUser) {
        console.warn('No user logged in, cannot save cart');
        return;
    }
    const cartKey = `cart_${currentUser.phone}`;
    localStorage.setItem(cartKey, JSON.stringify(cart));
    updateCartCount(); // Cập nhật số lượng hiển thị trên header
}

/**
 * Xóa toàn bộ giỏ hàng của người dùng hiện tại
 * Thường được gọi sau khi đặt hàng thành công
 */
function clearCartForCurrentUser() {
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));
    if (!currentUser) {
        return;
    }
    const cartKey = `cart_${currentUser.phone}`;
    localStorage.removeItem(cartKey);
    updateCartCount();
}

/**
 * Cập nhật số lượng sản phẩm trong giỏ hàng hiển thị trên header
 * Tính tổng số lượng của tất cả sản phẩm trong giỏ
 */
function updateCartCount() {
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));
    let totalItems = 0;
    
    if (currentUser) {
        const cart = getCart();
        // Tính tổng số lượng (không phải số loại sản phẩm)
        totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
    
    // Cập nhật tất cả các element hiển thị số lượng giỏ hàng
    const cartCountElements = document.querySelectorAll('#cartCount');
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

/**
 * Thêm sản phẩm vào giỏ hàng
 * Yêu cầu đăng nhập trước khi thêm
 * Nếu sản phẩm đã có trong giỏ thì tăng số lượng lên 1
 * @param {number} productId - ID của sản phẩm cần thêm
 */
function addToCart(productId) {
    // Kiểm tra người dùng đã đăng nhập chưa
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));
    if (!currentUser) {
        if (confirm('⚠️ Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng!\n\nBạn có muốn đăng nhập ngay?')) {
            openAuthModal();
        }
        return;
    }

    // Tìm sản phẩm trong danh sách
    const products = getProducts();
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        alert('Sản phẩm không tồn tại!');
        return;
    }

    const cart = getCart();
    // Kiểm tra sản phẩm đã có trong giỏ chưa
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        // Đã có: tăng số lượng
        existingItem.quantity += 1;
    } else {
        // Chưa có: thêm mới
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart(cart);
    alert(`✅ ${product.name} đã được thêm vào giỏ hàng!`);
}

// ========================================
// HEADER FUNCTIONS
// CÁC HÀM XỬ LÝ HEADER
// ========================================

/**
 * Bật/tắt thanh tìm kiếm trên header
 * Khi mở sẽ tự động focus vào ô input
 */
function toggleSearch() {
    const searchBox = document.getElementById('searchBox');
    searchBox.classList.toggle('active');
    
    // Focus vào input khi mở thanh tìm kiếm
    if (searchBox.classList.contains('active')) {
        setTimeout(() => {
            const input = searchBox.querySelector('input');
            if (input) input.focus();
        }, 300);
    }
}

/**
 * Xử lý sự kiện khi nhấn phím trong ô tìm kiếm
 * Nếu nhấn Enter thì thực hiện tìm kiếm
 * @param {KeyboardEvent} event - Sự kiện bàn phím
 */
function handleSearch(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}

/**
 * Thực hiện tìm kiếm sản phẩm
 * Chuyển hướng đến trang menu với tham số search
 */
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (!searchTerm) {
        alert('⚠️ Vui lòng nhập từ khóa tìm kiếm!');
        return;
    }
    
    // Chuyển hướng đến trang menu với tham số tìm kiếm
    window.location.href = `menu.html?search=${encodeURIComponent(searchTerm)}`;
}

/**
 * Bật/tắt menu điều hướng trên thiết bị di động
 * Với animation mượt mà cho hamburger icon và menu
 */
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    navMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    
    // Đóng menu khi click bên ngoài
    if (navMenu.classList.contains('active')) {
        document.addEventListener('click', closeMobileMenuOnClickOutside);
    } else {
        document.removeEventListener('click', closeMobileMenuOnClickOutside);
    }
}

/**
 * Đóng mobile menu khi click bên ngoài
 * @param {Event} event - Sự kiện click
 */
function closeMobileMenuOnClickOutside(event) {
    const navMenu = document.querySelector('.nav-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (!navMenu.contains(event.target) && !menuBtn.contains(event.target)) {
        navMenu.classList.remove('active');
        menuBtn.classList.remove('active');
        document.removeEventListener('click', closeMobileMenuOnClickOutside);
    }
}

// ========================================
// HOME PAGE FUNCTIONS
// CÁC HÀM XỬ LÝ TRANG CHỦ
// ========================================

/**
 * Tải và hiển thị các sản phẩm nổi bật trên trang chủ
 * Chỉ hiển thị các sản phẩm có thuộc tính featured = true
 */
function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) {
        console.log('Featured products container not found');
        return;
    }

    // Hiển thị skeleton loading trước
    container.innerHTML = createSkeletonCards(4);

    // Giả lập delay để thấy hiệu ứng loading (300ms)
    setTimeout(() => {
        const products = getProducts();
        // Lọc ra các sản phẩm nổi bật
        const featuredProducts = products.filter(p => p.featured);
        
        console.log('All products:', products);
        console.log('Featured products:', featuredProducts);

        if (featuredProducts.length === 0) {
            container.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">Đang tải sản phẩm nổi bật...</p>';
            return;
        }

        // Render HTML cho từng sản phẩm nổi bật
        container.innerHTML = featuredProducts.map(product => `
            <div class="product-card">
                <a href="product-detail.html?id=${product.id}" class="product-image-link">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </a>
                <div class="product-info">
                    <h3 class="product-name"><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <div class="product-actions">
                        <a href="product-detail.html?id=${product.id}" class="btn btn-outline btn-detail">Chi tiết</a>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        `).join('');
        
        console.log('Featured products loaded successfully');
    }, 300);
}

// ========================================
// MENU PAGE FUNCTIONS
// CÁC HÀM XỬ LÝ TRANG MENU
// ========================================

/**
 * Tải và hiển thị danh sách sản phẩm trên trang menu
 * @param {string} filter - Danh mục lọc: 'all', 'classic', 'vegetarian', 'special'
 * @param {string} searchTerm - Từ khóa tìm kiếm (tùy chọn)
 */
function loadMenuProducts(filter = 'all', searchTerm = '') {
    const container = document.getElementById('menuProducts');
    if (!container) return;

    // Hiển thị skeleton loading trước
    container.innerHTML = createSkeletonCards(6);

    // Giả lập delay để thấy hiệu ứng loading (300ms)
    setTimeout(() => {
        const products = getProducts();
        
        // Áp dụng bộ lọc danh mục
        let filteredProducts = filter === 'all' 
            ? products 
            : products.filter(p => p.category === filter);
        
        // Áp dụng bộ lọc tìm kiếm nếu có từ khóa
        if (searchTerm) {
            filteredProducts = filteredProducts.filter(p => 
                // Tìm trong tên, mô tả và nguyên liệu
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (p.ingredients && p.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase())))
            );
            
            // Hiển thị thông báo kết quả tìm kiếm
            const searchMessage = document.getElementById('searchResultMessage');
            if (searchMessage) {
                searchMessage.textContent = `Tìm thấy ${filteredProducts.length} kết quả cho "${searchTerm}"`;
                searchMessage.style.display = 'block';
            }
        }

        // Hiển thị thông báo nếu không có sản phẩm
        if (filteredProducts.length === 0) {
            container.innerHTML = `<p style="text-align: center; grid-column: 1/-1;">
                ${searchTerm ? `Không tìm thấy sản phẩm nào cho "${searchTerm}"` : 'Không có sản phẩm nào.'}
            </p>`;
            return;
        }

        // Render HTML cho danh sách sản phẩm
        container.innerHTML = filteredProducts.map(product => `
            <div class="product-card" data-category="${product.category}">
                <a href="product-detail.html?id=${product.id}" class="product-image-link">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </a>
                <div class="product-info">
                    <span class="product-category">${getCategoryName(product.category)}</span>
                    <h3 class="product-name"><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <div class="product-actions">
                        <a href="product-detail.html?id=${product.id}" class="btn btn-outline btn-detail">Chi tiết</a>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        `).join('');
    }, 300);
}

/**
 * Chuyển đổi mã danh mục thành tên hiển thị tiếng Việt
 * @param {string} category - Mã danh mục: 'classic', 'vegetarian', 'special'
 * @returns {string} Tên danh mục tiếng Việt
 */
function getCategoryName(category) {
    const categories = {
        'classic': 'Pizza Cổ Điển',
        'vegetarian': 'Pizza Chay',
        'special': 'Topping Đặc Biệt'
    };
    return categories[category] || category;
}

/**
 * Lọc sản phẩm theo danh mục
 * Cập nhật trạng thái active của nút lọc
 * @param {string} category - Danh mục cần lọc
 */
function filterProducts(category) {
    // Cập nhật nút lọc đang active
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Tải lại sản phẩm với bộ lọc mới
    loadMenuProducts(category);
}

// ========================================
// CART PAGE FUNCTIONS
// CÁC HÀM XỬ LÝ TRANG GIỎ HÀNG
// ========================================

/**
 * Danh sách mã giảm giá hợp lệ
 * Mỗi mã có: code (mã), discount (% hoặc số tiền), type ('percent' hoặc 'fixed'), minOrder (đơn tối thiểu)
 */
const discountCodes = [
    { code: 'PIZZA10', discount: 10, type: 'percent', minOrder: 100000, description: 'Giảm 10% cho đơn từ 100K' },
    { code: 'PIZZA20', discount: 20, type: 'percent', minOrder: 300000, description: 'Giảm 20% cho đơn từ 300K' },
    { code: 'FREESHIP', discount: 30000, type: 'fixed', minOrder: 200000, description: 'Miễn phí ship cho đơn từ 200K' },
    { code: 'WELCOME50', discount: 50000, type: 'fixed', minOrder: 150000, description: 'Giảm 50K cho đơn từ 150K' },
    { code: 'NEWYEAR2025', discount: 25, type: 'percent', minOrder: 200000, description: 'Giảm 25% mừng năm mới' }
];

// Biến lưu mã giảm giá đang áp dụng
let appliedDiscount = null;

/**
 * Áp dụng mã giảm giá
 */
function applyDiscountCode() {
    const codeInput = document.getElementById('discountCode');
    const messageEl = document.getElementById('discountMessage');
    const code = codeInput.value.trim().toUpperCase();
    
    if (!code) {
        showDiscountMessage('⚠️ Vui lòng nhập mã giảm giá!', 'error');
        return;
    }
    
    // Tìm mã giảm giá
    const discount = discountCodes.find(d => d.code === code);
    
    if (!discount) {
        showDiscountMessage('❌ Mã giảm giá không hợp lệ!', 'error');
        appliedDiscount = null;
        loadCart();
        return;
    }
    
    // Kiểm tra đơn hàng tối thiểu
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (subtotal < discount.minOrder) {
        showDiscountMessage(`❌ Đơn hàng tối thiểu ${formatPrice(discount.minOrder)} để sử dụng mã này!`, 'error');
        appliedDiscount = null;
        loadCart();
        return;
    }
    
    // Áp dụng mã thành công
    appliedDiscount = discount;
    showDiscountMessage(`✅ Áp dụng thành công: ${discount.description}`, 'success');
    loadCart();
}

/**
 * Xóa mã giảm giá đã áp dụng
 */
function removeDiscountCode() {
    appliedDiscount = null;
    const codeInput = document.getElementById('discountCode');
    if (codeInput) codeInput.value = '';
    showDiscountMessage('', '');
    loadCart();
}

/**
 * Hiển thị thông báo mã giảm giá
 */
function showDiscountMessage(message, type) {
    const messageEl = document.getElementById('discountMessage');
    if (messageEl) {
        messageEl.textContent = message;
        messageEl.className = 'discount-message ' + type;
    }
}

/**
 * Tính số tiền giảm giá
 */
function calculateDiscount(subtotal) {
    if (!appliedDiscount) return 0;
    
    if (appliedDiscount.type === 'percent') {
        return Math.round(subtotal * appliedDiscount.discount / 100);
    } else {
        return appliedDiscount.discount;
    }
}

/**
 * Tải và hiển thị giỏ hàng
 * Tính toán tổng tiền bao gồm: tạm tính - giảm giá + thuế 10% + phí ship
 */
function loadCart() {
    const cartContent = document.getElementById('cartContent');
    const emptyCart = document.getElementById('emptyCart');
    
    if (!cartContent) return;

    const cart = getCart();

    // Kiểm tra giỏ hàng trống
    if (cart.length === 0) {
        cartContent.style.display = 'none';
        emptyCart.style.display = 'block';
        appliedDiscount = null; // Reset mã giảm giá khi giỏ hàng trống
        return;
    }

    cartContent.style.display = 'grid';
    emptyCart.style.display = 'none';

    // Tính toán tổng tiền
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0); // Tạm tính
    const discountAmount = calculateDiscount(subtotal); // Số tiền giảm
    const afterDiscount = subtotal - discountAmount; // Sau giảm giá
    const tax = afterDiscount * 0.1; // Thuế VAT 10%
    const shipping = 30000; // Phí vận chuyển: 30.000 VND
    const total = afterDiscount + tax + shipping; // Tổng cộng

    // Render HTML giỏ hàng và tóm tắt đơn hàng
    cartContent.innerHTML = `
        <div class="cart-items">
            <h2>Sản Phẩm</h2>
            ${cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <div class="cart-item-price">${formatPrice(item.price)}</div>
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Xóa</button>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="cart-summary">
            <h2>Tóm Tắt Đơn Hàng</h2>
            
            <!-- Mã giảm giá -->
            <div class="discount-section">
                <label for="discountCode">🎟️ Mã giảm giá:</label>
                <div class="discount-input-group">
                    <input type="text" id="discountCode" placeholder="Nhập mã giảm giá" value="${appliedDiscount ? appliedDiscount.code : ''}">
                    ${appliedDiscount 
                        ? `<button class="btn-remove-discount" onclick="removeDiscountCode()">✖</button>`
                        : `<button class="btn-apply-discount" onclick="applyDiscountCode()">Áp dụng</button>`
                    }
                </div>
                <div id="discountMessage" class="discount-message ${appliedDiscount ? 'success' : ''}">${appliedDiscount ? '✅ ' + appliedDiscount.description : ''}</div>
            </div>
            
            <div class="summary-row">
                <span>Tạm tính:</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            ${discountAmount > 0 ? `
            <div class="summary-row discount">
                <span>🎉 Giảm giá (${appliedDiscount.type === 'percent' ? appliedDiscount.discount + '%' : ''}):</span>
                <span style="color: #27ae60;">-${formatPrice(discountAmount)}</span>
            </div>
            ` : ''}
            <div class="summary-row">
                <span>Thuế (10%):</span>
                <span>${formatPrice(tax)}</span>
            </div>
            <div class="summary-row">
                <span>Phí ship:</span>
                <span>${formatPrice(shipping)}</span>
            </div>
            <div class="summary-row total">
                <span>Tổng cộng:</span>
                <span>${formatPrice(total)}</span>
            </div>
            <button class="btn btn-primary checkout-btn" onclick="checkout()">Thanh Toán</button>
            
            <!-- Danh sách mã giảm giá -->
            <div class="available-codes">
                <h4>📋 Mã giảm giá khả dụng:</h4>
                <ul>
                    ${discountCodes.map(d => `
                        <li class="${appliedDiscount && appliedDiscount.code === d.code ? 'active' : ''}">
                            <strong>${d.code}</strong> - ${d.description}
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

/**
 * Cập nhật số lượng sản phẩm trong giỏ hàng
 * @param {number} productId - ID sản phẩm cần cập nhật
 * @param {number} change - Số lượng thay đổi (+1 hoặc -1)
 */
function updateQuantity(productId, change) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);

    if (!item) return;

    item.quantity += change;

    // Nếu số lượng <= 0 thì xóa sản phẩm khỏi giỏ
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCart(cart);
    loadCart(); // Tải lại giỏ hàng để cập nhật hiển thị
}

/**
 * Xóa sản phẩm khỏi giỏ hàng
 * @param {number} productId - ID sản phẩm cần xóa
 */
function removeFromCart(productId) {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    saveCart(updatedCart);
    loadCart();
}

/**
 * Xử lý thanh toán đơn hàng
 * Kiểm tra đăng nhập và địa chỉ giao hàng trước khi tạo đơn
 */
function checkout() {
    const cart = getCart();
    if (cart.length === 0) {
        alert('Giỏ hàng trống!');
        return;
    }

    // Kiểm tra người dùng đã đăng nhập chưa
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));
    if (!currentUser) {
        alert('Vui lòng đăng nhập để thanh toán!');
        // Hiển thị modal đăng nhập
        showAuthModal();
        return;
    }

    // Kiểm tra người dùng đã cập nhật địa chỉ giao hàng chưa
    if (!currentUser.address || currentUser.address === 'Chưa cập nhật' || currentUser.address.trim() === '') {
        if (confirm('⚠️ Bạn chưa cập nhật địa chỉ giao hàng!\n\nVui lòng cập nhật địa chỉ để tiếp tục đặt hàng.\n\nBạn có muốn chuyển đến trang cập nhật thông tin không?')) {
            window.location.href = 'customer.html';
        }
        return;
    }

    // Tính toán tổng tiền đơn hàng
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = calculateDiscount(subtotal); // Số tiền giảm
    const afterDiscount = subtotal - discountAmount; // Sau giảm giá
    const tax = afterDiscount * 0.1; // Thuế VAT 10%
    const shippingFee = 30000; // Phí ship: 30.000 VND
    const total = afterDiscount + tax + shippingFee;

    // Tạo đơn hàng mới
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
        id: orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1, // Tạo ID tự động tăng
        customerName: currentUser.fullname || currentUser.name || 'Khách hàng',
        customerPhone: currentUser.phone,
        phone: currentUser.phone,
        email: currentUser.email || '',
        address: currentUser.address,
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            size: item.size || 'Vừa'
        })),
        subtotal: subtotal,
        discountCode: appliedDiscount ? appliedDiscount.code : null,
        discountAmount: discountAmount,
        tax: tax,
        shippingFee: shippingFee,
        total: total,
        status: 'pending', // Trạng thái ban đầu: chờ xử lý
        date: new Date().toISOString(),
        note: ''
    };

    // Lưu đơn hàng vào localStorage
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Tạo thông báo chi tiết
    let successMessage = `🎉 Đặt hàng thành công!\n\n📦 Mã đơn hàng: #${newOrder.id}`;
    if (discountAmount > 0) {
        successMessage += `\n🎟️ Mã giảm giá: ${appliedDiscount.code} (-${new Intl.NumberFormat('vi-VN').format(discountAmount)}đ)`;
    }
    successMessage += `\n💰 Tổng tiền: ${new Intl.NumberFormat('vi-VN').format(total)}đ`;
    successMessage += `\n📍 Giao đến: ${currentUser.address}`;
    successMessage += `\n\nCảm ơn bạn đã mua hàng tại Pizza Shop!`;
    
    alert(successMessage);
    
    // Reset mã giảm giá sau khi đặt hàng
    appliedDiscount = null;
    
    // Xóa giỏ hàng sau khi đặt hàng thành công
    clearCartForCurrentUser();
    updateCartCount();
    loadCart();
}

/**
 * Hiển thị modal xác thực (đăng nhập/đăng ký) cho trang thanh toán
 */
function showAuthModal() {
    const authModal = document.querySelector('.auth-modal');
    if (authModal) {
        authModal.classList.add('active');
    }
}

// ========================================
// CONTACT PAGE FUNCTIONS
// CÁC HÀM XỬ LÝ TRANG LIÊN HỆ
// ========================================

/**
 * Xử lý gửi form liên hệ
 * Validate thông tin và hiển thị thông báo thành công
 * Lưu liên hệ vào localStorage để admin xem
 * @param {Event} event - Sự kiện submit form
 */
function handleContactForm(event) {
    event.preventDefault();

    // Lấy dữ liệu từ form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Kiểm tra các trường bắt buộc
    if (!name || !email || !message) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }

    // Validate định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Email không hợp lệ!');
        return;
    }

    // Lưu liên hệ vào localStorage để admin xem
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const newContact = {
        id: contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1,
        name: name,
        email: email,
        phone: phone,
        message: message,
        date: new Date().toISOString(),
        read: false // Chưa đọc
    };
    contacts.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(contacts));

    // Thông báo gửi thành công
    alert(`Cảm ơn ${name}!\n\nTin nhắn của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ với bạn sớm nhất.`);
    
    // Reset form sau khi gửi
    event.target.reset();
}

/**
 * Bật/tắt câu hỏi thường gặp (FAQ)
 * @param {HTMLElement} element - Element tiêu đề FAQ được click
 */
function toggleFaq(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

// ========================================
// LOGIN & AUTHENTICATION FUNCTIONS
// CÁC HÀM XỬ LÝ ĐĂNG NHẬP & XÁC THỰC
// ========================================

/**
 * Xử lý đăng nhập người dùng (cả admin và customer)
 * Phân biệt admin và customer dựa trên username/password
 * @param {Event} event - Sự kiện submit form
 * @returns {boolean} false để ngăn form submit mặc định
 */
function handleUserLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe')?.checked || false;

    // Kiểm tra tài khoản admin
    if (username === 'admin' && password === '1') {
        // Đăng nhập admin
        localStorage.setItem('userType', 'admin');
        localStorage.setItem('username', username);
        localStorage.setItem('isLoggedIn', 'true');
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
        }
        alert('Đăng nhập thành công với quyền Admin!');
        window.location.href = 'admin.html';
    } else if (username && password) {
        // Đăng nhập khách hàng (bất kỳ thông tin hợp lệ nào)
        localStorage.setItem('userType', 'customer');
        localStorage.setItem('username', username);
        localStorage.setItem('isLoggedIn', 'true');
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
        }
        alert(`Chào mừng ${username}! Đăng nhập thành công.`);
        window.location.href = 'customer.html';
    } else {
        alert('Vui lòng nhập tên đăng nhập và mật khẩu!');
    }

    return false;
}

/**
 * Xử lý đăng xuất khách hàng
 * Xóa thông tin phiên đăng nhập (trừ khi đã chọn "Ghi nhớ đăng nhập")
 */
function handleCustomerLogout() {
    if (confirm('Bạn có chắc muốn đăng xuất?')) {
        const rememberMe = localStorage.getItem('rememberMe');
        if (!rememberMe) {
            localStorage.removeItem('userType');
            localStorage.removeItem('username');
            localStorage.removeItem('isLoggedIn');
        }
        window.location.href = 'index.html';
    }
}

/**
 * Kiểm tra xác thực khách hàng
 * Chuyển hướng về trang chủ nếu chưa đăng nhập hoặc là admin
 * @returns {boolean} true nếu xác thực thành công
 */
function checkCustomerAuth() {
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));

    // Kiểm tra người dùng đã đăng nhập (loại trừ admin)
    if (!currentUser || (currentUser.phone === 'admin' && currentUser.password === '1')) {
        alert('Vui lòng đăng nhập để truy cập trang này!');
        window.location.href = 'index.html';
        return false;
    }

    // Hiển thị tên người dùng trên trang
    const customerNameElement = document.getElementById('customerName');
    const displayUsernameElement = document.getElementById('displayUsername');
    
    if (customerNameElement) {
        customerNameElement.textContent = currentUser.fullname || currentUser.phone;
    }
    if (displayUsernameElement) {
        displayUsernameElement.textContent = currentUser.fullname || currentUser.phone;
    }

    // Tải và hiển thị thông tin khách hàng
    loadCustomerInfo(currentUser);

    // Tải lịch sử đơn hàng
    loadCustomerOrders();
    
    // Tải sản phẩm yêu thích/gợi ý
    loadFavoriteProducts();

    return true;
}

/**
 * Tải và hiển thị thông tin khách hàng vào các trường hiển thị
 * @param {Object} currentUser - Đối tượng người dùng hiện tại
 */
function loadCustomerInfo(currentUser) {
    const displayFullname = document.getElementById('displayFullname');
    const displayEmail = document.getElementById('displayEmail');
    const displayPhone = document.getElementById('displayPhone');
    const displayAddress = document.getElementById('displayAddress');
    
    if (displayFullname) {
        displayFullname.textContent = currentUser.fullname || currentUser.phone;
    }
    if (displayEmail) {
        displayEmail.textContent = currentUser.email || 'Chưa cập nhật';
    }
    if (displayPhone) {
        displayPhone.textContent = currentUser.phone;
    }
    if (displayAddress) {
        displayAddress.textContent = currentUser.address || 'Chưa cập nhật';
    }
}

/**
 * Mở modal cập nhật thông tin cá nhân
 * Điền sẵn dữ liệu hiện tại vào form
 */
function openUpdateInfoModal() {
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));
    if (!currentUser) return;
    
    // Điền sẵn form với dữ liệu hiện tại
    document.getElementById('update-fullname').value = currentUser.fullname || '';
    document.getElementById('update-email').value = currentUser.email || '';
    document.getElementById('update-address').value = currentUser.address || '';
    
    document.getElementById('updateInfoModal').style.display = 'flex';
}

/**
 * Đóng modal cập nhật thông tin
 */
function closeUpdateInfoModal() {
    document.getElementById('updateInfoModal').style.display = 'none';
}

/**
 * Xử lý cập nhật thông tin cá nhân
 * Lưu thay đổi vào localStorage
 * @param {Event} event - Sự kiện submit form
 * @returns {boolean} false để ngăn form submit mặc định
 */
function handleUpdateInfo(event) {
    event.preventDefault();
    
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));
    if (!currentUser) {
        alert('⚠️ Phiên đăng nhập đã hết hạn!');
        return false;
    }
    
    // Lấy giá trị từ form
    const fullname = document.getElementById('update-fullname').value.trim();
    const email = document.getElementById('update-email').value.trim();
    const address = document.getElementById('update-address').value.trim();
    
    // Cập nhật thông tin người dùng
    currentUser.fullname = fullname;
    currentUser.email = email;
    currentUser.address = address;
    
    // Lưu vào localStorage
    localStorage.setItem('currentuser', JSON.stringify(currentUser));
    
    // Cập nhật mảng users nếu tồn tại
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.phone === currentUser.phone);
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    // Tải lại hiển thị thông tin khách hàng
    loadCustomerInfo(currentUser);
    
    // Cập nhật tên khách hàng trên header
    const customerNameElement = document.getElementById('customerName');
    if (customerNameElement) {
        customerNameElement.textContent = fullname;
    }
    
    // Đóng modal và thông báo thành công
    closeUpdateInfoModal();
    alert('✅ Cập nhật thông tin thành công!');
    
    return false;
}

// ========================================
// CUSTOMER ORDERS FUNCTIONS
// CÁC HÀM XỬ LÝ ĐƠN HÀNG KHÁCH HÀNG
// ========================================

/**
 * Tải và hiển thị lịch sử đơn hàng của khách hàng
 * Tính toán thống kê: số đơn hàng, tổng chi tiêu, điểm tích lũy
 */
function loadCustomerOrders() {
    const ordersBody = document.getElementById('customerOrdersBody');
    const noOrdersMessage = document.getElementById('noOrdersMessage');
    if (!ordersBody) return;

    const currentUser = JSON.parse(localStorage.getItem('currentuser') || '{}');
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    // Lọc đơn hàng theo số điện thoại khách hàng hiện tại
    const customerOrders = orders.filter(order => order.customerPhone === currentUser.phone);
    
    // Cập nhật thống kê
    const statOrderCount = document.getElementById('statOrderCount');
    const statTotalSpent = document.getElementById('statTotalSpent');
    const statPoints = document.getElementById('statPoints');
    
    // Số đơn hàng
    if (statOrderCount) {
        statOrderCount.textContent = customerOrders.length;
    }
    
    // Tổng chi tiêu
    const totalSpent = customerOrders.reduce((sum, order) => sum + (order.total || 0), 0);
    if (statTotalSpent) {
        statTotalSpent.textContent = new Intl.NumberFormat('vi-VN').format(totalSpent) + 'đ';
    }
    
    // Điểm tích lũy: 1 điểm / 10.000 VND chi tiêu
    const points = Math.floor(totalSpent / 10000);
    if (statPoints) {
        statPoints.textContent = points;
    }
    
    // Hiển thị thông báo nếu không có đơn hàng
    if (customerOrders.length === 0) {
        ordersBody.innerHTML = '';
        if (noOrdersMessage) noOrdersMessage.style.display = 'block';
        return;
    }
    
    if (noOrdersMessage) noOrdersMessage.style.display = 'none';
    
    // Sắp xếp theo ngày giảm dần (đơn mới nhất lên đầu)
    customerOrders.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Render bảng đơn hàng
    ordersBody.innerHTML = customerOrders.map(order => {
        // Mapping class CSS cho từng trạng thái
        const statusClass = {
            'pending': 'status-pending',
            'processing': 'status-processing',
            'shipping': 'status-shipping',
            'completed': 'status-completed',
            'cancelled': 'status-cancelled'
        }[order.status] || 'status-pending';
        
        // Mapping tên hiển thị cho từng trạng thái
        const statusText = {
            'pending': 'Chờ xử lý',
            'processing': 'Đang xử lý',
            'shipping': 'Đang giao',
            'completed': 'Đã giao',
            'cancelled': 'Đã hủy'
        }[order.status] || 'Chờ xử lý';
        
        // Tóm tắt sản phẩm trong đơn
        const itemsSummary = order.items ? 
            order.items.map(item => `${item.name} x${item.quantity}`).join(', ') : 
            'N/A';
        
        return `
            <tr>
                <td>#${order.id}</td>
                <td>${order.date}</td>
                <td>${itemsSummary}</td>
                <td><strong style="color: #e74c3c;">${new Intl.NumberFormat('vi-VN').format(order.total)}đ</strong></td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                <td><button class="btn-edit" onclick="viewOrderDetail(${order.id})">Xem chi tiết</button></td>
            </tr>
        `;
    }).join('');
}

/**
 * Tải và hiển thị sản phẩm yêu thích/gợi ý
 * Hiển thị 3 sản phẩm nổi bật hoặc ngẫu nhiên
 */
function loadFavoriteProducts() {
    const container = document.getElementById('favoriteProductsContainer');
    if (!container) return;
    
    const products = getProducts();
    // Lấy 3 sản phẩm nổi bật đầu tiên
    const featuredProducts = products.filter(p => p.featured).slice(0, 3);
    // Nếu không đủ 3 sản phẩm nổi bật thì lấy 3 sản phẩm đầu tiên
    const displayProducts = featuredProducts.length >= 3 ? featuredProducts : products.slice(0, 3);
    
    container.innerHTML = displayProducts.map(product => `
        <div class="favorite-item">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p style="color: #e74c3c; font-weight: bold;">${formatPrice(product.price)}</p>
            <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id})">Đặt lại</button>
        </div>
    `).join('');
}

/**
 * Hiển thị chi tiết đơn hàng trong modal
 * @param {number} orderId - ID của đơn hàng cần xem
 */
function viewOrderDetail(orderId) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const order = orders.find(o => o.id == orderId);
    
    if (!order) {
        alert('⚠️ Không tìm thấy đơn hàng!');
        return;
    }
    
    // Mapping thông tin trạng thái
    const statusInfo = {
        'pending': { text: 'Chờ xử lý', class: 'status-pending' },
        'processing': { text: 'Đang xử lý', class: 'status-processing' },
        'shipping': { text: 'Đang giao', class: 'status-shipping' },
        'completed': { text: 'Đã giao', class: 'status-completed' },
        'cancelled': { text: 'Đã hủy', class: 'status-cancelled' }
    };
    
    const status = statusInfo[order.status] || statusInfo['pending'];
    const orderDate = new Date(order.date).toLocaleString('vi-VN');
    
    // Render HTML danh sách sản phẩm trong đơn
    const itemsHTML = order.items ? order.items.map(item => `
        <li class="order-item">
            <div class="order-item-info">
                <div class="order-item-name">${item.name}</div>
                <div class="order-item-details">Size: ${item.size || 'Vừa'} • Số lượng: x${item.quantity}</div>
            </div>
            <div class="order-item-price">${new Intl.NumberFormat('vi-VN').format(item.price * item.quantity)}đ</div>
        </li>
    `).join('') : '<li>Không có sản phẩm</li>';
    
    // Render nội dung modal chi tiết đơn hàng
    const modalContent = `
        <div class="order-info-section">
            <h3>📋 Thông tin đơn hàng</h3>
            <div class="order-info-grid">
                <div class="order-info-item">
                    <span class="order-info-label">Mã đơn hàng</span>
                    <span class="order-info-value">#${order.id}</span>
                </div>
                <div class="order-info-item">
                    <span class="order-info-label">Ngày đặt</span>
                    <span class="order-info-value">${orderDate}</span>
                </div>
                <div class="order-info-item">
                    <span class="order-info-label">Trạng thái</span>
                    <span class="status-badge-large ${status.class}">${status.text}</span>
                </div>
                <div class="order-info-item">
                    <span class="order-info-label">Phương thức thanh toán</span>
                    <span class="order-info-value">Thanh toán khi nhận hàng</span>
                </div>
            </div>
        </div>
        
        <div class="order-info-section">
            <h3>👤 Thông tin người nhận</h3>
            <div class="order-info-grid">
                <div class="order-info-item">
                    <span class="order-info-label">Tên người nhận</span>
                    <span class="order-info-value">${order.customerName}</span>
                </div>
                <div class="order-info-item">
                    <span class="order-info-label">Số điện thoại</span>
                    <span class="order-info-value">${order.customerPhone || order.phone}</span>
                </div>
                <div class="order-info-item" style="grid-column: 1 / -1;">
                    <span class="order-info-label">Địa chỉ giao hàng</span>
                    <span class="order-info-value">${order.address || 'Chưa cập nhật'}</span>
                </div>
            </div>
        </div>
        
        <div class="order-info-section">
            <h3>🍕 Sản phẩm đã đặt</h3>
            <ul class="order-items-list">
                ${itemsHTML}
            </ul>
        </div>
        
        <div class="order-summary">
            <div class="order-summary-row">
                <span class="order-summary-label">Tạm tính</span>
                <span class="order-summary-value">${new Intl.NumberFormat('vi-VN').format(order.subtotal || 0)}đ</span>
            </div>
            <div class="order-summary-row">
                <span class="order-summary-label">Phí vận chuyển</span>
                <span class="order-summary-value">${new Intl.NumberFormat('vi-VN').format(order.shippingFee || 0)}đ</span>
            </div>
            <div class="order-summary-row">
                <span class="order-summary-label">Tổng cộng</span>
                <span class="order-summary-value">${new Intl.NumberFormat('vi-VN').format(order.total)}đ</span>
            </div>
        </div>
    `;
    
    document.getElementById('orderDetailContent').innerHTML = modalContent;
    document.getElementById('orderDetailModal').style.display = 'flex';
}

/**
 * Đóng modal chi tiết đơn hàng
 */
function closeOrderDetailModal() {
    document.getElementById('orderDetailModal').style.display = 'none';
}

// ========================================
// ADMIN FUNCTIONS (Updated)
// CÁC HÀM XỬ LÝ TRANG ADMIN
// ========================================

// ========================================
// ADMIN FUNCTIONS (Updated)
// CÁC HÀM XỬ LÝ TRANG ADMIN
// ========================================

/**
 * Xử lý đăng nhập admin qua form admin.html
 * Tài khoản mặc định: admin / 1
 * @param {Event} event - Sự kiện submit form
 * @returns {boolean} false để ngăn form submit mặc định
 */
function handleAdminLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Xác thực tài khoản admin
    if (username === 'admin' && password === '1') {
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('currentuser', JSON.stringify({
            fullname: 'Administrator',
            phone: 'admin',
            password: '1',
            userType: 1 // 1 = Admin
        }));
        showDashboard();
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!\nAdmin: admin / 1');
    }

    return false;
}

/**
 * Xử lý đăng xuất admin
 */
function handleLogout() {
    localStorage.removeItem('adminLoggedIn');
    location.reload();
}

/**
 * Hiển thị dashboard admin sau khi đăng nhập thành công
 */
function showDashboard() {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
    loadAdminProducts();
    updateProductCount();
}

/**
 * Kiểm tra xác thực admin
 * Hiển thị dashboard nếu đã đăng nhập
 */
function checkAdminAuth() {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    const userType = localStorage.getItem('userType');
    
    if (isLoggedIn === 'true' && userType === 'admin') {
        showDashboard();
    }
}

/**
 * Cập nhật số lượng sản phẩm hiển thị trên dashboard
 */
function updateProductCount() {
    const products = getProducts();
    const countElement = document.getElementById('totalProducts');
    if (countElement) {
        countElement.textContent = products.length;
    }
}

/**
 * Tải và hiển thị danh sách sản phẩm trong bảng admin
 */
function loadAdminProducts() {
    const tbody = document.getElementById('productsTableBody');
    if (!tbody) return;

    const products = getProducts();

    // Render HTML bảng sản phẩm
    tbody.innerHTML = products.map(product => `
        <tr>
            <td><strong>#${product.id}</strong></td>
            <td><img src="${product.image}" alt="${product.name}"></td>
            <td>
                <strong>${product.name}</strong>
                <br>
                <small style="color: #7f8c8d;">${product.description || ''}</small>
            </td>
            <td><span class="product-category">${getCategoryName(product.category)}</span></td>
            <td><strong style="color: #e74c3c;">${formatPrice(product.price)}</strong></td>
            <td>${product.featured ? '<span style="color: #f39c12;">⭐ Nổi bật</span>' : '<span style="color: #95a5a6;">-</span>'}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="editProduct(${product.id})">✏️ Sửa</button>
                    <button class="btn-delete" onclick="deleteProduct(${product.id})">🗑️ Xóa</button>
                </div>
            </td>
        </tr>
    `).join('');
}

/**
 * Hiển thị form thêm sản phẩm mới
 */
function showAddProductForm() {
    document.getElementById('productForm').style.display = 'block';
    document.getElementById('formTitle').textContent = 'Thêm Sản Phẩm Mới';
    document.getElementById('addProductForm').reset();
    document.getElementById('editProductId').value = '';
}

/**
 * Ẩn form thêm/sửa sản phẩm
 */
function hideProductForm() {
    document.getElementById('productForm').style.display = 'none';
    document.getElementById('addProductForm').reset();
}

/**
 * Xử lý thêm hoặc sửa sản phẩm
 * @param {Event} event - Sự kiện submit form
 * @returns {boolean} false để ngăn form submit mặc định
 */
function handleAddProduct(event) {
    event.preventDefault();

    // Lấy ID sản phẩm (nếu đang sửa)
    const editId = document.getElementById('editProductId').value;
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const category = document.getElementById('productCategory').value;
    const image = document.getElementById('productImage').value || 'assets/images/pizza-1.jpg';
    const description = document.getElementById('productDescription').value;
    const featured = document.getElementById('productFeatured')?.checked || false;

    const products = getProducts();

    if (editId) {
        // Chế độ sửa: cập nhật sản phẩm hiện có
        const productIndex = products.findIndex(p => p.id === parseInt(editId));
        if (productIndex !== -1) {
            products[productIndex] = {
                ...products[productIndex], // Giữ nguyên các thuộc tính khác
                name,
                price,
                category,
                image,
                description,
                featured
            };
            alert('✅ Sản phẩm đã được cập nhật thành công!');
        }
    } else {
        // Chế độ thêm mới: tạo sản phẩm mới
        const newId = Math.max(...products.map(p => p.id), 0) + 1;
        
        // Tạo các size mặc định dựa trên giá
        const defaultSizes = [
            { name: "Nhỏ (20cm)", price: price },
            { name: "Vừa (25cm)", price: price + 100000 },
            { name: "Lớn (30cm)", price: price + 200000 }
        ];
        
        // Tạo nguyên liệu mặc định dựa trên danh mục
        let defaultIngredients = ["Phô mai Mozzarella", "Sốt cà chua", "Oregano"];
        if (category === 'vegetarian') {
            defaultIngredients = ["Rau củ tươi", "Phô mai Mozzarella", "Sốt cà chua", "Dầu ô liu"];
        } else if (category === 'special') {
            defaultIngredients = ["Nguyên liệu đặc biệt", "Phô mai Mozzarella", "Sốt đặc chế", "Gia vị"];
        }
        
        products.push({
            id: newId,
            name,
            price,
            category,
            image,
            description,
            featured,
            fullDescription: description + " - Được chế biến từ những nguyên liệu tươi ngon nhất, mang đến hương vị tuyệt vời cho bạn và gia đình.",
            ingredients: defaultIngredients,
            sizes: defaultSizes,
            nutrition: { calories: 280, protein: 14, carbs: 32, fat: 12 },
            rating: 4.5,
            reviews: 0
        });
        alert('✅ Sản phẩm mới đã được thêm thành công!');
    }

    // Lưu và tải lại danh sách
    saveProducts(products);
    loadAdminProducts();
    updateProductCount();
    hideProductForm();

    return false;
}

/**
 * Mở form sửa sản phẩm với dữ liệu hiện tại
 * @param {number} productId - ID sản phẩm cần sửa
 */
function editProduct(productId) {
    const products = getProducts();
    const product = products.find(p => p.id === productId);

    if (!product) return;

    // Hiển thị form và điền dữ liệu sản phẩm
    document.getElementById('productForm').style.display = 'block';
    document.getElementById('formTitle').textContent = '✏️ Sửa Sản Phẩm';
    document.getElementById('editProductId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productImage').value = product.image;
    document.getElementById('productDescription').value = product.description;
    
    const featuredCheckbox = document.getElementById('productFeatured');
    if (featuredCheckbox) {
        featuredCheckbox.checked = product.featured || false;
    }
    
    // Cuộn đến form
    document.getElementById('productForm').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Xóa sản phẩm khỏi hệ thống
 * @param {number} productId - ID sản phẩm cần xóa
 */
function deleteProduct(productId) {
    if (!confirm('⚠️ Bạn có chắc chắn muốn xóa sản phẩm này?\n\nHành động này không thể hoàn tác!')) return;

    const products = getProducts();
    const updatedProducts = products.filter(p => p.id !== productId);
    
    saveProducts(updatedProducts);
    loadAdminProducts();
    updateProductCount();
    alert('✅ Sản phẩm đã được xóa thành công!');
}

// ========================================
// ADMIN UTILITY FUNCTIONS
// CÁC HÀM TIỆN ÍCH ADMIN
// ========================================

/**
 * Xuất dữ liệu sản phẩm ra file JSON
 * Cho phép tải về file pizza-products-export.json
 */
function exportData() {
    const products = getProducts();
    const dataStr = JSON.stringify(products, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'pizza-products-export.json';
    link.click();
    alert('📊 Dữ liệu đã được xuất thành công!');
}

/**
 * Xem tất cả đơn hàng (placeholder)
 */
function viewAllOrders() {
    alert('📋 Chức năng xem tất cả đơn hàng\n\nTính năng này sẽ hiển thị danh sách đầy đủ tất cả các đơn hàng trong hệ thống.');
}

/**
 * Xem danh sách đơn hàng (placeholder)
 */
function viewOrders() {
    alert('📦 Quản lý đơn hàng\n\nHiển thị danh sách đơn hàng cần xử lý, đang giao và đã hoàn thành.');
}

/**
 * Quản lý khách hàng (placeholder)
 */
function manageCustomers() {
    alert('👥 Quản lý khách hàng\n\nXem danh sách khách hàng, lịch sử mua hàng và điểm tích lũy.');
}

// ========================================
// AUTH SYSTEM (LOGIN/SIGNUP)
// HỆ THỐNG XÁC THỰC (ĐĂNG NHẬP/ĐĂNG KÝ)
// ========================================

/**
 * Kiểm tra người dùng hiện tại và cập nhật giao diện
 * Hiển thị tên người dùng hoặc nút đăng nhập trên header
 */
function checkCurrentUser() {
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));
    const userAccountText = document.getElementById('user-account-text');
    const userAccountLink = document.getElementById('user-account-link');
    const userDropdown = document.getElementById('userDropdown');
    const adminMenuItem = document.getElementById('admin-menu-item');
    const customerMenuItem = document.getElementById('customer-menu-item');

    if (currentUser) {
        // Người dùng đã đăng nhập - hiển thị tên
        userAccountText.textContent = currentUser.fullname;
        
        // Hiển thị/ẩn menu dựa trên loại người dùng
        if (currentUser.phone === 'admin' && currentUser.password === '1') {
            // Người dùng admin
            if (adminMenuItem) adminMenuItem.style.display = 'block';
            if (customerMenuItem) customerMenuItem.style.display = 'none';
        } else {
            // Khách hàng thường
            if (adminMenuItem) adminMenuItem.style.display = 'none';
            if (customerMenuItem) customerMenuItem.style.display = 'block';
        }
        
        // Hiển thị dropdown khi click
        userAccountLink.onclick = function(e) {
            e.preventDefault();
            userDropdown.style.display = userDropdown.style.display === 'none' ? 'block' : 'none';
        };
    } else {
        // Chưa đăng nhập - hiển thị nút đăng nhập
        userAccountText.textContent = 'Đăng Nhập';
        userAccountLink.onclick = function(e) {
            e.preventDefault();
            openAuthModal();
        };
    }
}

/**
 * Mở modal xác thực (đăng nhập/đăng ký)
 */
function openAuthModal() {
    document.getElementById('authModal').style.display = 'flex';
    showLoginForm();
}

/**
 * Đóng modal xác thực
 */
function closeAuthModal() {
    document.getElementById('authModal').style.display = 'none';
}

/**
 * Hiển thị form đăng nhập, ẩn form đăng ký
 */
function showLoginForm() {
    const loginForm = document.getElementById('loginForm') || document.getElementById('loginFormContainer');
    const signupForm = document.getElementById('signupForm') || document.getElementById('signupFormContainer');
    if (loginForm) loginForm.style.display = 'block';
    if (signupForm) signupForm.style.display = 'none';
}

/**
 * Hiển thị form đăng ký, ẩn form đăng nhập
 */
function showSignupForm() {
    const loginForm = document.getElementById('loginForm') || document.getElementById('loginFormContainer');
    const signupForm = document.getElementById('signupForm') || document.getElementById('signupFormContainer');
    if (loginForm) loginForm.style.display = 'none';
    if (signupForm) signupForm.style.display = 'block';
}

/**
 * Xử lý đăng nhập
 * Kiểm tra tài khoản admin hoặc khách hàng từ localStorage
 * @param {Event} event - Sự kiện submit form
 * @returns {boolean} false để ngăn form submit mặc định
 */
function handleLogin(event) {
    event.preventDefault();
    
    const phone = document.getElementById('login-phone').value;
    const password = document.getElementById('login-password').value;
    
    // Kiểm tra tài khoản admin
    if (phone === 'admin' && password === '1') {
        const adminUser = {
            fullname: 'Administrator',
            phone: 'admin',
            password: '1',
            address: '',
            email: 'admin@pizzashop.vn',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1 // 1 = Admin
        };
        
        // Lưu thông tin admin
        localStorage.setItem('currentuser', JSON.stringify(adminUser));
        
        // Đóng modal và cập nhật giao diện
        closeAuthModal();
        checkCurrentUser();
        
        alert('✅ Đăng nhập thành công! Chào mừng Administrator');
        
        // Chuyển hướng đến trang admin
        window.location.href = 'admin.html';
        return false;
    }
    
    // Lấy danh sách tài khoản từ localStorage
    const accounts = JSON.parse(localStorage.getItem('users')) || [];
    
    // Tìm người dùng theo số điện thoại và mật khẩu
    const user = accounts.find(acc => acc.phone === phone && acc.password === password);
    
    if (user) {
        // Đăng nhập thành công - lưu thông tin người dùng
        localStorage.setItem('currentuser', JSON.stringify(user));
        
        // Đóng modal và cập nhật giao diện
        closeAuthModal();
        checkCurrentUser();
        
        alert('✅ Đăng nhập thành công! Chào mừng ' + user.fullname);
    } else {
        // Đăng nhập thất bại
        document.getElementById('login-password-error').textContent = 'Số điện thoại hoặc mật khẩu không đúng!';
    }
    
    return false;
}

/**
 * Xử lý đăng ký tài khoản mới
 * Validate thông tin và lưu vào localStorage
 * @param {Event} event - Sự kiện submit form
 * @returns {boolean} false để ngăn form submit mặc định
 */
function handleSignup(event) {
    event.preventDefault();
    
    // Lấy thông tin từ form
    const fullname = document.getElementById('signup-fullname').value.trim();
    const phone = document.getElementById('signup-phone').value.trim();
    const password = document.getElementById('signup-password').value;
    const passwordConfirm = document.getElementById('signup-password-confirm').value;
    
    // Xóa thông báo lỗi cũ
    document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
    
    // Validate tên (tối thiểu 3 ký tự)
    if (fullname.length < 3) {
        document.getElementById('signup-fullname-error').textContent = 'Tên phải có ít nhất 3 ký tự!';
        return false;
    }
    
    // Validate số điện thoại (tối thiểu 10 số)
    if (phone.length < 10 || !/^[0-9]+$/.test(phone)) {
        document.getElementById('signup-phone-error').textContent = 'Số điện thoại không hợp lệ!';
        return false;
    }
    
    // Validate mật khẩu (tối thiểu 6 ký tự)
    if (password.length < 6) {
        document.getElementById('signup-password-error').textContent = 'Mật khẩu phải có ít nhất 6 ký tự!';
        return false;
    }
    
    // Kiểm tra mật khẩu xác nhận
    if (password !== passwordConfirm) {
        document.getElementById('signup-password-confirm-error').textContent = 'Mật khẩu không khớp!';
        return false;
    }
    
    // Lấy danh sách tài khoản hiện có
    const accounts = JSON.parse(localStorage.getItem('users')) || [];
    
    // Kiểm tra số điện thoại đã tồn tại chưa
    if (accounts.find(acc => acc.phone === phone)) {
        document.getElementById('signup-phone-error').textContent = 'Số điện thoại đã được đăng ký!';
        return false;
    }
    
    // Tạo tài khoản mới
    const newUser = {
        fullname: fullname,
        phone: phone,
        password: password, // Lưu ý: trong thực tế cần mã hóa mật khẩu
        address: '',
        email: '',
        status: 1, // 1 = active
        join: new Date(),
        cart: [],
        userType: 0 // 0 = customer, 1 = admin
    };
    
    // Thêm vào danh sách và lưu
    accounts.push(newUser);
    localStorage.setItem('users', JSON.stringify(accounts));
    
    // Tự động đăng nhập sau khi đăng ký
    localStorage.setItem('currentuser', JSON.stringify(newUser));
    
    // Đóng modal và cập nhật giao diện
    closeAuthModal();
    checkCurrentUser();
    
    alert('✅ Đăng ký thành công! Chào mừng ' + fullname);
    
    return false;
}

/**
 * Xử lý đăng xuất người dùng
 * Xóa thông tin phiên đăng nhập và load lại trang
 */
function handleUserLogout() {
    if (confirm('Bạn có chắc muốn đăng xuất?')) {
        localStorage.removeItem('currentuser');
        alert('✅ Đăng xuất thành công!');
        location.reload(); // Load lại trang sau khi đăng xuất
    }
}

/**
 * Đóng dropdown khi click bên ngoài
 */
document.addEventListener('click', function(e) {
    const userAccount = document.querySelector('.user-account');
    const userDropdown = document.getElementById('userDropdown');
    
    if (userAccount && !userAccount.contains(e.target)) {
        if (userDropdown) {
            userDropdown.style.display = 'none';
        }
    }
});

/**
 * Gắn sự kiện đăng xuất khi DOM loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) {
        logoutBtn.onclick = handleUserLogout;
    }
});

// ========================================
// INITIALIZATION
// KHỞI TẠO ỨNG DỤNG
// ========================================

/**
 * Khởi tạo trang khi DOM loaded
 * Xác định trang hiện tại và gọi các hàm tương ứng
 */
document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra người dùng hiện tại và cập nhật giao diện
    checkCurrentUser();
    
    // Cập nhật số lượng giỏ hàng trên tất cả các trang
    updateCartCount();

    // Xác định trang hiện tại từ URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Khởi tạo dựa trên trang hiện tại
    switch(currentPage) {
        case 'index.html':
        case '':
            // Trang chủ: tải sản phẩm nổi bật
            loadFeaturedProducts();
            break;

        case 'menu.html':
            // Trang menu: kiểm tra tham số tìm kiếm trong URL
            const urlParams = new URLSearchParams(window.location.search);
            const searchTerm = urlParams.get('search');
            if (searchTerm) {
                // Có tham số tìm kiếm: tải sản phẩm với bộ lọc
                loadMenuProducts('all', searchTerm);
            } else {
                // Không có tham số: tải tất cả sản phẩm
                loadMenuProducts();
            }
            break;

        case 'cart.html':
            // Trang giỏ hàng: tải giỏ hàng
            loadCart();
            break;

        case 'contact.html':
            // Trang liên hệ: gắn sự kiện form
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', handleContactForm);
            }
            break;

        case 'admin.html':
            // Trang admin: kiểm tra xác thực
            checkAdminAuth();
            break;

        case 'customer.html':
            // Trang khách hàng: kiểm tra xác thực
            checkCustomerAuth();
            break;
    }
});

// ========================================
// EXPORT FUNCTIONS (for inline use)
// XUẤT CÁC HÀM (để sử dụng inline)
// ========================================
// Tất cả các hàm đã được định nghĩa ở phạm vi global
// nên có thể sử dụng trực tiếp trong các thuộc tính onclick, onsubmit, etc.