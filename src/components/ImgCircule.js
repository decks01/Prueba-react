import React from 'react';

const ImgCircule = (props) => {
    return (
        <div className="container-publicacion">
            <img className='img-publicacion' style={{width: props.width}} src={props.img} />
        </div>
    );
};

export default ImgCircule;