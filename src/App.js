import React from 'react'
import {Routes, Route , Link} from 'react-router-dom'
import {Layout , Typography , Space} from 'antd'
import { Navbar,Crypto ,Homepage,CryptoDetails,News} from './component';
import './App.css'
function App() {
  return (
    <div className='app'>
        <div className='navbar'>
                <Navbar />
        </div>

        <div className='main'>
            <Layout>
                <div className='routes'>
                <Routes>
                    <Route exact path='/' element={<Homepage />} />
                        
                    
                  
                      
                   
                    <Route exact path='/crypto' element={<Crypto />} />
                        
                   
                    <Route exact path='/crypto/:coinId' element={ <CryptoDetails />}/>
                       
                    
                    <Route exact path='/news' element={<News />} />
                        
                    

                </Routes>

                </div>

            </Layout>

        <div className='footer'>
        <Typography.Title level={5} style={{color:'white',textAlign:"center"}}>
            Amr Ashraf  <br />
            All Right Reversed
        </Typography.Title>
        <Space>
            <Link to='/'></Link>
           
            <Link to='/news'>News</Link>
            
        </Space>

        </div>
        </div>

    </div>


  )
}

export default App