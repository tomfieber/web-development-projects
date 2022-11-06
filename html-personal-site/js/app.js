const inputYearButton = document.getElementById("year-button");

const calculateLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
};

const leapYearHandler = () => {
  const year = document.getElementById("input-year").value;
  const yearNumber = parseInt(year);
  const elemDiv = document.getElementById("leap-year-answer");
  if (calculateLeapYear(yearNumber)) {
    elemDiv.innerHTML = `${year} <em>is</em> a leap year!`;
  } else {
    elemDiv.innerHTML = `${year} <em>is not</em> a leap year.`;
  }
};

inputYearButton.addEventListener("click", leapYearHandler);
