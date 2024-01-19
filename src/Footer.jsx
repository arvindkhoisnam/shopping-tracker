/* eslint-disable react/prop-types */
function Footer({ list }) {
  const checked = list.filter((item) => item.status);
  const percentage = Math.round((checked.length / list.length) * 100);
  return (
    <div className="footer">
      {list.length === 0 ? (
        <p>Get started by adding an item to your list.</p>
      ) : (
        <p>
          You've added <strong>{list.length}</strong>{" "}
          {list.length > 1 ? "items" : "item"} to your shopping list. And you've
          checked {checked.length}. ({percentage}%)
        </p>
      )}
    </div>
  );
}

export default Footer;
