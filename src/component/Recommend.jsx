import React from 'react'
import '../style/recommend.scss'
import Search from './Search'
import Swipers from '../component/Swiper';
import Throne from './Throne';
import Img from './Img';

const Recommend = () => {

    return (
        <div className='Recommend'>
            <Search />
            <Swipers />
            <Throne />
            <Img />
        </div>
    )
}
export default Recommend