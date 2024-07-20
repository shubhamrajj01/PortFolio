import React from 'react'

import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
    const year = new Date().getFullYear();;
    
  return (
    <>
    <hr />
    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4'>
                    <FaFacebook size={24} />
                    <FaGithubSquare size={24} />
                    <FaLinkedin size={24} />
                    <IoLogoYoutube size={24} />
                </div>
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                    <p className='text-sm'>&copy;{year} Shubham</p>
                    <p className='text-sm'>All rights reserved</p>
                </div>
                
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer