import React,{useEffect,useState} from 'react'
import { getImgList } from '../http/index'
import { Image } from 'antd-mobile'
import '../style/recommend.scss'
import { debounce, getTop } from '../common/js/fangdou'
const Img = () => {
    const [imglist,setImglist] = useState([])
    const [start, setStart] = useState(0)
    useEffect(()=>{
        getImgList(start).then(res=>{
            if (res.status === 1){
                setStart(start+24)
                setImglist(res.data.object_list)
                console.log(imglist[0]);

            }
        })
          
        function scroll(){
            var aa = document.querySelector('.more')
            if (document.body.clientHeight + document.documentElement.scrollTop - 100 >= getTop(aa)) {
                getImgList(start).then(res=>{
                    if (res.status === 1) {
                        setImglist(imglist.concat(res.data.object_list))
                        setStart(start + 24)
                    }
                })
            }
        }
        window.onscroll = debounce(scroll,200,true)

        
    }, [])
    return (
        <div className='Img'>
            {
                imglist.map((item,index) => {
                    return (
                        <div key={index} className='Imgbox'>
                            {index}
                        </div>
                    )
                })
            }
            <span className='more'>没有更多了</span>
        </div>
    )
}
export default Img
