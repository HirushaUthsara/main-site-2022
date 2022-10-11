import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import classes from "./committee.module.css";

export default function Committee() {
  /*
   * To change the commitee,
   * Change the link to images folder
   * make sure format of the all images are PNG
   * Make sure images are renamed with the post of the member (see 2021/2022 folder)
   * change names and links in below map (data)
   */

  let imgFolder = "/img/committees/2021-2022/";

  let data = {
    senior_treasurer: {
      name: "Dr. Asitha Bandaranayake",
      linkedIn: "#",
      email: "#",
    },
    president: { name: "Sathira Basnayake", linkedIn: "#", email: "#" },
    vice_president: { name: "Hansa Alahakoon", linkedIn: "#", email: "#" },
    secretary: { name: "Rushika Perera", linkedIn: "#", email: "#" },
    assistant_secretary: {
      name: "Avishka Abeywikrama",
      linkedIn: "#",
      email: "#",
    },
    editor: { name: "Virajini Dharmathilaka", linkedIn: "#", email: "#" },
    junior_treasurer: {
      name: "Nimnad Kodithuwakku",
      linkedIn: "#",
      email: "#",
    },
    committee_member_1: { name: "Buddhi Perera", linkedIn: "#", email: "#" },
    committee_member_2: {
      name: "Yoshith Sri Harshana",
      linkedIn: "#",
      email: "#",
    },
    committee_member_3: { name: "Esara Sithumal", linkedIn: "#", email: "#" },
    committee_member_4: { name: "Ishini Udara", linkedIn: "#", email: "#" },
    committee_member_5: { name: "Kushan manahara", linkedIn: "#", email: "#" },
    committee_member_6: {
      name: "Piumal Rathnayake",
      linkedIn: "#",
      email: "#",
    },
  };

  return (
    <div className={`${classes["committee"]}`}>
      <Container>
        <Row>
          <Col md={4} sm={6}>
            {buildMemberTile(
              imgFolder + "senior_treasurer.png",
              "SENIOR TREASURER",
              data["senior_treasurer"]["name"],
              data["senior_treasurer"]["linkedIn"],
              data["senior_treasurer"]["email"]
            )}
          </Col>
          <Col md={4} sm={6}>
            {buildMemberTile(
              imgFolder + "president.png",
              "PRESIDENT",
              data["president"]["name"],
              data["president"]["linkedIn"],
              data["president"]["email"]
            )}
          </Col>
          <Col md={4} sm={12}>
            {buildMemberTile(
              imgFolder + "vice_president.png",
              "VICE PRESIDENT",
              data["vice_president"]["name"],
              data["vice_president"]["linkedIn"],
              data["vice_president"]["email"]
            )}
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={6}>
            {buildMemberTile(
              imgFolder + "secretary.png",
              "SECRETARY",
              data["secretary"]["name"],
              data["secretary"]["linkedIn"],
              data["secretary"]["email"]
            )}
          </Col>
          <Col md={3} sm={6}>
            {buildMemberTile(
              imgFolder + "assistant_secretary.png",
              "ASSISTANT SECRETARY",
              data["assistant_secretary"]["name"],
              data["assistant_secretary"]["linkedIn"],
              data["assistant_secretary"]["email"]
            )}
          </Col>
          <Col md={3} sm={6}>
            {buildMemberTile(
              imgFolder + "editor.png",
              "EDITOR",
              data["editor"]["name"],
              data["editor"]["linkedIn"],
              data["editor"]["email"]
            )}
          </Col>
          <Col md={3} sm={6}>
            {buildMemberTile(
              imgFolder + "junior_treasurer.png",
              "JUNIOR TREASURER",
              data["junior_treasurer"]["name"],
              data["junior_treasurer"]["linkedIn"],
              data["junior_treasurer"]["email"]
            )}
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6}>
            {buildMemberTile(
              imgFolder + "committee_member_1.png",
              "COMMITTEE MEMBER",
              data["committee_member_1"]["name"],
              data["committee_member_1"]["linkedIn"],
              data["committee_member_1"]["email"]
            )}
          </Col>
          <Col md={4} sm={6}>
            {buildMemberTile(
              imgFolder + "committee_member_2.png",
              "COMMITTEE MEMBER",
              data["committee_member_2"]["name"],
              data["committee_member_2"]["linkedIn"],
              data["committee_member_2"]["email"]
            )}
          </Col>
          <Col md={4} sm={12}>
            {buildMemberTile(
              imgFolder + "committee_member_3.png",
              "COMMITTEE MEMBER",
              data["committee_member_3"]["name"],
              data["committee_member_3"]["linkedIn"],
              data["committee_member_3"]["email"]
            )}
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6}>
            {buildMemberTile(
              imgFolder + "committee_member_4.png",
              "COMMITTEE MEMBER",
              data["committee_member_4"]["name"],
              data["committee_member_4"]["linkedIn"],
              data["committee_member_4"]["email"]
            )}
          </Col>
          <Col md={4} sm={6}>
            {buildMemberTile(
              imgFolder + "committee_member_5.png",
              "COMMITTEE MEMBER",
              data["committee_member_5"]["name"],
              data["committee_member_5"]["linkedIn"],
              data["committee_member_5"]["email"]
            )}
          </Col>
          <Col md={4} sm={12}>
            {buildMemberTile(
              imgFolder + "committee_member_6.png",
              "COMMITTEE MEMBER",
              data["committee_member_6"]["name"],
              data["committee_member_6"]["linkedIn"],
              data["committee_member_6"]["email"]
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function buildMemberTile(img, post, name, linkedIn, email) {
  return (
    <div className={`${classes["member"]}`}>
      <Image alt="members"
        src={`${img}`}
        width={150}
        height={150}
        className={`${classes["member_img"]}`}
      />
      <div>
        <p className={`${classes["member_name"]}`}>{`${name}`}</p>
        <p className={`${classes["member_post"]}`}>{`${post}`}</p>
      </div>
      <a href={linkedIn}>
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </a>
      &nbsp;&nbsp;&nbsp;
      <a href={email}>
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
      </a>
    </div>
  );
}
