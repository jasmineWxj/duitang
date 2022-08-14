import React from 'react'
import '../style/recommend.scss'
import { Swiper } from 'antd-mobile'

const Swipers = () => {
    const colors = [
        'https://c-ssl.dtstatic.com/uploads/ops/202208/14/20220814001701_f849f.thumb.700_0.png',
        'https://c-ssl.dtstatic.com/uploads/ops/202208/12/20220812154911_baf95.thumb.700_0.png',
        'https://c-ssl.dtstatic.com/uploads/ops/202208/10/20220810173139_2a0b1.thumb.700_0.png',
        'https://c-ssl.dtstatic.com/uploads/ops/202208/10/20220810161811_117c5.thumb.700_0.png',
        ]
    const items = colors.map((color, index) => (
        <Swiper.Item key={index}>
            <img
                src={color}
                className='swiper_img'
            />
        </Swiper.Item>
    ))

    return (
        <div className='Swiper'>
                <Swiper autoplay>
                {items}
                </Swiper>
        </div>
    )
}
export default Swipers