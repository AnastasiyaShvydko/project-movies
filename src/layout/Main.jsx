import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import React from 'react';
import { Search } from "../components/Search";


const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component{



state = {
    movies : [],
    loading: true
  }


//   handleFetchData = async () => {
//     try {
//       const response = await fetch('http://www.omdbapi.com/?apikey=d89f1f95&s=harry potter');
//       const result = await response.json();
//       let array = await result.Search;
//       this.setState({movies : await array})
    
     
//     } catch (err) {
//       console.log('Error')}
    
//   };

 componentDidMount(){
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
    .then((response) => response.json())
    .then((data) => this.setState({ movies: data.Search, loading: false }));
}





search = (title,type)=>{
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}&type=${type}`)
    .then((response) => response.json())
    .then((data) => this.setState({ movies: data.Search,loading: false }));
    //.then((data) => console.log(data))
    //return item
}





    
    
render(){
    const {movies,loading} = this.state
    return (
    
        <main className="conteiner content">

            <Search search={this.search}/>
            {loading ? (
                <Preloader/>
            ) : (
                <Movies movies={movies}/>
                )
            }
    
    
        </main>)
}


}

export {Main}