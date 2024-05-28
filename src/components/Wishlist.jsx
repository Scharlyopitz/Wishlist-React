import { useState } from "react";

export default function Wishlist({ list, setList }) {
  return (
    <div className="wishlistContainer">
      {list.map((obj, idx) => {
        // const deleteBook = (isbn) => {
        //   const filteredList = list.filter((item, index) => {
        //     console.log(item);
        //     // return item.isbn !== isbn;
        //   });
        //   // setList(filteredList);
        // };

        const [itemId, setItemId] = useState("");
        return (
          <div className="wishlistRow" key={idx} data-id={idx}>
            <p>{obj.titleValue}</p>
            <a href={obj.linkValue} target="_blank">
              clique
            </a>
            <p>{obj.descriptionValue}</p>
            <button
              className="delete"
              onClick={(e) => {
                console.log(e.target.dataset.btn);
              }}
              data-btn={idx}
            >
              L
            </button>
          </div>
        );
      })}
    </div>
  );
}
