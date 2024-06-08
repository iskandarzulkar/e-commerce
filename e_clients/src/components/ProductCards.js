import React from "react";
import { Card, Row, Col, ListGroup, Button } from "react-bootstrap"

const ProductCards = ({products}) =>{
    console.log(products);
    return(
        <>
            <Card style={CardsStyle} className="m-2" >
           
                <Card.Img variant="top"  
                src="http://localhost:8282/images/ef9844123dbaed54d4f62d3770600dc0.png"  
                width="250px" height="230px"  />
                <Card.Body>
                    <Card.Title> </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroup.Item>  
                    Harga  "http://localhost:8282/images/ef9844123dbaed54d4f62d3770600dc0.png"
                </ListGroup.Item>
                
                </ListGroup>
                <Card.Body>
                    <Card.Link>
                        {/* <Card.Link><Button text="edit" variant="primary" action={() => editById(products.id_product, products)}/></Card.Link> */}
                    </Card.Link>
                    <Card.Link>
                        {/* <Button text="delete" variant="warning" action={() => delById(products.id_product)}/> */}
                    </Card.Link>
                </Card.Body>
            </Card> 
            
        </>
    )
}

export default ProductCards;
// const ProductCards = ({products, del, edit}) => {
//     console.log("----------")
//     // console.log(products);
//     // const delById = (id) =>{
//     //     del(id)
//     // }

//     // const editById = (id, products) => {
//     //     edit(id, products)
//     // }
//     return(
    
//         <>
//             <Card style={CardsStyle} className="m-2" >
           
//                 <Card.Img variant="top"  src={products.path_image}   width="250px" height="230px"  />
//                 <Card.Body>
//                     <Card.Title>{products.nama_product} </Card.Title>
//                 </Card.Body>
//                 <ListGroup className="list-group-flush">
//                 <ListGroup.Item>  
//                     Harga {products.harga}
//                 </ListGroup.Item>
                
//                 </ListGroup>
//                 <Card.Body>
//                     <Card.Link>
//                         {/* <Card.Link><Button text="edit" variant="primary" action={() => editById(products.id_product, products)}/></Card.Link> */}
//                     </Card.Link>
//                     <Card.Link>
//                         {/* <Button text="delete" variant="warning" action={() => delById(products.id_product)}/> */}
//                     </Card.Link>
//                 </Card.Body>
//             </Card> 
//         </>
       

//     )
// }


const CardsStyle = {
    cursor            : "pointer",
    background        : "#2da48f",
    height            : "100%",
    padding           : "0 1rem",
    justifyContent    : "space-between",
    margin            : "0 1 rem",
    width             : "18rem",
    float             : "left"
}
