/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import { Col, Row, Card } from "antd";
import bannierecontact from "../assets/bannierecontact.jpg";
import Layout from "../components/Layout/Layout";

const info = [
  {
    key: "entreprise",
    tab: "Maroc Telecom",
  },
  {
    key: "Hibarij",
    tab: "Hibarij",
  },
];

const contentInfo = {
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  entreprise: (
    <div>
      <h3><a href="tel:3030 " className="mt-3 d-block mb-1 text-black">3030</a>ou <a href="tel:0800 00 3030 " className="mt-3 d-block mb-1 text-black">0800 00 3030</a> </h3>{" "}
      <h5>Pour le fixe, mobile, internet et data</h5>{" "}
      <h5>
      <a href="tel:+212 537 71 90 00" className="mt-3 d-block mb-1 text-black">
          +212 537 71 90 00
        </a></h5> <br></br>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6618.6486131415895!2d-6.868572!3d33.958503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda714ada0ae8831%3A0x22f2c6d8f4b2c95e!2sMaroc%20Telecom!5e0!3m2!1sfr!2sus!4v1685112521344!5m2!1sfr!2sus"
        width="500"
        height="450"
        className="border-0 w-100"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>{" "}
      <br></br>
    </div>
  ),
  Hibarij: (
    <div>
      <h1>Hibarij s.a.r.l</h1>
      <h3>hamid choclate</h3>
      <h4>Manager</h4>
      <h5>
        <a href="tel:06 61 10 94 33" className="mt-3 d-block mb-1 text-black">
          06 61 10 94 33
        </a>
      </h5>
      <h5>
        <a href="tel:06 61 50 50 50" className="mt-3 d-block mb-1 text-black">
          06 61 50 50 50
        </a>
      </h5>
      <h4>fixe :</h4>
      <h5>
        {" "}
        <a href="tel:05 39 71 68 44" className="mt-3 d-block mb-1 text-black">
          05 39 71 68 44
        </a>
      </h5>
      <h4>Email :</h4>
      <h5> <a
                  href="s.hibarij2014@gmail.com"
                  className="mt-2 d-block mb-0 text-black"
                >
                  s.hibarij2014@gmail.com
                </a></h5>
      <h4>Adress :</h4>
      <h5>Av achorafaa residence al amane N°1 tetouan</h5>
      <br></br>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d202.807414035709!2d-5.35543646107741!3d35.58040029207192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM0JzQ5LjQiTiA1wrAyMScxOS40Ilc!5e0!3m2!1sfr!2sma!4v1683990724705!5m2!1sfr!2sma"
        width="500"
        height="450"
        className="border-0 w-100"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <br></br>
    </div>
  ),
};

const Contact = () => {
  const [activeInfo, setActiveInfo] = useState("Hibarij");

  const onInfoChange = (key) => {
    setActiveInfo(key);
  };
  return (
    <Layout>
      <Row justify="center" style={{ margin: "100px" }}>
        <Col xs={24} md={20} lg={16} xl={12}>
          <div style={{ width: "80%", margin: "0 auto" }}>
            <Card
              title=" Contact Us"
              align="middle"
              tabList={info}
              activeTabKey={activeInfo}
              onTabChange={onInfoChange}
              cover={
                <img
                  style={{ width: "100%" }}
                  alt="contact banner"
                  src={bannierecontact}
                />
              }
            >
              {contentInfo[activeInfo]}
            </Card>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default Contact;
