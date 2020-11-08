import React from 'react';
import PropTypes from 'prop-types';
function Loader(){

    return(
        <div className="loading_overlay">
            <dialog open>
            <p>{this.props.message}</p>
            </dialog>
        </div>
    )
}
Loader.propTypes = {
    message:PropTypes.string
}
export default Loader