import React, { useState } from "react";
import { Button, Input, Form, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "./Signup.css";
import { routes } from "../routes";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      message.error("Passwords do not match!");
      return;
    }

    const signupData = {
      email,
      password,
      phone,
    };

    try {
      const response = await axios.post(
        "http://localhost:3020/api/signup",
        signupData
      );

      if (response.status === 201) {
        message.success("Signup successful!");
        localStorage.setItem("TOKEN", email);
        window.location.href = "http://localhost:3000/";
      }
    } catch (error) {
      if (error.response) {
        message.error(
          error.response.data.message || "An error occurred during signup."
        );
      } else {
        message.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-title">Create an account</h1>
        <Form onFinish={handleSignup}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              placeholder="Enter your password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Confirm Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Phone (Optional)" name="phone">
            <Input
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Item>

          <p className="terms-text">
            By clicking "Sign Up", you are confirming that you have read and
            agree to Detailed Vehicle History's
            <a
              className="terms-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://detailedvehiclehistory.com/terms-of-service"
            >
              &nbsp;Terms and Conditions&nbsp;
            </a>
            &amp;
            <a
              className="terms-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://detailedvehiclehistory.com/privacy"
            >
              &nbsp;Privacy Policy.&nbsp;
            </a>
          </p>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className="signin-link">
          Already have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer", fontWeight: "bold" }}
            onClick={() => navigate(routes.login)}
          >
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
