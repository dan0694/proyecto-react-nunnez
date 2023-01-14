import React from "react";

const Loading = () => {
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-md-12 text-center py-5">
                    <div className="spinner-border text-dark" role="status">
                        <span className="visually-hidden">Espere...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;