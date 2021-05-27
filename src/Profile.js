import gsap from 'gsap/gsap-core'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import img from './images/english_white.jpg'

export default class Profile extends React.Component {

    componentDidMount(){
        gsap.from('.footer',{opacity:0,duration:1,delay:3})
       
        gsap.from(".profile",{top:-1000,duration:1})
        gsap.from(".pro",{top:-200,duration:1,delay:1})
        gsap.from(".file",{left:-200,duration:1,delay:2})
        gsap.from(".image-profile",{left:-1000,duration:1,delay:2.5})
        if(window.innerWidth>1000){
        gsap.from(".element1",{left:-1000,duration:1.7,delay:2.5})
        gsap.from(".element2",{left:-1000,duration:1.9,delay:2.5})
        gsap.from(".element3",{left:-1000,duration:2.1,delay:2.5})
        gsap.from(".element4",{left:-1000,duration:2.3,delay:2.5})
        gsap.from(".element5",{left:-1000,duration:2.5,delay:2.5})
        gsap.from(".element6",{left:-1000,duration:2.7,delay:2.5})
        gsap.from(".element7",{left:-1000,duration:2.9,delay:2.5})
        gsap.from(".element8",{left:-1000,duration:3.1,delay:2.5})
        gsap.from(".element9",{left:-1000,duration:3.3,delay:2.5})
        gsap.from(".element10",{left:-1000,duration:3.5,delay:2.5})
        gsap.from(".element11",{left:-1000,duration:3.7,delay:2.5})
        }else{
            gsap.from(".element1",{left:-1000,duration:1.7})
            gsap.from(".element2",{left:-1000,duration:1.9})
            gsap.from(".element3",{left:-1000,duration:2.1})
            gsap.from(".element4",{left:-1000,duration:2.3})
            gsap.from(".element5",{left:-1000,duration:2.5})
            gsap.from(".element6",{left:-1000,duration:2.7})
            gsap.from(".element7",{left:-1000,duration:2.9})
            gsap.from(".element8",{left:-1000,duration:3.1})
            gsap.from(".element9",{left:-1000,duration:3.3})
            gsap.from(".element10",{left:-1000,duration:3.5})
            gsap.from(".element11",{left:-1000,duration:3.7})
        }
        
    }
    back_home(){ 
        gsap.to('.footer',{opacity:0})
        gsap.to(".profile",{top:-1000,duration:1})
        var s=document.getElementById('profile_home_link');
        setTimeout(()=>{s.click()},1000);
    }
    render(){
    return (
        <div className='profile'>
           <div className="back-btn" onClick={this.back_home}><i class="fas fa-long-arrow-alt-left">back</i></div>

           <div className='about-me-profile'>
               <div className='left' id='profile-left'>
                <h1 className='pro'>PRO</h1>
                <h3 className='profile-title hide-D'>PROFILE</h3>

                <div className='text'>
                        <p className='element1'>I have been a General Primary Teacher for the past 6 years,
                    working as a KG Homeroom teacher for 2 years and 6 months in the UAE,
                    Grade 3 teacher for 2 years and 8 months and 1 year as a kindergarten teacher in Taiwan.
                    <hr className='element2'/>
                    </p>
                    
                    <p className='element3'>
                        I have worked in schools with different cultures and socio-economic backgrounds,
                        both in South Africa and in Taiwan.
                    <hr className='element4'/>
                    </p>
                    
                    <p className='element5'>
                        Aside from teaching I have been a member of a range of committees that organized events and activities 
                        including plays, class excursions, prize giving evenings, spelling competitions, cross-country and 
                        athletics events.
                    <hr className='element6'/>
                    </p>
                    
                    <p className='element7'>
                        I have been grade head of my grade for a year and I am involved with special needs children.  
                    <hr className='element8'/>
                    </p>
                    
                    <p className='element9'>
                        I am in my sixth year of teaching and enjoying every minute of it.
                        Every opportunity to guide a learner along his/her educational path is a challenge I look forward to.
                        I am very passionate about making a difference in children's lives, not only in the classroom but also
                        in their everyday lives. I like to plan ahead so I can be well prepared.
                        <hr className='element10'/>
                    </p>
                    
                    <p className='element11'>
                        I get along easily with other
                        teachers and work well together in groups. The child always comes first and I just want to give the best
                        for every learner in my class or in my team. I am willing to give my 110%.
                    </p>

                    </div>
                </div>
                <div className='profile-img'>
                <h1 className='file'>FILE</h1>

                    <img className='image-profile' src={img} alt='english2'></img>
                </div>
            </div>
            <Link id='profile_home_link' className='hide-D' to='/'></Link>
            <Footer/>
        </div>
    )
}
}
