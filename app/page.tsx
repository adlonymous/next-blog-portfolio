import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";

export const revalidate = 10;

export default function Home() {
  return (
    <div className="px-6 py-6 mx-auto">
      <MyProfilePic />
      <p className="mt-4 pb-3 text-3xl text-center dark:text-white font-extralight">
        👋 &nbsp; Hey There! &nbsp;
        <span className="whitespace-nowrap">
          I'm
          <span className="pl-1.5 font-extrabold tracking-wider subpixel-antialiased italic underline decoration-sky-500 decoration-wavy underline-offset-2">
            Aadil
          </span>
          .
        </span>
      </p>
      <p className="mt-5 text-3xl text-center dark:text-white font-extralight p-4 mx-12 border-double border-y-4 border-x rounded-md border-sky-500 border-spacing-1">
        I'm a CS Sophomore on a gap year and a
        <span className="font-semibold p-1.5">Full Stack Developer</span>with an
        affinity towards
        <span className="font-semibold p-1.5">Blockchain & AI</span>
        Technologies . I'm also a
        <span className="font-semibold p-1.5">
          Co-Founder at Stockpile Labs
        </span>
        and the
        <span className="font-semibold p-1.5">
          Head of Growth at Solana University
        </span>
        . Head over to my
        <span className="font-semibold pl-2 pr-1">Personal Website</span>
        or check out my blog down below!
      </p>
      {/* {@ts-expect-error Server Component} */}
      <Posts />
    </div>
  );
}
