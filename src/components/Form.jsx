import { useState } from "react";

export default function Form({ list, setList }) {
  const BasicMsg = "Click here to Add";
  const ErrorMsg = "Complete all Fields !";
  const ValidMsg = "Added !";
  const DuplicateLink = "Link already Added !";
  const [Message, setMessage] = useState(BasicMsg);

  const [titleValue, setTitleValue] = useState("");
  const [linkValue, setLinkValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const listLinks = [];

  list.map((item) => {
    listLinks.push(item.linkValue);
  });

  const DuplicateSearch = listLinks.find((el) => el == linkValue);

  const RefreshBasicMsg = () => {
    setTimeout(function () {
      setMessage(BasicMsg);
    }, 1000);
  };

  const ErrorForm = () => {
    setMessage(ErrorMsg);
    RefreshBasicMsg();
  };

  const DuplicateForm = () => {
    setMessage(DuplicateLink);
    RefreshBasicMsg();
  };

  const ClearInputs = () => {
    setTitleValue("");
    setLinkValue("");
    setDescriptionValue("");
  };

  const ValidForm = () => {
    const values = { titleValue, linkValue, descriptionValue };
    setList((ls) => [...ls, values]);
    ClearInputs();
    setMessage(ValidMsg);
    RefreshBasicMsg();
  };

  function Error() {
    if (titleValue == "" || linkValue == "" || descriptionValue == "") {
      ErrorForm();
    } else if (DuplicateSearch) {
      DuplicateForm();
    } else {
      ValidForm();
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
            (Message === ErrorMsg && "rgba(254 ,0 ,0, 70%)") ||
            (Message === DuplicateLink && "rgba(254 ,0 ,0, 70%)") ||
            (Message === ValidMsg && "rgb(0, 128 ,0 , 70%)"),
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
