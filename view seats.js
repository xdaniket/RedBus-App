const seatElemm = document.getElementById("viewSeatPage");

const btnTargetElem = document.getElementById("viewSeatss");
btnTargetElem.addEventListener("click", function () {
  const hideTarget = document.getElementById("viewSeatss");
  hideTarget.innerText = "HIDE SEATS";
  hideTarget.addEventListener("click", function () {
    const hideTargeta = document.getElementById("viewSeatss");
    hideTargeta.innerText = "VIEW SEATS";

    const seatElemms = document.getElementById("viewSeatPage");
    seatElemms.style.display = "none";
  });

  const headerDiv = document.createElement("div");
  headerDiv.className = "headerDiv";

  const parentDiv = document.createElement("div");
  parentDiv.className = "parentDiv";

  const headerText = document.createElement("p");
  headerText.className = "paraText";
  headerText.innerText = "Seat No :";

  const allButtonSecond = document.createElement("button");
  allButtonSecond.id = "no";
  allButtonSecond.className = "allBtn";
  allButtonSecond.style = "background:red;color:white;border:none";
  allButtonSecond.innerText = 0;

  parentDiv.appendChild(headerText);
  parentDiv.appendChild(allButtonSecond);
  headerDiv.appendChild(parentDiv);

  const parentDiv2 = document.createElement("div");
  parentDiv2.className = "parentDiv";

  const headerText2 = document.createElement("p");
  headerText2.className = "paraText";
  headerText2.innerText = "Amount :";

  const allButtonThird = document.createElement("button");
  allButtonThird.id = "amount";
  allButtonThird.className = "allBtn";
  allButtonThird.style = "background:green;color:white;border:none";
  allButtonThird.innerText = 0;

  parentDiv2.appendChild(headerText2);
  parentDiv2.appendChild(allButtonThird);
  headerDiv.appendChild(parentDiv2);

  seatElemm.appendChild(headerDiv);

  const frstDiv = document.createElement("div");
  frstDiv.className = "Container";

  seatElemm.appendChild(frstDiv);

  const secDiv = document.createElement("div");
  secDiv.className = "Container";

  const innerDiv = document.createElement("div");
  innerDiv.className = "row";
  innerDiv.id = "mainDiv";

  secDiv.appendChild(innerDiv);
  seatElemm.appendChild(secDiv);

  const thirdDiv = document.createElement("div");
  thirdDiv.className = "Container";
  thirdDiv.style.color = "red";
  thirdDiv.id = "msg";

  seatElemm.appendChild(thirdDiv);

  const payBtn = document.createElement("input");
  payBtn.type = "button";
  payBtn.value = "BOOK";
  payBtn.className = "payBtn";
  payBtn.addEventListener("click", function () {
    const bodyContainer = document.getElementById("bodyContainer");
    bodyContainer.style.opacity = 0;

    const msgBala = document.getElementById("msgBala");
    msgBala.className = "msgBalas";

    const containers = document.createElement("div");
    containers.className = "container";

    const innerContainer = document.createElement("div");
    innerContainer.className = "popUp";
    innerContainer.id = "popup";

    const tickImg = document.createElement("img");
    tickImg.src =
      "https://npm.works/wp-content/uploads/2022/01/02-lottie-tick-01-instant-2.gif";
    tickImg.height = 150;

    innerContainer.appendChild(tickImg);

    const heading = document.createElement("h2");
    heading.innerText = "Thank You!";

    const paraInner = document.createElement("p");
    paraInner.innerText = "Your Booking Is Confirm..Thanks!";

    const okBttn = document.createElement("button");
    okBttn.id = "okBtn";
    okBttn.innerText = "OK";
    okBttn.addEventListener("click", function () {
      const trget = document.getElementById("msgBala");
      trget.style.display = "none";

      const bodyContainers = document.getElementById("bodyContainer");
      bodyContainers.style.opacity = 1;
    });

    innerContainer.appendChild(heading);
    innerContainer.appendChild(paraInner);
    innerContainer.appendChild(okBttn);

    containers.appendChild(innerContainer);
    msgBala.appendChild(containers);
  });

  seatElemm.appendChild(payBtn);

  var tickets = [
    { no: 1, amount: 100 },
    { no: 2, amount: 200 },
    { no: 3, amount: 100 },
    { no: 4, amount: 300 },
    { no: 5, amount: 600 },
    { no: 6, amount: 100 },
    { no: 7, amount: 800 },
    { no: 8, amount: 900 },
  ];

  str = ``;
  tickets.forEach(function (value, index) {
    str =
      str +
      `
   <img class="a" src='https://static.thenounproject.com/png/661611-200.png' onclick='myfunc(this)' height = '30px' for='${value.no}#${value.amount}'>${value.no}:<br/>${value.amount}
    `;
  });
  document.getElementById("mainDiv").innerHTML = str;

  arr1 = [];
  arr2 = [];
});

function myfunc(myvar) {
  let ans = myvar.attributes.for.value;
  let ans1 = ans.split("#");

  let position = arr1.indexOf(ans1[0]);
  if (position == -1) {
    arr1.push(ans1[0]);
    arr2.push(ans1[1]);
    msg = "Ticket Added";
  } else {
    msg = "<b>Ticket Already Exit</b>";
  }
  document.getElementById("msg").innerHTML = msg;

  final_no = arr1.join(",");
  document.getElementById("no").innerHTML = final_no;

  final_amount = arr2.join("+");
  let total_amount = eval(final_amount);

  document.getElementById("amount").innerHTML = total_amount;
  myvar.style = "background:red;color:white;border:none";
}

//

//

const seatElemma = document.getElementById("viewSeatPagesss");

const btnTargetElema = document.getElementById("viewSeatsss");
btnTargetElema.addEventListener("click", function () {
  const hideTarget = document.getElementById("viewSeatsss");
  hideTarget.innerText = "HIDE SEATS";
  hideTarget.addEventListener("click", function () {
    const hideTargeta = document.getElementById("viewSeatsss");
    hideTargeta.innerText = "VIEW SEATS";

    const seatElemms = document.getElementById("viewSeatPagesss");
    seatElemms.style.display = "none";
  });

  const headerDiv = document.createElement("div");
  headerDiv.className = "headerDiv";

  const parentDiv = document.createElement("div");
  parentDiv.className = "parentDiv";

  const headerText = document.createElement("p");
  headerText.className = "paraText";
  headerText.innerText = "Seat No :";

  const allButtonSecond = document.createElement("button");
  allButtonSecond.id = "no";
  allButtonSecond.className = "allBtn";
  allButtonSecond.style = "background:red;color:white;border:none";
  allButtonSecond.innerText = 0;

  parentDiv.appendChild(headerText);
  parentDiv.appendChild(allButtonSecond);
  headerDiv.appendChild(parentDiv);

  const parentDiv2 = document.createElement("div");
  parentDiv2.className = "parentDiv";

  const headerText2 = document.createElement("p");
  headerText2.className = "paraText";
  headerText2.innerText = "Amount :";

  const allButtonThird = document.createElement("button");
  allButtonThird.id = "amount";
  allButtonThird.className = "allBtn";
  allButtonThird.style = "background:green;color:white;border:none";
  allButtonThird.innerText = 0;

  parentDiv2.appendChild(headerText2);
  parentDiv2.appendChild(allButtonThird);
  headerDiv.appendChild(parentDiv2);

  seatElemma.appendChild(headerDiv);

  const frstDiv = document.createElement("div");
  frstDiv.className = "Container";

  seatElemma.appendChild(frstDiv);

  const secDiv = document.createElement("div");
  secDiv.className = "Container";

  const innerDiv = document.createElement("div");
  innerDiv.className = "row";
  innerDiv.id = "mainDiv";

  secDiv.appendChild(innerDiv);
  seatElemma.appendChild(secDiv);

  const thirdDiv = document.createElement("div");
  thirdDiv.className = "Container";
  thirdDiv.style.color = "red";
  thirdDiv.id = "msg";

  seatElemma.appendChild(thirdDiv);

  const payBtn = document.createElement("input");
  payBtn.type = "button";
  payBtn.value = "BOOK";
  payBtn.className = "payBtn";
  //
  payBtn.addEventListener("click", function () {
    const bodyContainer = document.getElementById("bodyContainer");
    bodyContainer.style.opacity = 0;

    const msgBala = document.getElementById("msgBala");
    msgBala.className = "msgBalas";

    const containers = document.createElement("div");
    containers.className = "container";

    const innerContainer = document.createElement("div");
    innerContainer.className = "popUp";
    innerContainer.id = "popup";

    const tickImg = document.createElement("img");
    tickImg.src =
      "https://npm.works/wp-content/uploads/2022/01/02-lottie-tick-01-instant-2.gif";
    tickImg.height = 150;

    innerContainer.appendChild(tickImg);

    const heading = document.createElement("h2");
    heading.innerText = "Thank You!";

    const paraInner = document.createElement("p");
    paraInner.innerText = "Your Booking Is Confirm..Thanks!";

    const okBttn = document.createElement("button");
    okBttn.id = "okBtn";
    okBttn.innerText = "OK";
    okBttn.addEventListener("click", function () {
      const trget = document.getElementById("msgBala");
      trget.style.display = "none";

      const bodyContainers = document.getElementById("bodyContainer");
      bodyContainers.style.opacity = 1;
    });

    innerContainer.appendChild(heading);
    innerContainer.appendChild(paraInner);
    innerContainer.appendChild(okBttn);

    containers.appendChild(innerContainer);
    msgBala.appendChild(containers);
  });

  //

  seatElemma.appendChild(payBtn);

  var tickets = [
    { no: 1, amount: 100 },
    { no: 2, amount: 200 },
    { no: 3, amount: 100 },
    { no: 4, amount: 300 },
    { no: 5, amount: 600 },
    { no: 6, amount: 100 },
    { no: 7, amount: 800 },
    { no: 8, amount: 900 },
  ];

  str = ``;
  tickets.forEach(function (value, index) {
    str =
      str +
      `
   <img class="a" src='https://static.thenounproject.com/png/661611-200.png' onclick='myfunc(this)' height = '30px' for='${value.no}#${value.amount}'>${value.no}:<br/>${value.amount}
    `;
  });
  document.getElementById("mainDiv").innerHTML = str;

  arr1 = [];
  arr2 = [];
});

function myfunc(myvar) {
  let ans = myvar.attributes.for.value;
  let ans1 = ans.split("#");

  let position = arr1.indexOf(ans1[0]);
  if (position == -1) {
    arr1.push(ans1[0]);
    arr2.push(ans1[1]);
    msg = "Ticket Added";
  } else {
    msg = "<b>Ticket Already Exit</b>";
  }
  document.getElementById("msg").innerHTML = msg;

  final_no = arr1.join(",");
  document.getElementById("no").innerHTML = final_no;

  final_amount = arr2.join("+");
  let total_amount = eval(final_amount);

  document.getElementById("amount").innerHTML = total_amount;
  myvar.style = "background:red;color:white;border:none";
}
