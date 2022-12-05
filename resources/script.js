const authors = ['A.Pugacheva', 'J.Statham', 'N.Kidman', 'B.Lee', 'Unknown author', 'Your neighbor'];
const phrases = ['Be yourself; everyone else is already taken.', 
"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
"So many books, so little time.",
"A friend is someone who knows all about you and still loves you.",
"To live is the rarest thing in the world. Most people exist, that is all.",
"I am so clever that sometimes I don't understand a single word of what I am saying.",
];
const zodiacs = ['Ram', 'Bull', 'Twins', 'Crab', 'Lion', 'Virgin', 'Balance', 'Scorpion', 'Archer', 'Goat', 'Water Bearer', 'Fish'];

const pics = [];

function randomizer (arr) {
    let choice = arr[Math.floor(Math.random() * arr.length)]; 
    return choice;
}

