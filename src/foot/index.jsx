import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import './index.scss'
import '../common/css/iconfont.css'

const Footer = () => {
    const { pathname } = useLocation()
  
    function path(params){
        if ('/' + params === pathname){
            return 'current actives_' + params
        }
    }
    return (
        <div className='footer' >
            <Link to="/" className={path('')}>
                <span class="iconfont icon-shouye"></span>
                <div>首页</div>
            </Link>
            <Link to="/find" className={path('find')}>
                <span class="iconfont icon-faxian"></span>
                <div>发现</div>
            </Link>
            <Link to="/vip" className={path('vip')}>
                <span class="iconfont icon-ziyuan"></span>
                <div>专享</div>
            </Link>
            <Link to="/mine" className={path('mine')}>
                <span class="iconfont icon-wo"></span>
                <div>我</div>
            </Link>
        </div>
    )
}
export default Footer
