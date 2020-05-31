import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfile from './SocialProfiles';
import Profile from './assets/profile.jpg';

/* class RegularClass {}
class ComponentClass extends Component{}

const regularClass = new RegularClass;
const componentClass = new ComponentClass;

console.log('regularClass', regularClass);
console.log('componentClass', componentClass); */

class App extends Component {
    state = { displayBio : false};

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }

    render () {
        /* const bio = this.state.displayBio ? (
            <div>
                <p> I am living in Mysore. </p>
                <p> I love coding, I love java and React.js is an awesome language</p>
                <p> Apart from coding I love Music</p>
            </div>
        ) : null ; */
        return (
            <div>
                <img src={Profile} alt='profile' className='profile'/>
                <h1> Hi my name is Kiran!</h1>
                <p> I am a Sernior Software Engineer</p>
                <p> I want to lear new things and enhance my skill set</p>
                {
                    this.state.displayBio ? (
                    <div>
                        <p> I am living in Mysore. </p>
                        <p> I love coding, I love java and React.js is an awesome language</p>
                        <p> Apart from coding I love Music</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>
                    ) : ( <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div> 
                    )    
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfile />
            </div>
        )
    }
}

export default App;