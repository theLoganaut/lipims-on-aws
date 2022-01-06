import { Card, Button } from "react-bootstrap";

const LocationCardList = ({ Locations }) => {
  const locationJSON = [
    {
      locationID: "1",
      locationInfo: {
        city: "Falgrad",
        region: "placeholder",
        image: "placeholder",
        address: "placeholder",
        manager: {
          id: "123",
          name: "Jarage Cazmon",
          pay: "22,000 sheckles/year",
        },
        employees: [
          { id: "1234", name: "John Laughton", pay: "12 sheckles/4hr shift" },
          { id: "1239", name: "Orzic Malfin", pay: "9 sheckles/4hr shift" },
        ],
      },
    },
    {
      locationID: "2",
      locationInfo: {
        city: "Solgin",
        region: "placeholder",
        image: "placeholder",
        address: "placeholder",
        manager: {
          id: "283",
          name: "Xaiman Ridel",
          pay: "21,000 sheckles/year",
        },
        employees: [
          { id: "1432", name: "Ligmen Qumin", pay: "11 sheckles/4hr shift" },
          { id: "420", name: "Norman Goldig", pay: "13 sheckles/4hr shift" },
        ],
      },
    },
  ];

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
