import React from 'react';

function Loader(){
    return(
        <div className="loading_overlay">
            <dialog open>
                <p>Loading...</p>
            </dialog>
        </div>
    )
}

export default Loader