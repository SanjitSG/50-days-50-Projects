import Rating from "./Rating";
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { CartState } from "../Context/Context";
const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
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
          <Button
            variant="contained"
            style={{ fontSize: "12px" }}
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: prod,
              })
            }
          >
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
