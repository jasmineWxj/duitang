import React,{useEffect} from 'react'
import '../style/Homeimg.scss'
import {  getImgmore } from '../http/index'


const Homeimg = () => {
    useEffect(()=>{
        getImgmore().then(res =>{
            console.log(res,'2222');
        })
    },[])
    return (
        <div className='Homeimg'>
            Homeimg
        </div>
    )
}
export default Homeimg
