import gsap from 'gsap/gsap-core';
import React from 'react'
import { Link } from 'react-router-dom';
import img1 from './images/english_white.jpg'

export default class Education extends React.Component {
    back_home(){
        gsap.to(".education",{top:-1000,duration:1,})
        var s=document.getElementById('profile_home_link');
        setTimeout(()=>{s.click()},1000);
        
    }
    componentDidMount(){
        gsap.from(".education",{top:-1000,duration:1,})
        gsap.from(".edu",{top:-200,duration:1,delay:1})
        gsap.from(".cation",{left:-400,duration:1,delay:2})
        gsap.from(".image-education",{left:-1000,duration:1,delay:2.5})
        gsap.from(".element0",{left:-1000,duration:1.5,delay:2.5})
        gsap.from(".element01",{left:-1000,duration:1.7,delay:2.5})
        gsap.from(".element02",{left:-1000,duration:1.9,delay:2.5})
        gsap.from(".element03",{left:-1000,duration:2.1,delay:2.5})
        gsap.from(".element04",{left:-1000,duration:2.3,delay:2.5})
        gsap.from(".element05",{left:-1000,duration:2.5,delay:2.5})
        gsap.from(".element06",{left:-1000,duration:2.7,delay:2.5})
        gsap.from(".element07",{left:-1000,duration:2.9,delay:2.5})
        gsap.from(".element1",{left:-1000,duration:3.1,delay:2.5})
        gsap.from(".element2",{left:-1000,duration:3.3,delay:2.5})
        gsap.from(".element3",{left:-1000,duration:3.5,delay:2.5})
        gsap.from(".element4",{left:-1000,duration:3.7,delay:2.5})
        gsap.from(".element5",{left:-1000,duration:3.9,delay:2.5})
        gsap.from(".element6",{left:-1000,duration:4.1,delay:2.5})
        gsap.from(".element7",{left:-1000,duration:4.3,delay:2.5})
        gsap.from(".element8",{left:-1000,duration:4.5,delay:2.5})
        gsap.from(".element9",{left:-1000,duration:4.7,delay:2.5})
        gsap.from(".element10",{left:-1000,duration:4.9,delay:2.5})
       
    }
    render(){
    return (
        <div className='education'>
           <div className="back-btn" onClick={this.back_home}><i class="fas fa-long-arrow-alt-left">back</i></div>

            <div className='left'>
                {/* /////////////// */}
                <h1 className='edu'>EDU</h1>
                <h4 className='edu-m hide-D'>EDUCATION</h4>
                <div className="sections">
                <div className='education-section'>
                    <p className='date element0'>Jan 2011– Dec 2014</p>
                        <h4 className='edu-title element01'>Bachelor of Education in General Education 
                            (Bed (GenED)), Cape Peninsula University of Technology (CPUT) Wellington Campus 
                        </h4>
                        <ul>
                            <li className='element02'>Grade R – 3</li>
                            <li className='element03'>Foundation phase Mathematics</li>
                            <li className='element04'>Foundation phase Afrikaans</li>
                            <li className='element05'>Foundation phase English</li>
                            <li className='element06'>Foundation phase Life Orientation</li>
                        </ul>
                        <hr className='element07'/>
                </div>
                {/* /////////////////// */}
                {/* /////////////// */}
                <div className='education-section'>
                    <p className='date element1'>Jan 2005 – Dec 2009</p>
                        <h4 className='edu-title element2'>Senior Certificate (Grade 12) with endorsement
		               Calvinia High School, South Africa 
                        </h4>
                        <ul>
                            <li className='element3'>Afrikaans Language</li>
                            <li className='element4'>English First Additional Language</li>
                            <li className='element5'>Mathematics</li>
                            <li className='element6'>Life Orientation</li>
                            <li className='element7'>Tourism</li>
                            <li className='element8'>Geography</li>
                            <li className='element9'>Life Sciences</li>
                        </ul>
                        <hr className='element10'/>
                </div>
                {/* /////////////////// */}
                </div>
            </div>
            <div className='right'>
                <h1 className='cation'>CATION</h1>
                <img className='image-education' src={img1}></img>
            </div>
            <Link id='profile_home_link' className='hide-D' to='/'></Link>

        </div>
    )
}
}