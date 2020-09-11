const form = document.querySelector(".top-section form");

// stop the form from submitting/reloading the page
// get thhe value entered in the search input
form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;
}) 