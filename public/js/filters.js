document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM загружен');
    console.log('Количество запросов:', mockRequests.length);
    
    // Инициализация фильтров
    initFilters();
    
    // Обработчики событий
    document.getElementById('applyFilters').addEventListener('click', applyFilters);
    document.getElementById('resetFilters').addEventListener('click', resetFilters);

    // Показываем все запросы при загрузке
    console.log('Пытаемся отобразить запросы...');
    displayRequests(mockRequests);

    // Инициализация бургер-меню
    const burgerBtn = document.getElementById('burgerBtn');
    const headerNav = document.querySelector('.header-nav');
    const asideNav = document.querySelector('.aside nav');
    const headerNavContainer = document.querySelector('.header-nav');

    // Создаем объединенное меню при загрузке страницы
    if (window.innerWidth <= 768) {
        const asideNavClone = asideNav.cloneNode(true);
        asideNavClone.className = 'aside-nav';
        headerNav.appendChild(asideNavClone);
    }

    if (burgerBtn && headerNav) {
        burgerBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            headerNav.classList.toggle('active');
        });

        // Добавляем пункты меню из сайдбара в бургер-меню
        if (asideNav && headerNavContainer) {
            const asideLinks = asideNav.querySelectorAll('.nav-link');
            asideLinks.forEach(link => {
                const clone = link.cloneNode(true);
                headerNavContainer.appendChild(clone);
            });
        }
    }

    // Закрытие меню при клике вне его области
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.header-nav') && 
                !e.target.closest('.burger-btn')) {
                burgerBtn.classList.remove('active');
                headerNav.classList.remove('active');
            }
        }
    });

    // Инициализация сворачиваемых фильтров
    const filtersToggle = document.querySelector('.filters-toggle');
    const filtersContent = document.querySelector('.filters-content');

    if (filtersToggle) {
        filtersToggle.addEventListener('click', () => {
            filtersToggle.classList.toggle('active');
            filtersContent.classList.toggle('active');
        });
    }

    // Функционал бургер-меню
    if (burgerBtn && headerNav) {
        // Создаем мобильное меню только для мобильных устройств
        if (window.innerWidth <= 768) {
            const mobileMenu = document.createElement('div');
            mobileMenu.className = 'mobile-menu';
            mobileMenu.style.cssText = `
                position: fixed;
                top: 72px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 72px);
                background-color: var(--primary-color);
                flex-direction: column;
                padding: 2rem;
                transition: left 0.3s ease;
                z-index: 999;
                overflow-y: auto;
            `;

            // Добавляем только основные пункты меню из хедера
            const headerLinks = headerNav.querySelectorAll('.nav-link');
            headerLinks.forEach(link => {
                const clone = link.cloneNode(true);
                clone.style.cssText = `
                    width: 100%;
                    padding: 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    color: white;
                    text-decoration: none;
                    transition: background-color 0.2s;
                `;
                mobileMenu.appendChild(clone);
            });

            document.body.appendChild(mobileMenu);

            burgerBtn.addEventListener('click', function() {
                this.classList.toggle('active');
                mobileMenu.style.left = mobileMenu.style.left === '0px' ? '-100%' : '0px';
            });

            // Закрываем меню при клике вне его области
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.mobile-menu') && 
                    !e.target.closest('.burger-btn') && 
                    mobileMenu.style.left === '0px') {
                    burgerBtn.classList.remove('active');
                    mobileMenu.style.left = '-100%';
                }
            });
        }
    }
});

function initFilters() {
    // Создание выпадающих списков для категорий самолетов
    const categorySelect = document.getElementById('aircraft-category');
    Object.entries(aircraftData.categories).forEach(([key, category]) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = category.name;
        category.models.forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            optgroup.appendChild(option);
        });
        categorySelect.appendChild(optgroup);
    });

    // Инициализация остальных фильтров
    initSelect('year-range', aircraftData.years.ranges.map(range => range.name));
    initSelect('price-range', aircraftData.prices.map(price => price.name));
    initSelect('condition', aircraftData.conditions);
    initSelect('capacity', aircraftData.capacities.map(cap => cap.name));
    initSelect('range', aircraftData.ranges.map(range => range.name));
    initSelect('region', aircraftData.regions);
    initSelect('market-segment', aircraftData.marketSegments);
}

function initSelect(id, options) {
    const select = document.getElementById(id);
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });
}

function applyFilters() {
    const filters = {
        category: document.getElementById('aircraft-category').value,
        year: document.getElementById('year-range').value,
        price: document.getElementById('price-range').value,
        condition: document.getElementById('condition').value,
        capacity: document.getElementById('capacity').value,
        range: document.getElementById('range').value,
        region: document.getElementById('region').value,
        marketSegment: document.getElementById('market-segment').value
    };

    // Фильтруем запросы
    const filteredRequests = mockRequests.filter(request => {
        // Если фильтр не выбран (значение по умолчанию - пустая строка), пропускаем проверку
        if (filters.category && request.model !== filters.category) return false;
        
        if (filters.year) {
            const yearRange = aircraftData.years.ranges.find(r => r.name === filters.year);
            if (yearRange && (request.year < yearRange.min || request.year > yearRange.max)) return false;
        }
        
        if (filters.price) {
            const priceRange = aircraftData.prices.find(p => p.name === filters.price);
            if (priceRange) {
                if (priceRange.min && request.price < priceRange.min) return false;
                if (priceRange.max && request.price > priceRange.max) return false;
            }
        }
        
        if (filters.condition && request.condition !== filters.condition) return false;
        
        if (filters.capacity) {
            const capacityRange = aircraftData.capacities.find(c => c.name === filters.capacity);
            if (capacityRange) {
                if (capacityRange.min && request.capacity < capacityRange.min) return false;
                if (capacityRange.max && request.capacity > capacityRange.max) return false;
            }
        }
        
        if (filters.range) {
            const rangeData = aircraftData.ranges.find(r => r.name === filters.range);
            if (rangeData) {
                if (rangeData.min && request.range < rangeData.min) return false;
                if (rangeData.max && request.range > rangeData.max) return false;
            }
        }
        
        if (filters.region && request.region !== filters.region) return false;
        if (filters.marketSegment && request.marketSegment !== filters.marketSegment) return false;
        
        return true;
    });

    console.log('Отфильтрованные запросы:', filteredRequests);
    displayRequests(filteredRequests);
}

function resetFilters() {
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.selectedIndex = 0;
    });
    displayRequests(mockRequests);
}

function groupRequests(requests) {
    const groups = {};
    
    requests.forEach(request => {
        const category = request.category || 'other';
        if (!groups[category]) {
            groups[category] = {
                title: getCategoryTitle(category),
                requests: []
            };
        }
        groups[category].requests.push(request);
    });
    
    return Object.values(groups);
}

function getCategoryTitle(category) {
    const titles = {
        regional: 'Региональные самолеты',
        longRange: 'Дальнемагистральные самолеты',
        large: 'Крупные самолеты',
        small: 'Малые самолеты',
        other: 'Другие самолеты'
    };
    return titles[category] || 'Другие самолеты';
}

function displayRequests(requests) {
    const container = document.getElementById('requests-container');
    if (!container) {
        console.error('Контейнер запросов не найден');
        return;
    }

    container.innerHTML = '';

    if (requests.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <h3 class="empty-state-title">Запросы не найдены</h3>
                <p class="empty-state-description">Попробуйте изменить параметры фильтрации</p>
            </div>
        `;
        return;
    }

    const groupedRequests = groupRequests(requests);
    
    for (const [group, groupRequests] of Object.entries(groupedRequests)) {
        const groupContainer = document.createElement('div');
        groupContainer.className = 'group-card';
        
        const groupHeader = document.createElement('div');
        groupHeader.className = 'group-header';
        groupHeader.innerHTML = `
            <h2>${group}</h2>
            <span class="count">${groupRequests.length}</span>
        `;

        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'cards-container';
        cardsContainer.id = `${group.toLowerCase()}-cards`;

        const paginationContainer = document.createElement('div');
        paginationContainer.className = 'pagination';
        paginationContainer.id = `${group.toLowerCase()}-pagination`;

        groupContainer.appendChild(groupHeader);
        groupContainer.appendChild(cardsContainer);
        groupContainer.appendChild(paginationContainer);
        container.appendChild(groupContainer);

        // Отображаем первую страницу для группы
        displayGroupPage(groupRequests, group.toLowerCase(), 1);
    }
}

function displayGroupPage(requests, groupId, page) {
    const itemsPerPage = 5;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageRequests = requests.slice(startIndex, endIndex);
    const totalPages = Math.ceil(requests.length / itemsPerPage);

    const cardsContainer = document.getElementById(`${groupId}-cards`);
    const paginationContainer = document.getElementById(`${groupId}-pagination`);

    // Очищаем контейнеры
    cardsContainer.innerHTML = '';
    paginationContainer.innerHTML = '';

    // Отображаем карточки
    pageRequests.forEach(request => {
        const card = createRequestCard(request);
        cardsContainer.appendChild(card);
    });

    // Создаем пагинацию
    let paginationHTML = `
        <a href="#" class="pagination-item ${page === 1 ? 'disabled' : ''}" data-page="${page - 1}">
            <i class="fas fa-chevron-left"></i>
        </a>
    `;

    // Добавляем номера страниц
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
            paginationHTML += `
                <a href="#" class="pagination-item ${i === page ? 'active' : ''}" data-page="${i}">
                    ${i}
                </a>
            `;
        } else if (i === page - 2 || i === page + 2) {
            paginationHTML += '<span class="pagination-ellipsis">...</span>';
        }
    }

    paginationHTML += `
        <a href="#" class="pagination-item ${page === totalPages ? 'disabled' : ''}" data-page="${page + 1}">
            <i class="fas fa-chevron-right"></i>
        </a>
    `;

    paginationContainer.innerHTML = paginationHTML;

    // Добавляем обработчики событий для пагинации
    paginationContainer.querySelectorAll('.pagination-item:not(.disabled)').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const newPage = parseInt(e.currentTarget.dataset.page);
            displayGroupPage(requests, groupId, newPage);
        });
    });
}

function createRequestCard(request) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-header">
            <div class="avatar">${getInitials(request.contact.name)}</div>
            <div class="card-title">
                <h4>${request.model}</h4>
                <p class="card-subtitle">${request.contact.name}</p>
            </div>
        </div>
        <div class="card-body">
            <div class="price">${formatPrice(request.price * 1000000)}</div>
            <p class="description">${request.description}</p>
            <div class="metadata">
                <div class="metadata-item">
                    <span class="metadata-label">Год выпуска:</span>
                    <span class="metadata-value">${request.year}</span>
                </div>
                <div class="metadata-item">
                    <span class="metadata-label">Состояние:</span>
                    <span class="metadata-value">${request.condition}</span>
                </div>
                <div class="metadata-item">
                    <span class="metadata-label">Регион:</span>
                    <span class="metadata-value">${request.region}</span>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <button class="btn-primary">Связаться</button>
        </div>
    `;
    return card;
}

function getInitials(name) {
    return name.split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase();
}

function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0
    }).format(price);
} 