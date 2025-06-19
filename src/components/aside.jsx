export function Aside({ setIsOpenState }) {
  return (
    <aside
      className="absolute top-0 left-0 w-[508px] bg-[url('../media/bgFilters.png')] bg-no-repeat bg-cover h-[100vh]"
      onClick={() => setIsOpenState(false)}
    ></aside>
  );
}
