function calculateMoney(ticketSale) {
  if (ticketSale <= 0 || typeof ticketSale !== "number") {
    return "Invalid number";
  } else {
    const totalMoney = ticketSale * 120;
    const grossProfit = totalMoney - (500 + 8 * 50);
    return grossProfit;
  }
}

function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid input";
  }
  const convertLowerCase = name.toLocaleLowerCase();
  const nameLastLetter = convertLowerCase.slice(-1);
  const checkChars = ["a", "y", "i", "e", "o", "u", "w"];
  if (checkChars.includes(nameLastLetter)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

function deleteInvalids(array) {
  let filteredArray = [];
  if (!Array.isArray(array)) {
    return "Invalid array";
  } else {
    for (let singleItem of array) {
      if (typeof singleItem === "number" && !isNaN(singleItem)) {
        filteredArray.push(singleItem);
      }
    }
    return filteredArray;
  }
}

function password(obj) {
  if (
    Object.keys(obj).length !== 3 ||
    obj.birthYear.toString().length !== 4 ||
    typeof obj.siteName !== "string"
  ) {
    return "Invalid";
  }
  const name = obj.name.split(" ").join("");
  const birthYear = obj.birthYear;
  const siteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
  if (typeof name === "string" && birthYear && siteName) {
    return `${siteName}#${name}@${birthYear}`;
  } else {
    return "Invalid";
  }
}

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "Invalid input";
  }
  let taxSalary = 0;
  let normalSalary = 0;
  for (let singleItem of arr) {
    if (singleItem >= 3000) {
      taxSalary += (singleItem * 20) / 100;
    }
    normalSalary += singleItem;
  }
  const totalSalary = normalSalary - taxSalary;
  if (livingCost === totalSalary) {
    return 0;
  } else if (livingCost > totalSalary) {
    return "Earn more";
  } else {
    const totalSavings = totalSalary - livingCost;
    return totalSavings;
  }
}
