import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Aditya Chauhan</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Engineering Undergrad and Competitive Programmer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I'm a 3rd year engineering student at IIITD, and a competitive programming enthusiast,
             fixing bugs one line at a time. All my projects and algorithms are made from the ground up,
             from planning to <i>romanitcising</i>, with raw code.
            <br />
            More information about me, my certifications, and my daily activities can be found on my linkedin page {' '}
            <a
               href="https://www.linkedin.com/in/adityamc/"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               adityamc
            </a>{' '}
            . You are welcome to connect with me, and reach out to me about anything.
         </p>
         <p> Codeforces: {' '}
            <a
               href="https://codeforces.com/profile/roronua"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               roronua
            </a>{' '} (Rating: 1336) | Codechef: {' '}
            <a
               href="https://www.codechef.com/users/roronua"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               roronua
            </a>{' '}  (Rating: 1466) | Github: {' '}
            <a
               href="https://github.com/adityachauhan0"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               adityachauhan0
            </a>{' '} </p>
      </div>
   )
}

export default Intro;