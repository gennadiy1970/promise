const wrp = document.querySelector(".wrp");
const panel = document.querySelector(".panel");
const salePanel = document.querySelector(".sale-panel");
const btna = document.getElementById("id1");
const btnb = document.getElementById("id2");
const btnc = document.getElementById("id3");
wrp.addEventListener("click", showGoods);

function showGoods(evt) {
  if (evt.target.tagName.toLowerCase() !== "button") {
    return null;
  }
  panel.innerHTML = evt.target.dataset.letter.toUpperCase();
}

function a () {
    return new Promise(function(res, rej){
      btna.addEventListener('click', function(){
        res('A');
        rej(new Error);
      })
    });
  }
  function b () {
    return  new Promise(function(res, rej){
      btnb.addEventListener('click', function(){
        res('B');
        rej(new Error);
      })
    });
  }
  function c () {
    return new Promise(function(res, rej){
      btnc.addEventListener('click', function(){
        res('C');
        rej(new Error);
      })
    });
  }
  
  b().then(a)
    .then(a)
    .then(c)
    .then(d => salePanel.textContent = 'Вы набрали BAAC')
    .catch(err =>  salePanel.textContent = 'Error')
  
 