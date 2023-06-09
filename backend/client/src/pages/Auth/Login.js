import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { message } from "antd";
import { Card, Alert, Form, Input, Button, Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import FormItem from "antd/es/form/FormItem";

//import "../../styles/AuthStyles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (values) => {
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email: values.email,
        password: values.password,
      });
      if (res && res.data.success) {
        message.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };

  return (
    <Layout title="Login - Ecommerce App">
            <br></br><br></br>
      <div style={{ width: "70%", margin: "0 auto" }}>
      <Card title="Login" align="middle" className="card">
      

        <Form name="basic" onFinish={handleSubmit}>
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
              className="input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                width: "70%",
                margin: "0 auto",
              }}
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
              LOGIN
            </Button>
          </Form.Item>
          <div className="mb-3">
            <button
              type="button"
              style={{ borderStyle: "none", textDecoration: "underline" }}
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>
        </Form> 
        <Typography.Paragraph>
          Don't have an account? <Link to="/register">Register Here</Link>
        </Typography.Paragraph>
      </Card></div>
    </Layout>
  );
};

export default Login;
