export default function menuContent(){
    class MenuItem {
        constructor(name, desc, price){
            this.name = name;
            this.desc = desc;
            this.price = price;
        }
    }
  
    const menuList = [
        new MenuItem('Schnitzl', 'description', '10$'),
        new MenuItem('Pepperoni Pizza', 'description', '12$'),
        new MenuItem('Grilled Tuna', 'description', '12$'),
        new MenuItem('Lasagna', 'description', '8$')
    ];

    const content = document.querySelector('#content');
    
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
           
            listItemName.innerHTML = e.name;
            listItemDesc.innerHTML = e.desc;
            listItemPrice.innerHTML = e.price;
        }

    )

    headline.innerHTML = "Menu";
    
    content.appendChild(headline);
    content.appendChild(menu);

    return {content, menuList}
}