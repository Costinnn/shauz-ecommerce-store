import { Link } from "react-router-dom";

import "./CartProduct.scss";

const CartProduct = ({ product }) => {
  return (
    <div className="cart-product">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>

      <div className="info">
        <h3>{product.title}</h3>
        <p className="price">{product.price} lei</p>
        <form>
          <div>
            <label>Marime:</label>
            <select name="size" id="size">
              <option value="xs">XS</option>
              <option value="xs">S</option>
              <option value="xs">M</option>
              <option value="xs">L</option>
              <option value="xs">XL</option>
            </select>
          </div>

          <div>
            <label>Cantitate:</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              defaultValue="1"
              min="1"
              max="5"
            />
          </div>
        </form>
        <p className="remove">ELIMINA</p>
      </div>
    </div>
  );
};

export default CartProduct;