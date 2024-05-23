export default function content(){
    const content = document.querySelector('#content');

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    
    
    const headline = document.createElement('h1');
    const introText = document.createElement('p');

    introText.setAttribute('class', 'home-text')

    
    headline.innerHTML = "Tomi's Restaurant";
    introText.innerHTML = 'Here you will find he fanciest food in town! <br>Everything from Pepperoni Pizza to canned salmon. We got it all!'

    
    content.appendChild(headline);
    content.appendChild(introText);

    return content
}


