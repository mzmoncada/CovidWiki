import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/NavbarV2";
import Section from "./Components/Section";
import text0 from "./Section0";
import text1 from "./Section1";
import text2 from "./Section2";
import text3 from "./Section3";
import text4 from "./Section4";
import text5 from "./Section5";

//Firebase Setup - for saving the state of things
//import {base} from './base' ; throwing error 

//Graphical Content
import virus_image from "./images/1_virus.png"
import prevention from "./images/prevention.png"

//Not working: throwing TypeError
//import ReactSoundcloud from '../node_modules/react-soundcloud-embed';

import "../node_modules/video-react/dist/video-react.css"; // import css
import { Player } from 'video-react';

//Import the React Youtube Playlist component
//import '../node_modules/react-youtube-playlist/dist/styles';
import YouTubePlaylist from 'react-youtube-playlist';
//import 'react-youtube-playlist/dist/styles'

//Import Iframe
import Iframe from 'react-iframe'

//<Navbar />
//React.render(<ReactSoundcloud url="https://soundcloud.com/icebound/dusty-breaks-at-the-bottom-of-the-random-crates"/>, document.getElementById('ReactSoundcloud'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="/css/video-react.css"/>  
        <Navbar2/>
        <Section
          title="Our Mission"
            subtitle={text0}
            dark={false}
            id="section1"
        />
        <Section
          title="1. Live Counters - Keep Up to Date"
          subtitle={text2}
          dark={true}
          id="section2"
        />
        <Iframe url="https://ourworldindata.org/grapher/total-cases-covid-19" 
        width= "100%" 
        height= "600px" 
        border= "0px none"/>
        <Iframe url="https://ourworldindata.org/grapher/total-deaths-covid-19" 
        width= "100%"
        height= "600px"
        border= "0px none"/>
        <Section
          title="2. What is COVID-19?"
            subtitle={text1}
            dark={true}
            id="section1"
        />
        <img src={virus_image} alt= "" />
        <Iframe 
        src="https://www.youtube.com/embed/Trt7VIMV7jU?start=3"
        width="100%" 
        height="315"  
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        />
        //Data for deaths; will be abstracted into strip that can be expanded into full embed
        //Can keep the strip at the top or allow user to hide it off to the side 
        <Iframe url="https://www.youtube.com/embed/videoseries?list=PLTnxbs4nbJZWSkjZe1hIUERROsnfwbdNP"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/> 
        <Section
          title="3. Where are we in the curve?"
          subtitle={text3}
          dark={true}
          id="section3"
        />
        <Section
          title="4. How do I prevent myself from getting COVID-19?"
          subtitle={text4}
          dark={false}
          id="section4"
        />
        <img src={prevention} alt= "" />
        <Iframe url="https://www.youtube.com/embed/xMwezeP4ZK8?start=4"
        width= "100%" 
        height= "600px" 
        border= "0px none"/>
        <Section
          title="5. What are we doing to cure it?"
          subtitle={text5}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
