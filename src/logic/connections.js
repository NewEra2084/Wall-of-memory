async function getData( // получение данных в зависимости от заданных фильтров
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
async function getDynamicData( // запрос к серверу постранично при скролле
  page,
  setHeroes,
  setPage,
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
      `https://book-memory-sections-out.itlabs.top/api/members?page=${page}&itemsPerPage=16${
        searchFrom ? "&yearStart=" + searchFrom : ""
      }${searchTo ? "&yearEnd=" + searchTo : ""}${
        chosenRanks[0] ? "&ranks=" + chosenRanks : ""
      }${chosenWord ? "&word=" + chosenWord : ""}${
        filterName ? "&name=" + filterName : ""
      }`
    )
  );
  const res = await req.json();

  setHeroes((prev) => [...prev, ...res]);
  setPage((prev) => prev + 1);
}

async function getHero(id, setter) { // запрос для детальной информации по герою
  const req = await fetch(
    `https://book-memory-sections-out.itlabs.top/api/members/${id}`
  );
  const res = await req.json();
  setter(res);
}
async function getFilters(setter) { // получение фильтров
  const req = await fetch(
    `https://book-memory-sections-out.itlabs.top/api/members/filters/get`
  );
  const res = await req.json();
  setter(res);
}

export { getData, getHero, getFilters, getDynamicData };
