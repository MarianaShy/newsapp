
import { NavLink } from 'react-router-dom';
import logo from "../../../assets/logo.png"
import { useParams } from 'react-router-dom';


function HEADER() {

	const { category } = useParams<{ category: string }>();
	console.log("ID from URL:", category);


    return (
		<header>
		<div className="header">
			<div className="content header-flex">
			<div className="header-title">
				<img src={logo} alt="Blue letters NT on white background with vertical sign 'News Today'  in the middle" className="logo-img"></img>
				<h1 className="title">News Today</h1>
			</div>
			<nav className='navigation'>
				<ul  className="navigation__flex">
				<li className="navigation__item">
                    <NavLink to="/" className={({ isActive }) => `navigation__link ${isActive ? 'active' : ''}`} >
                        Home
                    </NavLink>
            </li>
				<li className="navigation__item">
                    <NavLink to="/it" className={({ isActive }) => `navigation__link ${isActive ? 'active' : ''}`} >
                        IT
                    </NavLink>
            </li>
				<li className="navigation__item">
                    <NavLink to="/sport" className={({ isActive }) => `navigation__link ${isActive ? 'active' : ''}`} >
                        Sport
                    </NavLink>
            </li>
				<li className="navigation__item">
                    <NavLink to="/politics" className={({ isActive }) => `navigation__link ${isActive ? 'active' : ''}`} >
                        Politics
                    </NavLink>
            </li>

				</ul>
				
			</nav>
		</div>
		</div>
		
		
		
	</header>
    );
}


export default HEADER