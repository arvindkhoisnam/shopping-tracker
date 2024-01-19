import { useState } from "react";

function Header({ onAddItem, list }) {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { item, id: Date.now(), status: false };
    if (!newItem.item) return;
    onAddItem(newItem);
    setItem("");
  }

  return (
    <div className="header">
      <h1 className={`${list.length > 0 ? "active" : ""}`}>shoPPing toPPing</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
        <button>add</button>
      </form>
    </div>
  );
}

export default Header;
