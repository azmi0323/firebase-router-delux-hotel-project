import React from "react";
import { Button, Card } from "react-bootstrap";

const SingleProduct = (props) => {
  const { name, price, img, body } = props.product;
  return (
    <div className="m-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="mb-3" variant="top" src={img} />
        <p className="ms-3">{price}</p>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {body}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
