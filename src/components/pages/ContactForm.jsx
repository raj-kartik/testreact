import React from 'react'
import { Form, Input, Button, Select } from 'antd'
import { Option } from 'antd/es/mentions';
import './ContactForm.css'
const ContactForm = () => {

  const onFinish = (values) => {
    console.log("values on finished", values);
  }

  const onFinishFailed = (err) => {
    console.error("error in form", err);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valiedEmail = (_, value) => {
    if (!value || !emailRegex.test(value)) {
      return Promise.reject('Please enter valid email')
    }

    return Promise.resolve();
  }

  return (
      <Form
        name="contact"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          borderRadius:"10px"
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >

        {/* for */}
        <div className='inputContainer' >
          <div className='name' >Full Name</div>
          <Form.Item
            name="fullname"
            className='formContainer'
            rules={[
              {
                required: true,
                message: 'Please input your Full Name!',

              },
            ]}
          >
            <Input placeholder="Full Name"  className='inputContainer'  />
          </Form.Item>

          {/* email */}
            <div className="name">E-mail</div>
          <div>
            <Form.Item
              name="email"
              placeholder="E-mail"
              className='formContainer'
              rules={[
                {
                  required: true,
                  message: "Please you email"
                },
                {
                  validator: valiedEmail
                }
              ]}
            >
              <Input placeholder='E-mail'  className='inputContainer'  />
            </Form.Item>


          </div>

        </div>

        {/* department + time */}
        <div className='selctor1' >

        <div className="name">Department</div>
          <div  >
            <Form.Item
              name="Department"
              className='formContainer'
            >
              <Select placeholder="Please Select" className='slectorcss' >
                <Option value='hr' >HR</Option>
                <Option value='team1' >Team 1</Option>
                <Option value='team2' >Team 2</Option>
              </Select>
            </Form.Item>
          </div>

          <div className='name' >
              Time Slot
          </div>
          <Form.Item
            name="Time"
            className='formContainer'
          >
            <Select placeholder="Please Select"  className='slectorcss' >
              <Option value='slot1' >4:00pm</Option>
              <Option value='slot2' >5:00pm</Option>
            </Select>
          </Form.Item>
        </div>

        {/* mesage */}
        <Form.Item
          name="Message"
          rules={[{
            placeholder: "Message"
          }]}
        >
          <Input placeholder='Message'  className='inputContainer' />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
        <Button type="primary" htmlType="submit" style={{padding:"2rem", display:"flex", justifyContent:"center", alignItems:"center"}} >
            Book Appointment
        </Button>
        </Form.Item>

      </Form>
  )
}

export default ContactForm;
