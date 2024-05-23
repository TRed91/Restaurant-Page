import img from './pexels-pixabay-260922.jpg'

export default function content(){
    const content = document.querySelector('#content');
    
    const imgMain = document.createElement('img');
    const headline = document.createElement('h1');
    const introText = document.createElement('p');

    imgMain.src = img;
    headline.innerHTML = "Tomi's Restaurant";
    introText.innerHTML = 'Here you will the fanciest food in town! Everything from Pepperoni Pizza to canned salmon. We got it all!'

    content.appendChild(imgMain);
    content.appendChild(headline);
    content.appendChild(introText);

    return content
}


