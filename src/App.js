import './App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Container >
                <Form>
                    <Row>
                        <Col>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control type="text" required placeholder="Enter Your First Name"></Form.Control>
                        </Form.Group> 
                        </Col>
                        <Col>
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control type="text" required placeholder="Enter Your Last Name"></Form.Control>    
                        </Form.Group></Col> 
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formGridPhone">    
                        <Form.Label>Phone Number:</Form.Label> 
                        <Form.Control type="number" required placeholder="Enter Your Phone"></Form.Control>
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} controlId="formGridAddress">
                        <Form.Label>Address:</Form.Label>
                        <Form.Control required type="text" className="input" placeholder="Enter Your Address" />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City:</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as = {Col} controlId="formGridState">
                            <Form.Label>State:</Form.Label>
                            <Form.Control as="select" placeholder="Choose  Your Country">
                                <option>Moroc</option>
                                <option>Fance</option>
                                <option>Tunis</option>
                                <option>Italy</option>
                                <option>Alger</option>
                                <option>Libi</option>
                            </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip:</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>  
                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label htmlFor="inputPassword5">Password:</Form.Label>
                        <Form.Control required type="password" id="inputPassword5" aria-describedby="passwordHelpBlock"/>
                        </Form.Group>
                    </Row> 
                    <Row>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check required label="Agree to terms and conditions"
                                feedback="You must agree before submitting." />
                        </Form.Group>
                    </Row>
                    
                        <Button className="submit" variant="primary" type="submit">Submit</Button>
                    
                </Form>
                
            </Container>

    </div>
  );
}

export default App;
