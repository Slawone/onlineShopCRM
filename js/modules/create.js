const createRow = (obj) => {
  const {id, price, title, category, count, units} = obj;

  return `
    <tr>
      <td>${id}</td>
      <td>${title}</td>
      <td>${category}</td>
      <td>${units}</td>
      <td>${count}</td>
      <td>${price}</td>
      <td>$<span class="total-price">${price * count}</span></td>
      <td class="table__icons">
        <button>
          <img src="img/no-image.svg">
        </button>
        <button>
          <img src="img/edit.svg">
        </button>
        <button class="delete">
          <img src="img/delete.svg">
        </button>
      </td>
    </tr>
  `;
};

export default createRow;
