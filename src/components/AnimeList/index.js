import AnimeCard from "./Card";
import AnimeHeader from "./Header";

const AnimeList = ({
  api,
  titleHeader,
  titleHeaderLink,
  titleHeaderLinkContent,
}) => {
  return (
    <div className="mb-10">
      <AnimeHeader
        title={titleHeader}
        link={titleHeaderLink}
        linkContent={titleHeaderLinkContent}
      />
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {api.data.map((anime) => {
          console.log(anime.images.webp.image_url);
          return (
            <div key={anime.mal_id}>
              <AnimeCard
                title={anime.title}
                image={anime.images.webp.image_url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimeList;
