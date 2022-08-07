import {Form, Col, Button} from 'react-bootstrap'
// import Col from 'react-bootstrap/Col'
// import Col from 'react-bootstrap/Col'

function Join() {
//   const [user, setUser] = useState(null)

  return (
    <div className="Join">
      <h1>Join CoupleFriends!</h1>
      <div>
        <Form>
          {/* Partner 1's information */}
          {/* Partner 1 First Name */}
          <Form.Group as={Form.Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Partner 1's First Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control placeholder="First Name" />
            </Col>
            <Form.Label column sm={2}>
              Partner 1's Last Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control placeholder="Last Name" />
            </Col>
        </Form.Group>
       
        {/* Partner 1 Gender Identification */}
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Partner 1- Please choose which describes you best.</Form.Label>
          <Form.Control as="select">
            <option>I am a Cisgender Female</option>
            <option>I am a Transgender Female</option>
            <option>I am a Cisgender Male</option>
            <option>I am a Transgender Male</option>
            <option>I am Non-Binary</option>
          </Form.Control>
        </Form.Group>

          {/* Partner 1 Email */}
        <Form.Group as={Form.Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Partner 1's Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        {/* Partner 1 Password */}
        <Form.Group as={Form.Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Partner 1 password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>

        {/* Partner 2 Information */}
        <Form.Group as={Form.Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Partner 2's First Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="" placeholder="First Name" />
            </Col>
            <Form.Label column sm={2}>
              Partner 2's Last Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="" placeholder="First Name" />
            </Col>
        </Form.Group>
       
        {/* Partner 2 Gender Identification */}
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Partner 2- Please choose which describes you best.</Form.Label>
          <Form.Control as="select">
            <option>I am a Cisgender Female</option>
            <option>I am a Transgender Female</option>
            <option>I am a Cisgender Male</option>
            <option>I am a Transgender Male</option>
            <option>I am Non-Binary</option>
          </Form.Control>
        </Form.Group>

        {/* Partner 2 email */}
        <Form.Group as={Form.Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Partner 2's Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        {/* Partner 2 password */}
        <Form.Group as={Form.Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Partner 2's Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        
        
        
        <fieldset>
          <Form.Group as={Form.Row}>
            <Form.Label as="legend" column sm={2}>
              Radios
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="first radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="second radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="third radio"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Form.Row} controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>
      
        <Form.Group as={Form.Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  </div>
  )
}

export default Join
