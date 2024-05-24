export default function content(){
    const content = document.querySelector('#content')
    while (content.firstChild){
        content.removeChild(content.firstChild);
    }

    const headline = document.createElement('h1');
    const aboutContainer = document.createElement('div');
    const aboutTitle = document.createElement('h3');
    const aboutText = document.createElement('p');

    aboutContainer.setAttribute('class', 'about-container');
    aboutTitle.setAttribute('class', 'about-title');
    aboutText.setAttribute('class', 'about-text');

    headline.innerHTML = "Tomi's Restaurant";
    aboutTitle.innerHTML = "About"
    aboutText.innerHTML = "We are a small fake business run by no other than Tomi the great himself.<br>We make good food, you should try it.<br> Totally not ordered from foodora.";

    content.appendChild(headline);
    content.appendChild(aboutContainer);
    aboutContainer.appendChild(aboutTitle);
    aboutContainer.appendChild(aboutText);

    return content
}