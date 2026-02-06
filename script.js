const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const mainImage = document.getElementById('mainImage');

let yesSize = 1.2; // Initial font size in rem
let paddingSize = 15; // Initial padding

noBtn.addEventListener('click', () => {
    // Increase the size of the Yes button
    yesSize += 0.5;
    paddingSize += 5;
    
    yesBtn.style.fontSize = `${yesSize}rem`;
    yesBtn.style.padding = `${paddingSize}px ${paddingSize * 2}px`;

    // Change image to a crying bear if they say no
    mainImage.src = "https://media.tenor.com/9V7fBDAribYAAAAi/cry.gif"; // Crying bear

    // Change No button text
    const phrases = ["Are you sure?", "Really?", "Don't break my heart!", "Last chance!", "Please?"];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    noBtn.innerText = randomPhrase;
});

yesBtn.addEventListener('click', () => {
    // Change the content to the success state
    question.innerText = "Yey thank you!!!";
    
    // Change image to a happy celebrating bear
    mainImage.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
    
    // Hide the buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});