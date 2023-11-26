import Posts from "./components/Posts"

export const revalidate = 10

export default function Home() {
  return (
    <main className="px-6 py-6 mx-auto">
      <p className="mt-1 pb-3 text-3xl text-center dark:text-white font-extralight">
      👋 &nbsp; Hey There! &nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="pl-1.5 font-extrabold tracking-wider subpixel-antialiased italic underline decoration-sky-500 decoration-wavy underline-offset-2">Aadil</span>.
        </span>
      </p>
      <p className="mt-5 text-3xl text-center dark:text-white font-extralight p-4 mx-12 border-double border-y-4 border-x rounded-md border-sky-500 border-spacing-1"> 
                I&apos;m a CS Student in Chennai, India with experience as a
                <span className="font-bold p-1.5">Full Stack Developer</span>
                & an affinity towards
                <span className="font-bold p-1.5">Web3 & AI</span>
                Technologies . I&apos;m a
                <span className="font-bold p-1.5">Co-Founder at Stockpile</span> 
                and a 
                <span className="font-bold p-1.5">Core Team at Solana University</span>. 
                Head over to my 
                <span className="font-bold pl-2 pr-1">Twitter</span> to say Hi, take a look at my 
                <span className="font-bold p-1.5">Github & LinkedIn</span>
                for my work, or check out my blog down below!
        </p>
      <Posts />
    </main>
  )
}
