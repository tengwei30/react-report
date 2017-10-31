/***
 * Created by xiaosong 2017/09/26
 * **/

import React from 'react';
import { Form, Icon, Input, Button,message,notification } from 'antd';
const FormItem = Form.Item;

class Login extends React.Component {
	constructor(props){
		super(props)
	}
	handleSubmit = (e) => {
		let userName = e.target.userName.value;
        let password = e.target.password.value;
        if(userName === 'admin' && password === '123456') {
            this.props.router.push({pathname:'/index'})
        }else{
            notification.warning({
                message: '账号密码错误'
            })
        }
	}
	render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Form style={Style.formBg} onSubmit = { this.handleSubmit } className="login-form">
                    <h2 style={Style.Headtitle}>后台管理系统</h2>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入用密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
                            登录
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
const Style = {
    formBg:{
        width:300,
        backgroundColor:'#fff',
        padding:15,
        border:'1px solid #ccc',
        borderRadius:4,
        position:'absolute',
        top:'35%',
        left:'42%',
    },
    Headtitle:{
        textAlign:'center'
    }
}

export default Form.create()(Login);
