import { useState } from "react";

export default function Form({ list, setList }) {
  const [Message, setMessage] = useState("Click here to Add");
  const ErrorMsg = "Complete all fields !";
  const ValidMsg = "Added !";

  const [titleValue, setTitleValue] = useState("");
  const [linkValue, setLinkValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const listId = list.length.toString();

  function Error() {
    if (titleValue == "" || linkValue == "" || descriptionValue == "") {
      setMessage(ErrorMsg);
      setTimeout(function () {
        setMessage("Click here to Add");
      }, 1000);
    } else {
      const values = { listId, titleValue, linkValue, descriptionValue };
      setList((ls) => [...ls, values]);
      setTitleValue("");
      setLinkValue("");
      setDescriptionValue("");
      setMessage(ValidMsg);
      setTimeout(function () {
        setMessage("Click here to Add");
      }, 1000);
    }
  }

  return (
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
        style={{
          background:
            (Message === ErrorMsg && "#ff0000") ||
            (Message === ValidMsg && "#008000"),
        }}
        type="submit"
        value={Message}
        onClick={(e) => {
          e.preventDefault(), Error();
        }}
      />
    </form>
  );
}
