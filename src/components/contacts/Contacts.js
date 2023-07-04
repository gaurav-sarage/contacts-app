import { 
    Container,
    Row,
    Col,
    Card
} from "react-bootstrap";

function Contacts() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col>
                    <h1>
                        Contacts
                    </h1>
                </Col>
            </Row>

            <Row>
                <Col className="px-2 my-2">
                    <Card style={{ width: "12rem" }}>
                        <Card.Img
                            src="/img/contact_1.png"
                            variant="top"
                        />
                        <Card.Body>
                            <Card.Title>
                                Mishika
                            </Card.Title>
                            <Card.Text>
                                mishika@gmail.com
                                <br /> 8888885596
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="px-2 my-2">
                    <Card style={{ width: "12rem" }}>
                        <Card.Img
                            src="/img/contact_2.png"
                            variant="top"
                        />
                        <Card.Body>
                            <Card.Title>
                                Brian
                            </Card.Title>
                            <Card.Text>
                                brian@gmail.com
                                <br /> 7485968574
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="px-2 my-2">
                    <Card style={{ width: "12rem" }}>
                        <Card.Img
                            src="/img/contact_3.png"
                            variant="top"
                        />
                        <Card.Body>
                            <Card.Title>
                                Lance
                            </Card.Title>
                            <Card.Text>
                                lance@gmail.com
                                <br /> 9685635274
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="px-2 my-2">
                    <Card style={{ width: "12rem" }}>
                        <Card.Img
                            src="/img/contact_1.png"
                            variant="top"
                        />
                        <Card.Body>
                            <Card.Title>
                                Stacy
                            </Card.Title>
                            <Card.Text>
                                stacy@gmail.com
                                <br /> 9685418574
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="px-2 my-2">
                    <Card style={{ width: "12rem" }}>
                        <Card.Img
                            src="/img/contact_2.png"
                            variant="top"
                        />
                        <Card.Body>
                            <Card.Title>
                                Michael
                            </Card.Title>
                            <Card.Text>
                                michael@gmail.com
                                <br /> 9674854152
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Contacts;