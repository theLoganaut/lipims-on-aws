import React from "react";
import { Card } from "react-bootstrap";

const ItemCardList = ({ Items }) => {
  const itemContext = Items;
  // [

  //   {
  //     itemName: "test",
  //     owner: "test",
  //     transaction: "test"
  //   }

  // ]

  console.log(Items);

  return (
    /* need a placeholder margin top value before i but a bar for tabs and search there */
    <div style={{ display: "flex", marginTop: "15%" }}>
      {itemContext.map((i) => {
        return (
          <Card style={{ marginRight: "1em", background: "#dee2e6" }}>
            <Card.Body>
              {/* deprecated  */}
              {/* <Card.Title>{i.itemName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {i.owner.fullName}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                transaction id here
              </Card.Subtitle> */}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemCardList;
