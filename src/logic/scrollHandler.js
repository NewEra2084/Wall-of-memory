export function ScrollHandler(e, setter, hand) {
  const scrollPercent = (
    (e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth)) *
    100
  ).toFixed(0); // расстояние в процентах
  const scrollLine =
    hand.current.parentElement.offsetWidth; //линия движения руки
  if (scrollPercent >= 90) {
    setter(true); //установка значения fetching на true
    return;
  }

  Object.assign(hand.current, {
    style: `--move-x: ${(scrollLine * scrollPercent) / 100}px`,
  }); // переписывание стилей руке
}