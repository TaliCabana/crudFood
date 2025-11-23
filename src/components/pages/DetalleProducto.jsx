import { Container, Card, Row, Col } from "react-bootstrap";
import {useParams} from "react-router"

const DetalleProducto = () => {
  
  const {id} = useParams();
  console.log("ID recibido", id);

  return (
    <Container className="my-3 mainSection cabin-sketch-regular">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src='https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg'
              alt='pizza'
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="fs-2">{/* {producto.nombreProducto}*/}</Card.Title>
              <hr />
              <Card.Text className="fs-5">
{/* {producto.descripción_amplia}*/}
              <br/>
              <br/>
              <span className="fw-semibold ">Categoria:</span> {/* producto.categoria */}
              <br className='mb-3'/>
              <span className="fw-semibold ">Precio: $4500</span></Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
