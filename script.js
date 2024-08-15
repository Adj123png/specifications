const phones = [
    {
        name: 'Huawei Mate 60 Pro',
        processor: 'Kirin 9000S',
        screenSize: 6.8,
        specs: `
            <ul>
                <li>Processor: Kirin 9000S</li>
                <li>Screen: 6.8 inches OLED, 120Hz refresh rate</li>
                <li>Camera: 50MP main, 12MP ultra-wide, 8MP telephoto</li>
                <li>Battery: 5000mAh, 66W fast charging</li>
            </ul>`,
        features: `
            <ul>
                <li>Satellite communication support</li>
                <li>Seamless multi-tasking</li>
                <li>Excellent photography capabilities</li>
            </ul>`
    },
    {
        name: 'iPhone 15 Pro',
        processor: 'A17 Bionic',
        screenSize: 6.1,
        specs: `
            <ul>
                <li>Processor: A17 Bionic</li>
                <li>Screen: 6.1 inches Super Retina XDR, ProMotion</li>
                <li>Camera: 48MP main, 12MP ultra-wide, 12MP telephoto</li>
                <li>Battery: 3095mAh, 30W fast charging</li>
            </ul>`,
        features: `
            <ul>
                <li>Advanced AI processing</li>
                <li>Outstanding imaging performance</li>
                <li>High refresh rate display</li>
            </ul>`
    },
    {
        name: 'Samsung Galaxy S23',
        processor: 'Snapdragon 8 Gen 2',
        screenSize: 6.1,
        specs: `
            <ul>
                <li>Processor: Snapdragon 8 Gen 2</li>
                <li>Screen: 6.1 inches Dynamic AMOLED, 120Hz refresh rate</li>
                <li>Camera: 50MP main, 12MP ultra-wide, 10MP telephoto</li>
                <li>Battery: 3900mAh, 25W fast charging</li>
            </ul>`,
        features: `
            <ul>
                <li>Water and dust resistant (IP68)</li>
                <li>Powerful photography features</li>
                <li>Ultra-smooth display</li>
            </ul>`
    }
];

function displayPhones(filteredPhones) {
    const detailsDiv = document.getElementById('phoneDetails');
    detailsDiv.innerHTML = '';

    filteredPhones.forEach(phone => {
        detailsDiv.innerHTML += `
            <div>
                <h2>${phone.name}</h2>
                <h3>Specifications:</h3>
                ${phone.specs}
                <h3>Features:</h3>
                ${phone.features}
            </div>`;
    });
}

function filterPhones() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const filteredPhones = phones.filter(phone => phone.name.toLowerCase().includes(searchInput));
    displayPhones(filteredPhones);
}

function sortPhones() {
    const sortOption = document.getElementById('sortOptions').value;
    let sortedPhones = [...phones];

    if (sortOption === 'name') {
        sortedPhones.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'processor') {
        sortedPhones.sort((a, b) => a.processor.localeCompare(b.processor));
    } else if (sortOption === 'screenSize') {
        sortedPhones.sort((a, b) => a.screenSize - b.screenSize);
    }

    displayPhones(sortedPhones);
}

// Display all phones by default
displayPhones(phones);
