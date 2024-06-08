import React, { useEffect, useState } from "react";
import {getListProduct} from "../../store/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import ProductCards from "../../components/ProductCards";

import { Col, Form, Row, Figure, Container, Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

const Product = () =>{
    const {products, isLoading, error} = useSelector(state => state.product);
    console.log(products);
    const dispatch  = useDispatch();

    useEffect(() => ()=>{
        dispatch(getListProduct());
    },[dispatch])

    const DeleteId = (id) => {
        
    }

    const EditData = (id) => {

    }

    return(
        <>
        <Header />
            <Container style={ContainerStyle}>

                <div style={ProductContainer}>
                    <Row md={2} className="g-4">
                        {products.map(products =>{
                            console.log(products.id_product);
                            <Col key={products.id_product} >
                                     <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                        </ListGroup>
                                        <Card.Body>
                                            <Card.Link href="#">Card Link</Card.Link>
                                            <Card.Link href="#">Another Link</Card.Link>
                                        </Card.Body>
                                    </Card>
                            </Col>
                        })}
                       

                    </Row>

                   
                </div>

                <div style={CartContainer}>
                   
                </div>
                <>
                {/* {products.map(product =>{
                    console.log(product.id_product);
                    <ProductCards key={product.id_product} products={product} />

                })} */}
                </>
            </Container>
        </>
       
     
    )
}

export default Product;

const ContainerStyle = {
    paddingTop    : '20px',
    display       : "flex",
    width         : "100%",
    height        : "100%",

};

const ProductContainer = {
    paddingTop    : '20px',
    width         : "80%",
    height        : "100%",
    border        : "1px solid #f7f7f7",
    padding       : "0.5rem 0.5rem",
};

const CartContainer = {
    paddingTop    : '20px',
    width         : "50%",
    border        : "1px solid #f7f7f7",
    height        : "100%",
    paddingBottom    : '20px',
};

const ProductPading = {
    padding: "0 1rem",
    width: "100%",
}