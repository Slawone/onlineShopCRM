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

export const openImageInNewTab = (arr) => {
  const crm = document.querySelector('.crm');
  crm.addEventListener('click', e => {
    const target = e.target;
    const tr = target.closest('tr');
    if (target.closest('.good-img')) {
      arr.forEach(item => {
        if (item.id === +tr.firstElementChild.textContent) {
          const width = screen.width / 2 - 600 / 2;
          const height = screen.availHeight / 2 - 600 / 2;
          // const imgPath = `${tr.dataset.pic}`;
          const img = document.createElement('img');
          img.src = tr.dataset.pic;
          // img.style.width = `600px`;
          // img.style.height = `600px`;
          const win =
            open(tr.dataset.pic, '', 'width=600,height=600');

          win.document.body.append(img);
          win.moveBy(width, height);
        }
      });
    }
  });
};
