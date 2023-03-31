
import Image from "next/image";
import Link from "next/link";


export default function NavBar() {
    return <nav className="sticky top-0 z-[9999] backdrop-blur">
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href='/'>Homepage</Link></li>
                        <li><Link href='/privacy'>Privacy</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <Link href='https://github.com/Farabi87/' className="btn btn-ghost rounded-full px-1" rel="noopener noreferrer" target="_blank">
                    <Image width='100' height='100' className="h-10 w-10 rounded-full overflow-hidden" alt="Github logo" src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' />
                </Link>
            </div>
        </div>
    </nav>
}