function displayIntroGif() {
    var imageContainer = document.getElementById('image-container');
    var introGif = new Image();
    introGif.src = 'thinking-cat.gif'; // Change to your first GIF file
    introGif.alt = 'Thinking Cat';
    imageContainer.appendChild(introGif);
}

// Handle the first question's response
// Array of responses for "Luh yoko nga"
const luhResponses = [
    "Sure ka na?",
    "Final answer?",
    "Di mo na mababawi 'to!",
    "Last chance!",
    "Wala nang balikan ha?",
    "Eh di wow. 😭"
];

let luhClickCount = 0; // Track how many times it's clicked

// Handle the first question's response
function handleIntroResponse(option) {
    if (option === 'okay') {
        // Hide the first question
        document.getElementById('intro-container').style.display = 'none';

        // Show the second question
        
        document.getElementById('text-container').style.display = 'block';

        var imageContainer = document.getElementById('image-container');
        imageContainer.innerHTML = ''; // Remove the first GIF
        displayValentineGif(); // Show the second GIF
    } else if (option === 'luh') {
        let luhButton = document.getElementById('luh-button');

        // Change button text based on click count
        if (luhClickCount < luhResponses.length) {
            luhButton.innerText = luhResponses[luhClickCount];
        } else {
            luhButton.innerText = "Okay fine. 😤"; // Default last response
        }

        luhClickCount++; // Increment count

        // Increase font size of "Okay" button
        let okayButton = document.getElementById('okay-button');
        let currentSize = parseFloat(window.getComputedStyle(okayButton).fontSize);
        okayButton.style.fontSize = (currentSize * 1.5) + 'px';
    }
}

// Array of responses for "No"
const noResponses = [
    "Sige na please? 🥺",
    "Promise samahan kita for life! ❤️",
    "Papakitaan ng super duper love! 💖",
    "Lilipad ako parang si Darna! 🦸‍♀️",
    "Okay fine, pero last chance na 'to! 😭"
];

let noClickCount = 0; // Track how many times "No" is clicked

function displayValentineGif() {
    var imageContainer = document.getElementById('image-container');
    var valentineGif = new Image();
    valentineGif.src = 'cat.gif'; // Change this to your second GIF file
    valentineGif.alt = 'Cute Cat';
    imageContainer.appendChild(valentineGif);
}

function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide question
            document.getElementById('options').style.display = 'none'; // Hide buttons
            displayCatHeart(); // Show cat-heart.gif
        });
    } else if (option === 'no') {
        let noButton = document.getElementById('no-button');

        // Change "No" button text with each click
        if (noClickCount < noResponses.length) {
            noButton.innerText = noResponses[noClickCount];
        } else {
            noButton.innerText = "Di na kita pipilitin... 😢"; // Final response
        }

        noClickCount++; // Increment click count

        // Increase "Yes" button size
        let yesButton = document.getElementById('yes-button');
        let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = (currentSize * 1.5) + 'px';
    }
}

// Flash rainbow colors
function flashRainbowColors(callback) {
    let colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    let i = 0;
    let interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    
    setTimeout(() => {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; 
        if (callback) callback();
    }, 2000);
}



// Display cat-heart.gif after "Yes"
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    let catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = () => {
        catHeartImage.style.width = '800px'; // Adjust as needed
        catHeartImage.style.height = '800px'; // Adjust as needed
        document.getElementById('image-container').appendChild(catHeartImage);
    };
}
// Load the initial cat image
displayIntroGif();
