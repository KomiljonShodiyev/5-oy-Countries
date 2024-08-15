let elMainList = document.querySelector(".main-list");
const searchInput = document.querySelector('input[name="search"]');

const countrys = [
    {
        id: 1,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "https://flagcdn.com/wf.svg"
    },
    {
        id: 2,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "https://flagcdn.com/is.svg"
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg"
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg"
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg"
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg"
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg"
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg"
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg"
    },
    {
        id: 10,
        name: "Guyana",
        capital: "Georgetown",
        population: 786559,
        flag: "https://flagcdn.com/gy.svg"
    }
];

function renderCountries(arr) {
    elMainList.innerHTML = "";
    arr.forEach(item => {
        let cardItem = document.createElement("li");
        cardItem.className = "w-[300px] p-5 bg-white rounded-lg shadow-lg transition transform hover:scale-105";
        cardItem.innerHTML = `
            <img src="${item.flag}" alt="Flag" class="rounded-md shadow-md" width="100%" height="200"/>
            <h2 class="font-bold mt-3 text-xl">Davlat: ${item.name}</h2>
            <p class="text-gray-600">Poytaxt: ${item.capital}</p>
            <p class="text-gray-600">Aholi: ${item.population.toLocaleString()}</p>
            <p>ID: ${item.id}</p>
            <div class="flex mt-4 space-x-3">
                <button class="rounded-full p-2 bg-gray-100 hover:bg-red-200 transition">
                    <img src="./images/heart-icon.svg" alt="Heart Icon" width="28" height="28"/>
                </button>
                <button class="rounded-full p-2 bg-gray-100 hover:bg-green-200 transition">
                    <img src="./images/save-icon.svg" alt="Save Icon" width="33" height="33"/>
                </button>
                <button class="rounded-full p-2 bg-gray-100 hover:bg-blue-200 transition">
                    <img src="./images/more-icon.svg" alt="More Icon" width="30" height="30"/>
                </button>
            </div>
        `;
        elMainList.appendChild(cardItem);
    });
}

renderCountries(countrys);

searchInput.addEventListener('input', () => {
    const res = searchInput.value.toLowerCase();
    const filteredCountries = countrys.filter(country => 
        country.name.toLowerCase().includes(res)
    );
    renderCountries(filteredCountries);
});
