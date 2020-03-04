import React, { useState } from 'react'
import { LockOutlined, UserOutlined, UnlockOutlined } from '@ant-design/icons'
import { Form } from 'antd'
import { Store } from 'rc-field-form/lib/interface'
import '@ant-design/compatible/assets/index.css'
import { Input, message, Button } from 'antd'
import { FormItemProps } from 'antd/lib/form'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

type Props = {}

const Login: React.FunctionComponent<Props> = () => {
  const history = useHistory()
  const [usernameValidateStatus, setUsernameValidateStatus] = useState<FormItemProps['validateStatus']>('')
  const [passwordValidateStatus, setPasswordValidateStatus] = useState<FormItemProps['validateStatus']>('')

  const onUsernameChange = (value: string): void => {
    const feedback = value === 'demo' ? 'success' : 'error'
    setUsernameValidateStatus(feedback)
  }

  const onPasswordChange = (value: string): void => {
    const feedback = value === 'demo' ? 'success' : 'error'
    setPasswordValidateStatus(feedback)
  }

  const onFinish = (values: Store): void => {
    const { username, password } = values

    // TODO: Login with username, password
    // attempt login with credentials
    if (username === 'demo' && password === 'demo') {
      message.success('Login successfully. Please wait ...')
      localStorage.setItem('token', 'logged_in')
      history.push('/dashboard')
    } else {
      message.error('Please enter valid username and password.', 1.5)
    }
  }

  return (
    <StyledForm
      name="login-form"
      onFinish={onFinish}
      initialValues={{
        username: '',
        password: '',
      }}
      className="login-form"
    >
      <Form.Item style={{ textAlign: 'center' }}>
        <img src="/img/logo.png" alt="Who owes me" />
      </Form.Item>
      <Form.Item
        hasFeedback
        name="username"
        extra="username: demo"
        validateStatus={usernameValidateStatus}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <StyledInput
          prefix={<UserOutlined />}
          placeholder="Username"
          onChange={(e): void => onUsernameChange(e.currentTarget.value)}
        />
      </Form.Item>
      <Form.Item
        hasFeedback
        name="password"
        extra="password: demo"
        validateStatus={passwordValidateStatus}
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <StyledInput
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
          onChange={(e): void => onPasswordChange(e.currentTarget.value)}
        />
      </Form.Item>
      <Form.Item>
        <StyledLoginButton
          type="primary"
          htmlType="submit"
          className="login-form-button"
          icon={<UnlockOutlined />}
        >
          Sign in
        </StyledLoginButton>
      </Form.Item>
    </StyledForm>
  )
}

const StyledLoginButton = styled(Button)`
  width: 100%;
  height: 50px;
`

const StyledInput = styled(Input)`
  height: 50px;
  line-height: 38px;
`

const StyledForm = styled(Form)`
  text-align: left;
  min-width: 300px;
  width: 300px;
  height: 300px;
  margin: auto auto;
`

const LoginForm = Login

export default LoginForm
