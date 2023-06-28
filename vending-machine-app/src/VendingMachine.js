import React from 'react';
import "./VendingMachine.css";


function VendingMachine(){
    return(
        <div className='VendingMachine'>
            <h1>Are you hungry? Pick a snack!</h1>
            <img className='img' 
            src="https://onlinevending.com/wp-content/uploads/2016/10/Compact-14-Selection-Table-Top-Snack-Vending-Machine.png"
            alt='image of vending machine'
            />
        </div>
    )
}

export default VendingMachine;