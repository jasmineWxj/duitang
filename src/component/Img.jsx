import React,{useEffect,useState,useRef} from 'react'
import { getImgList, getImgwallpaper } from '../http/index'
import { Image, SpinLoading } from 'antd-mobile'
import '../style/recommend.scss'
import { debounce, getTop } from '../common/js/fangdou'
import { Link, useLocation } from 'react-router-dom'
const Img = () => {
    const [start, setStart] = useState(0);
    const imgref = useRef([])
    useEffect(()=>{
        getImgwallpaper(start).then(res=>{
            if (res.status === 1 && res.data.object_list.length > 1){
                setStart(start+24)
                imgref.current = res.data.object_list
            }
        })
          
    }, [])
    return (
        <div className='Img'>
            {
                imgref.current.length == 0 
                ?
                 <SpinLoading color='primary' style={{margin:'0 auto'}} />
                 :
                    imgref.current.map((item, index) => {
                    return (
                        <Link to={`/${item.album.id}`} key={index} className='Imgbox'>
                            <div className='Imgbox_img'>
                                <img src={item.photo.path} style={{ width: '182px' }} />
                            </div>
                            <div className='Imgbox_text'>{item.msg}</div>
                            <div className='Imgbox_sender'>
                                <img src={item.sender.avatar} className='Imgbox_sender_img' />
                                <span>{item.sender.username}</span>
                            </div>
                        </Link>
                    )
                })
            }
                

           
        </div>
    )
}
export default Img
