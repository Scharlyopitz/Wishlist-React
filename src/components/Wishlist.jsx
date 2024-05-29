import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Wishlist({ list, setList }) {
  function deleteBook(titleValue) {
    const filteredList = list.filter((item) => {
      return item.titleValue !== titleValue;
    });
    setList(filteredList);
  }

  return (
    list.length > 0 && (
      <div className="wishlistContainer">
        {list.map((obj, idx) => {
          return (
            <div className="wishlistRow" key={idx}>
              <p>{obj.titleValue}</p>
              <a href={obj.linkValue} target="_blank">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ color: "#58b0f3" }}
                />
              </a>
              <p>{obj.descriptionValue}</p>
              <span
                className="delete"
                onClick={() => {
                  deleteBook(obj.titleValue);
                }}
              >
                X
              </span>
            </div>
          );
        })}
      </div>
    )
  );
}
