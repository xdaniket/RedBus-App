let names = [
  "Bhopal",
  "Bairagarh",
  "Bhind",
  "Indore",
  "Indrpuri",
  "Indore Vijay nagar",
  "Shivpuri",
  "Shyampur",
  "Shimla",
  "Sehore",
  "Hoshangabad",
  "Hydrabad",
  "Halali",
  "Devpur",
  "Murena",
  "Gwalior",
  "Bangalore",
  "Pune",
  "Delhi",
  "Haryana",
  "Ludhiyana",
  "Punjab",
  "New Market",
];

// Sorted name in assencending order..
let sortedName = names.sort();

// console.log(sortedName);

//Refrence..
let inputFirst = document.getElementById("inputFirst");

//Execute function on keyup..
inputFirst.addEventListener("keyup", (e) => {
  // Loop through above array..
  // Initially remove all elements ( so if user erases a letters or adds new letter then
  // clean previous outputs.)

  removeElement();

  for (let i of sortedName) {
    // console.log(i);

    // convert input to lowercase and compare with each string..

    if (
      i.toLowerCase().startsWith(inputFirst.value.toLowerCase()) &&
      inputFirst.value != ""
    ) {
      // Create Li element..
      let listItem = document.createElement("li");

      //   let locate = document.createElement("img");
      //   locate.className = "locaat";
      //   locate.src =
      //     "https://cdn.icon-icons.com/icons2/2642/PNG/512/google_map_location_logo_icon_159350.png";
      //   locate.height = 27;

      // One common class name..
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");

      // display matched part in bold..
      let word = "<b>" + i.substr(0, inputFirst.value.length) + "</b>";
      word += i.substr(inputFirst.value.length);

      //   console.log(word);

      // display the value in array..

      listItem.innerHTML = word;
      //   listItem.appendChild(locate);
      document.querySelector(".list").appendChild(listItem);
    }
  }
});
function displayNames(value) {
  inputFirst.value = value;
  removeElement();
}
function removeElement() {
  // Clear all the item..
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}

//

let namess = [
  "Bhopal",
  "Bairagarh",
  "Bhind",
  "Indore",
  "Indrpuri",
  "Indore Vijay nagar",
  "Shivpuri",
  "Shyampur",
  "Shimla",
  "Sehore",
  "Hoshangabad",
  "Hydrabad",
  "Halali",
  "Devpur",
  "Murena",
  "Gwalior",
  "Bangalore",
  "Pune",
  "Delhi",
  "Haryana",
  "Ludhiyana",
  "Punjab",
  "New Market",
];

// Sorted name in assencending order..
let sortedNames = namess.sort();

// console.log(sortedName);

//Refrence..
let inputSecond = document.getElementById("inputSecond");

//Execute function on keyup..
inputSecond.addEventListener("keyup", (f) => {
  // Loop through above array..
  // Initially remove all elements ( so if user erases a letters or adds new letter then
  // clean previous outputs.)

  removeElements();

  for (let j of sortedNames) {
    // console.log(i);

    // convert input to lowercase and compare with each string..

    if (
      j.toLowerCase().startsWith(inputSecond.value.toLowerCase()) &&
      inputSecond.value != ""
    ) {
      // Create Li element..
      let listItems = document.createElement("li");

      // let locate = document.createElement("img");
      // locate.className = "locaat";
      // locate.src =
      //   "https://cdn.icon-icons.com/icons2/2642/PNG/512/google_map_location_logo_icon_159350.png";
      // locate.height = 27;

      // One common class name..
      listItems.classList.add("list-itemss");
      listItems.style.cursor = "pointer";
      listItems.setAttribute("onclick", "displayNamess('" + j + "')");

      // display matched part in bold..
      let words = "<b>" + j.substr(0, inputSecond.value.length) + "</b>";
      words += j.substr(inputSecond.value.length);

      //   console.log(word);

      // display the value in array..

      listItems.innerHTML = words;
      // listItem.appendChild(locate);
      document.querySelector(".lists").appendChild(listItems);
    }
  }
});
function displayNamess(value) {
  inputSecond.value = value;
  removeElements();
}
function removeElements() {
  // Clear all the item..
  let itemss = document.querySelectorAll(".list-itemss");
  itemss.forEach((items) => {
    items.remove();
  });
}

//

// input functionality..

function validateForm(e) {
  e.preventDefault();
  var inputFirrst, inputSeccond, s1, s2, s3, z;
  inputFirrst = document.getElementById("inputFirst");
  inputSeccond = document.getElementById("inputSecond");
  s1 = document.getElementById("s1");
  s2 = document.getElementById("s2");
  s3 = document.getElementById("s3");

  if (inputFirrst.value == "") {
    inputFirrst.style.border = "1px solid red";
    inputFirrst.style.boxShadow = "1px 1px 1px 1px red";
    s1.innerHTML = "<b>** Plz Choose Destination</b>";
    s1.style.color = "red";
  } else {
    s1.innerHTML = "";
  }

  if (inputSeccond.value == "") {
    inputSeccond.style.border = "1px solid red";
    inputSeccond.style.boxShadow = "1px 1px 1px 1px red";
    s2.innerHTML = "<b>** Plz Choose Destination</b>";
    s2.style.color = "red";
    return;
  } else if (inputSeccond.value == inputFirrst.value) {
    s2.innerHTML = "<b>** You Can't Choose Same Destination</b>";
    s2.style.color = "red";
    return;
  }

  handleBusSearch();
}
//
const firstIinput = document.getElementById("inputFirst");
firstIinput.addEventListener("keydown", function () {
  if (firstIinput.value == "") {
    s1.innerHTML = "";
  } else {
    firstIinput.value = firstIinput.value;
  }
});
const secondIinput = document.getElementById("inputSecond");
secondIinput.addEventListener("keydown", function () {
  if (secondIinput.value == "") {
    s2.innerHTML = "";
  } else {
    secondIinput.value = secondIinput.value;
  }
  if (secondIinput.value == firstIinput.value) {
    s2.innerHTML = "<b>** You Can't Choose Same Destination</b>";
  } else {
    s2.innerHTML = "";
    secondIinput.value = secondIinput.value;
  }
});

//

// Date Functionality..

// var dateTarget = document
//   .getElementById("datecontrol")
//   .addEventListener("click", function () {
//     var dtToday = new Date();
//     var month = dtToday.getMonth() + 1;
//     var day = dtToday.getDate();
//     var year = dtToday.getFullYear();
//     if (month < 10) month = "0" + month.toString();

//     if (day < 10) day = "0" + day.toString();

//     var maxDate = year + "-" + month + "-" + day;
//     $(" #datecontrol").attr("min", maxDate);
//   });

//

// Date Functionality Ankit Bhaiya..

const flightDateElem = document.getElementById("flightDate");
flightDateElem.value = "yyyy-MM-dd";

function handleDateSelection(e) {
  const selectedDate = e.target.value;
  const selectedDateTimeStamp = getTimeFromDate(selectedDate);
  const todaysDate = getTodayDate();
  const todayDateTimeStamp = getTimeFromDate(todaysDate);
  // const s5 = document.getElementById("s5");

  if (selectedDateTimeStamp < todayDateTimeStamp) {
    // s5.innerHTML = "<b>*Can't select past dates</b>";
    // s5.style.color = "red";
    flightDateElem.value = todaysDate;
    const e = document.getElementById("h");
    e.style.display = "block";
  } else {
    // s5.innerHTML = "";
    const eroor = document.getElementById("h");
    eroor.style.display = "none";
  }
}
function getTimeFromDate(todaysDate) {
  const result = new Date(todaysDate).getTime();
  return result;
}
function getTodayDate() {
  const todayDate = new Date();
  const numbers = todayDate.getMonth() < 9 ? "0" : "";
  const result = `${todayDate.getFullYear()}-${numbers}${
    todayDate.getMonth() + 1
  }-${todayDate.getDate()}`;
  return result;
}
const crs = document.getElementById("crs");
crs.addEventListener("click", function () {
  const eroor = document.getElementById("h");
  eroor.style.display = "none";
});

// URL functionality Search Buses..

function handleBusSearch() {
  const targets = document.getElementById("inputField");
  targets.addEventListener("click", function (event) {
    event.preventDefault();
  });
  const inputFirstElem = document.getElementById("inputFirst");
  const inputSecondElem = document.getElementById("inputSecond");
  const travelDatesElem = document.getElementById("flightDate");
  // console.log("@at:", inputFirstElem);

  const inputFirstElemValue = inputFirstElem.value;
  const inputFirstElemText = inputFirstElem.value;

  const inputSecondElemValue = inputSecondElem.value;
  const inputSecondElemText = inputSecondElem.value;

  const travelDateElemValue = travelDatesElem.value;
  const busSearchURL = `search-buses.html?fromCityName=${inputFirstElemText}&fromCityId=${inputFirstElemValue}&destinationCityName=${inputSecondElemText}&destinationCityId=${inputSecondElemValue}&onwards=${travelDateElemValue}`;
  // console.log(busSearchURL);
  window.location = busSearchURL;
  console.log("aniket");
}

//

//  Local storage functionality.

const valueElem = document.getElementById("inputFirst");
const valueElem2 = document.getElementById("inputSecond");
// console.log(valueElem);
// console.log(valueElem2);

const inputFirsts = localStorage.getItem("fromDestination");
const inputSeconds = localStorage.getItem("toDestination");
// console.log(inputFirsts);
// console.log(inputSeconds);

if (inputFirsts !== null) {
  // update the input
  valueElem.value = inputFirsts;
}
if (inputSeconds !== null) {
  // update the input
  valueElem2.value = inputSeconds;
}

// update data in local storage

function handleInputValue(e) {
  localStorage.setItem(e.target.name, e.target.value);
}
