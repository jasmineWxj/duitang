
import React from 'react'
import '../style/home.scss'
import { Tabs } from 'antd-mobile'
function Home() {
    return (
        <div className="Home">
                <Tabs>
                    <Tabs.Tab title='水果' key='fruits'>
                    水果
                    </Tabs.Tab>
                    <Tabs.Tab title='蔬菜' key='vegetables'>
                        西红柿
                    </Tabs.Tab>
                </Tabs>
        </div>
    );
}

export default Home;
