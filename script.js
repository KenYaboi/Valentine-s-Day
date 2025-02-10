// Function to handle the first question
function handleIntroResponse(option) {
    if (option === 'okay') {
        // Hide the first question and its options
        document.getElementById('intro-question').style.display = 'none';
        document.getElementById('intro-options').style.display = 'none';

        // Show the Valentine question and options
        document.getElementById('question').style.display = 'block';
        document.getElementById('options').style.display = 'flex'; // Make buttons visible
    } else if (option === 'luh') {
        // Change "Luh yoko nga" button text to "Sure ka na?"
        document.getElementById('luh-button').innerText = 'Sure ka na?';
        
        // Increase font size of "Okay" button
        var okayButton = document.getElementById('okay-button');
        var currentFontSize = window.getComputedStyle(okayButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.5; // Increase font size by 1.5x
        okayButton.style.fontSize = newSize + 'px';
    }
}

// Function to handle the Valentine question
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            document.getElementById('options').style.display = 'none'; // Hide buttons
            displayCatHeart(); // Show the cat-heart.gif
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?'; 
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.5; // Increase font size by 1.5x
        yesButton.style.fontSize = newSize + 'px';
    }
}

// Function to flash rainbow colors
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); 
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; 
        if (callback) {
            callback();
        }
    }, 2000);
}

// Function to display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
    };
}

// Display the cat.gif initially
displayCat();
