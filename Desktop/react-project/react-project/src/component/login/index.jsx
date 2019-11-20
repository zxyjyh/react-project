import React, { Component } from 'react'
import { Form, Icon, Input, Button,message } from 'antd'
import axios from 'axios'

import logo from './logo.png'
import './index.less'

//login 被 高阶组件包装后porps上 就有 一些方法，
//login 被路由包装后，变为路由组件，props上就有history，location，match 对象

class Login extends Component {

    validator = (rule,value,callback)=>{
        const name = rule.field === 'username'? '用户名':'密码'
        if(!value){
            callback('请输入' + name)
        }else if( value.length < 4){
            callback(name + '长度要大于4位')
        }else if(value.length > 15){
            callback(name + '长度要小于15位')
        }else if(!/\w/.test(value)){
            callback(name + '只能数字，字母，下划线')
        }else {
            callback()
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
                axios.post('http://localhost:5000/api/login',values)
                .then((response)=>{
                    if(response.data.status === 0){
                        this.props.history.push('/') //路由组件属性上有三个对象，history，location，match
                    }else {
                        message.error(response.data.msg);
                        this.props.form.resetFields(["password"])
                    }
                })
                .catch((err)=>{
                    console.log(err)
                   message.error('网络问题') 
                   this.props.from.resetFields(["password"])
                })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt='logo' />
                    <h1>react后台管理系统</h1>
                </header>
                <section  className="login-section">
                    <Form onSubmit={this.handleSubmit}>
                        <h3>登录系统</h3>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [
                                    // { required: true, message: 'Please input your username!' },
                                    // {min:4,message:'用户名不能少于4位'},
                                    // {max:15,message:'用户名不能大于15位'},
                                    // {pattern:/\w/,message:'用户名只能为数字，字母，下划线'}
                                    {validator:this.validator}
                                ]
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{validator:this.validator}]
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Log in</Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}

export default Form.create()(Login)