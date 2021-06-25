import { Component } from 'react';

class OrderItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      change:'',
    }
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event){
  this.setState({[event.target.name]: event.target.value});
  }
  render(){
    return(
    <li className="list-group-item col-8 col-md-6 list-style">{this.props.orderItem.name}
    <p className='desc' src={this.props.orderItem.description}></p>
    <p>{this.props.orderItem.descripion}</p>
    <button className="del-btn"type="button" onClick={()=> this.props.deleteItem(this.props.orderItem)}>DELETE</button>
    </li>
    )
  }
}



function Order(props) {

    const order = props.order.map((orderItem, index) =>
    <OrderItem key={index} orderItem={orderItem} deleteItem={props.deleteItem}/>)
    const subtotal = props.order.reduce((total, order) => total + order.value, 0);
    return(
      <div>
        ${subtotal}
        {order}
        <button onClick ={() => {const {newOrder} = props; localStorage.setItem('order', order);}}>Save Order</button>
     </div>
    )

}
export default Order;
