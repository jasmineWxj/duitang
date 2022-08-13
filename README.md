# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



什么是异常
是指用户在使用应用时，无法得到预期的结果。不同的异常带来的后果程度不同，轻则引起用户使用不悦，重则导致产品无法使用，从而使用户丧失对产品的认可。
为什么要处理异常

增强用户体验
远程定位问题
无法复现问题，特别是移动端，各种原因，可能是系统版本，机型等等

前端有哪些异常





























异常频率JavaScript 异常（语法错误、代码错误）经常静态资源加载异常（img、js、css）偶尔Ajax 请求异常偶尔promise 异常较少iframe 异常较少
如何捕获异常
try-catch
try-catch 只能捕获同步运行错误，对语法和异步错误却捕获不到。
1、同步运行错误
try {
    kill;
} catch(err) {
    console.error('try: ', err);
}
复制代码
结果：try: ReferenceError: kill is not defined
2、无法捕获语法错误
try {
    let name = '1;
} catch(err) {
    console.error('try: ', err);
}
复制代码
结果：Unterminated string constant
编译器能够阻止运行语法错误。
3、无法捕获异步错误
try {
    setTimeout(() => {
        undefined.map(v => v);
    }, 1000);
} catch(err) {
    console.error('try: ', err);
}
复制代码
结果：Uncaught TypeError: Cannot read property 'map' of undefined
window.onerror
当 JavaScript 运行时错误（包括语法错误）发生时，window 会触发一个 ErrorEvent 接口的 error 事件，并执行 window.onerror() 若该函数返回 true，则阻止执行默认事件处理函数。
1、同步运行错误
/**
* @param {String}  message   错误信息
* @param {String}  source    出错文件
* @param {Number}  lineno    行号
* @param {Number}  colno     列号
* @param {Object}  error     error对象
*/
window.onerror = (message, source, lineno, colno, error) => {
    console.error('捕获异常：', message, source, lineno, colno, error);
    return true;
};

kill;
复制代码
结果：捕获异常： Uncaught ReferenceError: kill is not defined
2、无法捕获语法错误
/**
* @param {String}  message   错误信息
* @param {String}  source    出错文件
* @param {Number}  lineno    行号
* @param {Number}  colno     列号
* @param {Object}  error     error对象
*/
window.onerror = (message, source, lineno, colno, error) => {
    console.error('捕获异常：', message, source, lineno, colno, error);
    return true;
};

let name = '1;
复制代码
结果：Unterminated string constant
编译器能够阻止运行语法错误。
3、异步错误
/**
* @param {String}  message   错误信息
* @param {String}  source    出错文件
* @param {Number}  lineno    行号
* @param {Number}  colno     列号
* @param {Object}  error     error对象
*/
window.onerror = (message, source, lineno, colno, error) => {
    console.error('捕获异常：', message, source, lineno, colno, error);
    return true;
};

setTimeout(() => {
    undefined.map(v => v);
}, 1000);
复制代码
结果：捕获异常： Uncaught TypeError: Cannot read property 'map' of undefined`
window.addEventListener('error')
当一项资源（如 <img> 或 <script> ）加载失败，加载资源的元素会触发一个 Event 接口的 error 事件，并执行该元素上的 onerror() 处理函数。这些 error 事件不会向上冒泡到 window，不过（至少在 Firefox 中）能被单一的 window.addEventListener 捕获。
<script>
window.addEventListener('error', (err) => {
    console.error('捕获异常：', err);
}, true);
</script>
<img src="./test.jpg" />
复制代码
结果：捕获异常：Event {isTrusted: true, type: "error", target: img, currentTarget: Window, eventPhase: 1, …}
window.addEventListener('unhandledrejection')
当 Promise 被 reject 且没有 reject 处理器的时候，会触发 unhandledrejection 事件；这可能发生在 window 下，但也可能发生在 Worker 中。 这对于调试回退错误处理非常有用。
window.addEventListener("unhandledrejection", (err) => {
    err.preventDefault();
    console.error('捕获异常：', err);
});

Promise.reject('promise');
复制代码
结果：捕获异常：PromiseRejectionEvent {isTrusted: true, promise: Promise, reason: "promise", type: "unhandledrejection", target: Window, …}
Vue
Vue.config.errorHandler = (err, vm, info) => {
  console.error('捕获异常：', err, vm, info);
}
复制代码
React
React16，提供了一个内置函数 componentDidCatch ，使用它可以非常简单的获取到 React 下的错误信息。
componentDidCatch(error, info) {
    console.error('捕获异常：', error, info);
}
复制代码
但是，推荐ErrorBoundary
用户界面中的 JavaScript 错误不应破坏整个应用程序。为了为 React 用户解决此问题，React16 引入了“错误边界”的新概念。
新建 ErrorBoundary.jsx 组件：
import React from 'react';
import { Result, Button } from 'antd';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, info: '' };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        this.setState({
            info: error + ''
        });
    }

    render() {
        if (this.state.hasError) {
            // 你可以渲染任何自定义的降级 UI
            return (
                <Result
                    status="500"
                    title="500"
                    subTitle={this.state.info}
                    extra={<Button type="primary">Report feedback</Button>}
                />
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
复制代码
使用：
<ErrorBoundary>
    <App />
</ErrorBoundary>
复制代码
注意
错误边界不会捕获以下方面的错误：

事件处理程序
异步代码（例如 setTimeout 或 requestAnimationFrame 回调）
服务器端渲染
在错误边界本身（而不是其子级）中引发的错误

iframe
由于浏览器设置的“同源策略”，无法非常优雅的处理 iframe 异常，除了基本属性（例如其宽度和高度）之外，无法从 iframe 获得很多信息。
<script>
    document.getElementById("myiframe").onload = () => {
        const self = document.getElementById('myiframe');

        try {
            (self.contentWindow || self.contentDocument).location.href;
        } catch(err) {
            console.log('捕获异常：' + err);
        }
    };
</script>

<iframe id="myiframe" src="https://nibuzhidao.com" frameBorder="0" />
复制代码
Sentry
业界非常优秀的一款监控异常的产品，作者也是用的这款，文档齐全。
需要上报哪些信息

错误 id
用户 id
用户名
用户 IP
设备
错误信息
游览器
系统版本
应用版本
机型
时间戳
异常级别（error、warning、info）

异常上报
1、Ajax 发送数据
2、动态创建 img 标签
如果异常数据量大，导致服务器负载高，调整发送频率（可以考虑把异常信息存储在客户端，设定时间阀值，进行上报）或设置采集率（采集率应该通过实际情况来设定，随机数，或者某些用户特征都是不错的选择）。
流程图

参考资料

如何优雅处理前端异常？
React
MDN
Vue

博客
欢迎关注我的博客.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700} 分类： 前端 标签： JavaScript 文章被收录于专栏：  
      江歌闲谈
     
      聊聊技术，谈谈人生，谈谈理想。
        
    关注专栏
    
      安装掘金浏览器插件
     多内容聚合浏览、多引擎快捷搜索、多工具便捷提效、多模式随心畅享，你想要的，这里都有！ 前往安装  评论  表情 图片⌘ + Enter发表评论  
      全部评论 2
      
          最新
         
          最热
             
        删除
         
    风云小小生
        
          前端，h5游戏开发
         
          2年前
         对于try-catch我一般，是在catch中使用console.error,将错误打印，全局用window.addEventListener('error')监听，这样，try-catch中就不用处理上报错误了 
        展开
       
        收起
        
          1
         
          回复
             
          54
          
          2
          已收藏  相关推荐   
        杨成功
       3月前 
        JavaScript
      
        架构
           为什么前端不能没有监控系统？ 本文分享为什么一个小厂也要搞前端监控系统，以及为什么选择自建而不是用第三方平台，还有最终的效果怎么样？  9911  
            145
            
            25
                 
        程序员追风
       1月前 
        后端
      
        Java
      
        Spring Boot
           Spring Boot + WebSocket 实时监控异常 最近做了一个需求，消防的设备巡检，如果巡检发现异常，通过手机端提交，后台的实时监控页面实时获取到该设备的信息及位置，然后安排员工去处理。  5847  
            46
            
            4
                 
        南玖
       5月前 
        JavaScript
      
        前端
           为什么大厂前端监控都在用GIF做埋点？ 一般来讲一个成熟的产品，运营与产品团队需要关注用户在产品内的行为记录，通过用户的行为记录来优化产品，研发与测试团队则需要关注产品的性能以及异常，确保产品的性能体验以及安全迭代。  5.0w  
            774
            
            89
                 
        摸鱼的春哥
       6月前 
        前端
      
        JavaScript
           2022，前端的天🌦️要怎么变？ 2022的前端风向是怎样的？🌦️ 什么技术会流行？什么方向值得学习？R家还是V家？该学第二语言吗？快来看看！  14.6w  
            1449
            
            645
                 
        vortesnail
       6月前 
        前端
      
        面试
           做了一份前端面试复习计划，保熟～ 前言 以前我在掘金上看到面试贴就直接刷掉的，从不会多看一眼，直到去年 9 月份我开始准备面试时，才发现很多面试经验贴特别有用，看这些帖子（我不敢称之为文章，怕被杠）的过程中对我的复习思维形成影响很大，  30.0w  
            6133
            
            332
                 
        binbinsilk
       4年前 
        前端
           

作者：B站_江辰
链接：https://juejin.cn/post/6846687589592743943
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
