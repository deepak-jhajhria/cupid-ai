import React from 'react'
import Faq from './Faq'
import IdentityHub from './IndentityHub'
import Footer from './Footer'

const FaqAndFooter = () => {
    return (
        <div className='overflow-hidden'>
            <Faq />
            <IdentityHub />
            <Footer />
        </div>
    )
}

export default FaqAndFooter
