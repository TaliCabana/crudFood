import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const onSubmit = (data) => {
  console.log(data);
//   agregar logica de login
};

  return (
    <Card>
      <Row xs={1} md={2}>
        <Col>
          <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: juanperez@mail.com"
                  {...register('email',{
                    required: 'El email es un dato obligatorio',
                    pattern:{
                        value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                        message: 'El email debe ser un correo valido por ej: juanperez@mail.com'
                    }
                  })}
                />
                <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa una contraseña"
                />
                <Form.Text className="text-danger">mensaje de error </Form.Text>
              </Form.Group>
              <Button variant="warning" type="submit">
                Iniciar sesión
              </Button>
            </Form>
          </Card.Body>
        </Col>
        <Col>
          <img
            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
            alt="Imagen comida"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Card>
  );
};

export default Login;
