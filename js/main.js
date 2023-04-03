'use strict';

// const modalTitle = document.querySelector('.modal__title');
// const modalCloseBtn = document.querySelector('.modal__close');
// const modalIdValue = document.querySelector('.modal__id-value');
// const modalForm = document.querySelector('.modal');
// const checkboxItem = document.querySelector('.checkbox__item');
// const checkboxInput = document.querySelector('.checkbox__input');
// const modalPrice = document.querySelector('.modal__price');
const tableBody = document.querySelector('.table__body');

const goods = [
  {
    id: 215796548,
    title: 'ТВ приставка MECOOL KI',
    price: 9500,
    category: 'Техника для дома',
    count: 3,
    units: 'шт',
  },
  {
    id: 215796550,
    title: 'Телевизор',
    price: 19500,
    category: 'Техника для дома',
    count: 5,
    units: 'шт',
  },
];

const createRow = (obj) => {
  const {id, price, title, category, count, units} = obj;

  return `
    <tr>
      <td>${id}</td>
      <td>${title}</td>
      <td>${category}</td>
      <td>${units}</td>
      <td>${count}</td>
      <td>${price}</td>
      <td>${price * count}</td>
      <td class="table__icons">
        <button>
          <img src="img/no-image.svg">
        </button>
        <button>
          <img src="img/edit.svg">
        </button>
        <button>
          <img src="img/delete.svg">
        </button>
      </td>
    </tr>
  `;
};

const renderGoods = (arr) =>
  arr.map(item => tableBody.insertAdjacentHTML('beforeend', createRow(item)));

renderGoods(goods);
