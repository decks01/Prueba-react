import React from 'react';
import { Link } from 'react-router-dom';

const Header = (data) => {
    let user = data.data ;

    const character = {
		display: "block",
		backgroundImage: `url(${user[1].img})`,
		height: "135px",
		padding: "10px",
		width: "146px"
  }

    return (
        <div className='container-header'>
            <div className='header '>
                <div className='content'>soy header</div>
                <div className='info-user'>
                    <div className='container-img'>
                        <div className='img-info' style={character} />
                    </div>

                    <div className='botones-nav'>
                        <div className='datos-info'>     
                            <p className='Name'>{user[1].nombre}  {user[1].apellido}</p>
                            <p >{user[1].puesto} </p>
                        </div>
                        <div className='nav-header'>
                            
                            <Link to="/feed"><button className='btn btn-secondary'>Feed</button></Link>

                            <Link to="/about"><button className='btn btn-secondary'>About</button></Link>

                            <Link to="/photos"><button className='btn btn-secondary'>Photos</button></Link>
                


                            {/* <button className='btn btn-secondary'>Friends</button> */}
                            
                        </div>
                    </div>
                    
                    
                </div>
              
                
            </div>
        </div>
    );
};

export default Header;