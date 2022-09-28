import React from 'react';
import ImgCircule from './ImgCircule';
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const Suggest = ({data}) => {
    
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
                                    <h6 className="card-subtitle mb-2 text-muted">{item.nombre} Company</h6>
                                </div>
                              
                                <div>
                                    {item.favorite ? <AiFillStar color='#9f9f4a' size='1.4rem'/> : <AiOutlineStar size='1.4rem' /> }
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Suggest;