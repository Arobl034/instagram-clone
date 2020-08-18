import React from 'react';
import './App.css';
import Post from './Post'


function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
        className="app__headerImage"
        src="https://img.static-rmg.be/a/view/q75/w/h/1632014/logo-instagram.png"
        alt=""
        />
      </div>

      <h1>AR305moments on a Roll To create Instagram-Clone with React  </h1>
      <Post username="cleverqazi" caption="where I'm from?" imageUrl="https://s3.amazonaws.com/freecodecamp/freecodecamp-square-logo-large.jpg"/>
      <Post username="ar305" caption="project rockin" imageUrl="https://assets.wordpress.envato-static.com/uploads/2016/08/21-scroll-to-animate-drawing-head-svg.jpg"/>
      <Post username="downtown" caption="location please" imageUrl="https://designwebkit.com/wp-content/uploads/2018/07/svg-animation-main.jpg"/>
      

    
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default App;
