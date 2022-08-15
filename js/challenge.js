const pauseBtn = document.querySelector('#pause');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const heartBtn = document.querySelector('#heart');
const submitBtn = document.querySelector('#submit');
const list = document.querySelector('ul.likes');

const counter = (() => {
  const counter = document.querySelector('#counter');
  let counting = true;
  const count = () => {
    let n = counter.textContent;
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
  const heart = () => {
    let time = counter.textContent;
    if(document.querySelector(`li[data-time='${time}']`)) {
      const item = document.querySelector(`li[data-time='${time}']`);
      let likes = item.getAttribute('data-likes');
      console.log(likes);
      likes++;
      item.textContent = `${time} has been liked ${likes} times.`;
    } else {
      let likes = 1;
      const item = document.createElement('li');
      item.setAttribute('data-time', time);
      item.setAttribute('data-likes', likes);
      item.textContent = `${time} has been liked ${likes} times.`;
      list.appendChild(item);
    }
  }
  return { pause, plus, minus, heart };
})();

const listeners = (() => {
  pauseBtn.addEventListener('click', counter.pause);
  plusBtn.addEventListener('click', counter.plus);
  minusBtn.addEventListener('click', counter.minus);
  heartBtn.addEventListener('click', counter.heart);
})();


// li in ul.likes for heart messages
// div#list.comments p for comments