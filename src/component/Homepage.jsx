import React,{useState,useEffect} from 'react'
import millify from 'react'
import { Typography , Row , Col , Statistic  } from 'antd';
import { Link } from 'react-router-dom';
import {useGetCryptosQuery} from '../services/cryptoApi'
import Crypto from './Crypto.jsx';
import News from './News';
import Loader from './Loader';
const {Title} = Typography
function Homepage() {

const {data , isFetching} = useGetCryptosQuery()
const globalStats = data?.data?.stats


if(isFetching) return <Loader />


return (
   <>
  
        <Title level={2} className="heading">
        Global Crypto Stats

        </Title>
        <Row>
                <Col span={12}><Statistic title="Total Crypto"  value={globalStats.total}/></Col>
                <Col span={12}><Statistic title="Total Exchanges"  value={globalStats.totalExchanges}/></Col>
                <Col span={12}><Statistic title="Total Market Cap"  value={globalStats.totalMarketCap}/></Col>
                <Col span={12}><Statistic title="Total 24h Volume"  value={globalStats.total24hVolume}/></Col>
                <Col span={12}><Statistic title="Total Markets"  value={globalStats.totalMarkets}/></Col>

        </Row>
        <div className='home-heading-container'>
    <Title level={2} className="home-title">Top  Crypto in The World</Title>
    <Title level={3} className="show-more"><Link to='/crypto'>Show More</Link></Title>

        </div>
    <Crypto simplified />
        <div className='home-heading-container'>
    <Title level={2} className="home-title">Latest Crypto News</Title>
    <Title level={3} className="show-more"><Link to='/news'>Show More</Link></Title>

        </div>
    <News simplified />
   </>
  )
}

export default Homepage