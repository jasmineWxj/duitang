import React,{useEffect,useRef, useState} from 'react'
import '../style/Homeimg.scss'
import { getImgmore, getouth } from '../http/index'

import { useParams } from 'react-router-dom'

const Homeimg = () => {
    const imgRef = useRef([]);
    const [start , setStart] = useState(0);
    const {id} = useParams()
    useEffect(()=>{
        // getImgmore(start).then(res =>{
        //     imgRef.current = res.data.object_list
        //     console.log(res);
        //     console.log(imgRef.current,'2222');
        // })
        getouth(id).then(res=>{
            console.log(res);
        })
    },[])
    return (
        <div className='Homeimg'>
            Homeimg
        </div>
    )
}
export default Homeimg
