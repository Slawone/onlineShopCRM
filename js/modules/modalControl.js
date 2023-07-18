import createRow from './create.js';
import {renderTotalPrice} from './render.js';
import { addBtn, modalOverlay, form } from './constants.js';
import { fetchRequest } from './fetch.js';
import { renderGoods } from './render.js';
import loadStyle from './loadStyle.js';
import showModal from './modal.js';

export const modalControl = () => {
  addBtn.addEventListener('click', () => {
    showModal();
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

// export const formControl = (form) => {
//   const totalPrice = document.querySelector('.modal__price');
//   const error = document.querySelector('.error');
//   const errorBtn = document.querySelector('.error__btn');  

//   form.price.addEventListener('blur', e => {
//     const cost = form.price.value * form.count.value;
//     const sale = cost - form.discountField.value * cost / 100;
//     totalPrice.textContent = `$${sale}`;
//   });

//   errorBtn.addEventListener('click', () => {
//     error.classList.remove('active');
//   });

//   form.addEventListener('submit', e => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const newRow = Object.fromEntries(formData);
//     const modalBtnAdd = document.querySelector('.modal__btn_add-img');
   
//     const id = document.querySelector('.modal__id-value');

//     newRow.id = id.textContent;

//     fetchRequest('https://fourth-elastic-tortoise.glitch.me/api/goods', {
//       method: 'POST',
//       body: {
//         title: newRow.title,
//         category: newRow.category,
//         units: newRow.units,
//         discountField: newRow.discountField,
//         description: newRow.description,
//         count: newRow.count,
//         price: newRow.price,
//       },
//       callback(err, data) {
//         if (+err === 422 || +err === 404 || +err >= 500) {
//           modalBtnAdd.insertAdjacentHTML('beforebegin', `
//             <div class="modal-error">Произошла ошибка ${err.message}, попробуйте позже</div>
//           `);
//           setTimeout(() => {
//             const modalError = document.querySelector('.modal-error');
//             modalError.remove();
//             form.reset();
//             totalPrice.textContent = 0;
//           }, 4000);
//         } else if (err.message === '405') {
//           error.classList.add('active');
//           form.reset();
//           totalPrice.textContent = 0;
//         } else {
//           form.reset();
//           totalPrice.textContent = 0;
//           closeModal();
//           location.reload();
//         }
//       },
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })

//   });
// };
