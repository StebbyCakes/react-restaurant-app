import { Component } from 'react';

class Item extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      price:'',
      description: '',
      url:'',
    }
  this.handleClick = this.handleClick.bind(this);
  }
  handleClick(food){
    this.props.addToOrder(food)
  }
  render(){
    const theMenu = this.props.menuitem.map((foodItems, index) => <li className="list-group-item col-12 col-md-4 list-style" key={index}>{foodItems.name}<img className="foodimg"src={foodItems.url} alt='#'/><p>{foodItems.descripion}</p><button className="btn btn-success"type="button" onClick={() => this.handleClick(foodItems)}>${foodItems.price}</button></li>);
    return(
  <ul className="list-group">
    {theMenu}
  </ul>
    )
  }
}
export default Item;
