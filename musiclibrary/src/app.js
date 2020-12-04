import React from "react";
import axios from "axios";

const api = axios.create({
    baseURL: "http://www.devcodecampmusiclibrary.com/api/music"
})

//Class Component structure #3 ------------
class App extends React.Component{ 

    constructor() {
        
        super();
        api.get("http://www.devcodecampmusiclibrary.com/api/music/2").then(res => {
            console.log(res.data);
        })
    }

   render() {
       return (
           

            <h1>Music Library With React</h1>
            //render table componenet in here
       );
   } 
}

export default App;





// Class component structure #2 --------------
// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {

//         }
//     }
// }
 
//  export default App;


// Class Component #1 ------------
// class App extends React.Component{
//     render() {
//         return (
//              <h1>Music Library With React</h1>
//         );
//     } 
//  }
 
//  export default App;
