import React from "react";
import Classes from "./styles.module.css"


const Publicity = () => {
    return (
      <div className={Classes.margin}>
        <div class="mb-20 md:ml-40 lg:ml-40" id='pub'>
        <div class="xl:container mx-auto px-4 md:px-10">
          <div class="ml-20 mb-16 md:w-2/3 lg:w-1/2">
            <h2 class="md:ml-20 lg:ml-20 mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Publicity
            </h2>
          </div>
          <div class="md:ml-20 lg:ml-20 grid gap-12 px-4 sm:px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class="group relative rounded-3xl  space-y-5 overflow-hidden border-solid border-2">
              <div class="h-[20rem]">
              <img
                class="mt-20mx-auto h-[14rem] w-full object-cover"
                src="/Aman.jpeg"
                alt="woman"
                loading="lazy"
                width="640"
                height="700"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 lg:py-6 md:py-0 sm:py-3 backdrop-blur bg-white/50">
                <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Aman Kumar Yadav</h4>
                  <span class="block text-center text-sm font-semibold text-black">Publicity Head</span>
                </div>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-5 overflow-hidden border-solid border-2">
            <div class="h-[20rem]">
              <img
                class="mx-auto h-[14rem] w-full object-cover"
                src="/Sundeep.png"
                alt="woman"
                loading="lazy"
                width="640"
                height="700"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 lg:py-6 md:py-2.5 sm:py-3 backdrop-blur bg-white/50">
                <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Sundeep Chowdary</h4>
                  <span class="block text-center text-sm font-semibold text-black">Publicity Head</span>
                </div>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-4 overflow-hidden border-solid border-2">
            <div class="h-[20rem]">
              <img
                class="mx-auto h-[14rem] w-full object-cover"
                src="/Janhavi.png"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 lg:py-6 md:py-2.5 sm:py-3 backdrop-blur bg-white/50">
              <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Janhavi Verma</h4>
                  <span class="block text-center text-sm font-semibold text-black">Publicity Head</span>
                </div>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-4 overflow-hidden border-solid border-2">
            <div class="h-[20rem]">
              <img
                class="mx-auto h-[14rem] w-full object-cover"
                src="/Vishal.png"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 lg:py-6 md:py-2.5 sm:py-3 backdrop-blur bg-white/50">
              <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Vishal Sharma</h4>
                  <span class="block text-center text-sm font-semibold text-black">Publicity Head</span>
                </div>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-4 overflow-hidden border-solid border-2">
            <div class="h-[20rem]">
              <img
                class="mx-auto h-[14rem] w-full object-cover"
                src="/Kancharla.png"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 lg:py-6 md:py-2.5 sm:py-3 backdrop-blur bg-white/50">
              <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Kancharla Kiranmai</h4>
                  <span class="block text-center text-sm font-semibold text-black">Publicity Head</span>
                </div>
              </div>
            </div>
            <div class="group relative rounded-3xl  space-y-4 overflow-hidden border-solid border-2">
            <div class="h-[20rem]">
              <img
                class="mx-auto h-[14rem] w-full object-cover"
                src="/Ritesh.png"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              </div>
              <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 lg:py-6 md:py-2.5 sm:py-3 backdrop-blur bg-white/50">
              <div>
                  <h4 class="text-xl text-center font-bold dark:text-white">Ritesh Soni</h4>
                  <span class="block text-center text-sm font-semibold text-black">Publicity Head
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

export default Publicity