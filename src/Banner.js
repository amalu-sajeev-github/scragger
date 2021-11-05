import React from "react";
import './Banner.css';
import whatsapp from './images/whatsapp-w.png';

class Banner extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: '', count: 0};
    }
    componentDidMount(){
        this.timerId = setInterval(() =>{
            this.tik();
        }, 200);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    tik(){
        let str = 'we bring style into you';
        let {data, count} = this.state;
        this.setState({data: data+str.charAt(count)});
        this.setState({count: (count < str.length)? count+1: this.componentWillUnmount()});
    }
    render(){
        return (
        <div className="banner">
            <h1>scragger modelling company</h1>
            <div>
                <h4>&nbsp;{this.state.data}</h4>
                <a href='#' id='waBtn'>
                    <img src={whatsapp} />
                    connect now
                </a>
            </div>
            <div className='figContain'>
                <figure id='lfig'></figure>
                <figure id='rfig'></figure>
            </div>
        </div>
        );
    }
}

export default Banner;