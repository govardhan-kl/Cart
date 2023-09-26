import React from 'react';

// this is class based component
class CartItem extends React.Component{
    render(){
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color:"#777"}}>Rs 999</div>
                    <div style={{color:"#777"}}>Qty : 1</div>
                    <div className='cart-item-actions'>
                        {/* buttons */}
                    </div>
                </div>
            </div>
        );
    }
}

// HOW TO add styles to our elements, we can use objects
const styles = {
    image:{
        height: 100,
        width: 110,
        borderRadius: 4,
        background: "#ccc"

    }
}

export default CartItem;

