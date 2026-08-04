import { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Context from "../../../../hooks/context";
import { ACTION } from "../../../../hooks/reducer";

function Item(props){
    const product = props.product;
    const {state,dispatch} = useContext(Context);
    const add_to_cart = ()=>{
       const cart = state.cart;
       cart.push(product);
      // setState({...state,cart:cart});
      dispatch(
        {
            type: ACTION.UPDATE_CART,
            payload: cart
        }
        )
    }
    return (
        <Card>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.price}
                </Card.Text>
                <Button onClick={add_to_cart} variant="primary">Add To cart</Button>
            </Card.Body>
        </Card>
    )
}
export default Item;