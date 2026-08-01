import { Col, Container, Row } from "react-bootstrap";
import Item from "../components/shared/product/grid/Item";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Category(){
    const {slug} = useParams();
    const [list,setList] = useState([]);
    const get_products = ()=>{
        const url = "https://dummyjson.com/products/category/"+slug;
        fetch(url).then(rs=>rs.json()).then(data=>{
            setList(data.products);
        });
    } 
    // did mount - muốn cập nhật dữ liệu sau khi đã sinh ra giao diện
   useEffect(()=>{
    get_products();
   },[]);
    return (
        <main>
            <Container>
                <h1>Category: {slug}</h1>
                <Row>
                    {
                        list.map((e,k)=>{
                            return (
                                <Col key={k} xs={12} md={4} lg={3}>
                                    <Item product={e} />
                                </Col>
                            )
                        })
                    }
                    
                </Row>
            </Container>
        </main>
    )
}
export default Category;