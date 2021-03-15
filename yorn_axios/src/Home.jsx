import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
    async componentDidMount() {
        const instance1 = axios.create({
            baseURL: "http://baidu.com",
            timeout:1000,
            headers: {

            }
        });
        const instance2 = axios.create({

        });
        axios.interceptors.response.use(res => {
            return res.data;
        }, err => {
            switch(err.response.status) {
                case 400: 
                console.log("failed");
            }
        })
        axios.interceptors.request.use(config => {
            //1.显示一个loading组件
            //2.要求用户必须携带token，不然直接跳转到登录界面
            //3.序列化操作
            return config;
        }, err => {
            return err;
        });//传入两个回调函数
        axios.get(baseURL, {
            params: {
                name: "why"
            }
        }).then(res => console.log(res), err => console.log(err))
    }
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}
