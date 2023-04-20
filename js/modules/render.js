import createRow from './create.js';
import {tableBody} from './constants.js';

export const renderTotalPrice = () => {
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

export const renderGoods = (arr) =>
  arr.map(item => tableBody.insertAdjacentHTML('beforeend', createRow(item)));

export const deleteTr = () => {
  const crm = document.querySelector('.crm');
  crm.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.delete')) {
      target.closest('tr').remove();
      renderTotalPrice();
    }
  });
};
