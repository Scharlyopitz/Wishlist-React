export default function Wishlist({ list, setList }) {
  return (
    <div className="wishlistContainer">
      {list.map((obj, idx) => {
        function deleteBook(titleValue) {
          const filteredList = list.filter((item) => {
            return item.titleValue !== titleValue;
          });

          setList(filteredList);
        }

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
                deleteBook(obj.titleValue);
              }}
            >
              L
            </button>
          </div>
        );
      })}
    </div>
  );
}
