// Handle first question
function handleIntroResponse(option) {
    if (option === 'okay') {
        // Hide the first question
        document.getElementById('intro-container').style.display = 'none';

        // Show the second question
        document.getElementById('text-container').style.display = 'block';
    } else if (option === 'luh') {
        // Change text on "Luh yoko nga" button
        document.getElementById('luh-button').innerText = 'Sure ka na?';

        // Make "Okay" button bigger
        var okayButton = document.getElementById('okay-button');
        var currentSize = parseFloat(window.getComputedStyle(okayButton).fontSize);
        okayButton.style.fontSize = (currentSize * 1.5) + 'px';
    }
}

// Handle Valentine question
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            document.getElementById('options').style.display = 'none'; // Hide buttons
            displayCatHeart(); // Show cat-heart.gif
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';

        var yesButton = document.getElementById('yes-button');
        var currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = (currentSize * 1.5) + 'px';
    }
}

// Flash rainbow colors before showing cat-heart.gif
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    
    setTimeout(() => {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; 
        if (callback) callback();
    }, 2000);
}

// Display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = () => imageContainer.appendChild(catImage);
}

// Display the cat-heart.gif after "Yes"
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = () => {
        document.getElementById('image-container').appendChild(catHeartImage);
    };
}

// Display the first cat image when page loads
displayCat();
