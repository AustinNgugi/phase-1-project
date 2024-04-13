

async function displayDogData() {
    try {
        // Fetch data from db.json
        // The db.json contains the dogs data 
        const response = await fetch('db.json');
        const data = await response.json();

        // Get the container element
        const dogListContainer = document.getElementById('dogList');

        // Create parent container div
        const parentContainer = document.createElement('div');
        parentContainer.classList.add('d-flex', 'flex-wrap', 'justify-content-between', 'row-cols-3');

        // Loop through the data and create HTML elements to display each dog
        data.forEach((dog, index) => {
            // Create elements
            const card = document.createElement('div');
            card.classList.add('card', 'mb-3', 'mx-auto');

            const img = document.createElement('img');
            img.classList.add('card-img-top');
            img.src = dog.picture;
            img.alt = dog.name;
            img.width = 200; // Set width of the image
            img.height = 400; // Set height of the image

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
            adoptButton.classList.add('btn', 'btn-primary', 'mr-2');
            adoptButton.textContent = 'Adopt';
            adoptButton.addEventListener('click', () => adoptDog(dog)); // Attach event listener

            // Create return button
            const returnButton = document.createElement('button');
            returnButton.classList.add('btn', 'btn-secondary');
            returnButton.textContent = 'Return';
            returnButton.addEventListener('click', () => returnDog(dog)); // Attach event listener

            // Append elements to cardBody
            cardBody.appendChild(title);
            cardBody.appendChild(age);
            cardBody.appendChild(gender);
            cardBody.appendChild(adoptButton); // Append adopt button
            cardBody.appendChild(returnButton); // Append return button

            // Append img and cardBody to card
            card.appendChild(img);
            card.appendChild(cardBody);

            // Append card to parent container
            parentContainer.appendChild(card);
        });

        // Append parent container to dogListContainer
        dogListContainer.appendChild(parentContainer);
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
     alert(`You have adopted ${dog.name}! The dogs details have been displayed at the bottom of the page all you have to do is come for the dog @ruiru town !`);
}

// Function to handle returning a dog
function returnDog(dog) {// Function to handle returning a dog
    // Reload the page such that the dog that was being displayed on the shopping cart will be removed
        location.reload();
    }
    //Here I have created a function to search dogs by name and scroll to the corresponding dog
function searchDogs() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    // Get the container of dog cards
    const dogCards = document.querySelectorAll('.card');
    
    // Loop through each dog card to find the one that matches the search term
    dogCards.forEach((card) => {
        const dogName = card.querySelector('.card-title').textContent.toLowerCase();
        if (dogName.includes(searchTerm)) {
            // Scroll to the dog card
            card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

    



// Call the function to display dog data when the page loads
displayDogData();
