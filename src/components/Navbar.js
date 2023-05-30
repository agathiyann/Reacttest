import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <><>
      <IconContext.Provider value={{ color: '#white' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
          </Link>

        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

          <h2>React test</h2>
          <div className="grey-line">
            <h2>_______________</h2>
          </div>
          
          <nav className='nav-menu-items' onClick={showSidebar} value={{ color: '#white' }}style={{ flexDirection: 'row', justifyContent: 'space-between' ,}}>
            {SidebarData.map((item, index) => {
              return (
                <p key={index} className={item.cName}>
                  <Link to={item.path} style={{ textDecoration: 'none' }}>
                    <span style={{ flexDirection: 'row', justifyContent: 'space-between' ,}}> {item.icon} </span>
                    <span style ={{ flexDirection: 'row', justifyContent: 'space-between' ,}}>{item.title}</span>
                  </Link>
                </p>
              )
            })}
            
          </nav>
        
          <div className="nav-footer"></div>
				{(
					<div className="nav-details">
              <h2>1,650</h2>
            </div>)}
            {(<div className="nav-footer-info">
                <p>Total Credits Available</p>
              </div>
				)}
       
        </nav>
      </IconContext.Provider>
    </> </>
        );
        }
        
        
        

        export default Navbar;