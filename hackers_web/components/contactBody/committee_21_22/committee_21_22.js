import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faMailchimp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import classes from "./committee21_22.module.css";

export default function Committee_21_22() {
  return (
    <div className={`${classes["committee"]}`}>
      <Container>
        <Row>
          <Col md={4} sm={6}>
            {buildMemberTile(
              "/img/committees/2020-2021/images.png",
              "SENIOR TRESARUER",
              "Dr. Asitha Bandaranayake"
            )}
          </Col>
          <Col md={4} sm={6}>
            {buildMemberTile(
              "/img/committees/2020-2021/images.png",
              "PRESIDENT",
              "Sathira Basnayake"
            )}
          </Col>
          <Col md={4} sm={12}>
            {buildMemberTile(
              "/img/committees/2020-2021/images.png",
              "VICE PRESIDENT",
              "Hansa Alahakoon"
            )}
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={6}>
            {buildMemberTile(
              "/img/committees/2020-2021/images.png",
              "SECRETARY",
              "Ruchika Perera"
            )}
          </Col>
          <Col md={3} sm={6}>
            {buildMemberTile(
              "/img/committees/2020-2021/images.png",
              "ASSISTANT SECRETARY",
              "Avishka Abeywickrama"
            )}
          </Col>
          <Col md={3} sm={6}>
            {buildMemberTile(
              "/img/committees/2020-2021/images.png",
              "EDITOR",
              "Virajini Dharmathilaka"
            )}
          </Col>
          <Col md={3} sm={6}>
            {buildMemberTile(
              "/img/committees/2020-2021/images.png",
              "JUNIOR TREASURER",
              "Nimnad Kodithuwakku"
            )}
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6}>
            {buildMemberTile(
              "/img/committees/2020-2021/images.png",
              "COMMITTEE MEMBER",
              "Buddhi Perera"
            )}
          </Col>
          <Col md={4} sm={6}>
            {buildMemberTile(
              "/img/committees/2020-2021/images.png",
              "COMMITTEE MEMBER",
              "Yoshith Sri Harshana"
            )}
          </Col>
          <Col md={4} sm={12}>
            {buildMemberTile(
              "/img/committees/2020-2021/images.png",
              "COMMITTEE MEMBER",
              "Esara Sithumal"
            )}
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6}>
            {buildMemberTile(
              "/img/committees/2020-2021/images.png",
              "COMMITTEE MEMBER",
              "Ishini Udara"
            )}
          </Col>
          <Col md={4} sm={6}>
            {buildMemberTile(
              "/img/committees/2020-2021/images.png",
              "COMMITTEE MEMBER",
              "Kushan Manahara"
            )}
          </Col>
          <Col md={4} sm={12}>
            {buildMemberTile(
              "/img/committees/2020-2021/images.png",
              "COMMITTEE MEMBER",
              "Piumal Rathnayake"
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function buildMemberTile(img, post, name) {
  return (
    <div className={`${classes["member"]}`}>
      <Image
        src={`${img}`}
        width={150}
        height={150}
        className={`${classes["member_img"]}`}
      />
      <div>
        <p className={`${classes["member_name"]}`}>{`${name}`}</p>
        <p className={`${classes["member_post"]}`}>{`${post}`}</p>
      </div>
      <a href="#">
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </a>
      &nbsp;&nbsp;&nbsp;
      <a href="#">
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
      </a>
    </div>
  );
}
