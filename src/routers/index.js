/**
 * Created by xiaosong on 2017/09/15.
 */
import { hashHistory, Router, Route } from 'react-router'
import Home from '../page/Home/index';
import PageLayout from '../page/PageLayout';
import NoMatch from '../page/NoMatch';
import Report from '../page/Report';
import Login from '../page/Login';

// 在这里面进行路由界面的添加

const createRoutes = [{
    path: '/',
    component: Login,
},{
    path: '/index',
    component: PageLayout,
    indexRoute: Home,   //home 界面
    childRoutes: [
        NoMatch(),
        Report(),
    ]
}];
export default createRoutes;
