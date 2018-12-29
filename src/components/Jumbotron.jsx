import React, { Component } from 'react'
import { Jumbotron, Container, Button, Row, Col} from 'reactstrap';

export default class MyJumbotron extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="Jumbotron" fluid>
        <Container fluid>
        <center>
            <br></br>
          <h3 className="display-3">EVERYBODY HAVE THEIR</h3>
          <h3 className="display-3"> OWN PRIVACY</h3>
          {/* <p className="lead">Kegiatan Belajar Intensif Programming dan Qur'an bersama Santren Koding.</p> */}
          <br />
          <Button color="success" size="lg" href="#">Login</Button>{' '}
          </center>
        </Container>
      </Jumbotron>
      </div>
    )
  }
}
