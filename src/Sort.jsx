/* eslint-disable react/prop-types */
import { useState } from "react";

function Main({ list, onCheck, setList }) {
  const [sort, setSort] = useState("byInput");
  let selectedSort;
  if (sort === "byInput") selectedSort = list;
  if (sort === "byDesc")
    selectedSort = list.slice().sort((a, b) => a.item.localeCompare(b.item));
  if (sort === "byStat")
    selectedSort = list
      .slice()
      .sort((a, b) => Number(a.status) - Number(b.status));

  function handleClear() {
    const confirmed = window.confirm(
      "Do you want to delete everything on your list?"
    );
    if (confirmed) setList([]);
  }
  function handleDelete(id) {
    setList((list) => list.filter((item) => item.id !== id));
  }
  return (
    <div className="main">
      <ul className="container">
        <select
          className="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value={"byInput"}>sort by input</option>
          <option value={"byDesc"}>sort by description</option>
          <option value={"byStat"}>sort by status</option>
        </select>
        <button className="clear-btn" onClick={handleClear}>
          clear
        </button>
        {selectedSort.map((item) => (
          <li key={item.id}>
            <input type="checkbox" onChange={() => onCheck(item.id)} />
            <span className={`${item.status ? "checked" : ""}`}>
              {item.item}
            </span>
            <button onClick={() => handleDelete(item.id)}>⤬</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
