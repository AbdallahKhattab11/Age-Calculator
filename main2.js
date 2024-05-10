// variables

let dayInput = document.querySelector(".day");
let monthInput = document.querySelector(".month");
let yearInput = document.querySelector(".year");

let allinputs = document.querySelectorAll("form ul li input");

let ul = document.querySelector("form ul")

let dayError = document.querySelector(".err-day");
let monthError = document.querySelector(".err-month");
let yearError = document.querySelector(".err-year");

let btn = document.getElementById("btn");

let dateInyear = document.querySelector(".year-date");
let dateInmonth = document.querySelector(".month-date");
let dateInday = document.querySelector(".day-date");

let theDay;
let theMonth;
let theYear;






// functions

// check if there is data in the day or month or year field  
function checkIfThereIsData (day,month,year) {
  if (day === "" && month === "" && year === "") {
    dayError.textContent = "This Field Is Required";
    monthError.textContent = "This Field Is Required";
    yearError.textContent = "This Field Is Required";
    ul.setAttribute("class","for-error");
    dayInput.style.cssText = " border-color: var(--LightRed);";
    monthInput.style.cssText = " border-color: var(--LightRed);";
    yearInput.style.cssText = " border-color: var(--LightRed);";
  }else {
    dayError.textContent = "";
    monthError.textContent = "";
    yearError.textContent = "";
    ul.removeAttribute("class");
    dayInput.style.cssText = " border-color: var(--SmokeyGrey);";
    monthError.style.cssText = " border-color: var(--SmokeyGrey);";
    yearError.style.cssText = " border-color: var(--SmokeyGrey);";
    // ---
    //dayinput
  if(day === "") {
    dayError.textContent = "This Field Is Required";
    ul.setAttribute("class","for-error");
    dayInput.style.cssText = " border-color: var(--LightRed);";
  } else {
    dayError.textContent = "";
    ul.removeAttribute("class");
    dayInput.style.cssText = " border-color: var(--SmokeyGrey);";
  }
  //monthInput
  if(month === "") {
    monthError.textContent = "This Field Is Required";
    ul.setAttribute("class","for-error");
    monthInput.style.cssText = " border-color: var(--LightRed);";
  } else {
    monthError.textContent = "";
    ul.removeAttribute("class");
    monthInput.style.cssText = " border-color: var(--SmokeyGrey);";
  }
  // yearInput
  if(year === "") {
    yearError.textContent = "This Field Is Required";
    ul.setAttribute("class","for-error");
    yearInput.style.cssText = " border-color: var(--LightRed);";
  } else {
    yearError.textContent = "";
    ul.removeAttribute("class");
    yearInput.style.cssText = " border-color: var(--SmokeyGrey);";
  }

  }
  
}



// check the data must be number
function checkIfNumber(day,month,year) {
  if (Number.isInteger(+day) === false ) {
    dayInput.value = "";
  }
  if ( Number.isInteger(+month) === false) {
    monthInput.value = "";
  }
  if ( Number.isInteger(+year) === false) {
    yearInput.value = "";
  }
}




// Verify the data in the field is valid 

function verifyTheData (day,month,year) {



  //day
  if (day <= 31 && day >= 1) {
    dayError.textContent = "";
    ul.removeAttribute("class");
    dayInput.style.cssText = " border-color: var(--SmokeyGrey);";
    
    //month
    if (month <= 12 && month >= 1) {
      monthError.textContent = "";
      ul.removeAttribute("class");
      monthInput.style.cssText = " border-color: var(--SmokeyGrey);";

      switch(+month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          if (day <= 31 && day >= 1) {
            dayError.textContent = "";
            ul.removeAttribute("class");
            dayInput.style.cssText = "border-color: var(--SmokeyGrey);";
            theMonth = month;
            theDay = day;
          }else {
            dayError.textContent = "Invalid day";
            ul.setAttribute("class","for-error");
            dayInput.style.cssText = "border-color: var(--LightRed);";
          };
        break;
        case 4:
        case 6:
        case 9:
        case 11:
          if (day <= 30 && day >= 1) {
            dayError.textContent = "";
            ul.removeAttribute("class");
            dayInput.style.cssText = "border-color: var(--SmokeyGrey);";
            theMonth = month;
            theDay = day;
          }else {
            dayError.textContent = "Invalid day";
            ul.setAttribute("class","for-error");
            dayInput.style.cssText = "border-color: var(--LightRed);";
          };
        break;
        case 2:
          if (day <= 28 && day >= 1) {
            dayError.textContent = "";
            ul.removeAttribute("class");
            dayInput.style.cssText = "border-color: var(--SmokeyGrey);";
            theMonth = month;
            theDay = day;
          }else {
            dayError.textContent = "Invalid day";
            ul.setAttribute("class","for-error");
            dayInput.style.cssText = "border-color: var(--LightRed);";
          };
        break;
      }

    }else {
      monthError.textContent = "Invalid month";
      ul.setAttribute("class","for-error");
      monthInput.style.cssText = " border-color: var(--LightRed);";
    }
  }else {
    dayError.textContent = "Invalid day";
    ul.setAttribute("class","for-error");
    dayInput.style.cssText = " border-color: var(--LightRed);";
  }
  yearError.textContent = "Invalid year";
  

   // year
  let currentYear = new Date().getFullYear();
  if (year >= 1900 && year < currentYear) {
    yearError.textContent = "";
    ul.removeAttribute("class");
    yearInput.style.cssText = " border-color: var(--SmokeyGrey);";
    theYear = year;
  }else {
    yearError.textContent = "Invalid year";
    ul.setAttribute("class","for-error");
    yearInput.style.cssText = " border-color: var(--LightRed);";
  }

//------
if (yearError.textContent === "Invalid year" || monthError.textContent === "Invalid month" || dayError.textContent === "Invalid day") {
  ul.setAttribute("class","for-error");
}else {
  ul.removeAttribute("class");
}

//------

  // check data before send it
  if (theDay === undefined || theMonth === undefined || theYear === undefined) {
    return false;
  }else {
    return `${theMonth} ${theDay}, ${theYear}`;
  }
}


// get date 
function date (birth) {
  if (birth === false) {
  dateInyear.textContent = "--";
  dateInmonth.textContent = "--";
  dateInday.textContent = "--";
  }else {
  let date = new Date();
  let yearNow = date.getFullYear();
  let monthNow = date.getMonth() + 1;
  let dayNow = date.getDate();
  
  let birthDate = new Date(birth);
  let birth_Year = birthDate.getFullYear();
  let birth_Month = birthDate.getMonth() + 1;
  let birth_Day = birthDate.getDate();

  let years = yearNow - birth_Year;
  let months,days;
  
  // months
  if (monthNow >= birth_Month) {
    months = monthNow - birth_Month;
  }else {
    years--;
    months = (monthNow + 12) - birth_Month;
  }

  // days

  if (dayNow >= birth_Day) {
    days = dayNow - birth_Day;
  }else {
    months--;
    days = (dayNow + 31) - birth_Day;
  }
  dateInyear.textContent = years;
  dateInmonth.textContent = months;
  dateInday.textContent = days;
  }
  
  
}







// events

allinputs.forEach((input) => {
  input.oninput = function () {
    checkIfNumber(dayInput.value,monthInput.value,yearInput.value);
  }
});


btn.onclick = function () {
  checkIfThereIsData(dayInput.value,monthInput.value,yearInput.value);
  date(verifyTheData(dayInput.value,monthInput.value,yearInput.value));

}












