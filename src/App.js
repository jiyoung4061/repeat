// // import React from 'react';
// // class App extends React.Component{
// //   state = {
// //     isLoading : 0
// //   }
// //   add=()=>{
// //     this.setState(current=>({isLoading : current.isLoading +1}))
// //   }
// //   minus=()=>{
// //     this.setState(current=>{
// //       return {isLoading : current.isLoading -1}
// //     })
// //   }
// //   render(){
// //     return (
// //       <div>
// //         <h1>The number is {this.state.isLoading}</h1>
// //         <button onClick={this.add}>add</button>      
// //         <button onClick={this.minus}>minus</button>
// //       </div>
// //     )
// //   }
// // }
// // export default App;

// // import React,{useState} from 'react';

// // function App() {
// //   const [isLoading,setisLoading] = useState(0);
// //   const add=()=>{
// //     setisLoading(isLoading + 1);
// //   } 

// //     console.log("rendering");
// //     return (

// //       <div>
// //         <h1>My Number Is : {isLoading}</h1>
// //         <button onClick={add}>add</button>
// //       </div>
// //     )
// // }

// // export default App;

// // import React from "react";

// // class App extends React.Component {
// //   state = {
// //     isLoading: true,
// //     movies: [],
// //   }
// //   componentDidMount(){
// //     setTimeout(()=>{
// //       this.setState(current=>({ isLoading : false}))
// //     },3000)
// //   }
// //   render() {
// //     return (
// //       <div>
// //         <h1>Hello</h1>
// //         <h1>{this.state.isLoading ? "Loading..." : "I'm Ready"}</h1>
// //       </div>
// //     );
// //   }
// // }

// // export default App;

// import React from 'react';
// import PropTypes from 'prop-types';

// const foodILike = [
//   {
//     id:1,
//     name : "kimchi",
//     color : "red",
//     rating : 3,
//   },
//   {
//     id:2,
//     name : "kimbab",
//     color : "black",
//     rating : 9,
//   },
//   {
//     id:3,
//     name : "ramen",
//     color : "orange",
//     rating : 7,
//   },
// ]

// function Food({name, fav}) {
//   return(
//     <div>
//     <h1>I love {name}</h1>
//     <h2>Its color is {fav}</h2>
//     {/* <h3>{score}/10</h3> */}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       {foodILike.map(current => {
//         return <Food key={current.id} name={current.name} fav={current.color} score={current.rating}/>
//       })}
//     </div>
//   );
// }

// export default App;

// import React from "react";

// class App extends React.Component{
//   state = {
//     isLoading : true,
//   }

//   getLoading=()=>{
//     setTimeout(()=>{
//       this.setState(current=>{
//         return {isLoading : false}
//       })
//     },3000);
//   }

//   componentDidMount(){
//     this.getLoading();
//   }
//   render(){
//     return (
//       <div>
//         <h1>{this.state.isLoading?"Loading...":"Ready"}</h1>
//       </div>
//     )
//   }
// }

// export default App;

import React from "react";
import axios from "axios";
import Movies from "./Movies";

class App extends React.Component {

  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const { data:
      { data:
        { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    //console.log(movies);
    this.setState({ movies, isLoading: false });
  }

  // renderMovies = () => {
  //   this.state.
  //   )
  // }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return <section className="container">{isLoading
      ? <div className="Loader">
        <span className="Loader__Text">Loading...</span>
      </div>
      : <div className="movies">
        {movies.map(item => (<Movies
          key={item.id}
          id={item.id}
          year={item.year}
          title={item.title}
          summary={item.summary}
          poster={item.medium_cover_image}
          genres={item.genres}
        />
        ))}
      </div>
    }</section>
  }
}

export default App;