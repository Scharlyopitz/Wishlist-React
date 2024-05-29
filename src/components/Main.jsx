import { useEffect, useState } from "react";
import WishlistBanner from "./WishlistBanner";
import Wishlist from "./Wishlist";
import Form from "./Form";

export default function Main() {
  const [list, setList] = useState(getDatafromLS);

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

  return (
    <main>
      <Form setList={setList} />
      <WishlistBanner />
      <Wishlist list={list} setList={setList} />
    </main>
  );
}
