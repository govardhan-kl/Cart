import React from 'react';

// this is class based component
class CartItem extends React.Component{
    constructor (){
        super(); // this is to call the super constructor
        this.state = { // adding state, it is used to store local data for that component.
            price: 999,
            title: "Mob Phone",
            qty: 1,
            img: " "
        }
        // this.testing()
    }

    testing (){
        const promise = new Promise((res,rej)=>{
            setTimeout(()=>{
                return res('done')
            },5000)
        })
        promise.then(()=>{
            //setState acts like a synchronous call
            this.setState({
                qty: this.state.qty + 5
            });
            this.setState({
                qty: this.state.qty + 5
            });
            this.setState({
                qty: this.state.qty + 5
            });
        });
    }




    // on click function
    increaseQuantity = ()=>{
        console.log(this.state)
        // in below we just change the value of qty for state object, but react we have changed
        // this.state.qty += 0

        //setState 1
        // for react to know the state is changed we use setState(), this is derived from React.component
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        //setState 2, this is used if we require prvious state
        this.setState((prevstate)=>{
            return {
                qty: prevstate.qty + 1
            }
        });
    }

    decreaseQuantity = ()=>{
        this.setState((prevstate)=>{
            if(prevstate.qty > 1){
                return {
                    qty: prevstate.qty - 1
                }
            }
        });
    }


    deleteItem = ()=>{

    }

    render(){
        const {title,price,img} = this.state;// this is one of way to fetch the required field from object

        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{this.state.title}</div>
                    {/* <div style={{fontSize:25}}>{title}</div> */}
                    <div style={{color:"#777"}}>{this.state.price}</div>
                    <div style={{color:"#777"}}>{this.state.qty}</div>
                    <div className='cart-item-actions'>
                        {/* buttons */}
                        <img 
                            alt='increase' 
                            className='action-icons' 
                            onClick={this.increaseQuantity} // {this.increaseQuantity.bind(this)} ->this is to bind the value of this so that actual this is not lost
                            src='https://cdn-icons-png.flaticon.com/512/992/992651.png' />
                        {/* onClick is a camelcase, function should be named */}
                        <img 
                            alt='decrease' 
                            className='action-icons' 
                            onClick={this.decreaseQuantity}
                            src='https://cdn-icons-png.flaticon.com/512/1828/1828906.png'/>
                        <img 
                            alt='delete' 
                            className='action-icons' 
                            onClick={this.deleteItem}
                            src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'/>
                    </div>
                </div>
            </div>
        );
    }
}

// HOW TO add styles to our elements, we can use objects
const styles = {
    image:{
        height: 120,
        width: 110,
        borderRadius: 4,
        background: "#ccc"

    }
}

export default CartItem;

