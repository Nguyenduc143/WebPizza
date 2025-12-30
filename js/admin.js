/**
 * ============================================
 * Pizza Shop - Admin Dashboard JavaScript
 * ============================================
 * 
 * File này chứa toàn bộ logic xử lý cho trang quản trị admin:
 * - Xác thực đăng nhập admin
 * - Quản lý sản phẩm (CRUD)
 * - Quản lý đơn hàng
 * - Quản lý khách hàng
 * - Báo cáo và thống kê
 * - Thông báo đơn hàng và liên hệ
 * 
 * Tài khoản admin mặc định: admin / 1
 */

// ==========================================
// NOTIFICATION SYSTEM - Hệ thống thông báo
// ==========================================

/**
 * Lấy số lượng đơn hàng mới (chưa đọc)
 * @returns {number} Số đơn hàng mới
 */
function getNewOrderCount() {
    const lastViewedOrderId = parseInt(localStorage.getItem('lastViewedOrderId')) || 0;
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    return orders.filter(o => o.id > lastViewedOrderId).length;
}

/**
 * Lấy số lượng liên hệ mới (chưa đọc)
 * @returns {number} Số liên hệ mới
 */
function getNewContactCount() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    return contacts.filter(c => !c.read).length;
}

/**
 * Cập nhật badge thông báo trên navbar
 */
function updateNotificationBadges() {
    const orderBadge = document.getElementById('orderNotifyBadge');
    const contactBadge = document.getElementById('contactNotifyBadge');
    
    if (orderBadge) {
        const orderCount = getNewOrderCount();
        orderBadge.textContent = orderCount;
        orderBadge.style.display = orderCount > 0 ? 'flex' : 'none';
    }
    
    if (contactBadge) {
        const contactCount = getNewContactCount();
        contactBadge.textContent = contactCount;
        contactBadge.style.display = contactCount > 0 ? 'flex' : 'none';
    }
}

/**
 * Hiển thị danh sách thông báo đơn hàng mới
 */
function showOrderNotifications() {
    const lastViewedOrderId = parseInt(localStorage.getItem('lastViewedOrderId')) || 0;
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrders = orders.filter(o => o.id > lastViewedOrderId);
    
    const modal = document.getElementById('orderNotifyModal');
    const content = document.getElementById('orderNotifyContent');
    
    if (newOrders.length === 0) {
        content.innerHTML = `
            <div class="notification-empty">
                <i class="fas fa-bell-slash"></i>
                <p>Không có đơn hàng mới!</p>
            </div>
        `;
    } else {
        let html = `<div class="notification-count">Bạn có <strong>${newOrders.length}</strong> đơn hàng mới</div>`;
        html += '<div class="notification-list">';
        
        newOrders.slice(0, 10).forEach(order => {
            const orderDate = new Date(order.date).toLocaleDateString('vi-VN');
            html += `
                <div class="notification-item order-item" onclick="viewOrderFromNotify(${order.id})">
                    <div class="notification-icon order-icon">
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                    <div class="notification-info">
                        <div class="notification-title">Đơn hàng #${order.id}</div>
                        <div class="notification-detail">
                            <span><i class="fas fa-user"></i> ${order.customerName || 'Khách hàng'}</span>
                            <span><i class="fas fa-money-bill"></i> ${new Intl.NumberFormat('vi-VN').format(order.total)}đ</span>
                        </div>
                        <div class="notification-time"><i class="far fa-clock"></i> ${orderDate}</div>
                    </div>
                </div>
            `;
        });
        
        if (newOrders.length > 10) {
            html += `<div class="notification-more">... và ${newOrders.length - 10} đơn hàng khác</div>`;
        }
        html += '</div>';
        content.innerHTML = html;
    }
    
    modal.style.display = 'flex';
}

/**
 * Đóng modal thông báo đơn hàng
 */
function closeOrderNotifyModal() {
    document.getElementById('orderNotifyModal').style.display = 'none';
}

/**
 * Đánh dấu tất cả đơn hàng đã đọc
 */
function markOrdersAsRead() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    if (orders.length > 0) {
        const maxOrderId = Math.max(...orders.map(o => o.id));
        localStorage.setItem('lastViewedOrderId', maxOrderId);
    }
    updateNotificationBadges();
    closeOrderNotifyModal();
    showSection('orders');
}

/**
 * Xem chi tiết đơn hàng từ thông báo
 */
function viewOrderFromNotify(orderId) {
    closeOrderNotifyModal();
    showSection('orders');
    // Có thể mở chi tiết đơn hàng nếu cần
    viewAdminOrderDetail(orderId);
}

/**
 * Hiển thị danh sách thông báo liên hệ mới
 */
function showContactNotifications() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const newContacts = contacts.filter(c => !c.read);
    
    const modal = document.getElementById('contactNotifyModal');
    const content = document.getElementById('contactNotifyContent');
    
    if (newContacts.length === 0) {
        content.innerHTML = `
            <div class="notification-empty">
                <i class="fas fa-envelope-open"></i>
                <p>Không có tin nhắn liên hệ mới!</p>
            </div>
        `;
    } else {
        let html = `<div class="notification-count">Bạn có <strong>${newContacts.length}</strong> tin nhắn mới</div>`;
        html += '<div class="notification-list">';
        
        newContacts.slice(0, 10).forEach(contact => {
            const contactDate = contact.date ? new Date(contact.date).toLocaleDateString('vi-VN') : 'N/A';
            html += `
                <div class="notification-item contact-item">
                    <div class="notification-icon contact-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="notification-info">
                        <div class="notification-title">${contact.name}</div>
                        <div class="notification-detail">
                            <span><i class="fas fa-envelope"></i> ${contact.email}</span>
                            <span><i class="fas fa-phone"></i> ${contact.phone || 'N/A'}</span>
                        </div>
                        <div class="notification-message">"${contact.message.substring(0, 80)}${contact.message.length > 80 ? '...' : ''}"</div>
                        <div class="notification-time"><i class="far fa-clock"></i> ${contactDate}</div>
                    </div>
                </div>
            `;
        });
        
        if (newContacts.length > 10) {
            html += `<div class="notification-more">... và ${newContacts.length - 10} tin nhắn khác</div>`;
        }
        html += '</div>';
        content.innerHTML = html;
    }
    
    modal.style.display = 'flex';
}

/**
 * Đóng modal thông báo liên hệ
 */
function closeContactNotifyModal() {
    document.getElementById('contactNotifyModal').style.display = 'none';
}

/**
 * Đánh dấu tất cả liên hệ đã đọc
 */
function markContactsAsRead() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.forEach(c => c.read = true);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    updateNotificationBadges();
    closeContactNotifyModal();
}

// ==========================================
// AUTHENTICATION - Xác thực đăng nhập
// ==========================================

/**
 * Xử lý đăng nhập admin
 * Kiểm tra username/password và lưu thông tin vào localStorage
 * @param {Event} event - Sự kiện submit form
 */
function handleAdminLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra tài khoản admin (hardcode)
    if (username === 'admin' && password === '1') {
        // Tạo đối tượng admin user
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
        // Lưu thông tin vào localStorage
        localStorage.setItem('currentuser', JSON.stringify(adminUser));
        localStorage.setItem('adminAuth', 'true');
        
        // Ẩn form đăng nhập, hiển thị dashboard
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('adminDashboard').style.display = 'flex';
        loadAdminData(); // Tải dữ liệu admin
    } else {
        alert('❌ Tên đăng nhập hoặc mật khẩu không đúng!');
    }
}

/**
 * Xử lý đăng xuất admin
 * Xóa thông tin xác thực và chuyển về trang chủ
 */
function handleAdminLogout() {
    if (confirm('Bạn có chắc muốn đăng xuất?')) {
        localStorage.removeItem('adminAuth');
        localStorage.removeItem('currentuser');
        window.location.href = 'index.html';
    }
}

/**
 * Kiểm tra xác thực admin khi vào trang
 * Nếu chưa đăng nhập thì chuyển về trang chủ
 */
function checkAdminAuth() {
    // Kiểm tra user hiện tại có phải admin không
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));
    
    if (currentUser && currentUser.phone === 'admin' && currentUser.password === '1') {
        // Đã đăng nhập admin - hiển thị dashboard
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('adminDashboard').style.display = 'flex';
        loadAdminData();
    } else {
        // Chưa đăng nhập admin - chuyển về trang chủ
        alert('⚠️ Vui lòng đăng nhập với tài khoản admin để truy cập trang này!');
        window.location.href = 'index.html';
    }
}

// ==========================================
// SIDEBAR & NAVIGATION - Điều hướng sidebar
// ==========================================

/**
 * Bật/tắt sidebar trên thiết bị di động
 */
function toggleSidebar() {
    const sidebar = document.getElementById('adminSidebar');
    sidebar.classList.toggle('mobile-open');
}

/**
 * Hiển thị section được chọn và ẩn các section khác
 * @param {string} sectionName - Tên section cần hiển thị: 'dashboard', 'products', 'orders', 'customers', 'reports'
 */
function showSection(sectionName) {
    // Ẩn tất cả các section
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // Xóa class active khỏi tất cả menu item
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    // Hiển thị section được chọn
    const targetSection = document.getElementById(sectionName + 'Section');
    if (targetSection) {
        targetSection.style.display = 'block';
    }

    // Thêm class active cho menu item được click
    event.target.closest('.menu-item').classList.add('active');

    // Cập nhật tiêu đề navbar theo section
    const navbarTitle = document.getElementById('navbarTitle');
    if (navbarTitle) {
        const titles = {
            'dashboard': 'Dashboard',
            'products': 'Quản Lý Sản Phẩm',
            'orders': 'Quản Lý Đơn Hàng',
            'customers': 'Quản Lý Khách Hàng',
            'reports': 'Báo Cáo & Thống Kê'
        };
        navbarTitle.innerHTML = `<h2 style="font-size: 20px; font-weight: 600; color: #2c3e50; margin: 0;">${titles[sectionName] || 'Dashboard'}</h2>`;
    }

    // Tải dữ liệu cho section cụ thể
    if (sectionName === 'reports') {
        loadReports();
    }
}

// ==========================================
// PRODUCT MANAGEMENT - Quản lý sản phẩm
// ==========================================

/**
 * Hiển thị form thêm sản phẩm mới
 * Reset form và các trường về giá trị mặc định
 */
function showAddProductForm() {
    document.getElementById('productFormCard').style.display = 'block';
    document.getElementById('formTitle').innerHTML = '➕ Thêm Sản Phẩm Mới';
    document.getElementById('addProductForm').reset();
    document.getElementById('editProductId').value = '';
    
    // Xóa tất cả các trường
    document.getElementById('priceSmall').value = '';
    document.getElementById('priceMedium').value = '';
    document.getElementById('priceLarge').value = '';
    document.getElementById('productIngredients').value = '';
    document.getElementById('productFullDescription').value = '';
    document.getElementById('nutritionCalories').value = '';
    document.getElementById('nutritionProtein').value = '';
    document.getElementById('nutritionCarbs').value = '';
    document.getElementById('nutritionFat').value = '';
    
    // Reset checkbox nổi bật
    document.getElementById('productFeatured').checked = false;
    updateFeaturedVisual();
}

/**
 * Ẩn form thêm/sửa sản phẩm
 */
function hideProductForm() {
    document.getElementById('productFormCard').style.display = 'none';
    document.getElementById('addProductForm').reset();
}

/**
 * Xử lý thêm hoặc cập nhật sản phẩm
 * @param {Event} event - Sự kiện submit form
 */
function handleAddProduct(event) {
    event.preventDefault();
    
    // Lấy ID sản phẩm (nếu đang sửa)
    const id = document.getElementById('editProductId').value;
    
    // Lấy thông tin từ form
    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const imageFileName = document.getElementById('productImage').value || 'pizza-1.jpg';
    const image = 'assets/images/' + imageFileName.replace('assets/images/', '');
    const description = document.getElementById('productDescription').value;
    const fullDescription = document.getElementById('productFullDescription').value;
    const featured = document.getElementById('productFeatured').checked;
    
    // Lấy giá cho từng size
    const priceSmall = parseInt(document.getElementById('priceSmall').value) || 320000;
    const priceMedium = parseInt(document.getElementById('priceMedium').value) || 420000;
    const priceLarge = parseInt(document.getElementById('priceLarge').value) || 520000;
    
    // Lấy nguyên liệu (tách bằng dấu phẩy)
    const ingredientsInput = document.getElementById('productIngredients').value;
    const ingredients = ingredientsInput ? ingredientsInput.split(',').map(i => i.trim()).filter(i => i) : ['Phô mai Mozzarella', 'Sốt cà chua'];
    
    // Lấy thông tin dinh dưỡng
    const nutrition = {
        calories: parseInt(document.getElementById('nutritionCalories').value) || 280,
        protein: parseInt(document.getElementById('nutritionProtein').value) || 14,
        carbs: parseInt(document.getElementById('nutritionCarbs').value) || 32,
        fat: parseInt(document.getElementById('nutritionFat').value) || 12
    };
    
    // Tạo mảng sizes
    const sizes = [
        { name: "Nhỏ (20cm)", price: priceSmall },
        { name: "Vừa (25cm)", price: priceMedium },
        { name: "Lớn (30cm)", price: priceLarge }
    ];

    let products = getProducts();

    if (id) {
        // Chế độ sửa: cập nhật sản phẩm hiện có
        const index = products.findIndex(p => p.id == id);
        if (index !== -1) {
            products[index] = {
                ...products[index], // Giữ nguyên các thuộc tính khác
                name,
                price: priceSmall, // Giá cơ bản là giá size nhỏ
                category,
                image,
                description,
                fullDescription: fullDescription || description,
                featured,
                ingredients,
                sizes,
                nutrition
            };
        }
    } else {
        // Chế độ thêm mới: tạo sản phẩm mới
        const newProduct = {
            id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1, // Tạo ID tự động
            name,
            price: priceSmall,
            category,
            image,
            description,
            fullDescription: fullDescription || description + " - Được chế biến từ những nguyên liệu tươi ngon nhất.",
            featured,
            ingredients,
            sizes,
            nutrition,
            rating: 4.5,
            reviews: 0
        };
        products.push(newProduct);
    }

    // Lưu sản phẩm và ẩn form
    saveProducts(products);
    hideProductForm();
    loadAdminProducts();
    alert(id ? '✅ Đã cập nhật sản phẩm!' : '✅ Đã thêm sản phẩm mới!');
}

/**
 * Mở form sửa sản phẩm với dữ liệu hiện tại
 * @param {number} id - ID của sản phẩm cần sửa
 */
function editProductAdmin(id) {
    const products = getProducts();
    const product = products.find(p => p.id == id);
    
    if (product) {
        // Điền dữ liệu vào form
        document.getElementById('editProductId').value = product.id;
        document.getElementById('productName').value = product.name;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productImage').value = product.image ? product.image.replace('assets/images/', '') : '';
        document.getElementById('productDescription').value = product.description || '';
        document.getElementById('productFullDescription').value = product.fullDescription || '';
        document.getElementById('productFeatured').checked = product.featured || false;
        
        // Điền giá cho từng size
        if (product.sizes && product.sizes.length >= 3) {
            document.getElementById('priceSmall').value = product.sizes[0].price;
            document.getElementById('priceMedium').value = product.sizes[1].price;
            document.getElementById('priceLarge').value = product.sizes[2].price;
        } else {
            // Nếu không có sizes, tính toán giá mặc định
            document.getElementById('priceSmall').value = product.price;
            document.getElementById('priceMedium').value = product.price + 100000;
            document.getElementById('priceLarge').value = product.price + 200000;
        }
        
        // Điền nguyên liệu (nối bằng dấu phẩy)
        if (product.ingredients && product.ingredients.length > 0) {
            document.getElementById('productIngredients').value = product.ingredients.join(', ');
        } else {
            document.getElementById('productIngredients').value = '';
        }
        
        // Điền thông tin dinh dưỡng
        if (product.nutrition) {
            document.getElementById('nutritionCalories').value = product.nutrition.calories || '';
            document.getElementById('nutritionProtein').value = product.nutrition.protein || '';
            document.getElementById('nutritionCarbs').value = product.nutrition.carbs || '';
            document.getElementById('nutritionFat').value = product.nutrition.fat || '';
        }
        
        // Cập nhật tiêu đề và hiển thị form
        document.getElementById('formTitle').innerHTML = '✏️ Chỉnh Sửa Sản Phẩm';
        document.getElementById('productFormCard').style.display = 'block';
        
        // Cập nhật giao diện checkbox nổi bật
        updateFeaturedVisual();
        
        // Cuộn đến form
        document.getElementById('productFormCard').scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Xóa sản phẩm khỏi hệ thống
 * @param {number} id - ID của sản phẩm cần xóa
 */
function deleteProductAdmin(id) {
    if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
        let products = getProducts();
        products = products.filter(p => p.id != id);
        saveProducts(products);
        loadAdminProducts();
        updateProductCount();
        alert('✅ Đã xóa sản phẩm!');
    }
}

/**
 * Tải và hiển thị danh sách sản phẩm trong bảng admin
 */
function loadAdminProducts() {
    const products = getProducts();
    const tbody = document.getElementById('productsTableBody');
    
    // Hiển thị thông báo nếu không có sản phẩm
    if (products.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 40px; color: #7c8db5;">Chưa có sản phẩm nào</td></tr>';
        return;
    }

    // Render bảng sản phẩm
    tbody.innerHTML = products.map(product => `
        <tr>
            <td><strong>#${product.id}</strong></td>
            <td><img src="${product.image}" alt="${product.name}" class="table-avatar"></td>
            <td><strong>${product.name}</strong></td>
            <td>
                ${product.category === 'classic' ? '🍕 Cổ Điển' : 
                  product.category === 'vegetarian' ? '🥗 Chay' : 
                  '⭐ Đặc Biệt'}
            </td>
            <td><strong>${new Intl.NumberFormat('vi-VN').format(product.price)}đ</strong></td>
            <td>
                ${product.featured ? 
                    '<span class="status-modern success">✓ Có</span>' : 
                    '<span class="status-modern" style="background: #f8f9fa; color: #7c8db5;">Không</span>'}
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action edit" onclick="editProductAdmin(${product.id})" title="Chỉnh sửa">✏️</button>
                    <button class="btn-action delete" onclick="deleteProductAdmin(${product.id})" title="Xóa">🗑️</button>
                </div>
            </td>
        </tr>
    `).join('');
}

/**
 * Cập nhật số lượng sản phẩm hiển thị trên dashboard
 */
function updateProductCount() {
    const products = getProducts();
    document.getElementById('totalProducts').textContent = products.length;
    document.getElementById('productCount').textContent = products.length;
}

// ==========================================
// FEATURED CHECKBOX - Checkbox sản phẩm nổi bật
// ==========================================

/**
 * Bật/tắt checkbox sản phẩm nổi bật với hiệu ứng visual
 */
function toggleFeaturedCheckbox() {
    const checkbox = document.getElementById('productFeatured');
    const visual = document.getElementById('checkboxVisual');
    const icon = document.getElementById('checkIcon');
    const wrapper = document.getElementById('featuredCheckboxWrapper');
    
    checkbox.checked = !checkbox.checked;
    
    // Cập nhật giao diện dựa trên trạng thái
    if (checkbox.checked) {
        visual.style.background = 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)';
        visual.style.borderColor = '#ff9800';
        visual.style.boxShadow = '0 4px 12px rgba(255, 193, 7, 0.4)';
        icon.style.opacity = '1';
        wrapper.style.background = 'linear-gradient(135deg, #fff3cd 0%, #ffe69c 100%)';
        wrapper.style.borderColor = '#ff9800';
    } else {
        visual.style.background = 'white';
        visual.style.borderColor = '#ffc107';
        visual.style.boxShadow = 'none';
        icon.style.opacity = '0';
        wrapper.style.background = 'linear-gradient(135deg, #fff9e6 0%, #fff3cd 100%)';
        wrapper.style.borderColor = '#ffc107';
    }
}

/**
 * Cập nhật giao diện checkbox nổi bật theo trạng thái hiện tại
 */
function updateFeaturedVisual() {
    const checkbox = document.getElementById('productFeatured');
    const visual = document.getElementById('checkboxVisual');
    const icon = document.getElementById('checkIcon');
    const wrapper = document.getElementById('featuredCheckboxWrapper');
    
    if (checkbox && checkbox.checked) {
        visual.style.background = 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)';
        visual.style.borderColor = '#ff9800';
        visual.style.boxShadow = '0 4px 12px rgba(255, 193, 7, 0.4)';
        icon.style.opacity = '1';
        wrapper.style.background = 'linear-gradient(135deg, #fff3cd 0%, #ffe69c 100%)';
        wrapper.style.borderColor = '#ff9800';
    } else if (checkbox) {
        visual.style.background = 'white';
        visual.style.borderColor = '#ffc107';
        visual.style.boxShadow = 'none';
        icon.style.opacity = '0';
        wrapper.style.background = 'linear-gradient(135deg, #fff9e6 0%, #fff3cd 100%)';
        wrapper.style.borderColor = '#ffc107';
    }
}

// ==========================================
// ORDER MANAGEMENT - Quản lý đơn hàng
// ==========================================

/**
 * Lấy danh sách đơn hàng từ localStorage
 * @returns {Array} Mảng các đơn hàng
 */
function getOrders() {
    return JSON.parse(localStorage.getItem('orders')) || [];
}

/**
 * Tải và hiển thị danh sách đơn hàng trong bảng admin
 */
function loadAdminOrders() {
    const orders = getOrders();
    const tbody = document.getElementById('ordersTableBody');
    
    // Hiển thị thông báo nếu không có đơn hàng
    if (orders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 40px; color: #7c8db5;">📦 Chưa có đơn hàng nào</td></tr>';
        return;
    }

    // Sắp xếp đơn hàng theo ngày (mới nhất lên đầu)
    orders.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render bảng đơn hàng
    tbody.innerHTML = orders.map(order => {
        // Tạo danh sách sản phẩm
        const itemsList = order.items ? order.items.map(item => `${item.name} (x${item.quantity})`).join(', ') : 'N/A';
        
        // Xác định class CSS cho trạng thái
        const statusClass = order.status === 'completed' ? 'success' : 
                           order.status === 'cancelled' ? 'danger' : 
                           order.status === 'processing' ? 'warning' : 'pending';
        
        return `
        <tr>
            <td><strong>#${order.id}</strong></td>
            <td>
                <strong>${order.customerName || 'Khách vãng lai'}</strong>
                <br><small style="color: #7c8db5;">${order.phone || ''}</small>
            </td>
            <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${itemsList}">
                ${itemsList.length > 50 ? itemsList.substring(0, 50) + '...' : itemsList}
            </td>
            <td><strong style="color: #e74c3c;">${new Intl.NumberFormat('vi-VN').format(order.total)}đ</strong></td>
            <td>${formatOrderDate(order.date)}</td>
            <td>
                <select class="status-select ${statusClass}" onchange="updateOrderStatus(${order.id}, this.value)">
                    <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>⏳ Chờ xử lý</option>
                    <option value="processing" ${order.status === 'processing' ? 'selected' : ''}>🔄 Đang xử lý</option>
                    <option value="completed" ${order.status === 'completed' ? 'selected' : ''}>✅ Hoàn thành</option>
                    <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>❌ Đã hủy</option>
                </select>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action edit" onclick="viewAdminOrderDetail(${order.id})" title="Xem chi tiết">👁️</button>
                    <button class="btn-action delete" onclick="deleteOrder(${order.id})" title="Xóa">🗑️</button>
                </div>
            </td>
        </tr>
    `}).join('');
}

/**
 * Định dạng ngày tháng cho đơn hàng
 * @param {string} dateStr - Chuỗi ngày tháng ISO
 * @returns {string} Chuỗi ngày tháng đã định dạng
 */
function formatOrderDate(dateStr) {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN') + ' ' + date.toLocaleTimeString('vi-VN', {hour: '2-digit', minute: '2-digit'});
}

/**
 * Cập nhật trạng thái đơn hàng
 * @param {number} orderId - ID đơn hàng
 * @param {string} newStatus - Trạng thái mới: 'pending', 'processing', 'completed', 'cancelled'
 */
function updateOrderStatus(orderId, newStatus) {
    let orders = getOrders();
    const orderIndex = orders.findIndex(o => o.id == orderId);
    if (orderIndex !== -1) {
        orders[orderIndex].status = newStatus;
        localStorage.setItem('orders', JSON.stringify(orders));
        loadAdminOrders();
        updateTotalRevenue(); // Cập nhật doanh thu (chỉ tính đơn completed)
        alert('✅ Đã cập nhật trạng thái đơn hàng!');
    }
}

/**
 * Hiển thị modal chi tiết đơn hàng
 * @param {number} orderId - ID đơn hàng cần xem
 */
function viewAdminOrderDetail(orderId) {
    const orders = getOrders();
    const order = orders.find(o => o.id == orderId);
    if (order) {
        // Render danh sách sản phẩm
        let itemsHTML = order.items ? order.items.map(item => 
            `<div style="display: flex; justify-content: space-between; padding: 12px; background: #f8f9fa; border-radius: 8px; margin-bottom: 8px;">
                <div>
                    <strong>${item.name}</strong>
                    <div style="color: #7c8db5; font-size: 13px;">${item.size || 'Vừa'} × ${item.quantity}</div>
                </div>
                <div style="font-weight: 600; color: #2c3e50;">${new Intl.NumberFormat('vi-VN').format(item.price * item.quantity)}đ</div>
            </div>`
        ).join('') : '<p style="text-align: center; color: #7c8db5;">Không có sản phẩm</p>';
        
        // Mapping màu và tên trạng thái
        const statusColors = {
            'pending': '#f39c12',
            'processing': '#3498db',
            'shipping': '#9b59b6',
            'completed': '#27ae60',
            'cancelled': '#e74c3c'
        };
        const statusNames = {
            'pending': 'Chờ xử lý',
            'processing': 'Đang xử lý',
            'shipping': 'Đang giao',
            'completed': 'Đã giao',
            'cancelled': 'Đã hủy'
        };
        
        // Render nội dung modal
        document.getElementById('orderDetailContent').innerHTML = `
            <div style="padding: 10px 0;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 12px; color: white; margin-bottom: 20px;">
                    <h2 style="margin: 0 0 10px 0; font-size: 24px;">Đơn hàng #${order.id}</h2>
                    <div style="display: inline-block; background: rgba(255,255,255,0.2); padding: 6px 12px; border-radius: 20px; font-size: 13px;">
                        ${formatOrderDate(order.date)}
                    </div>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <h4 style="color: #2c3e50; margin-bottom: 15px; font-size: 16px;">👤 Thông tin khách hàng</h4>
                    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                        <p style="margin: 8px 0;"><strong>Họ tên:</strong> ${order.customerName || 'Khách vãng lai'}</p>
                        <p style="margin: 8px 0;"><strong>SĐT:</strong> ${order.phone || 'N/A'}</p>
                        <p style="margin: 8px 0;"><strong>Địa chỉ:</strong> ${order.address || 'N/A'}</p>
                    </div>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <h4 style="color: #2c3e50; margin-bottom: 15px; font-size: 16px;">🛒 Danh sách sản phẩm</h4>
                    ${itemsHTML}
                </div>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <span style="color: #7c8db5;">Trạng thái:</span>
                        <span style="background: ${statusColors[order.status] || '#95a5a6'}; color: white; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">${statusNames[order.status] || order.status}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: 700; color: #2c3e50; padding-top: 15px; border-top: 2px dashed #dee2e6;">
                        <span>Tổng cộng:</span>
                        <span style="color: #e74c3c;">${new Intl.NumberFormat('vi-VN').format(order.total)}đ</span>
                    </div>
                </div>
                
                ${order.note ? `<div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107;">
                    <strong style="color: #856404;">📋 Ghi chú:</strong>
                    <p style="margin: 8px 0 0 0; color: #856404;">${order.note}</p>
                </div>` : ''}
            </div>
        `;
        document.getElementById('orderDetailModal').style.display = 'flex';
    }
}

/**
 * Đóng modal chi tiết đơn hàng
 */
function closeAdminOrderDetailModal() {
    document.getElementById('orderDetailModal').style.display = 'none';
}

/**
 * Xóa đơn hàng khỏi hệ thống
 * @param {number} orderId - ID đơn hàng cần xóa
 */
function deleteOrder(orderId) {
    if (confirm('Bạn có chắc muốn xóa đơn hàng này?')) {
        let orders = getOrders();
        orders = orders.filter(o => o.id != orderId);
        localStorage.setItem('orders', JSON.stringify(orders));
        loadAdminOrders();
        updateOrderCount();
        updateTotalRevenue();
        alert('✅ Đã xóa đơn hàng!');
    }
}

/**
 * Cập nhật số lượng đơn hàng hiển thị trên dashboard
 * Bao gồm: tổng đơn và đơn mới (đang chờ xử lý)
 */
function updateOrderCount() {
    const orders = getOrders();
    const orderCountEl = document.getElementById('totalOrders');
    const newOrdersEl = document.getElementById('newOrders');
    
    // Cập nhật tổng số đơn hàng
    if (orderCountEl) orderCountEl.textContent = orders.length;
    
    // Cập nhật số đơn mới (trạng thái pending)
    if (newOrdersEl) {
        const pendingOrders = orders.filter(o => o.status === 'pending' || !o.status).length;
        newOrdersEl.textContent = pendingOrders;
    }
}

// ==========================================
// CUSTOMER MANAGEMENT - Quản lý khách hàng
// ==========================================

/**
 * Lấy danh sách khách hàng từ localStorage
 * @returns {Array} Mảng các khách hàng (từ key 'users')
 */
function getCustomers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

/**
 * Tải và hiển thị danh sách khách hàng trong bảng admin
 * Lọc bỏ tài khoản admin, hiển thị thông tin và số đơn hàng
 */
function loadAdminCustomers() {
    const customers = getCustomers();
    const orders = getOrders();
    const tbody = document.getElementById('customersTableBody');
    
    // Lọc bỏ tài khoản admin khỏi danh sách
    const filteredCustomers = customers.filter(c => c.phone !== 'admin');
    
    // Hiển thị thông báo nếu không có khách hàng
    if (filteredCustomers.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 40px; color: #7c8db5;">👥 Chưa có khách hàng nào</td></tr>';
        return;
    }

    // Render bảng khách hàng
    tbody.innerHTML = filteredCustomers.map((customer, index) => {
        // Đếm số đơn hàng của khách hàng này
        const customerOrders = orders.filter(o => o.customerPhone === customer.phone || o.phone === customer.phone).length;
        
        return `
        <tr>
            <td><strong>#${index + 1}</strong></td>
            <td><strong>${customer.fullname || customer.name || customer.phone}</strong></td>
            <td>${customer.phone}</td>
            <td>${customer.email || 'Chưa cập nhật'}</td>
            <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                ${customer.address || 'Chưa cập nhật'}
            </td>
            <td>
                <span class="status-modern ${customerOrders > 0 ? 'success' : ''}">${customerOrders} đơn</span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action edit" onclick="viewAdminCustomerDetail('${customer.phone}')" title="Xem chi tiết">👁️</button>
                    <button class="btn-action delete" onclick="deleteCustomer('${customer.phone}')" title="Xóa">🗑️</button>
                </div>
            </td>
        </tr>
    `}).join('');
}

/**
 * Hiển thị modal chi tiết khách hàng
 * Bao gồm: thông tin cá nhân, tổng đơn, tổng chi tiêu, lịch sử đơn hàng
 * @param {string} phone - Số điện thoại khách hàng cần xem
 */
function viewAdminCustomerDetail(phone) {
    const customers = getCustomers();
    const customer = customers.find(c => c.phone === phone);
    const orders = getOrders();
    const customerOrders = orders.filter(o => o.customerPhone === phone || o.phone === phone);
    
    if (customer) {
        // Tính tổng chi tiêu của khách hàng
        const totalSpent = customerOrders.reduce((sum, o) => sum + (o.total || 0), 0);
        
        // Mapping màu cho trạng thái đơn hàng
        const statusColors = {
            'pending': '#f39c12',
            'processing': '#3498db',
            'shipping': '#9b59b6',
            'completed': '#27ae60',
            'cancelled': '#e74c3c'
        };
        
        // Mapping tên cho trạng thái đơn hàng
        const statusNames = {
            'pending': 'Chờ xử lý',
            'processing': 'Đang xử lý',
            'shipping': 'Đang giao',
            'completed': 'Đã giao',
            'cancelled': 'Đã hủy'
        };
        
        // Render danh sách đơn hàng của khách
        let ordersHTML = customerOrders.length > 0 ? 
            customerOrders.map(o => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #f8f9fa; border-radius: 8px; margin-bottom: 8px;">
                    <div>
                        <strong style="color: #2c3e50;">#${o.id}</strong>
                        <div style="color: #7c8db5; font-size: 12px; margin-top: 4px;">${formatOrderDate(o.date)}</div>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-weight: 600; color: #2c3e50; margin-bottom: 4px;">${new Intl.NumberFormat('vi-VN').format(o.total)}đ</div>
                        <span style="background: ${statusColors[o.status] || '#95a5a6'}; color: white; padding: 3px 8px; border-radius: 10px; font-size: 11px;">${statusNames[o.status] || o.status}</span>
                    </div>
                </div>
            `).join('') : 
            '<p style="text-align: center; color: #7c8db5; padding: 20px;">Chưa có đơn hàng nào</p>';
        
        // Render nội dung modal chi tiết khách hàng
        document.getElementById('customerDetailContent').innerHTML = `
            <div style="padding: 10px 0;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 12px; color: white; margin-bottom: 20px; text-align: center;">
                    <div style="width: 80px; height: 80px; background: rgba(255,255,255,0.2); border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; font-size: 36px;">
                        👤
                    </div>
                    <h2 style="margin: 0 0 8px 0; font-size: 22px;">${customer.fullname || customer.name || 'Khách hàng'}</h2>
                    <div style="opacity: 0.9; font-size: 14px;">Khách hàng thân thiết</div>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <h4 style="color: #2c3e50; margin-bottom: 15px; font-size: 16px;">📋 Thông tin cá nhân</h4>
                    <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                        <p style="margin: 10px 0;"><strong>📞 SĐT:</strong> ${customer.phone}</p>
                        <p style="margin: 10px 0;"><strong>📧 Email:</strong> ${customer.email || '<span style="color: #7c8db5;">Chưa cập nhật</span>'}</p>
                        <p style="margin: 10px 0;"><strong>📍 Địa chỉ:</strong> ${customer.address || '<span style="color: #7c8db5;">Chưa cập nhật</span>'}</p>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 12px; color: white; text-align: center;">
                        <div style="font-size: 28px; font-weight: 700; margin-bottom: 5px;">${customerOrders.length}</div>
                        <div style="font-size: 13px; opacity: 0.9;">Tổng đơn hàng</div>
                    </div>
                    <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 20px; border-radius: 12px; color: white; text-align: center;">
                        <div style="font-size: 20px; font-weight: 700; margin-bottom: 5px;">${new Intl.NumberFormat('vi-VN').format(totalSpent)}đ</div>
                        <div style="font-size: 13px; opacity: 0.9;">Tổng chi tiêu</div>
                    </div>
                </div>
                
                <div>
                    <h4 style="color: #2c3e50; margin-bottom: 15px; font-size: 16px;">🛒 Lịch sử đơn hàng</h4>
                    <div style="max-height: 300px; overflow-y: auto;">
                        ${ordersHTML}
                    </div>
                </div>
            </div>
        `;
        document.getElementById('customerDetailModal').style.display = 'flex';
    }
}

/**
 * Đóng modal chi tiết khách hàng
 */
function closeAdminCustomerDetailModal() {
    document.getElementById('customerDetailModal').style.display = 'none';
}

/**
 * Xóa khách hàng khỏi hệ thống
 * Lưu ý: Chỉ xóa thông tin khách hàng, không xóa đơn hàng
 * @param {string} phone - Số điện thoại khách hàng cần xóa
 */
function deleteCustomer(phone) {
    if (confirm('Bạn có chắc muốn xóa khách hàng này? Lưu ý: Các đơn hàng của khách hàng sẽ không bị xóa.')) {
        let customers = getCustomers();
        customers = customers.filter(c => c.phone !== phone);
        localStorage.setItem('users', JSON.stringify(customers));
        loadAdminCustomers();
        updateCustomerCount();
        alert('✅ Đã xóa khách hàng!');
    }
}

/**
 * Cập nhật số lượng khách hàng hiển thị trên dashboard
 * Lọc bỏ tài khoản admin
 */
function updateCustomerCount() {
    const customers = getCustomers().filter(c => c.phone !== 'admin');
    const customerCountEl = document.getElementById('totalCustomers');
    if (customerCountEl) customerCountEl.textContent = customers.length;
}

// ==========================================
// REVENUE & STATISTICS - Doanh thu & Thống kê
// ==========================================

/**
 * Cập nhật tổng doanh thu hiển thị trên dashboard
 * Chỉ tính các đơn hàng có trạng thái 'completed'
 * Hiển thị dạng rút gọn: 1M (triệu), 1K (nghìn)
 */
function updateTotalRevenue() {
    const orders = getOrders();
    
    // Chỉ tính đơn đã hoàn thành
    const completedOrders = orders.filter(o => o.status === 'completed');
    const totalRevenue = completedOrders.reduce((sum, o) => sum + (o.total || 0), 0);
    
    const revenueEl = document.getElementById('totalRevenue');
    if (revenueEl) {
        // Format số tiền dạng rút gọn
        if (totalRevenue >= 1000000) {
            revenueEl.textContent = (totalRevenue / 1000000).toFixed(1) + 'M';
        } else if (totalRevenue >= 1000) {
            revenueEl.textContent = (totalRevenue / 1000).toFixed(0) + 'K';
        } else {
            revenueEl.textContent = totalRevenue;
        }
    }
}

// ==========================================
// LOAD ALL DATA - Tải tất cả dữ liệu
// ==========================================

/**
 * Tải tất cả dữ liệu admin khi trang được load
 * Gọi tất cả các hàm load và update
 */
function loadAdminData() {
    loadAdminProducts();
    loadAdminOrders();
    loadAdminCustomers();
    loadRecentOrders(); // Load đơn hàng gần đây ở Dashboard
    updateProductCount();
    updateOrderCount();
    updateCustomerCount();
    updateTotalRevenue();
    updateNotificationBadges(); // Cập nhật badge thông báo
}

/**
 * Tải và hiển thị đơn hàng gần đây trên Dashboard
 * Chỉ hiển thị 5 đơn mới nhất
 */
function loadRecentOrders() {
    const orders = getOrders();
    const tbody = document.getElementById('recentOrdersBody');
    
    if (!tbody) return;
    
    // Hiển thị thông báo nếu không có đơn hàng
    if (orders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 40px; color: #7c8db5;">📦 Chưa có đơn hàng nào</td></tr>';
        return;
    }

    // Sắp xếp theo ngày và lấy 5 đơn mới nhất
    const recentOrders = [...orders]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);

    // Render bảng đơn hàng gần đây
    tbody.innerHTML = recentOrders.map(order => {
        const itemsList = order.items ? order.items.map(item => `${item.name} x${item.quantity}`).join(', ') : 'N/A';
        
        // Xác định class CSS và text cho trạng thái
        const statusClass = order.status === 'completed' ? 'success' : 
                           order.status === 'cancelled' ? 'danger' : 
                           order.status === 'processing' ? 'info' : 'warning';
        const statusText = order.status === 'completed' ? 'Hoàn thành' : 
                          order.status === 'cancelled' ? 'Đã hủy' : 
                          order.status === 'processing' ? 'Đang giao' : 'Đang xử lý';
        
        return `
        <tr>
            <td><strong>#${order.id}</strong></td>
            <td>${order.customerName || 'Khách hàng'}</td>
            <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${itemsList}">
                ${itemsList.length > 30 ? itemsList.substring(0, 30) + '...' : itemsList}
            </td>
            <td>${formatOrderDate(order.date)}</td>
            <td><strong>${new Intl.NumberFormat('vi-VN').format(order.total)}đ</strong></td>
            <td><span class="status-modern ${statusClass}">${statusText}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action" onclick="viewAdminOrderDetail(${order.id})" title="Xem chi tiết">👁️</button>
                </div>
            </td>
        </tr>
    `}).join('');
}

// ==========================================
// SEARCH AND FILTER FUNCTIONS - Tìm kiếm và lọc
// ==========================================

/**
 * Lọc sản phẩm theo danh mục và từ khóa tìm kiếm
 * Kết hợp cả bộ lọc category và search term
 */
function filterProductsByCategory() {
    const filter = document.getElementById('categoryFilter').value;
    const searchTerm = document.getElementById('productSearch').value.toLowerCase();
    const products = getProducts();
    
    // Lọc theo danh mục
    let filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    
    // Lọc theo từ khóa tìm kiếm (tên hoặc mô tả)
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayFilteredProducts(filtered);
}

/**
 * Tìm kiếm sản phẩm - gọi hàm filter để xử lý
 */
function searchProducts() {
    filterProductsByCategory();
}

/**
 * Hiển thị danh sách sản phẩm đã lọc trong bảng
 * @param {Array} products - Mảng sản phẩm đã được lọc
 */
function displayFilteredProducts(products) {
    const tbody = document.getElementById('productsTableBody');
    
    // Hiển thị thông báo nếu không tìm thấy
    if (products.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 40px; color: #7c8db5;">🔍 Không tìm thấy sản phẩm nào</td></tr>';
        return;
    }
    
    // Render bảng sản phẩm
    tbody.innerHTML = products.map(product => `
        <tr>
            <td><strong>#p${product.id}</strong></td>
            <td>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px;">
                    <strong>${product.name}</strong>
                </div>
            </td>
            <td>${getCategoryName(product.category)}</td>
            <td>${product.featured ? '<span style="color: #ffc107;">⭐ Nổi bật</span>' : ''}</td>
            <td><strong style="color: #4caf50;">${new Intl.NumberFormat('vi-VN').format(product.price)}đ</strong></td>
            <td>
                <span class="status-modern success">Đang bán</span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action view" onclick="viewProduct(${product.id})" title="Xem">👁️</button>
                    <button class="btn-action edit" onclick="editProduct(${product.id})" title="Sửa">✏️</button>
                    <button class="btn-action copy" onclick="duplicateProduct(${product.id})" title="Nhân bản">📋</button>
                    <button class="btn-action delete" onclick="deleteProduct(${product.id})" title="Xóa">🗑️</button>
                </div>
            </td>
        </tr>
    `).join('');
}

/**
 * Lọc đơn hàng theo trạng thái và từ khóa tìm kiếm
 * Có thể tìm theo ID, tên khách, số điện thoại
 */
function filterOrdersByStatus() {
    const filter = document.getElementById('orderStatusFilter').value;
    const searchTerm = document.getElementById('orderSearch').value.toLowerCase();
    const orders = getOrders();
    
    // Lọc theo trạng thái
    let filtered = filter === 'all' ? orders : orders.filter(o => o.status === filter);
    
    // Lọc theo từ khóa tìm kiếm
    if (searchTerm) {
        filtered = filtered.filter(o => 
            o.id.toString().includes(searchTerm) ||
            (o.customerName && o.customerName.toLowerCase().includes(searchTerm)) ||
            (o.customerPhone && o.customerPhone.includes(searchTerm))
        );
    }
    
    displayFilteredOrders(filtered);
}

/**
 * Tìm kiếm đơn hàng - gọi hàm filter để xử lý
 */
function searchOrders() {
    filterOrdersByStatus();
}

/**
 * Hiển thị danh sách đơn hàng đã lọc trong bảng
 * @param {Array} orders - Mảng đơn hàng đã được lọc
 */
function displayFilteredOrders(orders) {
    const tbody = document.getElementById('ordersTableBody');
    
    // Hiển thị thông báo nếu không tìm thấy
    if (orders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 40px; color: #7c8db5;">🔍 Không tìm thấy đơn hàng nào</td></tr>';
        return;
    }
    
    // Render bảng đơn hàng
    tbody.innerHTML = orders.map(order => {
        const itemsList = order.items ? order.items.map(item => `${item.name} x${item.quantity}`).join(', ') : 'N/A';
        
        // Mapping class CSS cho trạng thái
        const statusClass = {
            'completed': 'success',
            'cancelled': 'danger',
            'processing': 'info',
            'shipping': 'info',
            'pending': 'warning'
        }[order.status] || 'warning';
        
        // Mapping text cho trạng thái
        const statusText = {
            'completed': 'Hoàn thành',
            'cancelled': 'Đã hủy',
            'processing': 'Đang xử lý',
            'shipping': 'Đang giao',
            'pending': 'Chờ xử lý'
        }[order.status] || 'Chờ xử lý';
        
        return `
        <tr>
            <td><strong>#${order.id}</strong></td>
            <td>${order.customerName || 'Khách hàng'}</td>
            <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${itemsList}</td>
            <td><strong>${new Intl.NumberFormat('vi-VN').format(order.total)}đ</strong></td>
            <td>${formatOrderDate(order.date)}</td>
            <td>
                <select class="status-select ${statusClass}" onchange="updateOrderStatus(${order.id}, this.value)">
                    <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Chờ xử lý</option>
                    <option value="processing" ${order.status === 'processing' ? 'selected' : ''}>Đang xử lý</option>
                    <option value="shipping" ${order.status === 'shipping' ? 'selected' : ''}>Đang giao</option>
                    <option value="completed" ${order.status === 'completed' ? 'selected' : ''}>Hoàn thành</option>
                    <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Đã hủy</option>
                </select>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action edit" onclick="viewAdminOrderDetail(${order.id})" title="Xem chi tiết">👁️</button>
                    <button class="btn-action delete" onclick="deleteOrder(${order.id})" title="Xóa">🗑️</button>
                </div>
            </td>
        </tr>
    `}).join('');
}

/**
 * Tìm kiếm khách hàng theo tên, SĐT hoặc email
 */
function searchCustomers() {
    const searchTerm = document.getElementById('customerSearch').value.toLowerCase();
    const customers = getCustomers().filter(c => c.phone !== 'admin');
    const orders = getOrders();
    
    // Lọc theo từ khóa tìm kiếm
    const filtered = searchTerm ? customers.filter(c => 
        (c.fullname && c.fullname.toLowerCase().includes(searchTerm)) ||
        (c.name && c.name.toLowerCase().includes(searchTerm)) ||
        c.phone.includes(searchTerm) ||
        (c.email && c.email.toLowerCase().includes(searchTerm))
    ) : customers;
    
    displayFilteredCustomers(filtered, orders);
}

/**
 * Hiển thị danh sách khách hàng đã lọc trong bảng
 * @param {Array} customers - Mảng khách hàng đã được lọc
 * @param {Array} orders - Mảng tất cả đơn hàng (để đếm số đơn)
 */
function displayFilteredCustomers(customers, orders) {
    const tbody = document.getElementById('customersTableBody');
    
    // Hiển thị thông báo nếu không tìm thấy
    if (customers.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 40px; color: #7c8db5;">🔍 Không tìm thấy khách hàng nào</td></tr>';
        return;
    }
    
    // Render bảng khách hàng
    tbody.innerHTML = customers.map((customer, index) => {
        // Đếm số đơn hàng của khách
        const customerOrders = orders.filter(o => o.customerPhone === customer.phone || o.phone === customer.phone).length;
        
        return `
        <tr>
            <td><strong>#${index + 1}</strong></td>
            <td><strong>${customer.fullname || customer.name || customer.phone}</strong></td>
            <td>${customer.phone}</td>
            <td>${customer.email || 'Chưa cập nhật'}</td>
            <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                ${customer.address || 'Chưa cập nhật'}
            </td>
            <td>
                <span class="status-modern ${customerOrders > 0 ? 'success' : ''}">${customerOrders} đơn</span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action edit" onclick="viewAdminCustomerDetail('${customer.phone}')" title="Xem chi tiết">👁️</button>
                    <button class="btn-action delete" onclick="deleteCustomer('${customer.phone}')" title="Xóa">🗑️</button>
                </div>
            </td>
        </tr>
    `}).join('');
}

/**
 * Lấy tên hiển thị của danh mục sản phẩm
 * @param {string} category - Mã danh mục
 * @returns {string} Tên danh mục tiếng Việt
 */
function getCategoryName(category) {
    const names = {
        'classic': 'Pizza Cổ Điển',
        'vegetarian': 'Pizza Chay',
        'special': 'Topping Đặc Biệt'
    };
    return names[category] || category;
}

// ==========================================
// REPORTS & STATISTICS - Báo cáo & Thống kê
// ==========================================

/**
 * Format số tiền theo định dạng VND
 * @param {number} amount - Số tiền cần format
 * @returns {string} Chuỗi số tiền đã format
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' ₫';
}

/**
 * Tải và hiển thị báo cáo thống kê
 * Bao gồm: tổng doanh thu, giá trị đơn TB, tổng đơn, tỷ lệ hoàn thành
 * Chỉ tính doanh thu từ đơn hàng đã hoàn thành (completed)
 */
function loadReports() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    
    // Debug log
    console.log('loadReports called, orders:', orders.length);
    console.log('Orders detail:', orders.map(o => ({ id: o.id, status: o.status, total: o.total })));
    
    const revenueEl = document.getElementById('reportTotalRevenue');
    
    // Hiển thị giá trị 0 nếu không có đơn hàng
    if (orders.length === 0) {
        if (revenueEl) revenueEl.textContent = '0 ₫';
        const avgEl = document.getElementById('reportAvgOrder');
        if (avgEl) avgEl.textContent = '0 ₫';
        const totalEl = document.getElementById('reportTotalOrders');
        if (totalEl) totalEl.textContent = '0';
        const rateEl = document.getElementById('reportCompletionRate');
        if (rateEl) rateEl.textContent = '0.0%';
        return;
    }

    // Tính tổng doanh thu (CHỈ từ đơn completed)
    const completedOrders = orders.filter(o => o.status === 'completed');
    const totalRevenue = completedOrders.reduce((sum, order) => sum + (order.total || 0), 0);
    
    // Debug log
    console.log('Completed orders:', completedOrders.length);
    console.log('Total revenue from completed:', totalRevenue);
    
    // Tính giá trị đơn hàng trung bình (từ tất cả đơn)
    const totalOrderValue = orders.reduce((sum, order) => sum + (order.total || 0), 0);
    const avgOrderValue = orders.length > 0 ? totalOrderValue / orders.length : 0;
    
    // Tính tỷ lệ hoàn thành
    const completionRate = orders.length > 0 ? (completedOrders.length / orders.length * 100) : 0;
    
    // Đếm đơn hàng theo trạng thái
    const statusCounts = {
        pending: orders.filter(o => o.status === 'pending').length,
        processing: orders.filter(o => o.status === 'processing').length,
        shipping: orders.filter(o => o.status === 'shipping').length,
        completed: completedOrders.length,
        cancelled: orders.filter(o => o.status === 'cancelled').length
    };

    console.log('Status counts:', statusCounts);

    // Cập nhật UI với các giá trị đã tính
    if (revenueEl) revenueEl.textContent = formatCurrency(totalRevenue);
    const avgEl = document.getElementById('reportAvgOrder');
    if (avgEl) avgEl.textContent = formatCurrency(Math.round(avgOrderValue));
    const totalEl = document.getElementById('reportTotalOrders');
    if (totalEl) totalEl.textContent = orders.length;
    const rateEl = document.getElementById('reportCompletionRate');
    if (rateEl) rateEl.textContent = completionRate.toFixed(1) + '%';

    // Cập nhật biểu đồ trạng thái đơn hàng (thanh progress)
    const total = orders.length;
    const orderStatusHTML = `
        <div style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-size: 14px; color: #2c3e50; font-weight: 500;">Đang xử lý</span>
                <span style="font-size: 14px; font-weight: 600; color: #2c3e50;">${statusCounts.processing} (${(statusCounts.processing/total*100).toFixed(1)}%)</span>
            </div>
            <div style="width: 100%; height: 12px; background: #f5f5f5; border-radius: 6px; overflow: hidden;">
                <div style="width: ${statusCounts.processing/total*100}%; height: 100%; background: linear-gradient(90deg, #fdcb6e 0%, #f39c12 100%); border-radius: 6px;"></div>
            </div>
        </div>
        <div style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-size: 14px; color: #2c3e50; font-weight: 500;">Đang giao</span>
                <span style="font-size: 14px; font-weight: 600; color: #2c3e50;">${statusCounts.shipping} (${(statusCounts.shipping/total*100).toFixed(1)}%)</span>
            </div>
            <div style="width: 100%; height: 12px; background: #f5f5f5; border-radius: 6px; overflow: hidden;">
                <div style="width: ${statusCounts.shipping/total*100}%; height: 100%; background: linear-gradient(90deg, #74b9ff 0%, #0984e3 100%); border-radius: 6px;"></div>
            </div>
        </div>
        <div style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-size: 14px; color: #2c3e50; font-weight: 500;">Đã giao</span>
                <span style="font-size: 14px; font-weight: 600; color: #2c3e50;">${statusCounts.completed} (${(statusCounts.completed/total*100).toFixed(1)}%)</span>
            </div>
            <div style="width: 100%; height: 12px; background: #f5f5f5; border-radius: 6px; overflow: hidden;">
                <div style="width: ${statusCounts.completed/total*100}%; height: 100%; background: linear-gradient(90deg, #55efc4 0%, #00b894 100%); border-radius: 6px;"></div>
            </div>
        </div>
    `;
    
    // Render biểu đồ vào DOM
    const chartElement = document.getElementById('orderStatusChart');
    if (chartElement) {
        chartElement.innerHTML = orderStatusHTML;
    }
}

// ==========================================
// INITIALIZE - Khởi tạo
// ==========================================

/**
 * Khởi tạo trang admin khi DOM được load xong
 * Kiểm tra xác thực admin và load dữ liệu
 */
document.addEventListener('DOMContentLoaded', function() {
    checkAdminAuth();
});
