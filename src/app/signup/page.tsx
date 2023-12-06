
'use client'
 
import { useRouter } from 'next/navigation'
 
import React from 'react'

const Signup = () => {
   const router = useRouter()
  return (
    <>
    <section className="bg-gray-50 light:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 light:text-white">
          <img className="w-8 h-8 mr-2" src="https://www.reshot.com/preview-assets/icons/HQM63JB2CS/rss-HQM63JB2CS.svg" alt="Logo"/>
          RSS    
      </a>
      <div className="w-full bg-white rounded-lg shadow light:border md:mt-0 sm:max-w-md xl:p-0 light:bg-gray-800 light:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl light:text-white">
                  Sign up new account
              </h1>
                          <form className="space-y-4 md:space-y-6" action="#">
                               <div>
                  <label
                    htmlFor="full-name"
                    className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                  >
                    Your full name
                  </label>
                  <input
                    type="full-name"
                    name="full-name"
                    id="full-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                    placeholder="full name"
                    required=""
                  />
                </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 light:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 light:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 light:bg-gray-700 light:border-gray-600 light:focus:ring-primary-600 light:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 light:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="forgot-password" className="text-sm font-medium text-primary-600 hover:underline light:text-primary-500">Forgot password?</a>
                </div>
                
                  <button onClick={() => router.push('/dashboard')} type="submit" className="w-full text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-primary-600 light:hover:bg-primary-700 light:focus:ring-primary-800">Sign Up</button>
          
                  
                  <p className="text-sm font-light text-gray-500 light:text-gray-400">
                      Already have an account! <a href="/login" className="font-medium text-primary-600 hover:underline light:text-primary-500">Sign In</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section></> 
  )
}

export default Signup