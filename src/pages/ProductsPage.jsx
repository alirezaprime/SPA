import { ImSearch } from "react-icons/im";
import { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa";

import { useProducts } from "../context/ProductContext";

import Card from "../components/Card";
import Loader from "../components/Loader";

import Styles from "./ProductsPage.module.css";
import { filterProducts, searchProducts } from "../helper/helper";
import { useSearchParams } from "react-router-dom";

function ProductsPage() {
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const products = useProducts();

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  // console.log(products);

  const searchHandler = () => {
    setQuery((query) => ({ ...query, search: search }));
  };
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    // setQuery((query) => ({ ...query, category: category }));

    if (tagName !== "LI") return;
    setQuery((query) => ({ ...query, category: category }));
    // console.log(category);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={Styles.container}>
        <div className={Styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
            // <p key={p.id}>{p.title}</p>
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>categories</p>
            <ul onClick={categoryHandler}>
              <li>All</li>
              <li>Electronics</li>
              <li>Jewelery</li>
              <li>Men's Clothing</li>
              <li>Women's Clothing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
