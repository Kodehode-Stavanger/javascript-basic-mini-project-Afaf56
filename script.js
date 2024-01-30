const inptEl1 = document.getElementById("input1");
const inptEl2 = document.querySelector("#input2");
const slctEl = document.querySelector("#slct");
const rslt = document.querySelector("#result");

function calculate() {
  let result = 0;
  switch (slctEl.value) {
    case "+":
      result = `${inptEl1.value} + ${inptEl2.value} = ${
        parseInt(inptEl1.value) + parseInt(inptEl2.value)
      }   `;
      break;
    case "-":
      result = `${inptEl1.value} - ${inptEl2.value} = ${
        parseInt(inptEl1.value) - parseInt(inptEl2.value)
      }`;
      break;
    case "*":
      result = `${inptEl1.value} * ${inptEl2.value} = ${
        parseInt(inptEl1.value) * parseInt(inptEl2.value)
      }`;
      break;
    case "/":
      result = `${inptEl1.value} / ${inptEl2.value} = ${
        parseInt(inptEl1.value) / parseInt(inptEl2.value)
      }`;
      break;
  }

  rslt.textContent = result;
}

const DivEl = document.createElement("div");
DivEl.classList.add("div1");
document.body.append(DivEl);

const divEl = document.createElement("div");
//divEl.classList.add("divSUB");
divEl.setAttribute("id", "divs1");
divEl.setAttribute("class", "divSUB");
divEl.textContent = ":";
DivEl.append(divEl);

const btnEl1 = document.createElement("button");
btnEl1.classList.add("divSUB");
btnEl1.textContent = "1";
DivEl.append(btnEl1);

const btnEl2 = document.createElement("button");
btnEl2.classList.add("divSUB");
btnEl2.textContent = "2";
DivEl.append(btnEl2);

const btnEl3 = document.createElement("button");
btnEl3.classList.add("divSUB");
btnEl3.textContent = "3";
DivEl.append(btnEl3);

const btnEl4 = document.createElement("button");
btnEl4.classList.add("divSUB");
btnEl4.textContent = "+";
DivEl.append(btnEl4);

const btnEl5 = document.createElement("button");
btnEl5.classList.add("divSUB");
btnEl5.textContent = "4";
DivEl.append(btnEl5);

const btnEl6 = document.createElement("button");
btnEl6.classList.add("divSUB");
btnEl6.textContent = "5";
DivEl.append(btnEl6);

const btnEl7 = document.createElement("button");
btnEl7.classList.add("divSUB");
btnEl7.textContent = "6";
DivEl.append(btnEl7);

const btnEl8 = document.createElement("button");
btnEl8.classList.add("divSUB");
btnEl8.textContent = "-";
DivEl.append(btnEl8);

const btnEl9 = document.createElement("button");
btnEl9.classList.add("divSUB");
btnEl9.textContent = "7";
DivEl.append(btnEl9);

const btnEl10 = document.createElement("button");
btnEl10.classList.add("divSUB");
btnEl10.textContent = "8";
DivEl.append(btnEl10);

const btnEl11 = document.createElement("button");
btnEl11.classList.add("divSUB");
btnEl11.textContent = "9";
DivEl.append(btnEl11);

const btnEl12 = document.createElement("button");
btnEl12.classList.add("divSUB");
btnEl12.textContent = "*";
DivEl.append(btnEl12);

const btnEl13 = document.createElement("button");
btnEl13.classList.add("divSUB");
btnEl13.setAttribute("id", "divs15");
btnEl13.textContent = "=";
DivEl.append(btnEl13);

const btnEl14 = document.createElement("button");
btnEl14.classList.add("divSUB");
btnEl14.textContent = "0";
DivEl.append(btnEl14);

const btnEl15 = document.createElement("button");
btnEl15.classList.add("divSUB");
btnEl15.textContent = "/";
DivEl.append(btnEl15);
