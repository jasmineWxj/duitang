
import React from 'react'
import '../style/home.scss'
import Follow from '../component/Follow';
import Recommend from '../component/Recommend';
import { Tabs } from 'antd-mobile'
function Home() {
    return (
        <div className="Home">
                <Tabs>
                    <Tabs.Tab title='关注' key='fruits'>
                        <Follow />
                    </Tabs.Tab>
                    <Tabs.Tab title='推荐' key='vegetables'>
                        <Recommend />
                    </Tabs.Tab>
                </Tabs>
        </div>
    );
}

export default Home;
