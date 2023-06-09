import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {message}  from "antd";
import { Card, Form, Input, Button, Typography } from "antd";
import { Link } from "react-router-dom";



const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
    const handleSubmit = async (values) => {
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email: values.email,
        newPassword: values.newPassword,
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
    <Layout title={"Forgot Password - Ecommerce APP"}>
    <Card title="RESET PASSWORD">
      <Form onFinish={handleSubmit}>
        <Form.Item
          label="Enter Your Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
          ]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Enter Your favorite Sport Name"
          name="answer"
          rules={[
            {
              required: true,
              message: "Please enter your favorite sport name",
            },
          ]}
        >
          <Input value={answer} onChange={(e) => setAnswer(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Enter Your Password"
          name="newPassword"
          rules={[
            {
              required: true,
              message: "Please enter your new password",
            },
          ]}
        >
          <Input.Password
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
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
           }}>
            RESET
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </Layout>
);
};

export default ForgotPasssword;
