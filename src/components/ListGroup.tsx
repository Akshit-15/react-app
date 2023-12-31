import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: String) => void;
}
function ListGroup({ items, heading, onSelectedItem }: Props) {
  //hook
  const [selectedIndex, setselectedIndex] = useState(-1);
  const showAlert = () => {};
  return (
    <>
      <h1>List of {heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setselectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
