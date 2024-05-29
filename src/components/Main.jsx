import { useEffect, useState } from "react";
import WishlistBanner from "./WishlistBanner";
import Wishlist from "./Wishlist";

export default function Main() {
  const [titleValue, setTitleValue] = useState("");
  const [linkValue, setLinkValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const [list, setList] = useState(getDatafromLS);

  function ClearInput() {
    setTitleValue("");
    setLinkValue("");
    setDescriptionValue("");
  }

  function getDatafromLS() {
    const data = localStorage.getItem("item");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(list));
  }, [list]);

  function Error() {
    if (titleValue == "" || linkValue == "" || descriptionValue == "") {
      console.log("error");
    } else {
      const values = { titleValue, linkValue, descriptionValue };
      setList((ls) => [...ls, values]);
    }
  }

  return (
    <main>
      <form action="">
        <div className="title">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitleValue(e.target.value)}
            value={titleValue}
          />
        </div>
        <div className="link">
          <label htmlFor="link">Link</label>
          <input
            type="text"
            name="link"
            id="link"
            onChange={(e) => setLinkValue(e.target.value)}
            value={linkValue}
          />
        </div>
        <div className="description">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={(e) => setDescriptionValue(e.target.value)}
            value={descriptionValue}
          />
        </div>
        <input
          type="submit"
          value="Submit"
          onClick={(e) => {
            e.preventDefault(), ClearInput(), Error();
          }}
        />
      </form>
      <WishlistBanner />
      <Wishlist list={list} setList={setList} />
    </main>
  );
}
