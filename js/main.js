// import goods from './modules/data.js';
import { renderTotalPrice, renderGoods, deleteTr, openImageInNewTab }
  from './modules/render.js';
import { modalControl, activeField, formControl }
  from './modules/modalControl.js';
import { form } from './modules/constants.js';
import { fetchRequest } from './modules/fetch.js';

const URL = 'https://fourth-elastic-tortoise.glitch.me/api/goods/';

// document.addEventListener('DOMContentLoaded', () => {
//   fetchRequest(URL, {
//     method: 'GET',
//     callback: renderGoods,
//   })
// })

fetchRequest(URL, {
  method: 'GET',
  callback: renderGoods,
  headers: {
    'Content-Type': 'application/json',
  },
})

const init = () => {
  // renderGoods(goods);
  modalControl();
  deleteTr();
  // openImageInNewTab(goods),
  activeField(form);
  formControl(form);
};

init();
