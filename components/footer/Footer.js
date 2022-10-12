import React from 'react'

function Footer() {
  return (
    <div className='footer-section mt-5 text-light'>
        <div className='container pt-5 pb-1'>
            <div>
                <span className='text-2 d-inline'>Sai Marn Pha</span>
                <div className='d-sm-block d-md-inline'>
                    <a target="_blank" rel="noreferrer"
                    href='https://github.com/SaiPha454'
                    className='ms-md-5 mx-2 footer-icon'>
                        <i className="bi bi-github"></i>
                    </a>
                    <a className='mx-2 footer-icon'
                        target="_blank" rel="noreferrer"
                        href="https://www.facebook.com/sai.m.pha.12"
                    >
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a className='mx-2 footer-icon'
                        target="_blank" rel="noreferrer"
                        href="mailto: saimarnpha@gmail.com"
                    >
                        <i className="bi bi-envelope-fill"></i>
                        <span className='mx-2'>saimarnpha@gmail.com</span>
                    </a>
                </div>
                
            </div>
            <div className='text-center mt-5'>
                <span className="copyright-text">Designed by Sai Marn Pha in 2022. All rights reserved.</span>
            </div>
        </div>
    </div>
  )
}

export default Footer