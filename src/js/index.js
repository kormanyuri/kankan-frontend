import React from 'react';
import ReactDOM from 'react-dom';
import BodyCoupon from './components/coupon/BodyCoupon';

import BodyEvent from './components/event/BodyEvent';
import BodyEventDetail from './components/event/detail/BodyEventDetail';
import CouponDetail from './components/coupon/CouponDetail';
import CouponRedeem from './components/coupon/CouponRedeem';
import BodyContact from './components/BodyContact';
//import { Router,Route } from 'react-router';
import { HashRouter,Route, hashHistory } from 'react-router-dom'

export default class Index extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <HashRouter history={hashHistory}>
                <div>
                    <Route exact path="/" component={BodyEvent}></Route>
                    <Route exact path="/event/:page" component={BodyEvent}></Route>
                    <Route exact path="/coupon/:page" component={BodyCoupon}></Route>
                    {/*<Route path="/event/detail/:id" component={BodyEventDetail}></Route>*/}
                    <Route path="/event/detail/:id/:tab" component={BodyEventDetail}></Route>
                    <Route path="/coupon/detail/:id" component={CouponDetail}></Route>
                    <Route exact path="/coupon/redeem/:id" component={CouponRedeem}></Route>
                    {/*<Route path="/contact:id" component={BodyContact}></Route>*/}

                </div>
            </HashRouter>
        )
    }
}
ReactDOM.render(<Index/>,document.getElementById('mainContainer'));