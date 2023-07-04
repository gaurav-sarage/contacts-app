import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function HomePage(props) {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col xs={4} sm={6}>
                    <Image
                        src="/img/logo.png"
                        fluid />
                </Col>
                <Col sm={6}>
                    <h1 className="font-weight-light">Contacts App</h1>
                    <p className="mt-4">
                        Lorem Ipsum
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    {
                        props.isAuthenticated === false && (
                            <>
                                <Link
                                    to='/login'>
                                    <Button variant="outline-primary">Login &gt;&gt;</Button>
                                </Link>
                                &nbsp;&nbsp;
                                <Link
                                    to='/register'>
                                    <Button variant="outline-primary">Register &gt;&gt;</Button>
                                </Link>
                            </>
                        )
                    }
                    {
                        props.isAuthenticated !== false && (
                            <Link
                                to='/contacts' state={{ authenticated: props.isAuthenticated }}>
                                <Button variant="outline-primary">View Contacts &gt;&gt;</Button>
                            </Link>
                        )
                    }
                </Col>
            </Row>
        </Container >
    )
}

export default HomePage;