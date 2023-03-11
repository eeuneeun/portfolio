import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/ko';

export default function NowTime(props) {
    moment.locale('ko');

    return (<>
        <div className="now-time">
            <dl>
                <dt>
                    <Moment interval={8640000} format="YYYY.MM.DD" />
                    &nbsp;
                    <Moment interval={8640000} format="dddd" />
                </dt>
                <dd>
                    <Moment interval={60000} format="a" />
                    &nbsp;
                    <Moment interval={1000} format="hh:mm" />
                </dd>
            </dl>            
        </div>
    </>)
}