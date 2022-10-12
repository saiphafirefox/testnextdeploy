import React,{useEffect, useRef} from 'react'
import CloseMenuButton from './CloseMenuButton';
import NavLink from './NavLink';
import OpenMenuButton from './OpenMenuButton';
import Link from 'next/link';

function Navbar() {

    const navLinkContainerRef = useRef(null);
    
    const togglerNavbar=()=>{
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
                        
                        <div ref={navLinkContainerRef} id='nav-links-container' 
                            className='smp-navbar-links-container'>
                            <CloseMenuButton togglerNavbar={togglerNavbar} >
                                <i className="bi bi-x-lg"></i>
                            </CloseMenuButton>

                            <div className='d-flex smp-navbar-links-content'>
                                <NavLink href='#home' label={'Home'} 
                                    icon={<i className="bi bi bi-lightbulb"></i>} />

                                <NavLink href='#skills' label={'Skills'} 
                                    icon={<i className="bi bi-house-door"></i>} />

                                <NavLink href='#educations' label={'Education'} 
                                    icon={<i className="bi bi-mortarboard"></i>} />

                                <NavLink href='#projects' label={'Projects'} 
                                    icon={<i className="bi bi-award"></i>} />
                            </div>
                        </div>
                        <OpenMenuButton togglerNavbar={togglerNavbar} >
                            <i className="bi bi-list"></i>
                        </OpenMenuButton>
                        
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar