import gsap from 'gsap/gsap-core';
import React from 'react'
import { Link } from 'react-router-dom';
import cert1 from './images/ceritificates/Degree.png'
import cert2 from './images/ceritificates/aaps.png'
import cert3 from './images/ceritificates/cot.png'
import cert4 from './images/ceritificates/moe_equ.jpeg'
import cert5 from './images/ceritificates/ons.png'
import cert6 from './images/ceritificates/ttrt.png'
export default class Certificates extends React.Component {
    back_home(){
        gsap.to(".certificates",{top:-1000,duration:1,})
        var s=document.getElementById('profile_home_link');
        setTimeout(()=>{s.click()},1000);
        
    }
    componentDidMount(){
        var delay=.5;
        // title letters
        gsap.from('#cert1',{left:-1000,duration:2,delay:delay})
        gsap.from('#cert2',{left:-1000,duration:1.8,delay:delay})
        gsap.from('#cert3',{left:-1000,duration:1.6,delay:delay})
        gsap.from('#cert4',{left:-1000,duration:1.4,delay:delay})
        gsap.from('#cert5',{left:-1000,duration:1.2,delay:delay})
        gsap.from('#cert6',{left:-1000,duration:1,delay:delay})
        gsap.from('#cert7',{right:-1000,duration:1,delay:delay})
        gsap.from('#cert8',{right:-1000,duration:1.2,delay:delay})
        gsap.from('#cert9',{right:-1000,duration:1.4,delay:delay})
        gsap.from('#cert10',{right:-1000,duration:1.6,delay:delay})
        gsap.from('#cert11',{right:-1000,duration:1.8,delay:delay})
        gsap.from('#cert12',{right:-1000,duration:2,delay:delay})
        // images
        gsap.from('#img1',{left:-1000,duration:1,delay:2})
        gsap.from('#img2',{right:-1000,duration:1,delay:2.2})
        gsap.from('#img3',{left:-1000,duration:1,delay:2.4})
        gsap.from('#img4',{right:-1000,duration:1,delay:2.6})
        gsap.from('#img5',{left:-1000,duration:1,delay:2.8})
        gsap.from('#img6',{right:-1000,duration:1,delay:3})
      

    }
    render(){
    return (
        <div className='certificates'>
            <div className="back-btn" onClick={this.back_home}><i class="fas fa-long-arrow-alt-left">back</i></div>
            <div className='certificates-title'>
                <h1 id='cert1'>C</h1>
                <h1 id='cert2'>E</h1>
                <h1 id='cert3'>R</h1>
                <h1 id='cert4'>T</h1>
                <h1 id='cert5'>I</h1>
                <h1 id='cert6'>F</h1>
                <h1 id='cert7'>I</h1>
                <h1 id='cert8'>C</h1>
                <h1 id='cert9'>A</h1>
                <h1 id='cert10'>T</h1>
                <h1 id='cert11'>E</h1>
                <h1 id='cert12'>S</h1>
            </div>
            <div class="cert-grid-container">
                <div class="grid-item" id='img1'><img src={cert1} alt='christina certificate'></img></div>
                <div class="grid-item" id='img2'><img src={cert2} alt='christina certificate'></img></div>
                <div class="grid-item" id='img3'><img src={cert3} alt='christina certificate'></img></div>
                <div class="grid-item" id='img4'><img src={cert4} alt='christina certificate'></img></div>
                <div class="grid-item" id='img5'><img src={cert5} alt='christina certificate'></img></div>
                <div class="grid-item" id='img6'><img src={cert6} alt='christina certificate'></img></div>
            </div>
            <Link id='profile_home_link' className='hide-D' to='/'></Link>
        </div>
    )
}
}