const wrp = document.querySelector(".wrp");
const h3 = document.querySelector("h3");
const button = document.getElementById("id1");
const timer = document.querySelector(".timer");
const panel = document.querySelector(".panel");
const salePanel = document.querySelector(".sale-panel");

wrp.addEventListener("click", showGoods);

function showGoods(evt) {
  if (evt.target.tagName.toLowerCase() !== "button") {
    return null;
  }
  panel.innerHTML = evt.target.dataset.goods;
}

Promise.race( 
    [ 
        new Promise(function(resolve, reject) {
        button.addEventListener('click', function(evt) {
            if (evt.target.dataset.goods) {
              return resolve(
                `<p>Вы успели купить ${evt.target.dataset.goods} до окончания акции. 
                Получите скидку!</p>`,
                );
            }
            return reject(new Error("Товар отсутствует")); 
        })
      }),

      new Promise(function(resolve, reject) {
          let action = 'Акция закончилась';
          let delayAction = 5;
          let i = delayAction;
            const delay = setInterval( function() {
                i -= 1;
                timer.innerHTML = i;
                if(i < 0) {
                    i = 0;
                    clearInterval(delay);
                    h3.textContent = action;
                    timer.style.display = "none";

                    return resolve(`<p>Сожалеем, ${action}`)
                }
                if ( i > delayAction || i <  0) {
                    return reject("Ошибка диапазона времени акции")
                }
            } , 1000)
      })
    ]
).then(data =>  salePanel.innerHTML = data,
       err => salePanel.innerHTML = err)

