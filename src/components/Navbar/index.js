import Link from "next/link";
import InputSearch from "./searchInput";

export default function Header() {
    return (
        <header className="bg-yellow-400">
            <nav className="max-w-7xl py-3 mx-auto p-4 md:flex flex-row justify-between items-center">
               <Link href="/"className="md:text-2xl text-xl">
                    <h1 className="logo text-indigo-950">
                        <b>MANGACOYYY</b>
                    </h1>
                </Link>
                <InputSearch />
            </nav>
        </header>
    )
}