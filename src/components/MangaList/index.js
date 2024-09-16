import Image from "next/image"
import Link from "next/link"

export default function MangaList({manga,info}) {
    return (
        <div>
            <h1 className="font-bold md:text-2xl text-xl p-3">{info}</h1>
            <div className="grid md:grid-cols-5 px-4 sm:grid-cols-3 grid-cols-2 gap-3">
               {manga.data.map(m => {
                   return (
                    <div key={m.mal_id} className="bg-slate-900">
                       <Link href={`/${m.mal_id}`} className="shadow-md md:items-center">
                           <Image src={m.images.webp.image_url} alt="..." width={350} height={350} />
                       </Link>
                       <h4 className="p-4 md:text-lg font-bold">{m.title}</h4>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}