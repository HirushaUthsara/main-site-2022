import {
  Container,
  Row,
  Col,
  ListGroup,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import Link from "next/link";
import classes from "./footer.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function footer() {
  return (
    <div className={`${classes["footer"]}`}>
      <Container className="mt-5 mb-5 text-center">
        <Row>
          <Col md={2}>
            <h4>Useful Links</h4>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Link href="#">
                  <a>Gallery</a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="#">
                  <a>Contact Us</a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="#">
                  <a>ACES</a>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={2}>
            <h4>Events</h4>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Link href="#">
                  <a>Pre-Datathon</a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="#">
                  <a>Pre-HackaThon</a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="#">
                  <a>Pre-Coders</a>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <h4>Sessions</h4>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Link href="#">
                  <a>Developer Series Sessions</a>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="#">
                  <a>Competitive Programming Sessions</a>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Container>
              <Row>
                <Col>
                  <h4>Follow Us On</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="3x"
                    ></FontAwesomeIcon>
                  </a>
                </Col>
                <Col>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      size="3x"
                    ></FontAwesomeIcon>
                  </a>
                </Col>
                <Col>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="3x"
                    ></FontAwesomeIcon>
                  </a>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>Newsletter</h6>
            <p>Subscribe to get our news and updates</p>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter Your Email Here"
                aria-label="Email"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Subscribe
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image
              src="/img/logo/hackers-black-full.png"
              width={300}
              height={100}
            />
            <p>
              Copyright © 2020 Hackers' Club, University of Peradeniya. All
              Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
