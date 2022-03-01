import React, { Fragment } from "react";
import "./styles.css";

export default function HomePage({ list, handleAdd, clickedList }) {
  let clickedListIds = clickedList.map((e) => e.id);
  return (
    <>
      {list.map((listItem) => {
        const { markets, name } = listItem;
        if (markets.length === 0) return [];
        const [team1, team2] = name.split("vs");
        return (
          <div key={listItem.id}>
            <div className="jumbotron">
              <div style={{ border: "solid 1px gray", padding: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <p className="teamName">{team1}</p>
                  <p className="teamName">vs</p>
                  <p className="teamName">{team2}</p>
                </div>
                <div></div>
                {markets.map((market) => {
                  return (
                    <Fragment key={market.id}>
                      <hr className="my-4"></hr>
                      <div key={market.id}>
                        <div>
                          <h2>{market.name}</h2>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            gap: "15%",
                          }}
                        >
                          {market.selections.map((sel) => {
                            return (
                              <div
                                key={sel.id + sel.name}
                                style={{ width: "100%" }}
                              >
                                <button
                                  style={{
                                    padding: 10,
                                    margin: 10,
                                    width: "100%",
                                    background:
                                      clickedListIds.includes(sel.id) &&
                                      "darkblue",
                                  }}
                                  className="btn btn-primary"
                                  onClick={() => handleAdd(sel)}
                                >
                                  {sel.name}
                                  <br></br>
                                  {sel.price}
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
