import Link from "next/link"
import { FaTwitter, FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="bg-zinc-700 p-4 sticky top-0 drop-shadow-xl z-10">
        <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
            <h1 className="text-3xl font-extrabold text-white grid place-content-center mb-2 md:mb-0
                 tracking-wider subpixel-antialiased italic ">
                <Link href='/' className="hover:text-white/90 no-underline text-sky-500 font-mono">&lt;adlonymous/&gt;</Link>
            </h1>
            <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-2xl lg:text-4xl">
                <Link className="text-white/90 hover:text-sky-500" href="https://twitter.com/adlonymous">
                    <FaTwitter />
                </Link>
                <Link className="text-white/90 hover:text-sky-500" href="https://github.com/adlonymous">
                    <FaGithub />
                </Link>
                <Link className="text-white/90 hover:text-sky-500" href="https://linkedin.com/in/aadilintech">
                    <FaLinkedin />
                </Link>
                <Link className="text-white/90 hover:text-sky-500" href="https://t.me/adlonymous">
                    <FaTelegramPlane />
                </Link>
            </div>
        </div>
    </nav>
  )
}
