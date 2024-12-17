import React from 'react';
import {Link} from'react-router-dom';
import One from './One';
import Two from './Two';
import Footer from './Footer';
function Header() {
    return ( 
        <section>
        <div style={{display:"flex",gap:"30px",alignitems:"center",justifyContent:'center'}}>
      
        <nav>
        <ul>
        <li><Link to="/">Header</Link></li>
        <li><Link to="/About.js">About</Link></li>
        <li><Link to="/Contact.js">Contact</Link></li>
        <li><Link to="/NotFound">NotFound</Link></li>
    </ul>
    </nav>
    </div>
    <div>
        <One/>
        <Two />
        <Footer/>

    </div>
    </section>
        
     );
}

export default Header;