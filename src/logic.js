function ScrollHandler(e, setter) {
  const scrollPercent = (
    (e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth)) *
    100
  ).toFixed(0);
  const scrollLine =
    document.querySelector(".scrollHand").parentElement.offsetWidth;
  if (scrollPercent >= 90) {
    setter(true);
    return;
  }

  Object.assign(document.querySelector(".scrollHand"), {
    style: `--move-x: ${(scrollLine * scrollPercent) / 100}px`,
  });
}

async function getData(
  setter,
  {
    filterName = "",
    searchFrom = "",
    searchTo = "",
    chosenRanks = "",
    chosenWord = "",
  }
) {
  
  const req = await fetch(
    encodeURI(
        `https://book-memory-sections-out.itlabs.top/api/members?page=1&itemsPerPage=16${
          searchFrom ? "&yearStart=" + searchFrom.toString() : ""
        }${searchTo ? "&yearEnd=" + searchTo.toString() : ""}${
          chosenRanks[0] ? "&ranks=" + chosenRanks : ""
        }${chosenWord ? "&word=" + chosenWord : ""}${
          filterName ? "&name=" + filterName : ""
        }`
      )
  );
  const res = await req.json();
  setter(res);
}
async function getHero(id, setter) {
  const req = await fetch(
    `https://book-memory-sections-out.itlabs.top/api/members/${id}`
  );
  const res = await req.json();
  setter(res);
}
async function getFilters(setter) {
  const req = await fetch(
    `https://book-memory-sections-out.itlabs.top/api/members/filters/get`
  );
  const res = await req.json();
  setter(res);
}

export { ScrollHandler, getData, getHero, getFilters };
