import style from './NavBar.module.css'
import { Outlet, Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <>
            <nav className={style.navbar}>

                <ul className={style.list}>

                    <Link to='/'>
                        <li className={style.item}><img className={style.logo} src="pirata.jpg" /> </li>
                    </Link>

                    <Link to='/'>
                        <li className={style.item}>INICIO</li>
                    </Link>

                    <Link to='/solicitate'>
                        <li className={style.item}>SOLICITAR FILME/SERIE</li>
                    </Link>

                    <Link to='/favoritos'>
                        <li className={style.item}>FILME/SERIE SOLICITADO</li>
                    </Link>
                </ul>
            </nav >
            <Outlet />
        </>
    )

}

export default NavBar