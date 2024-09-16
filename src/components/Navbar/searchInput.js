'use client';
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function InputSearch() {

    const searchValue = useRef()
    const router = useRouter()

    function handleSearch(e) {
        e.preventDefault()
        const keyword = searchValue.current.value
        router.push(`/search/${keyword}`)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch(e)
        }
    }

    return (
        <div className="search-input">
               <input
                placeholder="Searth manga..."
                type="text" name="text" 
                className="input md:w-96 text-black w-full"
                ref={searchValue}
                onKeyDown={handleKeyDown}
               />
               <button onClick={handleSearch} className="absolute md:top-5 top-12 end-5 fill-black">
                 <MagnifyingGlass size={28} className="text-slate-900" />
               </button>
        </div>
    )
}