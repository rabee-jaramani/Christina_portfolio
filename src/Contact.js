import React from 'react'

export default class Contact extends React.Component {

componentDidMount(){
    // console.log(window.innerWidth)
    // if(window.innerWidth>1099){
    //     TweenMax.to(".contact",{css:{width:300,left:"12%",display:"block"},duration:1,delay:2})
    // }else
    // if(window.innerWidth>1099 && window.innerWidth<1250){
    //     TweenMax.to(".contact",{css:{width:300,left:"15%",display:"block"},duration:1,delay:2})
    // }
    // else{
    //     TweenMax.to(".contact",{css:{height:100,top:"10%",left:"51.5%",display:"block"},duration:1,delay:3})
    // }
}
    render(){
    return (
        <div className="background-contact-circle">
        <ul className="ul-contact hide">
            <li><i className="fab fa-cuttlefish"></i>Christina Alida Visagie</li>
            <li><i className="fas fa-briefcase"></i>An English Teacher</li>
            <li><i className="fas fa-briefcase"></i>Foundation Phase</li>
            <li className="email"><i className="fas fa-envelope-open-text"></i>visagie.christina@gmail.com</li>
            <li><i className="fas fa-mobile-alt"></i>+971 50 2724 254</li>
            <li><i className="fas fa-map-marker-alt"></i>Al Jurf 2, Ajman, UAE </li>
        </ul>
        </div>
    )
}
}
