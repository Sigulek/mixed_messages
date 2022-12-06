const authors = ['A.Pugacheva', 'J.Statham', 'N.Kidman', 'B.Lee', 'Unknown author', 'Your neighbor', 'The One', 'J.Lennon'];
const phrases = [
    'Be yourself; everyone else is already taken.', 
"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
"So many books, so little time.",
"A friend is someone who knows all about you and still loves you.",
"To live is the rarest thing in the world. Most people exist, that is all.",
"I am so clever that sometimes I don't understand a single word of what I am saying.",
"Life is never fair, and perhaps it is a good thing for most of us that it is not.",
"Life is what happens when you're busy making other plans."
];
const zodiacs = ['Ram', 'Bull', 'Twins', 'Crab', 'Lion', 'Virgin', 'Balance', 'Scorpion', 'Archer', 'Goat', 'Water Bearer', 'Fish'];

const pics = ['./resources/images/bruce_lee.jpeg', 
'./resources/images/jason-statham.jpeg', 
'./resources/images/mario.jpeg', 
'./resources/images/neighbor.jpeg', 
'./resources/images/nicole-kidman.jpeg', 
'./resources/images/pugacheva.jpeg', 
'./resources/images/lennon.jpg', 
'./resources/images/neo.jpg'
];

function randomizer (arr) {
    let choice = arr[Math.floor(Math.random() * arr.length)]; 
    return choice;
}

function cleanParagraph() {
    let elementToRemove = document.getElementsByTagName('p')[0];
    document.getElementById('quote').removeChild(elementToRemove);
}

function cleanPhoto () {
    let elementToRemove1 = document.getElementsByTagName('img')[0];
    let elementToRemove2 = document.getElementsByTagName('caption')[0];

    document.getElementById('pic').removeChild(elementToRemove1);
    document.getElementById('pic').removeChild(elementToRemove2);
}

function setter () {
    
    if (document.getElementsByTagName('p').length === 1) {
        cleanParagraph()
    }
    if (document.getElementsByTagName('img').length === 1) {
        cleanPhoto()
    }

    const phrase = randomizer(phrases);
    const zodiac = randomizer(zodiacs);
    const pic = randomizer(pics);
    const author = randomizer(authors);

    let paragraph = document.createElement('p');
    paragraph.innerHTML = ('If your zodiac is ' + zodiac + ', then mark these words: </br></br></br>' + '"' + phrase + '"');
    document.getElementById('quote').appendChild(paragraph);
    
    let photo = document.createElement('img');
    photo.src = pic;
    document.getElementById('pic').appendChild(photo);

    let caption = document.createElement('caption');
    caption.innerHTML = ('Author: ' + author); 
    document.getElementById('pic').appendChild(caption);

    document.getElementById('pic').style.padding = '1rem';
    document.getElementsByClassName('container')[0].style.padding = '2rem';
}

let button = document.querySelector('button').onclick = setter;