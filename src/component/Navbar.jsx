import React,{useEffect,useState} from 'react'
import { Button, Menu , Typography ,Avatar} from 'antd';
import {Link} from 'react-router-dom';
import icon from '../images/cryptocurrency.png'
import {HomeOutlined ,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined} from '@ant-design/icons'

function Navbar() {
    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(null)

    useEffect(()=>{
            const handleResize = () =>{
                setScreenSize(window.innerWidth)
            }
            window.addEventListener('resize',handleResize)
            handleResize();

            return ()=> window.removeEventListener('resize',handleResize)

    },[])

    useEffect(()=>{
            if(screenSize < 760){
                setActiveMenu(false)
            }else{
                setActiveMenu(true)
            }
    },[screenSize])
  return (
    
    <div  className='nav-container'>
            <div className='logo-container'>

                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className="logo" >
                    <Link to='/'>Crypto</Link>

                </Typography.Title>
                    <button className='menu-control-container' onClick={()=> setActiveMenu(prev => !prev)}>
                        <MenuOutlined />
                    </button>
            </div>
            {activeMenu && (
                <Menu theme='dark' className='menu-item'>
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="crypto" icon={<FundOutlined />}>
                <Link to='/crypto'>Crypto</Link>
            </Menu.Item>
          
            <Menu.Item key="bulb" icon={<BulbOutlined />}>
                <Link to='/news'>News</Link>
            </Menu.Item>
            
               
            </Menu>
            ) }
           

    </div>
    
  )
}

export default Navbar