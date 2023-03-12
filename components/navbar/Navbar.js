import React,{ useRef } from 'react'
import CloseMenuButton from './CloseMenuButton';
import NavLink from './NavLink';
import OpenMenuButton from './OpenMenuButton';
import Link from 'next/link';

export default function Navbar() {

    const navLinkContainerRef = useRef(null);
    const toggleNavbar=()=>{
        const navClassList = navLinkContainerRef.current.classList;
        navClassList.toggle('smp-navbar-links-container-show');
    }

  return (
    <div className='smp-navbar fixed-top shadow'>
        <div className='container'>
            <div className='row py-4'>
                {/* Column One */}
                <div className='col-7 col-sm-4 col-md-3 col-lg-3 smp-navbar-brand'>
                    <Link href='/' >Sai Marn Pha</Link>
                </div>
                {/* Column Two */}
                <div className='smp-navbar-collapse col-5 col-sm-8 col-md-9 col-lg-9'>
                    <div className='smp-navbar-collapse-content d-flex align-items-center'>
                        <OpenMenuButton toggleNavbar={toggleNavbar} icon = { <i className="bi bi-list" /> }  />
                        <div ref={navLinkContainerRef} id='nav-links-container' className='smp-navbar-links-container'>
                            <CloseMenuButton toggleNavbar={toggleNavbar} icon = { <i className="bi bi-x-lg" /> }/>
                            <div className='d-flex smp-navbar-links-content'>
                                {
                                    links.map( ({href, label, icon}, index) => {
                                        return (
                                            <NavLink href={`#${href}`} label={`${label}`} 
                                            toggleNavbar={toggleNavbar}
                                            icon={ <i className={`${icon}`} /> }
                                            key = { label + index }
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const links = [
    {
        href: "home",
        label: "Home",
        icon : "bi bi-house-door"
    },
    {
        href: "skills",
        label: "Skills",
        icon : "bi bi bi-lightbulb"
    },
    {
        href: "educations",
        label: "Education",
        icon : "bi bi-mortarboard"
    },
    {
        href: "projects",
        label: "Projects",
        icon : "bi bi-award"
    },
];