import React from 'react';


export default function HomePage({list, handleAdd}) {

return (
<>
{list.map(listItem => {
    const {markets, name} = listItem;
    if(markets.length === 0) return [];

    return (
        <div key={name}>
        <div className="jumbotron">
            <h1 className="container text-center">{name}</h1>
            <div>
                <hr className="my-4"></hr>
                {markets.map(market => {
                    return (
                        <div key={markets} className="container">
                        <div key={market.name}>
                            <h1>{market.name}</h1>
                        </div>
                            {market.selections.map(sel => {
                                return (
                                    <div key={sel.id + sel.name}>
                                    <button className="btn btn-primary" onClick={() => handleAdd(sel.id)}>{sel.name} -- {sel.price}</button>
                                    </div>
                                )})};
                        </div>
                    )})}
            </div>
        </div>
        </div>
    )})}
</>
)}
