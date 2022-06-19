import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// components
import { Button, Form, Input } from "antd";

// contexts
import { AuthContext } from "context";

// styles
import styles from "./Login.module.scss";

const Login = () => {
  const { signInUser, state } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(state);
  useEffect(() => {
    signInUser();
  }, []);

  const handleSubmit = (data) => {
    signInUser(data, navigate);
  };

  return (
    <div className={styles.Login}>
      <div className={styles.containerFluid}>
        <div className={styles.LoginForm}>
          <div className={styles.Logo}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtB7DKDA-yoDKJEnjBxQfvP-OenRHTj8En0g&usqp=CAU"
              alt="kentkart"
            />
          </div>
          <Form className={styles.Forms} onFinish={handleSubmit}>
            <Form.Item
              name="userEmail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input className={styles.Input} placeholder="E-mail" />
            </Form.Item>

            <Form.Item
              name="userPassword"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                width={10}
                placeholder="Password"
                className={styles.Input}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.Btn}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
