import React from "react";
import axios from "axios";

class App extends React.Component{ 
    state = {
        music: []
    }

    componentDidMount() {
        
        axios.get("http://www.devcodecampmusiclibrary.com/api/music/").then(res => {
            const music = res.data;
            console.log(music);
            this.setState({music});
        })
    }

   render() {
       return (
           <div>
            <h1>React Music Library!</h1>
            <h2>{this.state.music.data}</h2> 
            
           </div>
       );
   } 
}

export default App;

