import Rating from "./Rating";
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material";

const SingleProduct = ({ prod }) => {
  return (
    <div className="products">
      {/* <Card>
        <Card.Body>
          <Card.Img src={prod.image} alt={prod.name} />
          <Card.Title className="title">{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>Rs. {prod.price}</span>
            <Rating />
          </Card.Subtitle>
          <Button variant="danger">Remove from cart</Button> {"  "}
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card> */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 200 }} image={prod.image} title={prod.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="title">
            {prod.name}
          </Typography>
          <Typography variant="body1">&#8377; {prod.price}</Typography>
          <Rating rating={prod.ratings} />
        </CardContent>
        <CardActions>
          <Button variant="contained" style={{ fontSize: "12px" }}>
            Add to Cart
          </Button>
          <Button variant="contained" style={{ fontSize: "12px" }}>
            Remove from Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default SingleProduct;
