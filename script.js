// Create an array of fruits
const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Grapes",
    "Watermelon",
    "Papaya",
    "Blueberry",
    "Strawberry"
];

// Reference to the fruit list and search bar
const fruitList = document.getElementById('fruitList');
const searchBar = document.getElementById('searchBar');

// Function to display fruits
function displayFruits(filteredFruits) {
    // Clear the list before displaying filtered fruits
    fruitList.innerHTML = '';

    // Iterate over the filtered fruits and add them to the list
    filteredFruits.forEach(fruit => {
        const li = document.createElement('li');
        li.textContent = fruit;
        fruitList.appendChild(li);
    });
}

// Function to filter fruits based on the search input
function filterFruits() {
    const searchValue = searchBar.value.toLowerCase();
    const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().includes(searchValue));
    displayFruits(filteredFruits);
}

// Initial display of all fruits
displayFruits(fruits);

// Add event listener to the search bar
searchBar.addEventListener('input', filterFruits);
