import tacosImage from "./asset/tacos.png";

export function displayHome() {
    let content = document.querySelector('#content');
    //for text title
    let mainTitle = document.createElement('div');
    mainTitle.className = 'main-title';
    let headingMain = document.createElement('h1');
    headingMain.innerHTML = '<span>Absolutely</span> best food of Testy & Fresh in The world.'
    mainTitle.appendChild(headingMain)
    let detailText = document.createElement('p');
    detailText.innerText = 'Keep your excitement to feel tasty food, in premium and super delicious delivery. Never stop so seek a perfection in taste we give all-in-best chef maker.'
    mainTitle.appendChild(detailText);
    content.appendChild(mainTitle);

    //create a search bar using  document write
    let formBox = document.createElement('div');
    formBox.className = 'box-search';
    formBox.innerHTML =` <form action="#">
        <input type="text" placeholder="Search..." name="search">
        <button type="submit">Search</button>
    </form>`
    
    mainTitle.appendChild(formBox)

    
    
    //image big hero
    let imageHero = document.createElement('div');
    imageHero.className = 'main-image';
    let imageMain = document.createElement('img');
    imageMain.src = tacosImage;
    imageHero.appendChild(imageMain)
    content.appendChild(imageHero);

};