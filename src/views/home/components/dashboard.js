import React from "react";
import {Row, Col, Card, Divider} from "antd";
import bulletin from '../../../../mock/bulletin.json'
import news from '../../../../mock/news_gn.json'
import {Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from "swiper/core";
import RcChartLeft from "./dashboard/echart-left";
import RcChartCenter from './dashboard/echart-center'
import RcChartRight from "./dashboard/echart-right";
// Import Swiper styles
import 'swiper/swiper-bundle.css';
SwiperCore.use([Autoplay])
function Dashboard() {
    let data = bulletin.result.list
    let new_data = news.result.data
    const swiperOption = {
        loop: true,
        direction: 'vertical',
        spaceBetween: 0,
        autoplay: true,
        slidesPerView: 8,
    }
    return (
        <div>
            <Row gutter={120}>
                <Col lg={{span: 12}} md={{span: 24}}>
                    <Card title="每日简报" bordered={false} bodyStyle={{padding: '24px 24px 0'}}>
                        <Swiper
                            className="news_swiper"
                            style={{height: 300}}
                            {...swiperOption}
                        >
                            {
                                data.map((item, index) => {
                                    return   <SwiperSlide key={index} style={{height: 40}}>
                                        <span>{ item.title }</span>
                                        <span>{ item.mtime }</span>
                                    </SwiperSlide>
                                })
                            }
                        </Swiper>
                    </Card>
                </Col>
                <Col lg={{span: 12}} md={{span: 24}}>
                    <Card title="国内新闻" bordered={false} bodyStyle={{padding: '24px 24px 0'}}>
                        <Swiper
                            className="news_swiper"
                            style={{height: 300}}
                            {...swiperOption}
                        >
                            {
                                new_data.map((item, index) => {
                                    return   <SwiperSlide key={index} style={{height: 40}}>
                                        <span>{ item.title }</span>
                                        <span>{ item.date }</span>
                                    </SwiperSlide>
                                })
                            }
                        </Swiper>
                    </Card>
                </Col>
            </Row>
            <Divider style={{margin: '6px 0 20px'}}/>
            <Row gutter={20}>
                <Col lg={{span: 8}} md={{span: 24}}>
                    <RcChartLeft/>
                </Col>
                <Col lg={{span: 8}} md={{span: 24}}>
                    <RcChartCenter/>
                </Col>
                <Col lg={{span: 8}} md={{span: 24}}>
                    <RcChartRight/>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard
