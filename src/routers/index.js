/**
 * Created by xiaosong on 2017/09/15.
 */

import Home from '../page/Home/index';
import PageLayout from '../page/PageLayout';
import NoMatch from '../page/NoMatch';
import Report from '../page/Report';

const createRoutes = () => ({
    path: '/',
    component: PageLayout,  //
    indexRoute: Home,   //home 界面
    childRoutes: [
        NoMatch(),
        Report(),
    ]
});

export default createRoutes
