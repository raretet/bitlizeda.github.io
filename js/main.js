let basketItems = document.querySelector('.basket__items');

/*  as1  */ 

let cart1 = document.querySelector('.goods__btn1');

function as1() {
    localStorage.setItem('as1', 'asic1');
}

if (localStorage.getItem('as1') != null) {
    basketItems.innerHTML += `
                 <div class="basket__item">
                 <div class="basket-item__img">
                   <img
                     src="/img/as1.png"
                     alt=""
                   />
                 </div>
                 <div class="basket-item__title">BTC MINER S19 XP HYD</div>
                 <div class="bastet-item__btn"><button onclick="removeItem1()">Удалить</button></div>
               </div>
    `;
}

function removeItem1() {
    localStorage.removeItem('as1');
    window.location.reload();
}

/*  as2  */ 

let cart2 = document.querySelector('.goods__btn2');

function as2() {
    localStorage.setItem('as2', 'asic2');
}

if (localStorage.getItem('as2') != null) {
    basketItems.innerHTML += `
                 <div class="basket__item">
                 <div class="basket-item__img">
                   <img
                     src="/img/as2.png"
                     alt=""
                   />
                 </div>
                 <div class="basket-item__title">BTC MINER ANTMINER S19 XP</div>
                 <div class="bastet-item__btn"><button onclick="removeItem2()">Удалить</button></div>
               </div>
    `;
}

function removeItem2() {
    localStorage.removeItem('as2');
    window.location.reload();
}

/*  as3  */ 

let cart3 = document.querySelector('.goods__btn3');

function as3() {
    localStorage.setItem('as3', 'asic3');
}

if (localStorage.getItem('as3') != null) {
    basketItems.innerHTML += `
                 <div class="basket__item">
                 <div class="basket-item__img">
                   <img
                     src="/img/as3.png"
                     alt=""
                   />
                 </div>
                 <div class="basket-item__title">LTC MINER ANTMINER L7</div>
                 <div class="bastet-item__btn"><button onclick="removeItem3()">Удалить</button></div>
               </div>
    `;
}

function removeItem3() {
    localStorage.removeItem('as3');
    window.location.reload();
}

/*  as4  */ 

let cart4 = document.querySelector('.goods__btn4');

function as4() {
    localStorage.setItem('as4', 'asic4');
}

if (localStorage.getItem('as4') != null) {
    basketItems.innerHTML += `
                 <div class="basket__item">
                 <div class="basket-item__img">
                   <img
                     src="/img/as4.png"
                     alt=""
                   />
                 </div>
                 <div class="basket-item__title">ETH MINER ANTMINER E9</div>
                 <div class="bastet-item__btn"><button onclick="removeItem4()">Удалить</button></div>
               </div>
    `;
}

function removeItem4() {
    localStorage.removeItem('as4');
    window.location.reload();
}

/*  as5  */ 

let cart5 = document.querySelector('.goods__btn5');

function as5() {
    localStorage.setItem('as5', 'asic5');
}

if (localStorage.getItem('as5') != null) {
    basketItems.innerHTML += `
                 <div class="basket__item">
                 <div class="basket-item__img">
                   <img
                     src="/img/as5.png"
                     alt=""
                   />
                 </div>
                 <div class="basket-item__title">ZEC MINER ANTMINER Z15</div>
                 <div class="bastet-item__btn"><button onclick="removeItem5()">Удалить</button></div>
               </div>
    `;
}
function removeItem5() {
    localStorage.removeItem('as5');
    window.location.reload();
}

/*  as6  */ 

let cart6 = document.querySelector('.goods__btn6');

function as6() {
    localStorage.setItem('as6', 'asic6');
}

if (localStorage.getItem('as6') != null) {
    basketItems.innerHTML += `
                 <div class="basket__item">
                 <div class="basket-item__img">
                   <img
                     src="/img/as6.png"
                     alt=""
                   />
                 </div>
                 <div class="basket-item__title">ETH MINER ANTMINER E9</div>
                 <div class="bastet-item__btn"><button onclick="removeItem6()">Удалить</button></div>
               </div>
    `;
}

function removeItem6() {
    localStorage.removeItem('as6');
    window.location.reload();
}














 






















