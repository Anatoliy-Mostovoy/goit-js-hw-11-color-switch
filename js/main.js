import colors from './colors.js'
let changeColorId;
const refs = {
    body: document.querySelector('body'),
    buttonStart: document.querySelector('[data-action="start"]'),
    buttonStop: document.querySelector('[data-action="stop"]'),
  } 
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
const chooseColor = index => colors[index];
const randomColorBody = ()=>
    refs.body.style.backgroundColor = chooseColor(randomIntegerFromInterval(0,5));

  function clickOnButtonStart() {
      console.log('ПОГНАЛИ');
      refs.buttonStart.removeEventListener('click',clickOnButtonStart)
      changeColorId = setInterval(randomColorBody, 100);
      refs.buttonStop.addEventListener('click', clickOnButtonStop);
  }
  refs.buttonStart.addEventListener('click', clickOnButtonStart);
  
  function clickOnButtonStop (){
      console.log('АСТАНОВИСЬ');
      clearInterval(changeColorId);
      refs.buttonStop.removeEventListener('click',clickOnButtonStop);
      refs.buttonStart.addEventListener('click', clickOnButtonStart);
  }
//   refs.buttonStop.addEventListener('click', clickOnButtonStop);

 