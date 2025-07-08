// import { Link } from "react-router-dom";
// import "../css/Item.css";

// const Item = ({ prod }) => {
//   const { name, price, img, id } = prod;
//   return (
//     <div className="card__product">
//       <div className="card__header">
//         <img src={img} className="card-img-top" alt={name} />
//       </div>
//       <div className="card-body">
//         <h5 className="card-title">{name}</h5>
//         <p className="card-text">${price},00</p>
//         <Link to={`/item/${id}`} className="btn btn-primary">
//           Ver más
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Item;


import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Item.css";

const Item = ({ prod }) => {
  const { name, price, img, id } = prod;
  return (
    <Card className="item-card h-100 shadow-sm">
      <div className="item-card__img-wrapper">
        <Card.Img variant="top" src={img} alt={name} className="item-card__img" />
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="item-card__title">{name}</Card.Title>
          <Card.Text className="item-card__price mb-2">${price},00</Card.Text>
        </div>
        <Button
          as={Link}
          to={`/item/${id}`}
          variant="primary"
          className="mt-auto item-card__btn"
        >
          Ver más
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;