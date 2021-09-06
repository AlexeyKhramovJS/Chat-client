const firstValues = ['Ленивый', 'Редкий', 'Брутальный', 'Безумный', 'Застенчивый', 'Загадочный', 'Отважный', 'Сказочный', 'Могучий', 'Последний'];
const secondValues = ['Пингвин', 'Мандарин', 'Шаман', 'Клоун', 'Пират', 'Авокадо', 'Хомяк', 'Покемон', 'Викинг', 'Танцор'];

const getElementName = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

export const getName = () => {
    return `${getElementName(firstValues)}  ${getElementName(secondValues)}`;
};