import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='px-6 max-w-[1000px] mx-auto  grid md:grid-cols-2 place-items-center' id="contact">



            <div>
                <div className="p-2">
                    <div className="text-gray-300 my-3">
                        <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
                        <p className="text-justify leading-7 w-11/12 mx-auto">
                        I am a passionate Ful Stack developer dedicated to crafting innovative and user-friendly
 web applications. I am seeking new chalenging opportunities to showcase my skils and
 contribute to the success of ambitious projects.
                        </p>     
                    </div>
                </div> 
                

                <div className="flex mt-10 items-center gap-3">
                    <div className="bg-[#333333]/40 p-5 rounded-lg">
                        <h3 className="md:text-xl text-xl font-semibold text-white">Teamwork
                            <span>+</span>
                        </h3>
                        <p><span className="md:text-base text-xs">Projects</span></p>
                    </div>
                    <div className="bg-[#333333]/40 p-5 rounded-lg">
                        <h3 className="md:text-xl text-xl font-semibold text-white">Autonomy
                            <span>+</span>
                        </h3>
                        <p><span className="md:text-base text-xs">experience</span></p>
                    </div>
                    <div className="bg-[#333333]/40 p-5 rounded-lg">
                        <h3 className="md:text-xl text-xl font-semibold text-white">Adaptability
                            <span>+</span>
                        </h3>
                        <p><span className="md:text-base text-xs">happy clients</span></p>
                    </div>
                </div>



            </div>



            <form action="https://getform.io/f/placeYourEndpointHere" method="POST" 
            className=' max-w-6xl p-5 md:p-12' id="form">
                <p className='text-gray-100 font-bold text-xl mb-2'>Let´s <span>connect!</span></p>
                <input
                    type="text"
                    id="name"
                    placeholder='Your Name ...'
                    name="name"
                    className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
                />
                <input
                    type="email"
                    id="email"
                    placeholder='Your Email ...'
                    name="email"
                    className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
                />
                <textarea
                    name="textarea"
                    id="textarea"
                    cols="30"
                    rows="4"
                    placeholder='Your Message ...'
                    className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
                />
                <button type="submit" className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'>Send Message</button>
            </form>

        
    </div>
  )
}

export default Contact