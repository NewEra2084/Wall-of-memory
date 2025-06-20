function ScrollHandler(e){
  const scrollPercent = ((e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth)) * 100).toFixed(0);
  const handWidth = 42;
  const scrollLine = document.querySelector(".scrollHand").parentElement.offsetWidth;
  if(scrollPercent >= 90) return;
  
  Object.assign(document.querySelector(".scrollHand"), {
    style: `--move-x: ${scrollLine * scrollPercent / 100}px`
  })
}

export {ScrollHandler}