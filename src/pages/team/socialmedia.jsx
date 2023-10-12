import React from "react";
import Classes from "./styles.module.css"


const SocialMedia = () => {
    return (
      <div className={Classes.margin}>
        <div class="mb-20 md:ml-40 lg:ml-40" id='so'>
        <div class="xl:container mx-auto px-4 md:px-10">
          <div class="ml-20 mb-16 md:w-2/3 lg:w-1/2">
            <h2 class="md:ml-20 lg:ml-20 mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Social Media
            </h2>
          </div>
          <div class="md:ml-20 lg:ml-20 grid gap-12 px-4 sm:px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class="group relative rounded-3xl  space-y-5 overflow-hidden border-solid border-2">
            <div class="h-[20rem]">
              <img
                class="mx-auto h-[14rem] w-full object-cover"
                src="/Suhani.jpeg"
                alt="woman"
                loading="lazy"
                width="640"
                height="700"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 lg:py-6 md:py-0 sm:py-3 backdrop-blur bg-white/50">
                <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Suhani Garg</h4>
                  <span class="block text-center text-sm font-semibold text-black">Social Media Head
</span>
                </div>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-5 overflow-hidden border-solid border-2">
            <div class="h-[20rem]">
              <img
                class="mx-auto h-[14rem] w-full object-cover"
                src="/Vidushi.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="700"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 lg:py-6 md:py-0 sm:py-3 backdrop-blur bg-white/50">
                <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Vidushi Bansal</h4>
                  <span class="block text-center text-sm font-semibold text-black">Social Media Head
</span>
                </div>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-4 overflow-hidden border-solid border-2">
            <div class="h-[20rem]">
              <img
                class="mx-auto h-[14rem] w-full object-cover"
                src="/Aditi.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 lg:py-6 md:py-0 sm:py-3 backdrop-blur bg-white/50">
              <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Aditi Solanki</h4>
                  <span class="block text-center text-sm font-semibold text-black">Social Media Head
</span>
                </div>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-5 overflow-hidden border-solid border-2">
            <div class="h-[20rem]">
              <img
                class="mx-auto h-[14rem] w-full object-cover"
                src="/Ayush.jpeg"
                alt="woman"
                loading="lazy"
                width="640"
                height="700"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 lg:py-6 md:py-3.5 sm:py-3 backdrop-blur bg-white/50">
                <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Ayush</h4>
                  <span class="block text-center text-sm font-semibold text-black">Social Media Head
</span>
                </div>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-5 overflow-hidden border-solid border-2">
            <div class="h-[20rem]">
              <img
                class="mx-auto h-[14rem] w-full object-cover"
                src="/Shreyan.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="700"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 lg:py-6 md:py-0 sm:py-3 backdrop-blur bg-white/50">
                <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Shreyan Datta</h4>
                  <span class="block text-center text-sm font-semibold text-black">Social Media Head
</span>
                </div>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-4 overflow-hidden border-solid border-2">
              <div class="h-[20rem]">
              <img
                class="mx-auto h-[14rem] w-full object-cover"
                src="/Lakshay.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 lg:py-6 md:py-0 sm:py-3 backdrop-blur bg-white/50">
              <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Lakshay Kalra</h4>
                  <span class="block text-center text-sm font-semibold text-black">Social Media Head
</span>
                </div>
              </div>
            </div>
            
              
            </div>
          </div>
         </div>
     </div>
                                          
    )
}

export default SocialMedia