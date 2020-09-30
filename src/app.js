// Search by name of city or a comma separated city along with the country code e.g London,uk
const form = document.querySelector(".top-section form");
const input = document.querySelector(".top-section input");
const message = document.querySelector(".top-section .output-message")
const list_cities = document.querySelector(".output-section .cities");

const apiKey = "9802bee99b75b4b88ed9e9a05f45b6c4"; //this specific to this Web App


// stop the form from submitting/reloading the page
// get the value entered in the search input
form.addEventListener("submit", e => {
    e.preventDefault();
    const listItems = list_cities.querySelectorAll(".output-section .city");
    const inputValue = input.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then( response=> response.json())
    .then( data => {
        const { main, name, sys, weather } = data;

        //get the icon code returned by the API, this icon refers to the current weather condition 
        const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
       
        //create individual city item dynamically
        const li = document.createElement("li");
        li.classList.add("city");
        const city_output = `
            <h2 class="city-name" data-name="${name},${sys.country}">
                <span>${name}</span>
                <sup>${sys.country}</sup>
            </h2>
            <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup>
            </div>
            <figure>
                <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
                <figcaption>${weather[0]["description"]}</figcaption>
            </figure>
        `;
        li.innerHTML = city_output;
        list_cities.appendChild(li);
    })
        .catch(() => {
            message.textContent = "Please search for a valid city 🙂"
        });
        // clear the span element,output-message , the value of the search field
        message.textContent = "";
        form.reset();
        input.focus();
   
}); 

