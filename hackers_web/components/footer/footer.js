import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import classes from "./Footer.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className={`${classes["footer"]}`}>
      <Container className="text-center">
        <Row>
          <Col md={6} lg={2}>
            <h4>Useful Links</h4>
            <Container variant="flush" className={`${classes["footer-links"]}`}>
              <Row>
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>
              </Row>
              <Row>
                <Link href="https://web.facebook.com/acespera/?_rdc=1&_rdr" target="blank">
                  <a target="blank" >ACES</a>
                </Link>
              </Row>
            </Container>
          </Col>
          <Col md={6} lg={2} >
            <h4>Events</h4>
            <Container variant="flush" className={`${classes["footer-links"]}`}>
              <Row>
                <Link href="https://web.facebook.com/aces.hackathon/?_rdc=1&_rdr" target="blank">
                  <a target="blank">HackaThon</a>
                </Link>
              </Row>
              <Row>
                <Link href="https://eng.pdn.ac.lk/10-law-schools-where-the-most-accepted-students-enroll-2/" target="blank">
                  <a target="blank">Coders</a>
                </Link>
              </Row>
            </Container>
          </Col>
          <Col md={12} lg={4}>
            <h4>Sessions</h4>
            <Container variant="flush" className={`${classes["footer-links"]}`}>
              <Row>
                <Link href="#Events">
                  <a className="disabled-link">Developer Series Sessions</a>
                </Link>
              </Row>
              <Row>
                <Link href="#Events">
                  <a className="disabled-link">Competitive Programming Sessions</a>
                </Link>
              </Row>
            </Container>
          </Col>
          <Col md={12} lg={4}>
            <Container className={`${classes["footer-follow"]}`}>
              <Row>
                <h4>Follow Us On</h4>
              </Row>
              <Row>
                <Col>
                  <a
                    href="https://www.facebook.com/uophackers"
                    target="blank"
                    className={`${classes["follow-fb"]}`}
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="3x"
                    ></FontAwesomeIcon>
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://www.youtube.com/channel/UCdsaElflkOhbX6Rv6r2uH5A/"
                    target="blank"
                    className={`${classes["follow-yt"]}`}
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      size="3x"
                    ></FontAwesomeIcon>
                  </a>
                </Col>
                <Col>
                  <a href="https://www.linkedin.com/company/hackers-club-uop/?trk=ppro_cprof&originalSubdomain=lk" 
                    target="blank"
                    className={`${classes["follow-li"]}`}
                    
                  >
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
        <Row className={`${classes["footer-logo-sec"]}`}>
          <Col>
            <Image alt="footer-logo"
              src="/img/logo/hackers-black-full.png"
              width={300}
              height={100}
            />
            <p>
              Copyright © 2021/22 Hackers&apos; Club, University of Peradeniya. All
              Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
