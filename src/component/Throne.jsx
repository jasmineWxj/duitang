import React from 'react'
import zhuanji from '../static/zhuanji.png'
import remen from '../static/fenlei-remen.png'
import yuegao from '../static/yanliaopan.png'
import yuanchuang from '../static/yuanchuang-.png'
import fengche from '../static/weibiaoti-.png'
const list = [
    { icon: zhuanji, name: '热门专辑' },
    { icon: remen ,name: '热门' },
    { icon: yuegao ,name: '约稿' },
    { icon: yuanchuang ,name: '原创' },
    { icon: fengche, name: '最新活动' },
]
const Throne = () => {

    return (
        <div className='Throne'>
            {
                list.map((item,index) => {
                    return (
                        <div key={index} className='throne-box'>
                           <div className='throne_img'> 
                                <img src={item.icon} alt="" />
                           </div>
                            <span>{item.name}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Throne
