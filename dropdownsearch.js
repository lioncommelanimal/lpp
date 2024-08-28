const handleInput = (dropdownId) => {
    let results;
    if (dropdownId === 'dropdownMenuButton1') {
        results = ["apple", "banana", "cherry", "date", "elderberry"];
    } else if (dropdownId === 'dropdownMenuButton2') {
        results = ["tablette", "phone", "pc"];
    } else if (dropdownId === 'dropdownMenuButton3') {
        results = ["spatule", "couteau", "fouet"];
    }

    const inputValue = document.querySelector(`#${dropdownId} ~ .dropdown-menu .form-control`).value.toLowerCase();
    const parentElement = document.querySelector(`#${dropdownId} ~ .dropdown-menu`);
    const elementsToRemove = parentElement.querySelectorAll("li");

    elementsToRemove.forEach(element => {
        element.remove();
    });

    if (inputValue) {
        const matchingWords = results.filter(word => word.toLowerCase().includes(inputValue));
        matchingWords.sort((a, b) => {
            return a.toLowerCase().indexOf(inputValue) - b.toLowerCase().indexOf(inputValue);
        });
        matchingWords.forEach(word => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.classList.add("dropdown-item");
            link.href = "#";
            link.textContent = word;
            listItem.appendChild(link);
            parentElement.appendChild(listItem);
        });
        if (matchingWords.length === 0) {
            const listItem = document.createElement('li');
            listItem.textContent = "No Item";
            listItem.classList.add('dropdown-item');
            parentElement.appendChild(listItem);
        }
    } else {
        results.forEach(word => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.classList.add("dropdown-item");
            link.href = "#";
            link.textContent = word;
            listItem.appendChild(link);
            parentElement.appendChild(listItem);
        });
    }
};

// Initialiser chaque dropdown
handleInput('dropdownMenuButton1');
handleInput('dropdownMenuButton2');
handleInput('dropdownMenuButton3');
