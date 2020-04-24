import React, { Fragment ,useState} from 'react'
import {Link} from 'react-router-dom'
import MainHeader from './MainHeader'

import SideDrawer from './SideDrawer'
import Backdrop from '../UIElemets/Backdrop'
import NavLinks from './NavLinks'
import './style.scss'

const MainNav = (props) => {
    const [drawerIsOpen , setDrawerIsOpen] = useState(false);

    const openDrawer = ()=>{
        setDrawerIsOpen(true)
    }
    const closeDrawer = ()=>{
        setDrawerIsOpen(false)
    }
    return (
        <Fragment>
        {
            drawerIsOpen && <Backdrop onClick={closeDrawer}/>
        }
     
        <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
            <nav className='main-navigation__drawer-nav'>
                <NavLinks/>
            </nav>
        </SideDrawer>
         
         <MainHeader>
                <button className='main-navigation__menu-btn' onClick={openDrawer}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className='main-navigation__title'>
                    <Link to='/'>Your Places</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <NavLinks/>
                </nav>
            </MainHeader>
        </Fragment>
    )
}
export default MainNav;