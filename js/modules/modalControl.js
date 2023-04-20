import createRow from './create.js';
import {renderTotalPrice} from './render.js';
import {tableBody, addBtn, modalOverlay, form} from './constants.js';

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
    const cost = form.price.value * form.amount.value;
    const sale = cost - form.discountField.value * cost / 100;
    totalPrice.textContent = `$${sale}`;
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
    totalPrice.textContent = 0;
    closeModal();
    renderTotalPrice();
  });
};
