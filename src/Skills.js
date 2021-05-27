import gsap from 'gsap/gsap-core';
import React from 'react'
import { Link } from 'react-router-dom';
import TypeIt from 'typeit'
import Footer from './Footer';
export default class Skills extends React.Component {

    componentDidMount(){
        gsap.from('.footer',{opacity:0,duration:1,delay:3})
        
        gsap.from(".skills",{top:-1000,duration:1})
        gsap.from(".ski",{top:-200,duration:1,delay:1})
        gsap.from(".lls",{left:-200,duration:1,delay:2})
        // //////////////////
        setTimeout(()=>{this.skills_func()},3000)
        if(window.innerWidth>1000){
        gsap.from(".skill1",{left:-800,duration:.5,delay:4.5})
        gsap.from(".skill2",{left:-800,duration:.5,delay:6})
        gsap.from(".skill3",{left:-800,duration:.5,delay:7.5})
        gsap.from(".skill4",{left:-800,duration:.5,delay:8.5})
        gsap.from(".skill5",{left:-800,duration:.5,delay:10})
        gsap.from(".skill6",{left:-800,duration:.5,delay:11.5})
        gsap.from(".skill7",{left:-800,duration:.5,delay:13})
        gsap.from(".skill8",{left:-800,duration:.5,delay:15})
        gsap.from(".skill9",{left:-800,duration:.5,delay:17})
        gsap.from(".skill10",{left:-800,duration:.5,delay:19}) 
        }else{
            gsap.from(".skill1",{left:-800,duration:.5,delay:1})
            gsap.from(".skill2",{left:-800,duration:.5,delay:1.5})
            gsap.from(".skill3",{left:-800,duration:.5,delay:2})
            gsap.from(".skill4",{left:-800,duration:.5,delay:2.5})
            gsap.from(".skill5",{left:-800,duration:.5,delay:3})
            gsap.from(".skill6",{left:-800,duration:.5,delay:3.5})
            gsap.from(".skill7",{left:-800,duration:.5,delay:4})
            gsap.from(".skill8",{left:-800,duration:.5,delay:4.5})
            gsap.from(".skill9",{left:-800,duration:.5,delay:5})
            gsap.from(".skill10",{left:-800,duration:.5,delay:5.5})
        }    
    }
    skills_func(){
        new TypeIt("#skills_generator", {
            speed: 50,
            loop: false,
            waitUntilVisible: true
          })
            .type("Adaptability").pause(500).delete(12)
            .type("Confidence").pause(500).delete(10)
            .type("Communication").pause(500).delete(13)
            .type("Team Player").pause(500).delete(11)
            .type("Continuous Learner").pause(500).delete(18)
            .type("Imaginative").pause(500).delete(11)
            .type("Administration").pause(500).delete(14)
            .type("Classroom Management").pause(500).delete(20)
            .type("Organizational").pause(500).delete(14)
            .type("Develop Lesson plans").pause(500).delete(20)
            .go();
    }
    back_home(){
        gsap.to('.footer',{opacity:0})
        gsap.to(".skills",{top:-1000,duration:1})
        var s=document.getElementById('profile_home_link');
        setTimeout(()=>{s.click()},1000);
    }
    render(){
    return (
        <div className='skills'>
           <div className="back-btn" onClick={this.back_home}><i class="fas fa-long-arrow-alt-left">back</i></div>

            <div className='left'>
                <h1 className='pro ski'>SKI</h1>
                <h3 className='skills-title-m hide-D'>SKILLS</h3>
                <ul className='skills-ul-m hide-D'>
                    <li className='skill1'>Adaptability</li>
                    <li className='skill2'>Confidence</li>
                    <li className='skill3'>Communication</li>
                    <li className='skill4'>Team Player</li>
                    <li className='skill5'>Continuous Learner</li>
                    <li className='skill6'>Imaginative</li>
                    <li className='skill7'>Administration</li>
                    <li className='skill8'>Classroom Management</li>
                    <li className='skill9'>Organizational</li>
                    <li className='skill10'>Develop Lesson plans</li>
                </ul>
                <h1 id='skills_generator'> </h1>
            </div>
            <div className='right'>
                <h1 className='cation lls'>LLS</h1>
                <ul className='skills-ul'>
                    <li className='skill1'>Adaptability</li>
                    <li className='skill2'>Confidence</li>
                    <li className='skill3'>Communication</li>
                    <li className='skill4'>Team Player</li>
                    <li className='skill5'>Continuous Learner</li>
                    <li className='skill6'>Imaginative</li>
                    <li className='skill7'>Administration</li>
                    <li className='skill8'>Classroom Management</li>
                    <li className='skill9'>Organizational</li>
                    <li className='skill10'>Develop Lesson plans</li>
                </ul>
            </div>
            <Link id='profile_home_link' className='hide-D' to='/'></Link>
            <Footer/>
        </div>
    )
}
}