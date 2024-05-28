import { useState } from "react";

export default function Wishlist({ list, setList }) {
  return (
    <div className="wishlistContainer">
      {list.map((obj, idx) => {
        // const [itemId, setItemId] = useState("");

        // function deleteBook(idx) {
        //   const filteredList = list.filter((item) => {
        //     // console.log(idx);
        //     // return item.isbn !== idx;
        //   });

        //   // setList(filteredList);
        // }

        return (
          <div className="wishlistRow" key={idx} data-id={idx}>
            <p>{obj.titleValue}</p>
            <a href={obj.linkValue} target="_blank">
              clique
            </a>
            <p>{obj.descriptionValue}</p>
            <button
              className="delete"
              // onClick={(e) => {
              //   deleteBook(idx), setItemId(e.target.dataset.btn);
              // }}
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
