// const goods = [
//   {
//     id: 246016548,
//     title: 'Навигационная система Soundmax',
//     price: 100,
//     category: 'Техника для дома',
//     count: 5,
//     units: 'шт',
//     img: 'img/1.jpg',
//   },
//   {
//     id: 937295527,
//     title: 'Настольная игра “На 4-х ногах”',
//     price: 14,
//     category: 'Настольные игры',
//     count: 12,
//     units: 'шт',
//     img: 'img/2.jpg',
//   },
//   {
//     id: 246016558,
//     title: 'Навигационная система Soundmax',
//     price: 100,
//     category: 'Техника для дома',
//     count: 5,
//     units: 'шт',
//     img: 'img/1.jpg',
//   },
//   {
//     id: 937295517,
//     title: 'Настольная игра “На 4-х ногах”',
//     price: 14,
//     category: 'Настольные игры',
//     count: 12,
//     units: 'шт',
//     img: 'img/1.jpg',
//   },
//   {
//     id: 215796598,
//     title: 'ТВ приставка MECOOL KI',
//     price: 9500,
//     category: 'Техника для дома',
//     count: 3,
//     units: 'шт',
//     img: 'img/2.jpg',
//   },
//   {
//     id: 215796550,
//     title: 'Телевизор',
//     price: 19500,
//     category: 'Техника для дома',
//     count: 5,
//     units: 'шт',
//     img: 'img/1.jpg',
//   },
// ];

const URL = 'https://fourth-elastic-tortoise.glitch.me/api/goods';

const getGoods = async () => {
  const response = await fetch(URL);
  const result = await response.json();

  return result;
};

const goods = await getGoods();

export default goods;
