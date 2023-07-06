import goods from './modules/data.js';
import {renderTotalPrice, renderGoods, deleteTr, openImageInNewTab}
  from './modules/render.js';
import {modalControl, activeField, formControl}
  from './modules/modalControl.js';
import {form} from './modules/constants.js';

const init = () => {
  renderGoods(goods);
  modalControl();
  deleteTr();
  openImageInNewTab(goods),
  activeField(form);
  formControl(form);
  renderTotalPrice();
};

init();
