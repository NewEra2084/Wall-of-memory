const MIN = 1870; // год начала
const MAX = 2025; // год конца

function setStartValueCustomSlider(inputStart, inputEnd, pseudoEl, range) {
  if (inputEnd <= inputStart - 10) {
    return; // если расстояние между годами меньше 10 возврат
  }
  const maximum = Math.min(parseInt(inputStart), parseInt(inputEnd) - 10); // вычисление минимального значения для проверки можно ли двигать румблер

  let percent = (((maximum - MIN) / (MAX - 1 - MIN)) * 100).toFixed(0); // приведение к процентному виду
  if (percent < 0) {
    percent = 0;
  }

  pseudoEl.style.left = percent + "%";
  range.style.left = percent + "%";
}

function setEndValueCustomSlider(inputStart, inputEnd, pseudoEl, range) {
  if (inputEnd + 10 <= inputStart) {
    return; // по аналогии с вышеуказанным
  }
  const minimun = Math.max(parseInt(inputEnd), parseInt(inputStart) + 10);

  let percent = (((minimun - MIN + 1) / (MAX - MIN + 1)) * 100).toFixed(0);
  if (percent > 100) {
    percent = 100;
  }
  pseudoEl.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
}
export { setStartValueCustomSlider, setEndValueCustomSlider };
