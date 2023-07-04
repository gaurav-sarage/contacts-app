import { 
    Container,
    Row,
    Col,
    Image,
    Button
} from "react-bootstrap";

function HomePage() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col xs={4} sm={6}>
                    <Image
                        src="/img/logo.png"
                        fluid
                    />
                </Col>
                <Col sm={6}>
                    <h1 className="font-weight-light">
                        Contacts App
                    </h1>
                    <p className="mt-4">
                        Lorem Ipsum
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut massa et neque fermentum tempus vel at tortor. Etiam varius elit vitae massa cursus, eget vestibulum risus bibendum. Aliquam accumsan imperdiet augue nec malesuada. Integer et odio ac justo efficitur dapibus. Nunc elementum leo in sollicitudin volutpat. Donec eget commodo nulla, sed aliquet erat. Donec vestibulum orci nec ipsum rutrum cursus.
                    </p>
                    <Button variant="outline-primary">
                        Get Started &gt;&gt;&gt;
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;