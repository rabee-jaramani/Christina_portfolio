import gsap from 'gsap/gsap-core';
import React from 'react'
import { Link } from 'react-router-dom';

export default class References extends React.Component {
    back_home(){
        gsap.to(".references",{top:-1000,duration:1,})
        var s=document.getElementById('profile_home_link');
        setTimeout(()=>{s.click()},1000);
    }
    componentDidMount(){
        gsap.from(".refer-title",{top:-1000,duration:1})
        gsap.from(".reference",{top:-1000,duration:1,delay:1,})

    }

    render(){

    return (
        <div className='references'>
            <div className="back-btn" onClick={this.back_home}><i class="fas fa-long-arrow-alt-left">back</i></div>
            <h1 className='refer-title'>REFERENCES</h1>
            <div className='reference'>
                <ul>
                    <li>School: Ajman American Private School, UAE</li>
                    <li>Contact name: Ms. R. Jeftha</li>
                    <li>Grade Level Leader (GLL)</li>
                    <li>Number: +971 54 755 3756</li>
                    <li>Email: ruth.isabel@ajmanamericanschool.com </li>
                    <br/>
                    <li>School: Ajman American Private School, UAE</li>
                    <li>Contact name: Ms. Nicola</li>
                    <li>Head of Department (Kindergarten)</li>
                    <li>Number: +971 50 185 9773</li>
                    <li>Email: nicola.east@ajmanamericanschool.com </li>
                    <br/>
                    <li>School: Ajman American Private School, UAE</li>
                    <li>Contact name: M. T.M. Harness</li>
                    <li>Head of Department (Kindergarten)</li>
                    <li>Number: +971 56 464 9760</li>
                    <li>Email: tinamharness@gmail.com </li>
                    <br/>
                </ul>
            </div>


            <Link id='profile_home_link' className='hide-D' to='/'></Link>
        </div>
    )
}
}