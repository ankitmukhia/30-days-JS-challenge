const quotes = [
    "After a long moment I closed the freezer door. I wanted to lie down and press my cheek against the cool linoleum. Instead I reached out with my little finger and flipped the Barbie's head. It went thack thack against the door. I flipped it again. Thack thack. Whee. I had a new hobby. ― Jeff Lindsay, Darkly Dreaming Dexter",
    "You are the shuckiest shuck faced shuck in the world! ― James Dashner, The Maze Runner",
    "I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do. ― C. JoyBell C.",
    "That proves you are unusual, returned the Scarecrow; and I am convinced that the only people worthy of consideration in this world are the unusual ones. For the common folks are like the leaves of a tree, and live and die unnoticed. ― L. Frank Baum, The Land of Oz",
    "But that was life: Nobody got a guided tour to their own theme park. You had to hop on the rides as they presented themselves, never knowing whether you would like the one you were in line for...or if the bastard was going to make you throw up your corn dog and your cotton candy all over the place. ― J.R. Ward, Crave",
    "Her name badge read: Hello! My name is DIE, DEMIGOD SCUM! ― Rick Riordan, The Son of Neptune",
    "A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be ― Abraham Maslow",
    "Insane means fewer cameras! ― Ally Carter, Only the Good Spy Young",
    "OK, Josh said evenly, I've seen men made of mud, I guess I can accept spying rats. Do they talk? he wondered aloud. Don't be ridiculous, Flamel snapped, They're rats. Josh really didn't think it was a ridiculous suggestion. ― Michael Scott, The Alchemyst",
    "Flirtation doesn't have to go somewhere; it certainly doesn't need to end up in bed. I like to think of it as a little friendlier than a handshake, a little less intimate than a kiss. It's a way of saying hi, you look great, have a wonderful day. A tasteful flirtation, played out people who understand the rules, leave everyone feeling good and can perk up the bluest mood. ― Karen Marie Moning, Bloodfever",
    "Some fail to bear in mind that everyone is sentenced to death. Death is a treacherous virus that strikes randomly. The only truth is that nobody is going to make it out alive. We are all living on probation and our expiry date is indefinite. (Living on probation) ― Erik Pevernagie",
    "Some quotations, said Zellaby, are greatly improved by lack of context. ― John Wyndham, The Midwich Cuckoos",
    "The lampshade on my head is for my bright ideas. I won't be able to convey them until Monday, when my curtain gets out of the dry cleaners. ― Bauvard, Some Inspiration for the Overenthusiastic",
    "All of my best friends are dead people. Someday I've got to figure out how that happened. ― Claudia Gray, Afterlife",
    "What do you want? Where's the goddamn ice I ordered? Where's the booze? There's a war on, man! People are being killed! ― Hunter S. Thompson, Fear and Loathing in Las Vegas"
];


const h1 = document.getElementById('main-h1');
const button = document.getElementById('button-generate');

function generateRandomQuote() {
    let randomQuotes = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuotes];
};

function display() {
    h1.innerHTML = generateRandomQuote();
};

button.addEventListener('click', display);