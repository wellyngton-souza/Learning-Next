import React from 'react';

interface LinkAProps{
  link: string;
  name: string;
}

const LinkA: React.FC<LinkAProps> = ({ link, name }) =>{
  return(
    <p><a target="_blank" href={link}>{name}</a></p>
  );
}

const Home = () =>{
  return (
    <main>
      <article className='min-h-screen'>
        <div className="flex justify-around">
          <div className="p-16 box-border">
            <img className="w-64 border-16" src="/assets/download.jpg" alt="img" />
            <h2 className="font-bold text-xl my-8">Learning <a className="text-blue-500">Next</a></h2>
            <LinkA link="https://dev.to/eperedo/learning-next-day-1-1pdf" name="Day1" />
            <LinkA link="https://dev.to/eperedo/learning-next-day-2-3df3" name="Day2" />
            <LinkA link="https://dev.to/eperedo/learning-next-day-3-10jh" name="Day3" />
            <LinkA link="https://dev.to/eperedo/learning-nextjs-day-4-l4c" name="Day4" />
            <LinkA link="https://dev.to/eperedo/learning-next-day-5-46bi" name="Day5" />
            <LinkA link="https://dev.to/eperedo/learning-nextjs-day-6-2odm" name="Day6" />
            <LinkA link="https://dev.to/eperedo/learning-next-day-7-3dp4" name="Day7" />
            <LinkA link="https://dev.to/eperedo/learning-nextjs-day-8-11" name="Day8" />
            <LinkA link="https://dev.to/eperedo/learning-nextjs-day-9-3lhl" name="Day9" />
            <LinkA link="https://dev.to/eperedo/learning-nextjs-9-day-10-3i6e" name="Day10" />
            <LinkA link="https://dev.to/eperedo/learning-nextjs-day-11-1j8g" name="Day11" />
            <LinkA link="https://dev.to/eperedo/easy-https-server-with-nextjs-and-ngrok-1bnp" name="Day12" />
            <p className='my-8 font-bold text-purple-500'><a target="_blank" href="https://eslint.org/">Eslint</a></p>
            <p className='font-bold text-rose-500'><a target="_blank" href="https://tailwindcss.com/">Tailwind</a></p>
          </div>
          <div></div>
        </div>
      </article>
    </main>
  )
}

export default Home;