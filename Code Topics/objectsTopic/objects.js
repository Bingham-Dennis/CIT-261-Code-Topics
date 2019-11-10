// create local storage variable
let gunStorage = window.localStorage;

// create initial guns array
let guns = new Array();

// Get buttons to add event listners to later
let addFirearmBtn = document.getElementById('add-firearm');
let clearFirearmsBtn = document.getElementById('clear-firearms');

/******************************************************************************
 * Gun class declaration
******************************************************************************/
function Gun(make, model, caliber, price, color, newGun, purchased, owner) {
  this.make = make;
  this.model = model;
  this.caliber = caliber;
  this.price = price;
  this.color = color;
  this.newGun = newGun;
  this.purchased = purchased;
  this.owner = owner;

/******************************************************************************
 * getMake will get the make of the firearm
******************************************************************************/
  this.getMake = function() {
    return this.make;
  }
/******************************************************************************
 * getModel will get the model of the firearm
******************************************************************************/
  this.getModel = function() {
    return this.model;
  }
/******************************************************************************
 * getCaliber will get the caliber of the firearm
******************************************************************************/
  this.getCaliber = function() {
    return this.caliber;
  }
/******************************************************************************
 * getPrice will get the price of the firearm
******************************************************************************/
  this.getPrice = function() {
    return this.price;
  }
/******************************************************************************
 * getColor will get the color of the firearm
******************************************************************************/
  this.getColor = function() {
    return this.color;
  }
/******************************************************************************
 * getNewGun will return true if the firearm is new and false if not.
******************************************************************************/
  this.getNewGun = function() {
    return this.newGun;
  }
/******************************************************************************
 * getPurchased will return true if the firearm has been purchased and false
 * if not.
******************************************************************************/
  this.getPurchased = function() {
    return this.purchased;
  }
/******************************************************************************
 * getOwner will return the name of the owner or undefined
******************************************************************************/
  this.getOwner = function() {
    return this.owner;
  }
}

/******************************************************************************
 * purchaseMade will set the purchase property to true.
******************************************************************************/
Gun.prototype.purchaseMade = function() {
  this.purchased = true;
}

/******************************************************************************
 * setOwner will set the owner to the person passed in.
******************************************************************************/
Gun.prototype.setOwner = function(owner) {
  this.owner = owner
}

function Glock(model, caliber, price, color, newGun, purchased, owner) {
  let gun = new Gun('Glock', model, caliber, price, color, newGun, purchased, owner);
  return gun;
}

function Sig(model, caliber, price, color, newGun, purchased, owner) {
  let gun = new Gun('Sig', model, caliber, price, color, newGun, purchased, owner);
  return gun;
}

function Cz(model, caliber, price, color, newGun, purchased, owner) {
  let gun = new Gun('CZ', model, caliber, price, color, newGun, purchased, owner);
  return gun;
}

function Springfield(model, caliber, price, color, newGun, purchased, owner) {
  let gun = new Gun('Springfield', model, caliber, price, color, newGun, purchased, owner);
  return gun;
}

function Smith_Wesson(model, caliber, price, color, newGun, purchased, owner) {
  let gun = new Gun('Smith & Wesson', model, caliber, price, color, newGun, purchased, owner);
  return gun;
}

/******************************************************************************
 * Focus on first input onload
 *****************************************************************************/
function focusOnFirstInput() {
  document.getElementById('make').focus();
}

/******************************************************************************
 * addFirearm adds a newly created firarm to the list.
******************************************************************************/
function addFirearm(make, model, caliber, price, color, newGun, purchased, owner) {
  console.log(make);
  if (make !== '' || make !== undefined || make !== null ||
      model !== '' || model !== undefined || model !== null ||
      caliber !== '' || caliber !== undefined || caliber !== null ||
      price !== ''|| price !== undefined || price !== null ||
      color !== '' || color !== undefined || color !== null ||
      newGun !== '' || newGun !== undefined || newGun !== null) {
    const makeCheck = make.toLowerCase();
    if (newGun === 'on') {
      newGun = true;
    } else {
      newGun = false;
    }
    if (purchased === 'on') {
      purchased = true;
    } else {
      purchased = false;
    }
    let firearm;

  switch (makeCheck) {
    case 'glock':
      firearm = new Glock(model, caliber, price, color, newGun, purchased, owner);
      break;
    case 'sig':
      firearm = new Sig(model, caliber, price, color, newGun, purchased, owner);
      break;
    case 'cz':
      firearm = new Cz(model, caliber, price, color, newGun, purchased, owner);
      break;
    case 'springfield':
      firearm = new Springfield(model, caliber, price, color, newGun, purchased, owner);
      break;
    case 'smith & wesson':
      firearm = new Smith_Wesson(model, caliber, price, color, newGun, purchased, owner);
      break;
    default:
      firearm = new Gun(make, model, caliber, price, color, newGun, purchased, owner);
      break;
  }

  addToStorage(firearm);

  console.log('gun added');
  clearFields();
  focusOnFirstInput();
  }
}

/******************************************************************************
 * Add an item to storage.
******************************************************************************/
function addToStorage(firearm) {
  console.log(guns);
  if (guns[0] === undefined || guns[0] === null || guns[0] === '') {
    guns.push(firearm);
    let prepGuns = JSON.stringify(guns);
    gunStorage.setItem('guns', prepGuns);
    updateList(firearm);
  } else {
    let updateGuns = JSON.parse(gunStorage['guns']);
    console.log(updateGuns);
    updateGuns.push(firearm);
    let updatedGuns = JSON.stringify(updateGuns);
    gunStorage.setItem('guns', updatedGuns);
    updateList(firearm);
  }
}

/******************************************************************************
 * Clear all data input fields
******************************************************************************/
function clearFields() {
  document.getElementById('make').value = '';
  document.getElementById('model').value = '';
  document.getElementById('caliber').value = '';
  document.getElementById('price').value = '';
  document.getElementById('color').value = '';
  document.getElementById('newGun').checked = false;
  document.getElementById('purchased').checked = false;
  document.getElementById('owner').value = '';
}

/******************************************************************************
 * read Items from localStorage
******************************************************************************/
function readStorage() {
  let storedGuns = JSON.parse(gunStorage['guns']);
    storedGuns.forEach((storedGun) => {
      updateList(storedGun);
    });
}

/******************************************************************************
 * read Items from localStorage
******************************************************************************/
function clearStorage() {
  let storedGuns = JSON.parse(gunStorage['guns']);
  storedGuns = [];
  storedGuns = JSON.stringify(storedGuns);
  gunStorage.setItem('guns', storedGuns);
}

/******************************************************************************
 * create table element to be stored in list.
******************************************************************************/
function updateList(storedGun) {
  let tr = document.createElement('tr');
  tr.setAttribute('id', `${model}-${owner}`);

  let tdMake = document.createElement('td');
  tdMake.innerHTML = storedGun.make;
  tr.appendChild(tdMake);

  let tdModel = document.createElement('td');
  tdModel.innerHTML = storedGun.model;
  tr.appendChild(tdModel);

  let tdCaliber = document.createElement('td');
  tdCaliber.innerHTML = storedGun.caliber;
  tr.appendChild(tdCaliber);

  let tdPrice = document.createElement('td');
  tdPrice.innerHTML = storedGun.price;
  tr.appendChild(tdPrice);

  let tdColor = document.createElement('td');
  tdColor.innerHTML = storedGun.color;
  tr.appendChild(tdColor);

  let tdOwner = document.createElement('td');
  tdOwner.innerHTML = storedGun.owner;
  tr.appendChild(tdOwner);

  document.getElementById('display-firearms').appendChild(tr);
}

/******************************************************************************
 * remove unwanted items.
******************************************************************************/
function removeItems() {
  let table = document.getElementById('display-firearms');
  let tableRows = table.getElementsByTagName('tr');
  let rowCount = tableRows.length;

  for (let i = rowCount - 1; i > 0; i--) {
    table.removeChild(tableRows[i]);
  }

  clearFields();
  clearStorage();
  focusOnFirstInput();
}

/******************************************************************************
 * addFirearmBtn listner
 *****************************************************************************/
addFirearmBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let make = document.getElementById('make').value;
  let model = document.getElementById('model').value;
  let caliber = document.getElementById('caliber').value;
  let price = document.getElementById('price').value;
  let color = document.getElementById('color').value;
  let newGun = document.getElementById('newGun').value;
  let purchased = document.getElementById('purchased').value;
  let owner = document.getElementById('owner').value;
  addFirearm(make, model, caliber, price, color, newGun, purchased, owner);
});

/******************************************************************************
 * clearFirearmsBtn listner
 *****************************************************************************/
clearFirearmsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  removeItems();
});
