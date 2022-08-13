import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './index.scss'

const Footer = () => {
    const { pathname } = useLocation()
    return (
        <div className='footer'>
            <Link to="/" className={{ active: pathname == '/' }}>
                <div>首页</div>
            </Link>
            <Link to="/find" className={{ active: pathname == '/find' }}>
                <div>发现</div>
            </Link>
            <Link to="/vip" className={{ active: pathname == '/vip' }}>
                <div>专享</div>
            </Link>
            <Link to="/mine" className={{ active: pathname == '/mine' }}>
                <div>我</div>
            </Link>
        </div>
    )
}
export default Footer
