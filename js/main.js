import { renderGoods } from './modules/render.js';
import { modalControl } from './modules/modalControl.js';
import { form } from './modules/constants.js';
import { fetchRequest } from './modules/fetch.js';

const URL = 'https://fourth-elastic-tortoise.glitch.me/api/goods/';

document.addEventListener('DOMContentLoaded', async () => {
  const result = await fetchRequest(URL, {
    method: 'GET',
    callback: renderGoods,
    headers: {
      'Content-Type': 'application/json',
    },
  })
})

modalControl();