const aircraftData = {
    categories: {
        regional: {
            name: "Региональные самолеты",
            models: ["Airbus A320", "Boeing 737", "Embraer 190", "Bombardier Q400", "Sukhoi Superjet 100"]
        },
        medium: {
            name: "Средние самолеты",
            models: ["Airbus A321", "Boeing 757", "McDonnell Douglas MD-80", "Mitsubishi MRJ", "Sukhoi Superjet 130"]
        },
        large: {
            name: "Большие самолеты",
            models: ["Airbus A330", "Boeing 777", "Boeing 787 Dreamliner", "Airbus A350", "Lockheed Martin C-130 Hercules"]
        },
        longRange: {
            name: "Дальнемагистральные самолеты",
            models: ["Airbus A380", "Boeing 747", "Concorde"]
        },
        small: {
            name: "Малые самолеты",
            models: ["Cessna Citation Mustang", "Gulfstream G200", "Bombardier Learjet 75", "Piper Navajo", "Pilatus PC-12"]
        }
    },
    years: {
        ranges: [
            { name: "2020-2025", min: 2020, max: 2025 },
            { name: "2015-2019", min: 2015, max: 2019 },
            { name: "2010-2014", min: 2010, max: 2014 },
            { name: "2005-2009", min: 2005, max: 2009 },
            { name: "2000-2004", min: 2000, max: 2004 },
            { name: "1995-1999", min: 1995, max: 1999 }
        ]
    },
    prices: [
        { name: "До 5 млн", max: 5 },
        { name: "5-10 млн", min: 5, max: 10 },
        { name: "10-20 млн", min: 10, max: 20 },
        { name: "20-50 млн", min: 20, max: 50 },
        { name: "50+ млн", min: 50 }
    ],
    conditions: ["Новый", "Б/У", "Ремонт", "Аренда", "В аренде"],
    capacities: [
        { name: "До 50 человек", max: 50 },
        { name: "50-100 человек", min: 50, max: 100 },
        { name: "100-150 человек", min: 100, max: 150 },
        { name: "150-200 человек", min: 150, max: 200 },
        { name: "200+ человек", min: 200 }
    ],
    ranges: [
        { name: "До 2 000 км", max: 2000 },
        { name: "2 000-5 000 км", min: 2000, max: 5000 },
        { name: "5 000-10 000 км", min: 5000, max: 10000 },
        { name: "10 000+ км", min: 10000 }
    ],
    regions: ["Россия", "Европа", "Северная Америка", "Азия", "Южная Америка"],
    marketSegments: ["Чартерные рейсы", "Регулярные пассажирские рейсы", "Грузовые рейсы", "Военные/специальные"]
}; 