import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, animate, motion } from "framer-motion";

export default function Wishlist({ list, setList }) {
  function deleteBook(linkValue) {
    const filteredList = list.filter((item) => {
      return item.linkValue !== linkValue;
    });
    setList(filteredList);
  }

  const anime = (variants) => {
    return {
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants,
    };
  };

  const animWishlist = {
    initial: {
      opacity: 0,
      y: "-100%",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      x: "50%",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="wishlistContainer">
      <AnimatePresence>
        {list.map((obj, idx) => {
          return (
            <motion.div
              {...anime(animWishlist)}
              className="wishlistRow"
              key={idx}
            >
              <p className="ellipsis">{obj.titleValue}</p>
              <a href={obj.linkValue} target="_blank">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ color: "#58b0f3" }}
                />
              </a>
              <p className="ellipsis">{obj.descriptionValue}</p>
              <div className="deleteContainer">
                <span
                  className="delete"
                  onClick={() => {
                    deleteBook(obj.linkValue);
                  }}
                >
                  X
                </span>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
