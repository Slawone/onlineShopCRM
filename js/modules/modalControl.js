import createRow from './create.js';
import {renderTotalPrice} from './render.js';
import {tableBody, addBtn, modalOverlay, form} from './constants.js';
import { fetchRequest } from './fetch.js';

const openModal = () => modalOverlay.classList.add('is-visible');
const closeModal = () => modalOverlay.classList.remove('is-visible');

export const modalControl = () => {
  addBtn.addEventListener('click', openModal);

  modalOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === modalOverlay || target.closest('.modal__close-img')) {
      closeModal();
    }
  });
};

export const activeField = ({discount, discountField}) => {
  form.addEventListener('click', () => {
    if (discount.checked) {
      discountField.disabled = false;
    } else {
      discountField.value = '';
      discountField.disabled = true;
    }
  });
};

export const formControl = (form) => {
  const totalPrice = document.querySelector('.modal__price');

  form.price.addEventListener('blur', e => {
    const cost = form.price.value * form.count.value;
    const sale = cost - form.discountField.value * cost / 100;
    totalPrice.textContent = `$${sale}`;
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newRow = Object.fromEntries(formData);
   
    const id = document.querySelector('.modal__id-value');

    newRow.id = id.textContent;

    fetchRequest('https://fourth-elastic-tortoise.glitch.me/api/goods/', {
      method: 'POST',
      body: {
        title: newRow.title,
        category: newRow.category,
        units: newRow.units,
        discountField: newRow.discountField,
        description: newRow.description,
        count: newRow.count,
        price: newRow.price,
      },
      callback(err, data) {
        if (err) {
          form.textContent = 'err';
        } else {
          tableBody.insertAdjacentHTML('beforeend', createRow(newRow));
          form.reset();
          totalPrice.textContent = 0;
          closeModal();
          renderTotalPrice();
        }
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
  });
};
