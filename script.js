let countriesNumber = document.querySelector(".countriesNumber");
let startLetter = document.querySelector(".startWith");
let countriesWrapper = document.querySelector(".countriesWrapper");
let sortBtn = document.querySelector(".sorting");
let input = document.getElementById("inputSearch");
let startingBtn = document.querySelector(".startingWord");
let anyWordBtn = document.querySelector(".anyWord");

let Allbuttons = document.querySelectorAll("button");
let activeButton = null;
for (let i = 0; i < Allbuttons.length; i++) {
  Allbuttons[i].addEventListener("click", function () {
    if (activeButton) {
      activeButton.style.backgroundColor = "#7b44f2";
    }
    activeButton = this;
    activeButton.style.backgroundColor = "#653BBF";
  });
}

let countriesLength = countries.length;
countriesNumber.textContent = `Total Number of countries: ${countriesLength}`;
countriesNumber.classList.add("countriesLength");

window.addEventListener("load", function () {
  for (let i = 0; i < countries.length; i++) {
    let country = document.createElement("li");
    country.textContent = countries[i];
    country.classList.add("country");
    countriesWrapper.appendChild(country);
  }
});

function renderCountries(array) {
  countriesWrapper.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let country = document.createElement("li");
    country.textContent = array[i];
    country.classList.add("country");
    countriesWrapper.appendChild(country);
  }
}

//Search with any word function
function searchAnyWord() {
  input.addEventListener("input", function () {
    let value = input.value.toUpperCase();
    let containingLetters = countries.filter(function (country) {
      return country.toUpperCase().includes(value);
    });
    renderCountries(containingLetters);
  });
}

//Searching without clicking any buttons
input.addEventListener("input", function () {
  let value = input.value.toUpperCase();
  let containingLetters = countries.filter(function (country) {
    return country.toUpperCase().includes(value);
  });
  renderCountries(containingLetters);
});

//Starting word search
startingBtn.addEventListener("click", function () {
  input.addEventListener("input", function () {
    let value = input.value.toUpperCase();
    let filteredCountries = countries.filter(function (country) {
      return country.toUpperCase().startsWith(value);
    });
    if (input.value) {
      startLetter.innerHTML = `Countries start with <span class="letter">${value}</span> are <span class="numberOfOccurence">${filteredCountries.length}</span>`;
    } else {
      startLetter.innerHTML = "";
    }
    renderCountries(filteredCountries);
  });
});

//Searching with any words
anyWordBtn.addEventListener("click", function () {
  input.addEventListener("input", function () {
    let value = input.value.toUpperCase();
    let containingLetters = countries.filter(function (country) {
      return country.toUpperCase().includes(value);
    });
    if (input.value) {
      startLetter.innerHTML = `Countries containing <span class="letter">${value}</span> are <span class="numberOfOccurence">${containingLetters.length}</span>`;
    } else {
      startLetter.innerHTML = "";
    }
    renderCountries(containingLetters);
  });
});

//Sorting button
let ascendingOrder = true;
sortBtn.addEventListener("click", function () {
  if (ascendingOrder) {
    let sortedCountries = countries.sort((a, b) => b.localeCompare(a));
    renderCountries(sortedCountries);
  } else {
    let sortedCountries2 = countries.sort((a, b) => a.localeCompare(b));
    renderCountries(sortedCountries2);
  }
  ascendingOrder = !ascendingOrder;
});
