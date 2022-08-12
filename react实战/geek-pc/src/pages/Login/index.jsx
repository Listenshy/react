import React from "react";
import { Card, Form, Input, Checkbox, Button, message } from "antd";
import logo from "@/assets/logo.png";
import "./index.scss";
import useStore from "@/store";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const { LoginStore } = useStore();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    // console.log("Success:", values);
    try {
      await LoginStore.setToken(values.username, values.password);
      navigate("/layout");
      message.success("登录成功");
    } catch {
      // console.log("登录失败");
      message.error("登录失败");
    }
  };
  return (
    <div>
      <div className="login">
        <Card className="login-container">
          <img className="login-logo" src={logo} alt="" />
          {/* 登录表单 */}
          <Form
            initialValues={{
              remember: true,
            }}
            // 触发时机
            validateTrigger={["onBlur", "onChange"]}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "请输入手机号!",
                },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: "手机号码格式不对",
                  validateTrigger: "onBlur",
                },
              ]}
            >
              <Input size="large" placeholder="请输入手机号" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入验证码!",
                },
                {
                  len: 6,
                  message: "请输入6位密码",
                  validateTrigger: "onBlur",
                },
              ]}
            >
              <Input size="large" placeholder="请输入验证码" />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox className="login-checkbox-label">
                我已阅读并同意「用户协议」和「隐私条款」
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}
