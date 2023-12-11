import Image from "next/image";

const Card = ({ title, image }) => {
  return (
    <>
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="w-full">
          <Image
            priority={true}
            className="rounded-md h-40 md:h-56 lg:h-72 object-cover"
            src={image}
            width={300}
            height={300}
          />
          <div
            tabIndex={0}
            className="dropdown-content card card-compact -left-[10%] top-0 min-h-[120%] min-w-[120%] z-50 rounded-md shadow bg-gray-800 text-primary-content"
          >
            <figure>
              <Image
                priority={true}
                className="h-36 object-cover"
                src={image}
                width={300}
                height={300}
              />
            </figure>
            <div class="card-body">
              <h2 className="text-xs truncate-2-lines">{title}</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="dropdown dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className="card rounded-md w-full max-h bg-base-100"
        >
          <figure>
            <Image
              priority={true}
              className="rounded-md h-40 md:h-56 lg:h-72 object-cover"
              src={image}
              alt={title}
              width={300}
              height={400}
            />
          </figure>
        </div>
        <div
          tabIndex={0}
          className="dropdown-content z-[1] card card-compact top-0 h-full w-full rounded-md shadow bg-primary text-primary-content"
        >
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 className="text-xs truncate-2-lines">{title}</h2>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Card;
