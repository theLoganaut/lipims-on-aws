import { Card, Button } from "react-bootstrap";

const LocationCardList = ({ Locations }) => {
  return (
    /* need a placeholder margin top value before i but a bar for tabs and search there */
    <div style={{ display: "flex", marginTop: "15%" }}>
      {Locations.map((l) => {
        return (
          <Card
            style={{ marginRight: "1em", background: "#dee2e6" }}
            key={l.locationID}
          >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{l.city}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {l.address}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {l.region}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {l.createdAt}
              </Card.Subtitle>
              {/* <Card.Subtitle className="mb-3">
                {l.locationInfo.manager.name}
              </Card.Subtitle>
              <Card.Text style={{ marginLeft: "1%", overflowY: "scroll" }}>
                {l.locationInfo.employees.map((e) => {
                  return <li key={e.id}> {e.name} </li>;
                })}
              </Card.Text> */}

              {/* change to open location modal one day <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        );
      })}
      {/* {locationJSON.map((l) => {
        return (
          <Card
            style={{ marginRight: "1em", background: "#dee2e6" }}
            key={l.locationID}
          >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{l.locationInfo.city}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {l.locationInfo.address}
              </Card.Subtitle>
              <Card.Subtitle className="mb-3">
                {l.locationInfo.manager.name}
              </Card.Subtitle>
              <Card.Text style={{ marginLeft: "1%", overflowY: "scroll" }}>
                {l.locationInfo.employees.map((e) => {
                  return <li key={e.id}> {e.name} </li>;
                })}
              </Card.Text>

              change to open location modal one day <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })} */}
    </div>
  );
};

export default LocationCardList;
