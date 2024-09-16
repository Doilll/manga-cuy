import MangaList from "@/components/MangaList"


export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=20`)
  const topManga = await res.json()
  return (
    <div>
      <MangaList manga={topManga} info={"Manga populer"} />
    </div>
  )
}