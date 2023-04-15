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

  const openModal = () => modalOverlay.classList.add('is-visible');
  const closeModal = () => modalOverlay.classList.remove('is-visible');

  const modalControl = () => {
    addBtn.addEventListener('click', openModal);

    modalOverlay.addEventListener('click', e => {
      const target = e.target;
      if (target === modalOverlay || target.closest('.modal__close-img')) {
        closeModal();
      }
    });
  };

  const activeField = ({discount, discountField}) => {
    form.addEventListener('click', () => {
      if (discount.checked) {
        discountField.disabled = false;
      } else {
        discountField.value = '';
        discountField.disabled = true;
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
        <td>$<span class="total-price">${price * count}</span></td>
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

  const renderTotalPrice = () => {
    const totalPrice = document.querySelector('.crm__price');
    const tablePrices = document.querySelectorAll('.total-price');

    let count = 0;
    const prices = [];

    tablePrices.forEach(item => {
      prices.push(+item.textContent);
    });

    count = prices.reduce((acc, item) => acc += item, 0);

    totalPrice.textContent = `$${count}`;
  };

  const renderGoods = (arr) =>
    arr.map(item => tableBody.insertAdjacentHTML('beforeend', createRow(item)));

  const deleteTr = () => {
    const crm = document.querySelector('.crm');
    crm.addEventListener('click', e => {
      const target = e.target;

      if (target.closest('.delete')) {
        target.closest('tr').remove();
        renderTotalPrice();
      }
    });
  };

  const formControl = (form) => {
    form.price.addEventListener('blur', e => {
      const totalPrice = document.querySelector('.modal__price');
      totalPrice.textContent = `$${form.price.value * form.amount.value}`;
    });

    form.addEventListener('submit', e => {
      e.preventDefault();

      const id = document.querySelector('.modal__id-value');
      const formData = new FormData(e.target);

      const newRow = Object.fromEntries(formData);

      newRow.id = id.textContent;
      newRow.title = newRow.name;
      newRow.count = newRow.amount;

      tableBody.insertAdjacentHTML('beforeend', createRow(newRow));

      form.reset();
      closeModal();
      renderTotalPrice();
    });
  };

  const init = () => {
    renderGoods(goods);
    modalControl();
    deleteTr();
    activeField(form);
    formControl(form);
    renderTotalPrice();
  };

  window.crmInit = init;
}
