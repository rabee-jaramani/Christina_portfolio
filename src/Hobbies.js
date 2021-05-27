import gsap from 'gsap/gsap-core';
import React from 'react'
import { Link } from 'react-router-dom';
import netball1 from './images/netball1.png'
import netball2 from './images/netball2.png'
import netball3 from './images/netball3.png'
import netball4 from './images/netball4.png'


export default class Hobbies extends React.Component {
    back_home(){
        gsap.to(".hobbies",{top:-1000,duration:1,})
        var s=document.getElementById('profile_home_link');
        setTimeout(()=>{s.click()},1000);
    }
componentDidMount(){
    gsap.from('#h',{left:-2000,duration:1})
    gsap.from('#o',{right:-2000,duration:1,delay:0.2})
    gsap.from('#b1',{left:-2000,duration:1,delay:0.4})
    gsap.from('#b2',{right:-2000,duration:1,delay:0.6})
    gsap.from('#i',{left:-2000,duration:1,delay:0.8})
    gsap.from('#e',{right:-2000,duration:1,delay:1})
    gsap.from('#s',{left:-2000,duration:1,delay:1.2})
    setTimeout(()=>{document.querySelector('.netball').classList.remove('hide')},1400)
    
    var netball1=gsap.to('.netball1',{opacity:0,duration:2,delay:1.2})
    var netball2=gsap.to('.netball2',{opacity:0,duration:2,delay:1.4})
    var netball3=gsap.to('.netball3',{opacity:0,duration:2,delay:1.6})
    var netball4=gsap.to('.netball4',{opacity:0,duration:2,delay:1.8})
    netball1.repeat(Infinity)
    netball2.repeat(Infinity)
    netball3.repeat(Infinity)
    netball4.repeat(Infinity)


}
    render() {
        return (
            <div className='hobbies'>
                <div className="back-btn" onClick={this.back_home}><i class="fas fa-long-arrow-alt-left">back</i></div>
                <h1 className='hobbies-title'>
                    <span id='h'>H</span>
                    <span id='o'>O</span>
                    <span id='b1'>B</span>
                    <span id='b2'>B</span>
                    <span id='i'>I</span>
                    <span id='e'>E</span>
                    <span id='s'>S</span>
                </h1>    
                <div className="netball hide">
                    <h3 className='netball-title'>NETBALL</h3>
                    <img src={netball1} className='netball1 ' alt='netball'/>
                    <img src={netball2} className='netball2 ' alt='netball'/>
                    <img src={netball3} className='netball3 ' alt='netball'/>
                    <img src={netball4} className='netball4 ' alt='netball'/>
                </div>

            <Link id='profile_home_link' className='hide-D' to='/'></Link>
            </div>
        )
    }
}
