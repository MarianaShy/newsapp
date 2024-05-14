import { NavLink } from 'react-router-dom';
import { useEffect, useContext, useRef } from 'react';
import { LanguageContext } from '../../../utils/context/languageContext';



import logo from "../../../assets/logo.png";
import "./header.style.css"


function Header() {
	const { language, toggleLanguage } = useContext(LanguageContext);
	const navMenuRef = useRef<HTMLUListElement | null>(null);
	const burgerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const navMenu = navMenuRef.current;
        const burger = burgerRef.current;
  
		const handleBurgerClick = () => {
			navMenu?.classList.toggle('hidden');
		};
  
		const handleNavLinkClick = () => {
			navMenu?.classList.add('hidden');
		};
  
		burger?.addEventListener("click", handleBurgerClick);
  
		const navLinks = document.querySelectorAll('.navigation__link');
		navLinks.forEach(link => {
			link.addEventListener('click', handleNavLinkClick);
		});
  
		return () => {
			burger?.removeEventListener("click", handleBurgerClick);
			navLinks.forEach(link => {
			link.removeEventListener('click', handleNavLinkClick);
			});
		};
  }, [""]);

	


    return (
		<header>
		<div className="header">
			<div className="content header-flex">
			<div className="header-title">
				<img src={logo} alt="NT" className="logo-img"></img>
				<h1 className="title">News Today</h1>
			</div>
			<div >
			<button onClick={toggleLanguage} className={`language-button ${language === 'en' ? 'sv' : 'en'}`} >{language === 'en' ? 'SV' : 'EN'}</button>

			</div>
			<nav className='navigation'>
			<div className="nav-menu-burger" id="burger" ref={burgerRef}>
				<i className="fa-solid fa-bars"></i>
			</div>
				<ul  className="navigation__flex hidden" id="my-nav-menu" ref={navMenuRef}>
				<li className="navigation__item">
                  <NavLink to="/" className={({ isActive }) => `navigation__link ${isActive ? 'active' : ''}`} >
						{language === 'en' ? 'Home' : 'Hem'}
                  </NavLink>
            </li>
				<li className="navigation__item">
                  <NavLink to="/search" className={({ isActive }) => `navigation__link ${isActive ? 'active' : ''}`} >
                        {language === 'en' ? 'Search' : 'Sök'}
                  </NavLink>
            </li>
				<li className="navigation__item">
                    <NavLink to="/sport" className={({ isActive }) => `navigation__link ${isActive ? 'active' : ''}`} >
                        Sport
                    </NavLink>
            </li>
				<li className="navigation__item">
                    <NavLink to="/politics" className={({ isActive }) => `navigation__link ${isActive ? 'active' : ''}`} >
						  {language === 'en' ? 'Politics' : 'Politik'} 
                    </NavLink>
            </li>

				</ul>
				
			</nav>
		</div>
		</div>
		</header>
    );
}


export default Header