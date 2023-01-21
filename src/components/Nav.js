import { NavLink } from "react-router-dom";

function Nav() {
    return (<nav>
        <NavLink to='/react-homework-template/'>Home</NavLink>
        <NavLink to='/react-homework-template/about'>About</NavLink>
        <NavLink to='/react-homework-template/contact'>Contact</NavLink>
        <NavLink to='/react-homework-template/blog'>Blog</NavLink>
        <NavLink to='/react-homework-template/login'>Login</NavLink>
        <NavLink to='/react-homework-template/shop'>OnlineStore</NavLink>
        
    </nav>  );
}

export default Nav
