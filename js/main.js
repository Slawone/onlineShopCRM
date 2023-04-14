'use strict';

// const modalTitle = document.querySelector('.modal__title');
// const modalCloseBtn = document.querySelector('.modal__close');
// const modalIdValue = document.querySelector('.modal__id-value');
// const modalForm = document.querySelector('.modal');
// const checkboxItem = document.querySelector('.checkbox__item');
// const checkboxInput = document.querySelector('.checkbox__input');
// const modalPrice = document.querySelector('.modal__price');
const tableBody = document.querySelector('.table__body');
// const modal = document.querySelector('.modal');
const addBtn = document.querySelector('.crm__btn_add-product');
// const closeFormBtn = document.querySelector('.modal__close-img');
const modalOverlay = document.querySelector('.modal-overlay');

addBtn.addEventListener('click', () => {
  modalOverlay.classList.add('is-visible');
});

modalOverlay.addEventListener('click', e => {
  const target = e.target;
  if (target === modalOverlay || target.closest('.modal__close-img')) {
    modalOverlay.classList.remove('is-visible');
  }
});

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
        <button class="delete">
          <img src="img/delete.svg">
        </button>
      </td>
    </tr>
  `;
};

const renderGoods = (arr) =>
  arr.map(item => tableBody.insertAdjacentHTML('beforeend', createRow(item)));

tableBody.addEventListener('click', e => {
  const target = e.target;

  if (target.closest('.delete')) {
    target.closest('tr').remove();
  }
});


renderGoods(goods);
