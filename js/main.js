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
                     src="https://s3-alpha-sig.figma.com/img/c27f/6e19/e5d70c6e3054f5d1fb373619130013d7?Expires=1655078400&Signature=IYeefOVid7nCXgCPbihjWLOfb5gvqiR8s6SOlDd8PsSdZILehtR4CyV6TH1nm~~Icm4fXz9oiOzr7AKqBZyrQfztGZTOYX4PBO~~ayBjX~QA0KaDtW9rjwYl1QMWM51VOhyqphz7np03-InTYyBe1~-lNSyDjfryT2aK~b9tsD01r9vqEFVlX0TgY9nMJIlLBB5H5Vw428qax~Yo90BwcUjwLe8z7jP72Yd44P5qA3Ugjypo0oelskAwCaJ3Tt-knsh-DJQ7p7FRNpg9NtO8RpPu6WYwrFTGL~b9deX3kwXnWg4BGDLKA0nlFLIeCDhKoEJhb7RBygROTrojURKV~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                     src="https://s3-alpha-sig.figma.com/img/936a/7d81/79a34abbe1101db9fc6d32d87a35848e?Expires=1655078400&Signature=AL8jzBaDo79w07moC0Akza77QXs1JI2P-DooT4gBQatTdBA9SrBfJj-LtdHqFw32qCV-oXwWskJ4IOnLpifqvMWG1YhnfvjJxHRnpMyrss2ckbZno724DCmYHNv1EqzGVw7-8eNezwRYFFicL8aodJQvw9oT-EPzVSP6uMJv85IzhCP5fZt7DzUs79BzJ9AqA241CVjSBbpPmDyd1MdmA-vyR3D1YgYAeCXuxX80qU3mYbhqguu-kqtN0RWxG1qv9Oewtpvfsv7ynUZKVhNdwwzHoJh2yHaBVUqEsj4vxf~x7AxaXUE9DSG8p3BCU0CNyZC-s3R6OagqWty1y33BHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                     src="https://s3-alpha-sig.figma.com/img/f716/93e3/b93f4faedbb2a983cf954fe1ebc588d3?Expires=1655078400&Signature=Y4u-VHePdA8h3-owDa1pqklumh9LmhkLmv0NmAbPmL2Mx7osyJLVbV4QHVUH60I8MLUqvf7~-ab-W8s2oJnP3R18xxCGMpE1BMzZOn6FxXHXT8eO-aYS9-Q8dqjsU4Jt1apW4qp6Deq1u9H2vV27Nv6tjuItk7Pyu6jKrQNF0KwBEmyzoKbeghWDT2obDsTBB9TG-Gheytm-odAN8OZVlGF1hbv4kQrH8mpNKOSxDzhycm7kQtS0~ZOcSyIi6wiTpLK~TaUEu8q3KJeasiw-G8fmDnHrdW7AJJdAkg0mOLPVmGHt3kepRliUtVdQwnSmbwhZTxXnh--MUOEun4xNpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                     src="https://s3-alpha-sig.figma.com/img/e25a/c484/ca590142cdc6ca73b31e77157c6c41bd?Expires=1655078400&Signature=RAtzLr84iXLaK0LrCp2mSgdJ1gEGT8wIg1r0seLL~UnuyeDOMKrFnE4l~evzf-lBL3WsXvS8s2403e6CbmX02hsXCe3BcP03H~hsFON9JYug4bu2qj0HeJJkEKDRx~br0d41A0hNz6yUTEY4GAgrVeQOQ1CBC7Y4eePRydYKWr1zY6hCBfRe9Z53UOGfBRdTvdQ4tWQqniAL1F1GKm7sK~xcPQtO3jhmoHfckTK8rArpB3CMfaKNHOGu8HyVOSPAKu5SW7G91tL0megwd94MUd-eE7yS57z9zCfcwMsgy8oUzaCZgvswn0~Y-h9GG0s8AhKDv3HMPj3exxVLlUMpDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                     src="https://s3-alpha-sig.figma.com/img/7af9/7837/7ad8e2bef42179d831a087a471e54b41?Expires=1655078400&Signature=bQQzaiGkNvOIbFkjvCv0-ql6zuJRwEWHHbKU2k7Nlglz25YPhSh0KScHmoOhS4ZKfmLPk1H5q9zsQgglNUM8VmVl~uM9W0YFqCtYAfQSNmixAbFW063uvM2hipmSIeYgwwLfkU1SdMPSNOM-eQpu7M8I-euUigl9hcwlzdTPllIC6YPmxXg8CytqocrEs~xC3m7uvfNfX-Lu59LTzPugeTT3aXEgw5uqIxmA07wYFLCqHQArFZbcYTsvMkrLszeaf1jvjEuWmCSSAZWh7ADdWoIANIYUzVhLzhmaXhbG8KffgRaAFaAAcDcuGxtPVFi6se4BKR5cIs1TeU~RDdbqIQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                     src="https://s3-alpha-sig.figma.com/img/2033/0539/f9682a2f2800f31fe185b67e28c16e26?Expires=1655078400&Signature=WbsX4kpbI-BRQRR1KShe1KTZH5uPlkLxvW~ciiGBYYL5DM~92Kysf2kL3SC2YRCPwfXPqA7xv2aVT9vwwh2M04gNwGeKavzGQyogI497-hkAOdD2dl~eN3-Cg~J4oymjIPXYGmlX6lSd7xf7d9A~UIHrs7b8waas5~0LBLyZvgyMNFafXmJlJXx5ZSfh1UJtqI5o7f648Koq~nugjIAhvXLOOtohyASXCKpamFcc0lqp7OrVJNzeOdv9AOw~ineiWZ-qs5KSiPC-5pcj8xSKaWlFKHRpn2L6Ji1ykI~tNvyePeewzGHbSzuMcejKLA3KLL0QZI1yQW7Re2Wi3dCx5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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














 






















