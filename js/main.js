'use strict';

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

{
  const tableBody = document.querySelector('.table__body');
  const addBtn = document.querySelector('.crm__btn_add-product');
  const modalOverlay = document.querySelector('.modal-overlay');
  const form = document.querySelector('.modal');

  const modalControl = () => {
    const openModal = () => modalOverlay.classList.add('is-visible');
    const closeModal = () => modalOverlay.classList.remove('is-visible');

    addBtn.addEventListener('click', openModal);

    modalOverlay.addEventListener('click', e => {
      const target = e.target;
      if (target === modalOverlay || target.closest('.modal__close-img')) {
        closeModal();
      }
    });
  };

  const activeField = (form) => {
    form.addEventListener('click', () => {
      if (form.discount.checked) {
        form.discountField.disabled = false;
      } else {
        form.discountField.value = '';
        form.discountField.disabled = true;
      }
    });
  };

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

  const deleteTr = () => {
    const crm = document.querySelector('.crm');
    crm.addEventListener('click', e => {
      const target = e.target;

      if (target.closest('.delete')) {
        target.closest('tr').remove();
      }
    });
  };


  const init = () => {
    renderGoods(goods);
    modalControl();
    deleteTr();
    activeField(form);
  };

  window.crmInit = init;
}
