import { Component } from 'react';
import MenuList from "./menulist"
import Order from "./order"
import './App.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuitem: [],
            ordereditems: [],
            display: false,

        }
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

    }
    componentDidMount() {
        const menuitem = [{
            name: 'Spicy Sausage Pizza',
            price: "13.99",
            value: 13.99,
            descripion: 'Italian sausage, green peppers, onions drizzled with homemade hot sauce.',
            url: 'https://www.simplyrecipes.com/thmb/r2lwCUjBw1ZCao-cEAFQy94XBGw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__06__Spicy-Sausage-Pizza-LEAD-01-d2160227397b48139cc8bd24abdae8e2.jpg',

        },
        {
            name: 'Meat Lovers Pizza',
            price: "14.99",
            value: 14.99,
            descripion: 'A meat lovers dream with pepperoni, sausage, bacon, and ground beef.',
            url: 'https://www.thespruceeats.com/thmb/WqiUDFgIpF1x-SD9E7zVUbKcll4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/aqIMG_4568fhor-0b89dc5c8c494ee9828ed29805791c5a.jpg',

        },
        {
            name: 'Pepperoni Pizza',
            price: "10.99",
            value: 10.99,
            descripion: 'A delcious New-York-Style pizza. Our specialty!',
            url: 'https://thumbs.dreamstime.com/b/new-york-style-pizza-cheese-salami-american-food-slices-154094636.jpg',

        },
        {
            name: 'Vegan Pizza',
            price: "8.99",
            value: 8.99,
            descripion: 'A meat lovers dissapointment. Made with every vegetable in our garden and with gluten free bread.',
            url: 'https://cdn.loveandlemons.com/wp-content/uploads/2018/09/vegan-pizza.jpg',

        },
        {
            name: 'Chicken Wings',
            price: "7.99",
            value: 7.99,
            descripion: 'Our wings are un-breaded chicken wings, fried then tossed in your choice of sauce, served with celery and blue cheese.',
            url: 'https://www.thechunkychef.com/wp-content/uploads/2017/11/Slow-Cooker-Honey-Buffalo-Wings-7.jpg',
            // addMenu: this.state.change
        },
        {
            name: 'Spaghetti Bolognese',
            price: "9.99",
            value: 9.99,
            descripion: 'Our best ever spaghetti bolognese is super easy and a true Italian classic with a meaty, chilli sauce.',
            url: 'https://plantbasedmatters.net/wp-content/uploads/2019/09/Spaghetti-Bolognese-1-e1569338673314.jpeg',

        },
        {
            name: 'Bread Sticks',
            price: "5.99",
            value: 5.99,
            descripion: 'A side everyone can agree on! Get these cheese sticks sprinkled with flavorful Italian seasoning.',
            url: 'https://www.dvo.com/link/0720_232532456.jpg',

        },
        ];
        this.setState({ menuitem });
    }

    addToOrder(item) {
        const order = [...this.state.ordereditems, item];
        this.setState({ ordereditems: order });
    }
    deleteItem(ordereditem) {
        const order = [...this.state.ordereditems];
        const index = order.indexOf(ordereditem);
        order.splice(index, 1);
        this.setState({ ordereditems: order });
    }

    render() {
        return (
            <>
                <div className="title">Vic's Pizza</div>
                <div className="container">
                    <div className="col-12 right-side">
                        <h5>Menu</h5>
                        <MenuList menuitem={this.state.menuitem} addToOrder={this.addToOrder}></MenuList>
                    </div>
                    <div className="the_order col-12 right-side">
                        <h5>Order</h5>
                        <Order order={this.state.ordereditems} deleteItem={this.deleteItem}/>
                    </div>
                </div>
            </>
        )
    }
  }

export default Menu;
