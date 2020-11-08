import React from 'react';
import PropTypes from 'prop-types';
function Loader(props){

    return(
        <div className="loading_overlay">
            <dialog open>
            <p>{props.message}</p>
            </dialog>
        </div>
    )
}
Loader.propTypes = {
    message:PropTypes.string
}
export default Loader