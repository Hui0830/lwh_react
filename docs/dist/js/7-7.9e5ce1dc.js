(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{127:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.attributes=void 0,t.default=function(){return u.default.createElement("div",null,u.default.createElement("h3",null,"属性"),u.default.createElement("table",null,u.default.createElement("thead",null,u.default.createElement("tr",null,u.default.createElement("th",null,"参数"),u.default.createElement("th",null,"类型"),u.default.createElement("th",null,"默认值"),u.default.createElement("th",null,"作用"),u.default.createElement("th",null,"其他"))),u.default.createElement("tbody",null,u.default.createElement("tr",null,u.default.createElement("td",null,"meta"),u.default.createElement("td",null,"node/element/string"),u.default.createElement("td",null,"---"),u.default.createElement("td",null,"抽屉内显示和隐藏元素"),u.default.createElement("td",null,"--")),u.default.createElement("tr",null,u.default.createElement("td",null,"name"),u.default.createElement("td",null,"string"),u.default.createElement("td",null,"‘代码’"),u.default.createElement("td",null,"抽屉开关按钮名称"),u.default.createElement("td",null,"--")),u.default.createElement("tr",null,u.default.createElement("td",null,"title"),u.default.createElement("td",null,"string"),u.default.createElement("td",null,"null"),u.default.createElement("td",null,"抽屉模块标题"),u.default.createElement("td",null,"不设置默认为没有标题")),u.default.createElement("tr",null,u.default.createElement("td",null,"discript"),u.default.createElement("td",null,"string"),u.default.createElement("td",null,"null"),u.default.createElement("td",null,"抽屉模块描述、副标题"),u.default.createElement("td",null,"不设置默认为没有")),u.default.createElement("tr",null,u.default.createElement("td",null,"className"),u.default.createElement("td",null,"string"),u.default.createElement("td",null,"' '"),u.default.createElement("td",null,"自定义类名"),u.default.createElement("td",null,"--")),u.default.createElement("tr",null,u.default.createElement("td",null,"children"),u.default.createElement("td",null,"children"),u.default.createElement("td",null,"‘未设置组件内容’"),u.default.createElement("td",null,"抽屉头部显示的内容"),u.default.createElement("td",null,u.default.createElement("code",null,"<Block>...children</Block>"))))))};var a,n=l(1),u=(a=n)&&a.__esModule?a:{default:a};t.attributes={}},32:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(l(1)),n=d(l(37)),u=d(l(127));function d(e){return e&&e.__esModule?e:{default:e}}var r=function(){return a.default.createElement("div",{className:"code-container"},a.default.createElement("p",{className:"code-title"},"这里是代码的展示"),a.default.createElement("code",null,'\n            <Block\n                meta={<Code />}\n                title="组件效果展示"\n                discript="block组件用于文档库代码的演示"\n            >\n                <p>这里是头部主内容，用于展示组件效果</p>\n            </Block>\n            '))};t.default=function(){return a.default.createElement("div",{className:"lwh-block"},a.default.createElement(n.default,{meta:a.default.createElement(r,null),title:"组件效果展示",discript:"block组件用于文档库代码的演示"},a.default.createElement("p",null,"这里是头部主内容，用于展示组件效果")),a.default.createElement(u.default,null))}},37:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(l(39)),n=f(l(44)),u=f(l(45)),d=f(l(46)),r=f(l(47)),m=f(l(1)),c=f(l(0));function f(e){return e&&e.__esModule?e:{default:e}}l(48);var i=function(e){function l(e){(0,n.default)(this,l);var t=(0,d.default)(this,(l.__proto__||(0,a.default)(l)).call(this,e));return t.state={show:!1,metaHeight:0},t.controlShowHandle=function(){t.setState({show:!t.state.show,metaHeight:t.meta.current.offsetHeight})},t.meta=m.default.createRef(),t}return(0,r.default)(l,e),(0,u.default)(l,[{key:"render",value:function(){var e=this.props,t=e.children,l=e.meta,a=e.name,n=e.className,u=e.title,d=e.discript,r=this.state,c=r.show,f=r.metaHeight;return m.default.createElement("div",{className:"lwh-pirate-block "+n},u&&m.default.createElement("h3",null,u),d&&m.default.createElement("p",null,d),m.default.createElement("div",{className:"lwh-pirate-block-container "+n},m.default.createElement("div",{className:"lwh-block-source",ref:this.child},t||"未设置组件内容"),m.default.createElement("div",{className:"lwh-block-meta",style:{height:c?f:0}},m.default.createElement("div",{ref:this.meta},l)),m.default.createElement("div",{className:"lwh-block-control "+(c?"lwh-block-close":""),onClick:this.controlShowHandle},m.default.createElement("span",null,c?"隐藏"+a:"显示"+a))))}}]),l}(m.default.PureComponent);i.propTypes={meta:c.default.oneOfType([c.default.string,c.default.element,c.default.node]),name:c.default.string,title:c.default.string,discript:c.default.string,className:c.default.string},i.defaultProps={meta:m.default.createElement("div",null,"meta"),name:"代码"},t.default=i},48:function(e,t,l){}}]);