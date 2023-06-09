import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
//import "../../styles/AuthStyles.css";

import { Card, Alert, Form, Input, Button, Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
 // form function
 const handleSubmit = async (values) => {
  try {
    const res = await axios.post("/api/v1/auth/register", {
      name: values.name,
      email: values.email,
      password: values.password,
      phone: values.phone,
      address: values.address,
      answer: values.answer,
    });
    if (res && res.data.success) {
      message.success(res.data && res.data.message);
      navigate("/login");
    } else {
      message.error(res.data.message);
    }
  } catch (error) {
    console.log(error);
    message.error("Something went wrong");
  }
};

  return (
    <Layout title="Register - Ecommer App">
      <br></br><br></br>
        <div style={{ width: "70%", margin: "0 auto" }}>

          <Card title="Register" align="middle" className="card" >
            <Form
              name="basic"
         
              onFinish={handleSubmit}
             
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your name",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email address",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Address"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Please enter your address",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Answer"
                name="answer"
                rules={[
                  {
                    required: true,
                    message: "Please enter your answer",
                  },
                ]}
              >
                <Input
                  placeholder="What is Your Favorite sports"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  fullWidth
                  type="primary"
                  htmlType="submit"
                  sx={{
                    backgroundColor: "#333333",
                    boxShadow: "none",
                    color: "white",
                    borderRadius: 1,
                    padding: "15px 40px",
                    mb: 1,
                    mt: 2,
                  }}
                >
                  REGISTER
                </Button>
              </Form.Item>
            </Form>
            <Typography.Paragraph>
              Already have an account? <Link to="/login">Login Here</Link>
            </Typography.Paragraph>
          </Card></div>
    </Layout>
  );
};

export default Register;
