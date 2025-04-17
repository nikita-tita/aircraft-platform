// Проверяем, что данные доступны глобально
window.mockRequests = [
    {
        id: 1,
        title: "Запрос на покупку Airbus A320",
        model: "Airbus A320",
        category: "regional",
        year: 2020,
        price: 45,
        condition: "Новый",
        capacity: 180,
        range: 6000,
        region: "Европа",
        marketSegment: "Регулярные пассажирские рейсы",
        description: "Ищем новый самолет Airbus A320 для международных перевозок. Требования: пассажировместимость от 180 человек, срок эксплуатации до 5 лет.",
        contact: {
            name: "Иван Петров",
            avatar: "https://ui-avatars.com/api/?name=Иван+Петров&background=random"
        },
        phone: "+7 (999) 123-45-67",
        email: "ivan.petrov@example.com",
        groupId: "group1"
    },
    {
        id: 2,
        title: "Запрос на Boeing 737",
        model: "Boeing 737",
        category: "regional",
        year: 2018,
        price: 35,
        condition: "Б/У",
        capacity: 200,
        range: 5000,
        region: "Россия",
        marketSegment: "Чартерные рейсы",
        description: "Ищем Boeing 737 для региональных перевозок. Требования: до 200 пассажиров, с возможностью работы в холодных климатических условиях.",
        contact: {
            name: "Анна Сидорова",
            avatar: "https://ui-avatars.com/api/?name=Анна+Сидорова&background=random"
        },
        phone: "+7 (999) 765-43-21",
        email: "anna.sidorova@example.com",
        groupId: "group1"
    },
    {
        id: 3,
        title: "Запрос на Embraer 190",
        model: "Embraer 190",
        category: "regional",
        year: 2019,
        price: 25,
        condition: "Новый",
        capacity: 100,
        range: 4000,
        region: "Азия",
        marketSegment: "Чартерные рейсы",
        description: "Необходим Embraer 190 для чартерных рейсов по Европе. Требования: пассажировместимость до 100 человек, желательно наличие климатической системы.",
        contact: {
            name: "Михаил Иванов",
            avatar: "https://ui-avatars.com/api/?name=Михаил+Иванов&background=random"
        },
        phone: "+7 (999) 987-65-43",
        email: "mikhail.ivanov@example.com"
    },
    {
        id: 4,
        title: "Запрос на Airbus A380",
        model: "Airbus A380",
        category: "longRange",
        year: 2021,
        price: 120,
        condition: "Новый",
        capacity: 550,
        range: 15000,
        region: "Северная Америка",
        marketSegment: "Регулярные пассажирские рейсы",
        description: "Ищем новый Airbus A380 для трансатлантических перелетов. Требования: максимальная пассажировместимость, современное оборудование.",
        contact: {
            name: "Джон Смит",
            avatar: "https://ui-avatars.com/api/?name=Джон+Смит&background=random"
        },
        phone: "+1 (555) 123-4567",
        email: "john.smith@example.com"
    },
    {
        id: 5,
        title: "Запрос на Boeing 787 Dreamliner",
        model: "Boeing 787 Dreamliner",
        category: "large",
        year: 2022,
        price: 95,
        condition: "Новый",
        capacity: 300,
        range: 12000,
        region: "Азия",
        marketSegment: "Регулярные пассажирские рейсы",
        description: "Ищем Boeing 787 Dreamliner для дальнемагистральных перелетов. Требования: экономичность, комфорт для пассажиров.",
        contact: {
            name: "Ли Вэй",
            avatar: "https://ui-avatars.com/api/?name=Ли+Вэй&background=random"
        },
        phone: "+86 123 4567 8901",
        email: "li.wei@example.com"
    },
    {
        id: 6,
        title: "Запрос на Cessna Citation Mustang",
        model: "Cessna Citation Mustang",
        category: "small",
        year: 2020,
        price: 4.5,
        condition: "Б/У",
        capacity: 4,
        range: 2000,
        region: "Европа",
        marketSegment: "Чартерные рейсы",
        description: "Ищем Cessna Citation Mustang для бизнес-перелетов. Требования: малый расход топлива, комфортный салон.",
        contact: {
            name: "Пьер Дюпон",
            avatar: "https://ui-avatars.com/api/?name=Пьер+Дюпон&background=random"
        },
        phone: "+33 1 23 45 67 89",
        email: "pierre.dupont@example.com"
    }
];

console.log('Mock данные загружены:', window.mockRequests.length, 'запросов'); 