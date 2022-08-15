const pauseBtn = document.querySelector('#pause');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const heartBtn = document.querySelector('#heart');
const submitBtn = document.querySelector('#submit');

const counter = (() => {
  const counter = document.querySelector('#counter');
  let n = 0;
  let counting = true;
  const count = () => {
    n = counter.textContent;
    n++;
    counter.textContent = n;
  }
  let int = setInterval(count, 1000);
  const btnToggle = (status) => {
    const btns = document.querySelectorAll('button');
    if(status === 'disable') {
      btns.forEach((btn) => {
        if(btn.id !== 'pause') {
          btn.disabled = true;
        }
      });
    } else if(status === 'enable') {
      btns.forEach((btn) => {
        if(btn.id !== 'pause') {
          btn.disabled = false;
        }
      });
    }
  }
  const pause = () => {
    if(counting === true) {
      clearInterval(int);
      counting = false;
      pauseBtn.textContent = 'resume';
      btnToggle('disable');
    } else {
      int = setInterval(count, 1000);
      counting = true;
      pauseBtn.textContent = 'pause';
      btnToggle('enable');
    }
  }
  const plus = () => {
    let n = counter.textContent;
    n++;
    counter.textContent = n;
    clearInterval(int);
    int = setInterval(count, 1000);
  }
  const minus = () => {
    let n = counter.textContent;
    n--;
    counter.textContent = n;
    clearInterval(int);
    int = setInterval(count, 1000);
  }
  return { pause, plus, minus };
})();

const listeners = (() => {
pauseBtn.addEventListener('click', counter.pause);

plusBtn.addEventListener('click', counter.plus);

minusBtn.addEventListener('click', counter.minus);
})();


