import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import './index.scss'

const Footer = () => {
    const { pathname } = useLocation()
    function path(params){
        console.log(params, pathname);
        if ('/' + params === pathname){
            return 'actives_' + params
        }
    }
    return (
        <div className='footer'>
            <Link to="/" className={path('')}>
                <div>首页</div>
            </Link>
            <Link to="/find" className={path('find')}>
                <div>发现</div>
            </Link>
            <Link to="/vip" className={path('vip')}>
                <div>专享</div>
            </Link>
            <Link to="/mine" className={path('mine')}>
                <div>我</div>
            </Link>
        </div>
    )
}
export default Footer
