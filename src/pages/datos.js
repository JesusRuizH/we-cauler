import axios from "axios";
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Post({ posts }) {
    
    const articulos = (posts) =>{
            return(<>
            {posts.map((feature) => (
                <a
                key={feature.title}
                href={`${feature.url}`}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
                  >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Titulo: {feature.title}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  {feature.info}
                </p>
              </a>
            ))}
            </>)    
    }
    
    return (
        <>
        <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left content-center justify-items-center">
        {articulos(posts[0])}
        {articulos(posts[1])}
        {articulos(posts[2])}
      </div>
    </main>
        </>
      );
  }
  
export  const getServerSideProps = async (context)  =>{
const {data: posts} = await axios.get(
    "http://localhost:3000/api/web-crawler"
    );
    
return {
    props: {
    posts,
    }, // will be passed to the page component as props
};
};