import MangaList from "@/components/MangaList"


export default async function Page({params}) {
    const { keyword } = params
    const decodedKeyword = decodeURIComponent(keyword)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/manga?q=${keyword}`)
    const hasilSearch = await res.json()
    return (
      <div>
        <MangaList manga={hasilSearch} info={`Hasil pencarian dari ${decodedKeyword}...`} />
      </div>
    )
}