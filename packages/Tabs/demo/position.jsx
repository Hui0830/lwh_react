import React,{ PureComponent } from 'react';
import { Tabs,Button } from 'lwh_react';

export default class PositionTabs extends PureComponent {
    state = {
        tabPosition: 'top'
    }

    onChangePosition(value) {
        this.setState({
            tabPosition: value
        })
    }

    render() {
        const { tabPosition } = this.state;
        return (
            <div>
                <div style={{marginBottom: 20}}>
                    <Button type={tabPosition=='top' && 'primary'} onClick={() => this.onChangePosition('top')}>top</Button>
                    <Button type={tabPosition=='right' && 'primary'} onClick={() => this.onChangePosition('right')}>right</Button>
                    <Button type={tabPosition=='bottom' && 'primary'} onClick={() => this.onChangePosition('bottom')}>bottom</Button>
                    <Button type={tabPosition=='left' && 'primary'} onClick={() => this.onChangePosition('left')}>left</Button>
                </div>
                <Tabs tabPosition={tabPosition}>
                    <Tabs.TabPane id="1">
                        <div className="demo-tab-content">
                            tab 1
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane id="2" tab={<p>Tab 2</p>}>
                        <div className="demo-tab-content">
                            tab 2
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane id="3" >
                        <div className="demo-tab-content">
                            tab 3
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane id="4" tab="这里是tab4">
                        <div className="demo-tab-content">
                            tab 4
                        </div>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        )
    }
}

export const positionCode = {
    title: '通过tabPosition属性可以控制tabBar的位置，可设置的值为top、left、bottom、right',
    code: `
    import React,{ PureComponent } from 'react';
    import { Tabs,Button } from 'lwh_react';
    
    export default class baseTabs extends PureComponent {
        state = {
            tabPosition: 'top'
        }
    
        onChangePosition(value) {
            this.setState({
                tabPosition: value
            })
        }
    
        render() {
            const { tabPosition } = this.state;
            return (
                <div>
                    <div style={{marginBottom: 20}}>
                        <Button type={tabPosition=='top' && 'primary'} onClick={() => this.onChangePosition('top')}>top</Button>
                        <Button type={tabPosition=='right' && 'primary'} onClick={() => this.onChangePosition('right')}>right</Button>
                        <Button type={tabPosition=='bottom' && 'primary'} onClick={() => this.onChangePosition('bottom')}>bottom</Button>
                        <Button type={tabPosition=='left' && 'primary'} onClick={() => this.onChangePosition('left')}>left</Button>
                    </div>
                    <Tabs tabPosition={tabPosition}>
                        <Tabs.TabPane id="1">
                            <div className="demo-tab-content">
                                tab 1
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane id="2" tab={<p>Tab 2</p>}>
                            <div className="demo-tab-content">
                                tab 2
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane id="3" >
                            <div className="demo-tab-content">
                                tab 3
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane id="4" tab="这里是tab4">
                            <div className="demo-tab-content">
                                tab 4
                            </div>
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            )
        }
    }
    `
}