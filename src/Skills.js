import gsap from 'gsap/gsap-core';
import React from 'react'
import { Link } from 'react-router-dom';
import TypeIt from 'typeit'
export default class Skills extends React.Component {

    componentDidMount(){
        gsap.from(".skills",{top:-1000,duration:1})
        gsap.from(".ski",{top:-200,duration:1,delay:1})
        gsap.from(".lls",{left:-200,duration:1,delay:2})

        // new TypeIt("#type1", {
        //     speed: 120,
        //     loop: true,
        //     waitUntilVisible: true
        //   })
        //     .type("a FrontEnd Developer", { delay: 400 })
        //     .pause(500)
        //     .delete(9)
        //     .type(" Web Developer", { delay: 400 })
        //     .pause(500)
        //     .delete(14)
        //     .go();
      
    }
    back_home(){
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

            </div>
            <div className='right'>
                <h1 className='cation lls'>LLS</h1>
            </div>
            <Link id='profile_home_link' className='hide-D' to='/'></Link>

        </div>
    )
}
}