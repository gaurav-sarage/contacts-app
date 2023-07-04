import { 
    Container,
    Row,
    Col,
    Form,
    Button
} from "react-bootstrap";

function LoginPage() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col>
                    <h1>
                        Login
                    </h1>
                </Col>
            </Row>

            <Row className="px-4 my-5">
                <Col sm={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                Email Address
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter your email address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control type="password" minLength="10" placeholder="Enter your password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login &gt;&gt;&gt;
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage;