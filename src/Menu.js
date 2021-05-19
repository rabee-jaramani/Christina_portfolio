import { TweenMax } from 'gsap/all'
import gsap from 'gsap/gsap-core'
import React from 'react'
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
componentDidMount(){
// animate the links
gsap.from(".link1",{left:-1000,duration:1,delay:2})
gsap.from(".link2",{left:-1000,duration:1,delay:2.5})
gsap.from(".link3",{left:-1000,duration:1,delay:3})
gsap.from(".link4",{right:-1000,duration:1,delay:3.5})
gsap.from(".link5",{right:-1000,duration:1,delay:4})
gsap.from(".link6",{right:-1000,duration:1,delay:4.5})
}

// link to linke1
link_clicked(e){
  gsap.to(".link1",{left:-1000,duration:1});
  gsap.to(".link2",{left:-1000,duration:1});
  gsap.to(".link3",{left:-1000,duration:1});
  gsap.to(".link4",{right:-1000,duration:1});
  gsap.to(".link5",{right:-1000,duration:1});
  gsap.to(".link6",{right:-1000,duration:1});
  gsap.to(".circle",{top:-1000,delay:1,duration:1});
// delay the new page
if(e==="profile"){
  let link=document.getElementById("link1");
  setTimeout(()=>{link.click()},1500)
}else
if(e==="education"){
  let link=document.getElementById("link4");
  setTimeout(()=>{link.click()},1500)
}else
if(e==='skills'){
  let link=document.getElementById("link3");
  setTimeout(()=>{link.click()},1500)
}
}


hover_func(e){
    switch(e) {
        case "link1":
          TweenMax.to(document.querySelector(".inner-link1"), 0.5, {css:{width: "100%",borderRadius:"50px"}})
          break;
        case "link2":
            TweenMax.to(document.querySelector(".inner-link2"), 0.5, {css:{width: "100%",borderRadius:"50px"}})
          break;
          case "link3":
          TweenMax.to(document.querySelector(".inner-link3"), 0.5, {css:{width: "100%",borderRadius:"50px"}})
          break;
        case "link4":
            TweenMax.to(document.querySelector(".inner-link4"), 0.5, {css:{width: "100%",borderRadius:"50px"}})
          break;
          case "link5":
          TweenMax.to(document.querySelector(".inner-link5"), 0.5, {css:{width: "100%",borderRadius:"50px"}})
          break;
        case "link6":
            TweenMax.to(document.querySelector(".inner-link6"), 0.5, {css:{width: "100%",borderRadius:"50px"}})
          break;
        default:
      }
}
unhover_func(e){
    switch(e) {
        case "link1":
            TweenMax.to(document.querySelector(".inner-link1"), 0.5, {css:{width: "40%"}});
          break;
        case "link2":
            TweenMax.to(document.querySelector(".inner-link2"), 0.5, {css:{width: "40%"}});
          break;
          case "link3":
            TweenMax.to(document.querySelector(".inner-link3"), 0.5, {css:{width: "40%"}});
          break;
        case "link4":
            TweenMax.to(document.querySelector(".inner-link4"), 0.5, {css:{width: "40%"}});
          break;
          case "link5":
            TweenMax.to(document.querySelector(".inner-link5"), 0.5, {css:{width: "40%"}});
          break;
        case "link6":
            TweenMax.to(document.querySelector(".inner-link6"), 0.5, {css:{width: "40%"}});
          break;
        default:
      }
}

    render(){
    return (
        <div className="menu">
            <div className="link link1"
            onMouseOver={()=>this.hover_func("link1")}
            onMouseOut={()=>this.unhover_func("link1")}
            >
              <div className='link-circle'></div>
              <div className="inner-link inner-link1" onClick={()=>this.link_clicked("profile")}>Profile</div>
            </div>

            <div className="link link2" 
            onMouseOver={()=>this.hover_func("link2")}
            onMouseOut={()=>this.unhover_func("link2")}
            >
                <div className='link-circle'></div>
                <div className="inner-link inner-link2">Experience</div>
            </div>

            <div className="link link3"
            onMouseOver={()=>this.hover_func("link3")}
            onMouseOut={()=>this.unhover_func("link3")}
            >
                <div className='link-circle'></div>
                <div className="inner-link inner-link3" onClick={()=>this.link_clicked("skills")}>Skills</div>

            </div>
            <div className="link link4"
            onMouseOver={()=>this.hover_func("link4")}
            onMouseOut={()=>this.unhover_func("link4")}
            >
                <div className='link-circle'></div>
                <div className="inner-link inner-link4" onClick={()=>this.link_clicked("education")}>Education</div>

            </div>
            <div className="link link5"
               onMouseOver={()=>this.hover_func("link5")}
               onMouseOut={()=>this.unhover_func("link5")}
            >
                <div className='link-circle'></div>
                <div className="inner-link inner-link5">Strength</div>
            </div>
            <div className="link link6"
             onMouseOver={()=>this.hover_func("link6")}
             onMouseOut={()=>this.unhover_func("link6")}
            >
                <div className='link-circle'></div>
                <div className="inner-link inner-link6">Hobbies</div>
            </div>
            {/* LINKS hidden and outside to prevent setTimeout from trigger twice remember */}
            <Link id="link1" to="/profile" className='hide-D'> </Link>
            <Link id="link4" to="/education" className='hide-D'> </Link>
            <Link id="link3" to="/skills" className='hide-D'> </Link>

        </div>
    )
    }
}
