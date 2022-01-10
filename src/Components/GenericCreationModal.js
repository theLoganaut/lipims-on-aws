import React, {useState} from 'react'
import { Modal, Button, Form } from "react-bootstrap";

const GenericCreationModal = ({
    closeCreationModal,
    showCreationModal,
    Locations,
    setLocations,
    API,
    createLocation,
    graphqlOperation,
  }) => {

    //i need to map over the inputs for the form items
    const inputs = {
        input1: "City Name",
        input2: "Region",
        input3: "Address",
        input4: "Image",
    }

    const inputs2 = {
      input1: {
        title: "City Name",
        value: "city"
      },
      input2: {
        title: "Region",
        value: "region"
      },
      input3: {
        title: "Address",
        value: "address"
      },
      input4: {
        title: "Image",
        value: "imageString"
      }
    }

    const [cityName, setCityName] = useState("");
    const [region, setRegion] = useState("");
    const [address, setAddress] = useState("");
    const [imageString, setImageString] = useState("");
    const [businessID, setBusinessID] = useState("");

    

    const initialForm = { city: "", address: "", image: "", region: "", id: "" };

    const [formState, setFormState] = useState(initialForm);

    const showDataChange = (input, value) => {

      console.log(input, value)

      // setFormState(prevState => (prevState.input = value))
    }
    


    return (
        <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showCreationModal}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Form>
            {
                Object.values(inputs2).map((i) => {
                    return (
                        <Form.Group className="mb-3">
                        <Form.Label>{i.title}</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder=""
                        onChange={(e) => showDataChange(i.value, e.target.value)}
                        // onChange={(e) => setFormState(prevState => (prevState.i = ))}
                        // onChange={(e) => setFormState({...initialForm, city: e.target.value})} might test just changing the init form?
                        />
                    </Form.Group>
                    )
                })

            }
          {/* <Form.Group className="mb-3">
            <Form.Label>City Business Resides</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setCityName(e.target.value)}
              // onChange={(e) => setFormState({...initialForm, city: e.target.value})} might test just changing the init form?
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Region Business Resides</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setRegion(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image String of Front(placeholder only)</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setImageString(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Business Address</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Business ID</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setBusinessID(e.target.value)}
            />
          </Form.Group> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={}>Tester</Button>
        <Button >Save?</Button>
        <Button onClick={closeCreationModal}>Close?</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default GenericCreationModal
