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
                clique
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
