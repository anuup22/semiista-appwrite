import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Topbar = () => {
  return (
    <section className='topbar'>
        <div className='flex-between py-4 px-5'>
            <Link to='/' className='flex items-center gap-3'>
                <img 
                    src="/assets/images/logo.svg" 
                    alt="logo" 
                    width={35}
                    height={40}
                />
            </Link>

            <div className='flex gap-4'>
                <Button>
                    <img 
                        src="/assets/icons/logout.svg" 
                        alt="logout" 
                    />
                </Button>
            </div>
        </div>
    </section>
  )
}

export default Topbar