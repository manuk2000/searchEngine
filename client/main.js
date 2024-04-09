async function set_P_Tage(textContent, itemContainer, idAttribute) {
    const propertyElement = document.createElement("p");
    propertyElement.textContent = textContent;
    if (idAttribute) {
        propertyElement.id = idAttribute; // Assigning id "type" to the <p> element
    }
    itemContainer.appendChild(propertyElement);
}

function setButtonForRelativeSearch(data, value, foundList, itemContainer) {
    const button = document.createElement("button");
    button.textContent = "Action";
    button.addEventListener('click', () => {
        searchByRelation(data.first, value, foundList); // Assuming value is the ID for the relation
    });
    itemContainer.appendChild(button);
}

async function showItem(foundList, data) {
    // Parse and display each item in data.second
    if (Array.isArray(data?.second)) {
        for (let i = 0; i < data.second.length; i++) {
            const item = JSON.parse(data.second[i]);

            // Create a container for item information
            const itemContainer = document.createElement("div");
            itemContainer.classList.add(`entity-container`);

            set_P_Tage(`Type: ${data.first}`, itemContainer, "type");

            const entries = Object.entries(item);
            const [key, value] = entries[0];
            set_P_Tage(` ${key}: ${value}`, itemContainer, "id");

            // Iterate over the key-value pairs using a for loop
            for (let i = 1; i < entries.length; i++) {
                const [key, value] = entries[i];
                set_P_Tage(` ${key}: ${value}`, itemContainer);
            }
            // Create a button for each entity-container
            setButtonForRelativeSearch(data, value, foundList, itemContainer);
            // Append the item container to the foundList
            foundList.appendChild(itemContainer);
        }
    }
}

function showItemIfExistOrNotFound(foundList, data) {
    // Clear existing search results
    foundList.innerHTML = "";
    console.log("req is done");

    if (data.length === 0) {
        const notFoundMessage = document.createElement("p");
        notFoundMessage.textContent = "Not found";
        foundList.appendChild(notFoundMessage);
    } else {
        // Display the search results
        for (const datum of data) {
            showItem(foundList, datum);
        }
    }
}

function searchListener(input, foundList) {
    return (e) => {
        e.preventDefault();

        const target = input.value;

        // Send a GET request to the server
        fetch(`http://localhost:3000/search/?target=${encodeURIComponent(target)}`, {
            method: 'GET'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                showItemIfExistOrNotFound(foundList, data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });

        // Clear the input field
        input.value = "";
    };
}


async function setPercentageComplianceListener(input) {
    return (e) => {
        e.preventDefault();

        const percentage = parseFloat(input.value);

        // Check if the input is a valid number
        if (isNaN(percentage) || percentage < 0 || percentage > 100) {
            console.error('Percentage must be a number between 0 and 100.');
            return;
        }

        // Send a POST request to the server to set the percentage
        fetch(`http://localhost:3000/setPercentageCompliance?percentage=${encodeURIComponent(percentage)}`, {
            method: 'POST'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(message => {
                console.log(message);
                // Display success message or take further action if needed
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });

        // Clear the input field
        input.value = "";
    };
}

async function searchByRelation(type, id, foundList) {
    try {
        const response = await fetch(`http://localhost:3000/searchByRelation?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}`, {
            method: 'GET'
        });
        const data = await response.json();
        showItemIfExistOrNotFound(foundList, data);
        console.log(data); // Handle the response data as needed
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
    }
}

window.addEventListener('load', () => {
    const form = document.querySelector("#search");
    const input = document.querySelector("#new-target-input");
    const foundList = document.querySelector("#founds");
    const setPercentageForm = document.querySelector("#setPercentageForm");
    const percentageInput = document.querySelector("#percentageInput");

    form.addEventListener('submit', searchListener(input, foundList));

    setPercentageForm.addEventListener('submit', setPercentageComplianceListener(percentageInput));
});
