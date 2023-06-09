/*import React from "react";
import { Card, Alert, Form, Input, Button, Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const { Title } = Typography;



const Checkout = () => {
  const onFinish = (values) => {
    // Handle form submission
    console.log(values);
  };

  const handleStripeCheckout = async () => {
    try {
      // Create an order object with the necessary information
      const order = new Order({
        products: cart.map((item) => item._id),
        buyer: auth.user._id,
        status: "Not Process",
      });
  
      // Save the order to the database
      await order.save();
  
      // Create a Stripe checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Your Order", // Customize the product name as needed
              },
              unit_amount: totalPrice() * 100, // Convert total price to cents
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "/sucess", // Customize success URL
         // Customize cancel URL
      });
  
      // Redirect the user to the Stripe payment page
      window.location.href = session.url;
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <Layout>
    <div>
      <Title level={3}>Checkout Form</Title>
      <Card>
        <Form name="checkout" onFinish={onFinish} layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your first name",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your last name",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: "Please enter your address",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="city"
            label="City"
            rules={[
              {
                required: true,
                message: "Please enter your city",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="cp "
            label="Cp"
            rules={[
              {
                required: true,
                message: "Please enter your code postal",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Alert
          type="info"
          message="Please note: This is just a demo. No real payment will be processed."
        />
          <StripeCheckout
  token={handleStripeCheckout}
  stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
  amount={totalPrice() * 100} // Convert total price to cents
  currency="USD"
  name="Your Order" // Customize the payment name as needed
  description="Payment for your order" // Customize the payment description as needed
>
  <button className="btn btn-primary">Proceed to Payment</button>
</StripeCheckout>

        </Form>
      </Card>
    
     
    </div></Layout>
  );
};

export default Checkout;
*/
