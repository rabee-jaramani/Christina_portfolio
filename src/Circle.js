
import gsap from 'gsap/gsap-core';
import  { TweenMax } from 'gsap/gsap-core'
import React from 'react'
import Contact from './Contact';
import Footer from './Footer';
import Menu from './Menu';
import ChristinaCV from './CV/Christina Curriculum Vitae.pdf'


export default class Circle extends React.Component {
    componentDidMount(){
        TweenMax.from(".circle",{css:{top: -500},delay:.5,duration:2})
        TweenMax.from(".contact-btn",{css:{bottom: -50},delay:1,duration:2})
        gsap.from(".download-cv",{opacity:0,delay:2,duration:2})
        TweenMax.from("#christina",{css:{opacity: 0},delay:3,duration:2})
        TweenMax.from("#teacher",{css:{opacity: 0},delay:3,duration:2})
        gsap.from('.footer',{opacity:0,duration:1,delay:3})
        
    }
    componentWillUnmount(){
        TweenMax.to(".circle",{css:{top: -500},duration:.5})
        gsap.to('.footer',{opacity:0})

    }
    hold(){
        TweenMax.to(".c1 .c2",{css:{animationPlayState: "paused"}})
        TweenMax.to(".c1 .c3",{css:{animationPlayState:"paused"}})
    }
    resume(){
        TweenMax.to(".c2",{css:{animationPlayState:"running"}})
        TweenMax.to(".c3",{css:{animationPlayState:"running"}})
    }
    show_details(){
        document.querySelector(".ul-contact").classList.toggle("show");
        document.querySelector(".background-contact-circle").classList.toggle("white-bg");
        document.querySelector(".me-btn").classList.toggle("show");
        document.querySelector(".contact-btn").classList.toggle("hide");
        document.querySelector('.download-cv').classList.toggle('hide-D')
        
    }
    
    render(){
        return (
            <section className='circle'>
                <div className='my-name-cont'>
                    <div className='my-name'>I am 
                        <span id='christina'> Christina </span>and I am a<span id='teacher'> Teacher</span>
                    </div>
                </div>
                <div className='c1'
                onMouseOver={this.hold}
                onMouseOut={this.resume}>
                     <a href={ChristinaCV} className="download-cv" download="Christina Curriculum Vitae.pdf">
                        MY CV
                    </a>
                    <div className="details-btn contact-btn" onClick={this.show_details}>Contact</div>
                    <div className="details-btn me-btn hide" onClick={this.show_details}>Me</div>
                    <Contact/>
                    <div className='c11'></div>
                    <div className='c2'></div>
                    <div className='c3'></div>
                    
                    <Menu/>
                </div>
                <Footer/>
            </section>
        )
    }
  
}
