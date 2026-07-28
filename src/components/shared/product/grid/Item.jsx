import { Button, Card } from "react-bootstrap";

function Item(props){
    const product = props.product;
    return (
        <Card>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.price}
                </Card.Text>
                <Button variant="primary">Add To cart</Button>
            </Card.Body>
        </Card>
    )
}
export default Item;