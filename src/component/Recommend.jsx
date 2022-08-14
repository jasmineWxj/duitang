import React from 'react'
import '../style/recommend.scss'
import Search from './Search'
import Swipers from '../component/Swiper';
import Throne from './Throne';

const Recommend = () => {

    return (
        <div className='Recommend'>
            <Search />
            <Swipers />
            <Throne />
        </div>
    )
}
export default Recommend