// document.querySelector("#simba").addEventListener("click", () => {
//     createLists();
// });

// document.querySelector("#return").addEventListener("click", () => {
//     returnBack();
// });

// function createLists() {
//     const div1 = document.querySelector("#dogs");
//     const ul = document.createElement("ul");
//     const li = document.createElement("li");
//     ul.appendChild(li);
//     div1.appendChild(ul);
//     li.textContent = "hello world";
// }

// function returnBack() {
//     window.location.href = "index.html";
// }
// Dog data
async function displayDogData() {
    try {
        // Fetch data from db.json
        const response = await fetch('db.json');
        const data = await response.json();

        // Get the container element
        const dogListContainer = document.getElementById('dogList');

        // Loop through the data and create HTML elements to display each dog
        data.forEach(dog => {
            // Create elements
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.classList.add('card-img-top');
            img.src = dog.picture;
            img.alt = dog.name;

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const title = document.createElement('h5');
            title.classList.add('card-title');
            title.textContent = dog.name;

            const age = document.createElement('p');
            age.classList.add('card-text');
            age.textContent = `Age: ${dog.age}`;

            const gender = document.createElement('p');
            gender.classList.add('card-text');
            gender.textContent = `Gender: ${dog.gender}`;

            // Create adopt button
            const adoptButton = document.createElement('button');
            adoptButton.classList.add('btn', 'btn-primary');
            adoptButton.textContent = 'Adopt';
            adoptButton.addEventListener('click', () => adoptDog(dog)); // Attach event listener

            // Append elements to cardBody
            cardBody.appendChild(title);
            cardBody.appendChild(age);
            cardBody.appendChild(gender);
            cardBody.appendChild(adoptButton); // Append adopt button

            // Append img and cardBody to card
            card.appendChild(img);
            card.appendChild(cardBody);

            // Append card to dogListContainer
            dogListContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching dog data:', error);
    }
}

// Function to handle dog adoption
function adoptDog(dog) {
    const shoppingCart = document.getElementById('shoppingCart');
    const listItem = document.createElement('li');
    listItem.textContent = `${dog.name} (Age: ${dog.age}, Gender: ${dog.gender})`;
    shoppingCart.appendChild(listItem);
}

// Function to search dogs by name
function searchDogs() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Call the function to display dog data when the page loads
displayDogData();
