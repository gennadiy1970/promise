const wrp = document.querySelector(".wrp");
const buttons = document.querySelectorAll("button");
const panel = document.querySelector(".panel");
const salePanel = document.querySelector(".sale-panel");

wrp.addEventListener("click", showGoods);

function showGoods(evt) {
  if (evt.target.tagName.toLowerCase() !== "button") {
    return null;
  }
  panel.innerHTML = evt.target.dataset.goods;
}

/* функция не завист от количества товаров. 
  Она завист от селектора buttons 
  */
Promise.all(
  // map вернет массив
  Array.from(buttons).map(el => {
    // return array of new Promises 
    return new Promise(function(resolve, reject) {
      el.addEventListener("click", function(evt) {
        if (evt.target.dataset.goods) {
          return resolve(evt.target.dataset.goods);
        }
        return reject(new Error("Товар отсутствует"));
      });
    });
  })
).then(data => {
        salePanel.innerHTML =  `<p>Вы получаете скидку за покупку ${buttons.length}-х товаров: ${data}</p>`;
    }
);


