import React,{Component} from 'react';
import {robots} from './robots';
import CardList from './cardlist';
import Searchbox from './searchbox';


class App extends Component{
  constructor(){
    super();
    this.state = {
      robots : [],
      searchField : ''
    }
  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    return res.json();
  })
  .then(users=>{
  this.setState({robots: users})
  })

}
   onSearchChange = (event) => {
     this.setState({searchField:event.target.value});
  }
  render(){
    const filterCopy = this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    if(this.state.robots.length == 0){
      return <h1> Loading .. </h1>
    }
    else {
    return(
      <div className="tc">
        <h1>RoboFriends</h1>
        <Searchbox searchChange = {this.onSearchChange} />
        <CardList robots = {filterCopy} />
      </div>
    )
  }
  }
}

export default App;
