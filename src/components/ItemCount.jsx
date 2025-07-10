import { useState } from "react";
import "../css/ItemCount.css";


const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const comprar = () => {
    onAdd(count);
  };

  return (
    <div className="counter__wrapper">
      <div className="counter__actions">
        <button className="button__subtract" onClick={restar}>
          -
        </button>
        <span className="total__count">{count}</span>
        <button className="button__add" onClick={sumar}>
          +
        </button>
      </div>
      <button
        className="btn btn-dark"
        disabled={stock === 0 || count === 0}
        onClick={comprar}
      >
        Comprar
      </button>
    </div>
  );
};

export default ItemCount;
