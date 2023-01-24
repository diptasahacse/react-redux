import React from 'react'
import { Form, FormCheck, InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const LargeFormWithReducer = () => {
  return (
    <div>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>



        <Row className="mb-3">


          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Javascript</option>
              <option>Nodejs</option>
              <option>Electron.js</option>
              <option>Redux</option>
              <option>Nextjs</option>
              <option>Express</option>
            </Form.Select>
          </Form.Group>


        </Row>
        <div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </div>
        <Row className="mb-3">


          <InputGroup className="mb-3">
            <Button variant="outline-secondary">
              -
            </Button>
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              type='number'
            />
            <Button variant="outline-secondary" >
              +
            </Button>
          </InputGroup>

          <div>
            <Form.Check
              inline
              label="Male"
              name="gender"
              type="radio"

            />
            <Form.Check
              inline
              label="Female"
              name="gender"
              type="radio"

            />
          </div>


        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default LargeFormWithReducer