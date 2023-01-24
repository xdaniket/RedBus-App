const mykeysValues = window.location.search;

const urlParams = new URLSearchParams(mykeysValues);

const param1 = urlParams.get("fromCityName");
const param2 = urlParams.get("fromCityId");

const param3 = urlParams.get("destinationCityName");
const param4 = urlParams.get("destinationCityId");

const param5 = urlParams.get("onwards");

//

const fromName = document.getElementById("fromeName");
const fromName2 = document.getElementById("fromeName2");
const fromName3 = document.getElementById("fromeName3");
const fromName4 = document.getElementById("fromeName4");
const fromName5 = document.getElementById("fromeName5");

const toName = document.getElementById("toName");
const toName2 = document.getElementById("toName2");
const toName3 = document.getElementById("toName3");
const toName4 = document.getElementById("toName4");
const toName5 = document.getElementById("toName5");

const fulldate = document.getElementById("fullDate");

//

fromName.innerText = param1;
toName.innerText = param3;
fulldate.innerText = param5;

fromName2.innerText = param1;
toName2.innerText = param3;

fromName3.innerText = param1;
toName3.innerText = param3;

fromName4.innerText = param1;
toName4.innerText = param3;

fromName5.innerText = param1;
toName5.innerText = param3;
