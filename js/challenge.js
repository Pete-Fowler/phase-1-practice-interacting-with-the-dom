const counter = (() => {
  const counter = document.querySelector('#counter');
  let n = 0;
  let counting = true;
  const count = () => {
    n = counter.textContent;
    n++;
    counter.textContent = n;
  }
  let nId = setInterval(count, 1000);
  const pause = () => {
    if(counting === true) {
    clearInterval(nId);
    counting = false;
    } else {
      nId = setInterval(count, 1000);
      counting = true;
    }
  }
  return { pause };
})();

const listeners = (() => {
  const pauseBtn = document.querySelector('#pause');
  pauseBtn.addEventListener('click', counter.pause);
})();


