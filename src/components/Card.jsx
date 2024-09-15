import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helper/helper";

import Styles from "./Card.module.css";

function Card({ data }) {
  const { id, title, image, price } = data;
  // console.log(first)
  return (
    <div className={Styles.Card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={Styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
          <div>
            <button>
              <TbShoppingBagCheck />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
