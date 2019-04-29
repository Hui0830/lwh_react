import React from 'react';
import { Tabs,Icon } from 'lwh_react';

const OtherTabs = () => {

    const onTabClick = (activeKey) => {
        console.log('onTabClick事件触发：',`你单击了${activeKey}`)
    }

    const onChange = (preKey,nextKey) => {
        console.log('onChange事件触发：',`你从tab=${preKey}转换到了${nextKey}`)
    }
    return (
        <div>
            <div style={{marginBottom: 20}}>
                <p>
                    可以自定义Pane的内容，通过给TabPane赋值tab
                </p>
            </div>
            <Tabs onChange={onChange} onTabClick={onTabClick}>
                <Tabs.TabPane id="1" tab={<p><Icon type="icon_im_face" />开心每一天</p>}>
                    <div className="demo-tab-content">
                        开心每一天
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane id="2" tab={<p><Icon type="icon_likegood" />点个赞吧</p>}>
                    <div className="demo-tab-content">
                        点个赞吧
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane id="3" tab={<p><Icon type="icon_addresslist" />每日一记</p>}>
                    <div className="demo-tab-content">
                        tab 3
                    </div>
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}
export default OtherTabs
export const otherTabsCode = {
    title: 'onTabClick单击触发接受activeKey，onChange改变触发接受上一个key和当前key,tab内容可自定义',
    code: `
    import React from 'react';
    import { Tabs,Icon } from 'lwh_react';
    
    const OtherTabs = () => {
    
        const onTabClick = (activeKey) => {
            console.log('onTabClick事件触发：',\`你单击了\${activeKey}\`)
        }
    
        const onChange = (preKey,nextKey) => {
            console.log('onChange事件触发：',\`你从tab=\${preKey}转换到了\${nextKey}\`)
        }
        return (
            <div>
                <div style={{marginBottom: 20}}>
                    <p>
                        可以自定义Pane的内容，通过给TabPane赋值tab
                    </p>
                </div>
                <Tabs onChange={onChange} onTabClick={onTabClick}>
                    <Tabs.TabPane id="1" tab={<p><Icon type="icon_im_face" />开心每一天</p>}>
                        <div className="demo-tab-content">
                            开心每一天
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane id="2" tab={<p><Icon type="icon_likegood" />点个赞吧</p>}>
                        <div className="demo-tab-content">
                            点个赞吧
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane id="3" tab={<p><Icon type="icon_addresslist" />每日一记</p>}>
                        <div className="demo-tab-content">
                            tab 3
                        </div>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        )
    }
    export default OtherTabs
    `
}