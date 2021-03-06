function showButton(card) {
    let b = card.getElementsByTagName("input")[0];
    b.style.display="inline";
}

function hideButton(card) {
    let b2 = card.getElementsByTagName("input")[0];
    b2.style.display="none";
}

function call() {
    alert('Шартан балуй сейчас, давай позже');
    return false;
}

function buy() {
    alert('Партия скоро будет, обожди');
    return false;
}

function notReadyAlert(event) {
    alert('Dont be angry, everything will be fine!\nНе серчай, ща все будет!');
    event.preventDefault();
    return false;
}

function search(){
    let name = document.getElementById('search').value;
    let productNumber = null;
    if (name == 'r18') {
        productNumber = 0;
    } else if (name == 'r20') {
        productNumber = 1;
    } else if (name == 'r22') {
        productNumber = 2;
    } else {
        alert('Товар не найден');
    }

    let cards = document.getElementsByClassName('card');
    if (name == '') {
        cards[0].style.display = "inline-block";
        cards[1].style.display = "inline-block";
        cards[2].style.display = "inline-block";
    }
    else {
        cards[0].style.display = "none";
        cards[1].style.display = "none";
        cards[2].style.display = "none";
    }

    let card = cards[productNumber];
    card.style.display = 'inline-block';
    card.style.border = 'lpx dashed red';
    card.style.backgroundColor = 'Grey';

    setTimeout(function() {
        card.style.border = 'none';
        card.style.backgroundCollor = '';
    }, 2000);
}

function generateMenu() {
    let menu = document.querySelector('nav.main-menu ul');
    menu.innerHTML = '';

    let items = [
        {hret: 'index.html', text: 'Товары'},
        {hret: '', text: 'Контакты'},
        {hret: '', text: 'Доставка'},
        {hret: '', text: 'Акции'},
        {hret: 'about-us.html', text: 'О нас'},
    ];

    for(let i = 0; i<items.length; i++) {
        let link = document.createElement('a');
        link.innerText = items[i].text;
        link.hret = items[i].href;
        if(items[i].href == '') {
            link.addEventListener('click', notReadyAlert);
        }

        let menuItem = document.createElement('li');
        menuItem.appendChild(link);

        menu.appendChild(menuItem);
    }
}

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key) {
        if(key.key == 'Enter')
            search();
    });

    generateMenu();
}