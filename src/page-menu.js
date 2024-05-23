import img from './pexels-pixabay-260922.jpg'

class MenuItem {
    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price;
    }
};

const Item1 = new MenuItem("Schnitzel", "description", "10$");

export default function menuContent(){
    const content = document.querySelector('#content');
    
    const imgMain = document.createElement('img');
    const headline = document.createElement('h2');
    const menu = document.createElement('ul');
    
    

    imgMain.src = img;
    headline.innerHTML = "Menu";
    

    content.appendChild(imgMain);
    content.appendChild(headline);
    content.appendChild(introText);

    return content
}