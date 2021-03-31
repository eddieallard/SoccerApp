import React from 'react';
import styles from './slideDrawer.module.css'


const BetSlip = ({open, list, handleRemove})=> {
   return (
    <div className={open ? styles.sidedrawer: styles.closed}>
        {list.map(listitem => (
            <div key={listitem.name + listitem.id}>
            <h1 className="container text-center">{listitem.name} To Win</h1>
            <button className="col-sm text-center btn btn-danger" onClick={()=> handleRemove(listitem.id)}>remove</button>
            </div>
        ))}
    </div>
)
}

export default BetSlip