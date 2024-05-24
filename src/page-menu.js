export default function menuContent(){
    const content = document.querySelector('#content');

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    class MenuItem {
        constructor(name, desc, price){
            this.name = name;
            this.desc = desc;
            this.price = price;
        }
    }
  
    const menuList = [
        new MenuItem('Schnitzl', 'Austrian style Schnitzl from turkey. Breaded and no sauce. Comes with fries or rice.', '10$'),
        new MenuItem('Pepperoni Pizza', 'Best and only true form of pizza. If you want any other toppings please let us know so we can escort you to the exit.', '12$'),
        new MenuItem('Grilled Tuna', "We assume it's tuna. Might be salmon. I'm not really a fish expert. Anyway. Comes with rice and lemon", '12$'),
        new MenuItem('Lasagna', "I don't know anything about lasagna. Please don't order it but if you do I will order some from the Italian place across the street.", '8$')
    ];
    
    const headline = document.createElement('h2');
    const menu = document.createElement('ul');
    
    menuList.forEach(e => 
        {
            const listItemContainer = document.createElement('div');
            const listItemName = document.createElement('h3');
            const listItemDesc = document.createElement('p');
            const listItemPrice = document.createElement('div');
    
            menu.appendChild(listItemContainer);
            listItemContainer.appendChild(listItemName);
            listItemContainer.appendChild(listItemDesc);
            listItemContainer.appendChild(listItemPrice);

            listItemContainer.setAttribute('class', 'liContainer')
            listItemDesc.setAttribute('class', 'desc');
            listItemPrice.setAttribute('class', 'price')
           
            listItemName.innerHTML = e.name;
            listItemDesc.innerHTML = e.desc;
            listItemPrice.innerHTML = e.price;
        }

    )

    headline.innerHTML = "Menu";
    
    content.appendChild(headline);
    content.appendChild(menu);

    return content
}