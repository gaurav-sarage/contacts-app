import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SiteNav(props) {
    const navigate = useNavigate()
    
    const handleLogout = async () => {
        try {
            console.log('Logout');
            await Auth.signOut()

            props.updateAuthStatus(false)
            navigate('/')
        } catch (err) { console.log(err) }
    }

    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand><Nav.Link href="/">Contacts App</Nav.Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                {
                                    props.isAuthenticated !== false && (
                                        <Nav className="ms-md-auto">
                                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                                        </Nav>
                                    )
                                }
                                {
                                    props.isAuthenticated === false && (
                                        <Nav className="ms-md-auto">
                                            <Nav.Link href="/login">Login</Nav.Link>
                                            <Nav.Link href="/register">Register</Nav.Link>
                                        </Nav>
                                    )
                                }            
                            </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default SiteNav;