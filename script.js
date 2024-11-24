// script.js
const facts = [
    "I've hiked through Yellowstone, Yosemite, Grand Canyon, Zion, and Rocky Mountain National Parks!",
    "My longest hiking trail was a 15-mile trek in Yosemite National Park",
    "I spotted three grizzly bears during my hike in Yellowstone",
    "I've collected hiking badges from all five national parks I've visited",
    "My favorite hiking experience was watching the sunrise at Angels Landing in Zion",
    "I completed the Rim-to-Rim hike at the Grand Canyon in 2023",
    "I've hiked in all four seasons at Rocky Mountain National Park"
];

const factDisplay = document.getElementById('fact-display');
const newFactButton = document.getElementById('new-fact');

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}

newFactButton.addEventListener('click', getRandomFact);

// Display a random fact when the page loads
getRandomFact();
