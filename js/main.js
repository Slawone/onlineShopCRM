import goods from './modules/data.js';
import {renderTotalPrice, renderGoods, deleteTr} from './modules/render.js';
import {modalControl, activeField, formControl}
  from './modules/modalControl.js';
import {form} from './modules/constants.js';

{
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
