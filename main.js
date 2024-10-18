async function getData() {
    try {
        const todosResponse = await axios.get("https://jsonplaceholder.typicode.com/todos");
        const usersResponse = await axios.get("https://jsonplaceholder.typicode.com/users");

        const todos = todosResponse.data;
        const users = usersResponse.data;

        const container = document.querySelector('.container');

        for (let i = 0; i < 10; i++) {
            const user = users.find(user => user.id === todos[i].id);

            const descriptionDiv = document.createElement('div');
            descriptionDiv.classList.add('description');

            const checkboxDiv = document.createElement('div');
            checkboxDiv.classList.add('checkbox');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkboxDiv.appendChild(checkbox);

            const imageDiv = document.createElement('div');
            imageDiv.classList.add('image');
            const img = document.createElement('img');
            img.src = '/images/image.png';
            img.alt = 'Image';
            img.style.width = '50px';
            imageDiv.appendChild(img);

            const titleDiv = document.createElement('div');
            titleDiv.classList.add('title');
            const titleText = document.createElement('p');
            titleText.textContent = todos[i].title;
            titleDiv.appendChild(titleText);

            const emailDiv = document.createElement('div');
            emailDiv.classList.add('email');
            const emailText = document.createElement('p');
            emailText.textContent = user.email;
            emailDiv.appendChild(emailText);

            const addressDiv = document.createElement('div');
            addressDiv.classList.add('address');
            const addressText = document.createElement('p');
            addressText.textContent = `${user.address.street}, ${user.address.suite}, ${user.address.city}`;
            addressDiv.appendChild(addressText);

            const zipcodeDiv = document.createElement('div');
            zipcodeDiv.classList.add('zipcode');
            const zipcodeText = document.createElement('p');
            zipcodeText.textContent = user.address.zipcode;
            zipcodeDiv.appendChild(zipcodeText);

            const statusDiv = document.createElement('div');
            statusDiv.classList.add('status');
            const statusText = document.createElement('p');
            statusText.textContent = todos[i].completed ? 'Completed' : 'Not Completed';
            statusDiv.appendChild(statusText);

            const deleteDiv = document.createElement("div");
            deleteDiv.classList.add("action");
            const deleteIcon = document.createElement("i");
            deleteIcon.classList.add("fa-solid", "fa-x");

            deleteIcon.addEventListener("click", () => {
                container.removeChild(descriptionDiv);
            });
            deleteDiv.appendChild(deleteIcon);

            descriptionDiv.appendChild(checkboxDiv);
            descriptionDiv.appendChild(imageDiv);
            descriptionDiv.appendChild(titleDiv);
            descriptionDiv.appendChild(emailDiv);
            descriptionDiv.appendChild(addressDiv);
            descriptionDiv.appendChild(zipcodeDiv);
            descriptionDiv.appendChild(statusDiv);
            descriptionDiv.appendChild(deleteDiv);

            container.appendChild(descriptionDiv);
        }

    } catch (error) {
        console.log("Error with getting Data: " + error);
    }
}

getData();
