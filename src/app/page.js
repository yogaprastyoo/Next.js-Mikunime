import AnimeList from "@/components/AnimeList";

const Home = async () => {
  const newAnimeResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now?limit=12`
  );
  const newAnime = await newAnimeResponse.json();
  return (
    <div className="mt-10 p-2">
      <AnimeList
        api={newAnime}
        titleHeader={"Episode terbaru"}
        titleHeaderLink={"/new"}
        titleHeaderLinkContent={"Lihat Semua ❯"}
      />
      <AnimeList
        api={newAnime}
        titleHeader={"Sedang Populer"}
        titleHeaderLink={"/populer"}
        titleHeaderLinkContent={"Lihat Semua ❯"}
      />
    </div>
  );
};

export default Home;
