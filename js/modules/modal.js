import loadStyle from './loadStyle.js';
import { fetchRequest } from './fetch.js';

const showModal = async () => {
  await loadStyle('css/modal.css');

  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');
  
  const form = document.createElement('form');
  form.classList.add('modal');

  const modalBack = document.createElement('div');
  modalBack.classList.add('modal__back');

  const modalClose = document.createElement('button');
  modalClose.classList.add('modal__close');
  modalClose.type = 'button';

  const modalCloseImg = document.createElement('img');
  modalCloseImg.classList.add('modal__close-img');
  modalCloseImg.src = 'img/close.svg';
  modalCloseImg.alt = 'Закрыть форму';

  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal__container');

  // Modal Box

  const modalBox = document.createElement('div');
  modalBox.classList.add('modal__box');

  const modalTitle = document.createElement('h2');
  modalTitle.classList.add('modal__title');
  modalTitle.textContent = 'Добавить ТОВАР';

  const modalId = document.createElement('div');
  modalId.classList.add('modal__id');
  modalId.textContent = 'id: ';

  const modalIdValue = document.createElement('span');
  modalIdValue.classList.add('modal__id-value');
  modalIdValue.textContent = '201910241';

  // Modal Body

  const modalBody = document.createElement('div');
  modalBody.classList.add('modal__body');

  modalBody.insertAdjacentHTML('beforeend', `
    <fieldset class="field-name">
      <h3 class="modal__input-title">Наименование</h3>
      <label class="modal__label">
        <input type="text" name="title" class="modal__input" required>
      </label>
    </fieldset>
    <fieldset class="field-category">
      <h3 class="modal__input-title">Категория</h3>
      <label class="modal__label">
        <input class="modal__input" type="text" name="category" required>
      </label>
    </fieldset>
    <fieldset class="field-units">
      <h3 class="modal__input-title">Единицы измерения</h3>
      <label class="modal__label">
        <input class="modal__input" type="text" name="units" required>
      </label>
    </fieldset>
    <fieldset class="field-discount">
      <h3 class="modal__input-title">Дисконт</h3>
      <label class="checkbox modal__label">
        <input class="checkbox__item" type="checkbox" name="discount">
        <span class="checkbox__custom-item"></span>
        <input class="checkbox__input modal__input" type="text"
        name="discountField" disabled>
      </label>
    </fieldset>
    <fieldset class="field-descr">
      <h3 class="modal__input-title">Описание</h3>
      <label class="modal__label">
        <textarea class="modal__textarea" name="description" required></textarea>
      </label>
    </fieldset>
    <fieldset class="field-amount">
      <h3 class="modal__input-title">Количество</h3>
      <label class="modal__label">
        <input class="modal__input" type="number" name="count" required>
      </label>
    </fieldset>
    <fieldset class="field-price">
      <h3 class="modal__input-title">Цена</h3>
      <label class="modal__label">
        <input class="modal__input" type="number" name="price" required>
      </label>
    </fieldset>
    <button class="modal__btn modal__btn_add-img">Добавить изображение</button>
  `); 


  // Modal Footer

  const modalFooter = document.createElement('div');
  modalFooter.classList.add('modal__footer');

  const modalCost = document.createElement('div');
  modalCost.classList.add('modal__cost');
  modalCost.textContent = 'Итоговая стоимость: ';

  const modalPrice = document.createElement('span');
  modalPrice.classList.add('modal__price');
  modalPrice.textContent = '$0';

  const modalAddProduct = document.createElement('button');
  modalAddProduct.classList.add('modal__btn', 'modal__btn_add-product');
  modalAddProduct.type = 'submit';
  modalAddProduct.textContent = 'Добавить товар';


  modalOverlay.append(form);
  form.append(modalBack);
  modalClose.append(modalCloseImg);
  modalBack.append(modalClose, modalContainer);
  modalContainer.append(modalBox, modalBody, modalFooter);
  modalBox.append(modalTitle, modalId);
  modalId.append(modalIdValue);
  modalFooter.append(modalCost, modalAddProduct);
  modalCost.append(modalPrice);
  
  document.body.append(modalOverlay);

  modalOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === modalOverlay || target.closest('.modal__close-img')) {
      modalOverlay.remove();
    }
  });

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
    const modalBtnAdd = document.querySelector('.modal__btn_add-img');
   
    const id = document.querySelector('.modal__id-value');

    newRow.id = id.textContent;

    fetchRequest('https://fourth-elastic-tortoise.glitch.me/api/goods', {
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
        if (+err === 422 || +err === 404 || +err >= 500) {
          modalBtnAdd.insertAdjacentHTML('beforebegin', `
            <div class="modal-error">Произошла ошибка ${err.message}, попробуйте позже</div>
          `);
          setTimeout(() => {
            const modalError = document.querySelector('.modal-error');
            modalError.remove();
            form.reset();
            totalPrice.textContent = 0;
          }, 4000);
        } else if (err.message === '405') {
          error.classList.add('active');
          form.reset();
          totalPrice.textContent = 0;
        } else {
          form.reset();
          totalPrice.textContent = 0;
          modalOverlay.remove();
        }
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
  });
}

export default showModal;