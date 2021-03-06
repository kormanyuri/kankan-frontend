/**
 * Created by korman on 01.05.17.
 */

import React from 'react';
// import PageTitle from '../parts/PageTitle';
import Search from '../parts/Search';
import Pagination from '../parts/Pagination';
import CouponList from './CouponList';
import { Link } from 'react-router-dom';

export default class BodyCoupon extends React.Component{

    constructor(props){
        super(props);
        console.log('coupon body construct', props.match.params.page);

        this.state = {
            items: [],
            page: props.match.params.page !== undefined ? props.match.params.page : 1
        };

        this.changeSearch = this.changeSearch.bind(this);
    }

    componentDidMount(props) {
        console.log('coupon body', props);

    }

    componentWillReceiveProps(props) {

        this.state = {
            items: [],
            page: props.match.params.page !== undefined ? props.match.params.page : 1,
            search: null
        }
    }

    changeSearch(search) {
        this.setState({search:search});
    }

    render(){
        return (
            <div>
                <div>
                    <div className="main">
                        <Search type="coupon" changeSearch={this.changeSearch}/>
                        <div className="list list_coupon">
                            <CouponList page={this.state.page} search={this.state.search}/>
                        </div>
                        <Pagination page={this.state.page} type="coupon" />
                        <div className="column">
                            <Link to="/">Event List</Link>
                            <Link to="/coupon/1">Coupon List</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}