import React from 'react';
import ImgCircule from './ImgCircule';
import { AiOutlineUserAdd } from "react-icons/ai";
// import { AiFillStar } from "react-icons/ai";

const Suggestion = ({data}) => {
    
    return (

        <div className="about">
            <div className="card card-about "   >
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">Suggest pages</h6>
                    {data.map((item) => {
                        return <>
                            <div className='row Suggest'>
                                <div className='row Suggest'>   
                                    <ImgCircule width='40px' img={item.img} />
                                    <div className='Suggest-info'>
                                        <h6 className="card-subtitle mb-2 text-muted">{item.nombre} Company</h6>
                                        <p className="info-text">{item.amigos} Mutual friend</p>
                                    </div>
                                </div>
                              
                                <div>
                                   <AiOutlineUserAdd color='rgb(1 79 255)' size='1.4rem'/>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Suggestion;