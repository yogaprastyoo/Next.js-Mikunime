import AnimeList from "@/components/AnimeList";

const New = async () => {
  const newAnimeResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now`
  );
  const newAnime = await newAnimeResponse.json();
  return (
    <div className="mt-10 p-2">
      <AnimeList
        api={newAnime}
        titleHeader={"Episode terbaru"}
        titleHeaderLink={"/"}
        titleHeaderLinkContent={"❮"}
      />
    </div>
  );
};

export default New;
