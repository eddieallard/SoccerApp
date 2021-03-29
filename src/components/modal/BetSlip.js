
import React from 'react';
import styles from './slideDrawer.module.css'


const BetSlip = ({open, list, handleRemove})=> {
    console.log(list,'bets')
   return(
   
    <div className={open ? styles.sidedrawer: styles.closed}>
        {list.map(listitem => (
            <div key={listitem.name + listitem.id}>
            <h1>{listitem.name}</h1>
            <button onClick={()=> handleRemove(listitem.id)}>remove</button>
            </div>
        ))}
    </div>
)
    
    
}

export default BetSlip