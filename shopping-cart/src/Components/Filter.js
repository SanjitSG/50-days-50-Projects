import { Button, Form } from "react-bootstrap";
import Rating from "../Components/Rating";
const Filter = () => {
  return (
    <div className="filters">
      <span>
        <Form.Check inline label="A-Z" name="group" type="radio" id={`inline-1`}></Form.Check>
      </span>
      <span>
        <Form.Check inline label="Z-A" name="group" type="radio" id={`inline-2`}></Form.Check>
      </span>
      <span>
        <Form.Check inline label="Include out of stock" name="group1" type="checkbox" in={`inline-3`}></Form.Check>
      </span>
      <span>
        <Form.Check inline label="Quick Delivery only" name="group1" type="checkbox" in={`inline-4`}></Form.Check>
      </span>
      <span style={{ padding: 10 }}>
        <label>Ratings:</label>
        <Rating style={{ cursor: "pointer" }} />
      </span>
      <Button variant="primary">Clear Filter</Button>
    </div>
  );
};
export default Filter;
