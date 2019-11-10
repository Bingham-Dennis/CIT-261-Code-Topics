const standardBox = 'box';
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

/******************************************************************************
 * Button 1 data
 *****************************************************************************/
const object1 = {
  name: 'box1',
  classMod: 'changeColor1',
  dirtyFlag: false
};

/******************************************************************************
 * Button 2 data
 *****************************************************************************/
const object2 = {
  name: 'box2',
  classMod: 'changeColor2',
  dirtFlag: false
};

/******************************************************************************
 * Button 3 data
 *****************************************************************************/
const object3 = {
  name: 'box3',
  classMod: 'changeColor3',
  dirtFlag: false
};

/******************************************************************************
 * ChangeColor function
 * This function takes an object and changes the class based on whether or not
 * the dirtyFlag has been set to true or not.
 *****************************************************************************/
function changeColor(item) {
  var box = document.getElementById(`${item.name}`);
  console.log(`${item.dirtyFlag}`);
  if (item.dirtyFlag === false) {
    box.removeAttribute('class');
    box.setAttribute('class', `${item.classMod}`);
    item.dirtyFlag = true;
  } else {
    box.removeAttribute('class');
    box.setAttribute('class', `${standardBox}`);
    item.dirtyFlag = false;
  }
}

btn1.addEventListener('click', () => {
  console.log('btn1 clicked');
  changeColor(object1);
});
btn2.addEventListener('click', () => {
  console.log('btn2 clicked');
  changeColor(object2);
});
btn3.addEventListener('click', () => {
  console.log('btn3 clicked');
  changeColor(object3);
});
