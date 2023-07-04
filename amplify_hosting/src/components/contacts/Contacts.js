import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import { API, graphqlOperation, Storage } from 'aws-amplify';

import { listContacts } from '../../graphql/queries';
import { createContact } from '../../graphql/mutations';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { v4 as uuid } from 'uuid';

function Contacts(props) {
    const navigate = useNavigate()

    const [contacts, setContacts] = useState([]);
    const [contactData, setContactData] = useState({ name: "", email: "", cell: "" });
    const [profilePic, setProfilePic] = useState("");
    const [profilePicPaths, setProfilePicPaths] = useState([]);

    const getContacts = async() => {
        try {
            const contactsData = await API.graphql(graphqlOperation(listContacts));
            console.log(contactsData);

            const contactsList = contactsData.data.listContacts.items;
            setContacts(contactsList);

            contacts.map(async (contact, indx) => {
                const contactProfilePicPath = contacts[indx].profilePicPath;
                try {
                    const contactProfilePicPathURI = await Storage.get(contactProfilePicPath, {expires: 60});
                    setProfilePicPaths([...profilePicPaths, contactProfilePicPathURI]);
                } catch(err) {
                    console.log('error', err);
                }
            });
        } catch(err) {
            console.log('error', err);
        }
    }

    const addNewContact = async () => {
        try {
            const { name, email, cell } = contactData;

            // Upload pic to S3
            Storage.configure({ region: 'us-east-1' });
            const { key } = await Storage.put(`${uuid()}.png`, profilePic, {contentType: 'image/png'});

            const newContact = {
                id: uuid(),
                name,
                email,
                cell,
                profilePicPath: key
            };

            // Persist new Contact
            await API.graphql(graphqlOperation(createContact, {input: newContact}));

            getContacts()
        } catch(err) {
            console.log('error', err);
        }
    }

    useEffect(() => {
        {
            props.isAuthenticated !== true && (
                navigate('/')
            )
            getContacts()
        }
    }, []);

    return (
        < Container >
            <Row className="px-4 my-5">
                <Col><h1>Contacts</h1></Col>
            </Row>
            <Row>
                {
                    contacts.map((contact, indx) => {
                        return (
                            <Col className="px-2 my-2" key={indx}>
                                <Card style={{ width: '12rem' }}>
                                    <Card.Img
                                        src={profilePicPaths[indx]}
                                        variant="top" />
                                    <Card.Body>
                                        <Card.Title>{contact.name}</Card.Title>
                                        <Card.Text>
                                            {contact.email}
                                            <br />{contact.cell}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
            <Row className="px-4 my-5">
                <Col sm={3}>
                    <h2>Add New Contact</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Contact name"
                                value={contactData.name}
                                onChange={evt => setContactData({ ...contactData, name: evt.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Contact email"
                                value={contactData.email}
                                onChange={evt => setContactData({ ...contactData, email: evt.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Cell</Form.Label>
                            <Form.Control type="text" placeholder="nnn-nnn-nnnn"
                                value={contactData.cell}
                                onChange={evt => setContactData({ ...contactData, cell: evt.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Profile Pic</Form.Label>
                            <Form.Control type="file" accept="image/png"
                                onChange={evt => setProfilePic(evt.target.files[0])} />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={addNewContact}>Add Contact &gt;&gt;</Button>&nbsp;
                        {/* <Button variant="primary" type="button" >Add Contact &gt;&gt;</Button>&nbsp; */}
                    </Form>
                </Col>
            </Row>
        </Container >
    )
}

export default Contacts;