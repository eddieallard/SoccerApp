import React from 'react';
import styles from './slideDrawer.module.css'



const BetSlip = ({ open, list, handleRemove }) => {
  return (
    <div
      className={open ? styles.sidedrawer : styles.closed}
      style={{ padding: "10px", textAlign: "center" }}
    >
      <h1>{list.length ? "Selected Teams" : "No teams selected"}</h1>
      <br />
      {list.map((listitem) => (
        <div key={"selected_item_" + listitem.id}>
          <div
            className="container text-center"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5px",
            }}
          >
            <p className="teamName">{listitem.name} To Win</p>
            <button
              className="col-md-auto text-center btn btn-danger"
              onClick={() => handleRemove(listitem.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BetSlip