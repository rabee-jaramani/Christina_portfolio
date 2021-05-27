import React from 'react'

export default class Contact extends React.Component {

componentDidMount(){
}
    render(){
    return (
        <div className="background-contact-circle">
        <ul className="ul-contact hide">
            <li><i className="fab fa-cuttlefish"></i>Christina Alida Visagie</li>
            <li><i className="fas fa-briefcase"></i>A Teacher</li>
            <li><i className="fas fa-briefcase"></i>Foundation Phase</li>
            <li className="email"><i className="fas fa-envelope-open-text"></i>visagie.christina@gmail.com</li>
            <li><i className="fas fa-mobile-alt"></i>+971 50 2724 254</li>
            <li><i className="fas fa-map-marker-alt"></i>Al Jurf 2, Ajman, UAE </li>
        </ul>
        </div>
    )
}
}
