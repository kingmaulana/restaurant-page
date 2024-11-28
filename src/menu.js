import tacos1 from './asset/tacos1.png'
import tacos2 from './asset/tacos2.png'
import tacos3 from './asset/tacos3.png'
import tacos4 from './asset/tacos4.png'
import tacos5 from './asset/tacos5.png'
import tacos6 from './asset/tacos6.png'
import tacos7 from './asset/tacos7.png'
import tacos8 from './asset/tacos8.png'
import tacos9 from './asset/tacos9.png'
import tacos10 from './asset/tacos10.png'
import bestsell from './asset/best-sell.png'

export function displayMenu() {

    let picture = [tacos1, tacos2, tacos3, tacos4, tacos5, tacos6, tacos7, tacos8, tacos9, tacos10];
    let price = ['46.000', '59.900', '32.000', '21.000', '36.000', '21.000', '44.000', '68.000', '59.900', '78.000']
    let nameMenu = ['Carnitas tacos', 'Birria taco', 'Tacos al pastor', 'Tacos de pescado', 'Cochinita pibil', 'Tacos árabes', 'Cochinita pibil tacos', 'Campechanos', 'Tinga tacos', 'Tacos de canasta']

    let bestSeller = `<img class = 'best-sell' src=${bestsell}></img>`
    let storeCard = ''
    for(let i = 0; i < 10; i++) {
        storeCard += `<div class="card-menu">
                        ${(i % 2 === 0) ? bestSeller : ''}
                        <img src="${picture[i]}" alt="">
                        <p class='name'>${nameMenu[i]}</p>
                        <p class="price">Rp. ${price[i]}</p>
                        <div class='buy'>Buy Now</div>
                    </div>`
    }


    let content = document.querySelector('#content');
    //for text title
    let mainTitle = document.createElement('div');
    mainTitle.className = 'title-menu';
    mainTitle.innerHTML = `<h1>Choose Menu Which Best For You</h1><hr>
    <div class="box-menu">
        ${storeCard}
    </div>`

    content.appendChild(mainTitle);
}
