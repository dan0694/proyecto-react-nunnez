import React from "react";
 
 const ItemListContainer = ({greeting}) => {
    return(
        <div className="container">
            <div className="alert alert-info mt-4" role="alert">
                {greeting}
            </div>
        </div>
        
    )
 }

 export default ItemListContainer;