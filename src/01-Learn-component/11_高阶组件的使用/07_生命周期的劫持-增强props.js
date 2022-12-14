import React,{ PureComponent} from "react";
function withRenderTime(WrappedComponent){
    return class extends PureComponent{
        // 即将渲染获取一个时间 beginTime
        UNSAFE_componentWillMount(){
            this.beginTime = Date.now()
        }
           // 渲染完成在获取一个时间 endTime
    componentDidMount(){
        this.endTime = Date.now();
        const interval = this.endTime - this.beginTime;
        console.log(`${WrappedComponent.name}渲染时间:${interval}`);
    };
    render(){
        return <WrappedComponent {...this.props}/>
    }
 
    };
 
}


class Home extends PureComponent{
    render(){
        return(
            <div>
                <h2>Home</h2>
            </div>
        )
    }
}
class About extends PureComponent{
    render(){
        return(
            <div>
                <h2>About</h2>
            </div>
        )
    }
}
 const TimeHome = withRenderTime(Home)
 const TimeAbout = withRenderTime(About)
export default class App extends PureComponent{
    render()
    {
        return (
            <div>
              <TimeHome />
              <TimeAbout />
            </div>
        )
    }
}