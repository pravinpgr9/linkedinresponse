import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import PriyaMadam from '../../assets/PriyaMadam.jpg';


const About = () => (
  <Container className="my-5 marathi-text">
    {/* Hero Section */}
    <Row className="text-center mb-5">
      <Col>
        <h1 className="display-4 fw-bold">Dr. Priya Insights</h1>
        <p className="lead text-muted">
          या ब्लॉगवर डॉ. प्रिया प्रभू (देशपांडे) यांच्या सर्व वाचकांचे स्वागत!
        </p>
      </Col>
    </Row>

    {/* Introduction Section */}
    <Row className="mb-5">
      <Col>
        <Card className="border-0 shadow-sm">
          <Card.Body>
            <p className="fs-5">
              या ब्लॉगमध्ये मी स्तनपान या विषयावर गेली २० वर्षे जी काही माहिती मिळवली आहे ती सर्व लिहिणार आहे! त्याशिवाय कोविडनंतर मी आरोग्यविषयक विविधांगी माहिती लिहायला सुरुवात केली, त्यातील निवडक माहितीही असणार आहे.
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* About Dr. Priya Section */}
    <Row className="mb-5">
      <Col md={6}>
        <img
          src={ PriyaMadam } // Replace with Dr. Priya's image
          alt="Dr. Priya Prabhu"
          className="img-fluid rounded shadow-sm"
        />
      </Col>
      <Col md={6} className="d-flex align-items-center">
        <div>
          <h2 className="fw-bold mb-4">मी कोण?</h2>
          <p className="fs-5">
            मी डॉ. प्रिया प्रभू (देशपांडे), MBBS, MD (PSM). एक वैद्यकीय शिक्षक आणि जिला स्वतःला स्तनपान देताना अडचणी आल्या व जिने त्यावर मात केली अशी एक आई! मला आरोग्यविषयक योग्य माहिती द्यायला आवडते आणि चुकीची माहिती खोडून काढणे त्याहून जास्त आवडते.
          </p>
        </div>
      </Col>
    </Row>

    {/* Importance of Correct Information Section */}
    <Row className="mb-5">
      <Col>
        <Card className="border-0 shadow-sm">
          <Card.Body>
            <h2 className="fw-bold mb-4">योग्य माहिती का महत्त्वाची आहे?</h2>
            <p className="fs-5">
              योग्य माहिती योग्य निर्णय घेण्यास मदत करते! योग्य माहिती अडचणी टाळण्यास किंवा अडचणी सोडवण्यास मदत करते! त्यामुळे स्तनपान सुरू करण्यापूर्वी आणि सुरू असताना स्तनपानदायी कुटुंबाने हे लेख वाचावेत कारण स्तनपान ही काही एकट्या आईची जबाबदारी नाही!
            </p>
            <p className="fs-5">
              मी रोगप्रतिबंधक शास्त्र तज्ञ असल्याने आरोग्य टिकवण्यासाठी, आजार टाळण्यासाठी आणि भविष्यातील अडचणीतून निभावण्यासाठी जे आवश्यक आहे, त्याविषयी देखील लिहित असते. तेही लेख इथे वाचू शकाल.
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Call to Action Section */}
    <Row className="mb-5">
      <Col className="text-center">
        <h2 className="fw-bold mb-4">कनेक्ट राहूया!</h2>
        <p className="fs-5 mb-4">
          योग्य माहिती वाचत राहा, इतरांपर्यंत पोचवत राहा! कमेंटमध्ये प्रश्न विचारत रहा, माहितीचा उपयोग झाल्यास कळवत राहा, आपले अनुभव देखील शेअर करत राहा! ब्लॉग लाईक/सबस्क्राइब केल्यास प्रत्येक नवा लेख मेलद्वारे तुमच्यापर्यंत पोचेल. भेटत राहूया!
        </p>
        <Button variant="primary" size="lg" className="me-3">
          ब्लॉग सबस्क्राइब करा
        </Button>
        <Button variant="outline-primary" size="lg">
          फेसबुकवर जा
        </Button>
      </Col>
    </Row>

    {/* Social Media Section */}
    <Row className="mb-5">
      <Col className="text-center">
        <p className="fs-5">
          तसेच फेसबुकवर देखील सर्व लेख वाचू शकता.
        </p>
      </Col>
    </Row>
  </Container>
);

export default About;
