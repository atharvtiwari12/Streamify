import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import imageStream from "../../assets/imageStream.jpeg";
import Logo from "../../assets/Logo.png";
import kidsImage from "../../assets/kidsImage.png";

export default function Login() {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleClick = () => {
    const callbackUrl = `${window.location.origin}`;
    const googleClientId =
      "566026556437-aurgaofmu339lodv5cf845c498lhh092.apps.googleusercontent.com";
    const targetUrl = `https://accounts.google.com/o/oauth2/auth?redirect_uri=${encodeURIComponent(
      callbackUrl
    )}&response_type=token&client_id=${googleClientId}&scope=openid%20email%20profile`;
    window.location.href = targetUrl;
  };

  useEffect(() => {
    const accessTokenRegex = /access_token=([^&]+)/;
    const isMatch = window.location.href.match(accessTokenRegex);

    if (isMatch) {
      const accessToken = isMatch[1];
      Cookies.set("access_token", accessToken);
      setIsLoggedin(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedin) {
      navigate("/secure");
    }
  }, [isLoggedin, navigate]);

  return (
    <>
      <div>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                src={Logo}
                height="40"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "30px" }}
                navbarScroll
              >
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <Button variant="outline-success" onClick={handleClick}>
                SignIn
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="sectionFirst">
        <div className="overlay"></div>
        <Container>
          <div className="text-box">
            <h2>Unlimited movies, TV shows and more</h2>
            <div className="text-box">
              <p>Watch anywhere. Cancel anytime.</p>
            </div>
            <div className="text-box">
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="section Secondsection">
        <Container>
          <div className="section-content">
            <div className="image-box">
              <img src={imageStream} alt="Image 2" />
            </div>
            <div className="text-box">
              <h2>Watch Here</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus dignissimos quisquam nobis amet dolorem temporibus
                facere enim inventore dicta, maxime officia illo reiciendis
                praesentium magnam, repellendus voluptas perferendis rerum!
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="section Thirdsection">
        <Container>
          <div className="section-content">
            <div className="text-box">
              <h2>Content for kids</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis unde sunt reprehenderit. Veniam, culpa dicta rerum
                omnis temporibus impedit praesentium consequuntur reprehenderit
                officiis! Ea fugit architecto modi cupiditate veritatis
                laudantium quos facilis dolorum.
              </p>
            </div>
            <div className="image-box">
              <img src={kidsImage} alt="Image 3" />
            </div>
          </div>
        </Container>
      </div>
      <div className="custom-accordion">
        <h2>Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <footer className="footer">
        <Container>
          <div className="footer-content">
            <div className="footer-section">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                faucibus magna ac nunc laoreet, ac tempor nunc dignissim.
              </p>
              <ul>
                <li>
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <a href="#">Link 2</a>
                </li>
                <li>
                  <a href="#">Link 3</a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
