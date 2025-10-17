import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GithubIcon from "../../../public/github-icon.svg"
import LinkedinIcons from "../../../public/linkedin-icon.svg"

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
     <div className="bg-[radial-gradient(ellipse_at_center,_#1e3a8a,_transparent)] rounded-full h-80 w-80 z-0 blur-lg absolute top-4/5 -left-10 transform -translate-x-1/2 "></div>


      <div className='z-0'>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {""} I'm a software engineer passionate about building creative, 
          scalable web solutions. Feel free to reach out anytime!
        </p>
       <div className='socials flex flex-row gap-2'>
        <Link href="https://github.com" target="_blank" >
  <Image 
  src={GithubIcon} 
  alt="Github icon"
  width={40} 
  height={40}
  className='invert hover:opacity-80 transition duration-200' />
</Link>

<Link href="https://linkedin.com" target="_blank">
  <Image 
  src={LinkedinIcons} 
  alt="LinkedIn icon"
  width={40} 
  height={40} 
  className='invert hover:opacity-80 transition duration-200' />
</Link>


       </div>
        </div>
        <div>
          
            <form className="flex flex-col gap-6">
               <div className='mb-2'>
                <label
                 htmlFor='email'
                  className='text-white block mb-2 text-sm font-medium'>
                  Email  </label>
                  <input
                    type='email'
                    id='email'
                    required
                    placeholder='kirubelmamushet@gmail.com'
                     className='p-3 rounded-lg  border bg-transparent border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-white transition duration-200 block w-full  '/>
                    
                   </div> 
             
                
                 <div className='mb-2'>
                  <label htmlFor='subject' 
                  className='text-white block mb-2 text-sm font-medium'>
                   Subject </label><input
                    type='subject'
                    id='subject'
                    required
                    placeholder='just say hi'
                     className='p-3 rounded-lg  border bg-transparent border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-white transition duration-200 block w-full  '/>
                    
                  </div>  
                  <div className='mb-6'>
  <label
    htmlFor='message'
    className='text-white block text-sm mb-2 font-medium'
  >
    Message
  </label>

  <textarea
    name="message"
    id="message"
    className='bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
    placeholder="Let's talk about..."
  />

  <button
    type='submit'
    className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full mt-3'
  >
    Submit
  </button>
</div>

                
                  
            </form>
        </div>
    </section>
  )
}

export default EmailSection;
