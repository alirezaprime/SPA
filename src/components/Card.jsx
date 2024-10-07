import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helper/helper";
import { MdDeleteOutline } from "react-icons/md";

import styles from "./Card.module.css";
import { useCart } from "../context/CartContext";

function Card({ data }) {
  const clickHandler = (type) => {
    dispatch({ type: type, payload: data });
  };

  const { id, title, image, price } = data;
  const [state, dispatch] = useCart();
  console.log(state);

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          <button
            onClick={() => {
              clickHandler("ADD_ITEM");
            }}
          >
            <TbShoppingBagCheck />
          </button>
          <button
            onClick={() => {
              clickHandler("REMOVE_ITEM");
            }}
          >
            <MdDeleteOutline />
          </button>
          <button
            onClick={() => {
              clickHandler("INCREASE");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              clickHandler("DECREASE");
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
