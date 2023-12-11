import Link from "next/link";

const Header = ({ title, link, linkContent }) => {
  return (
    <div className="mb-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <Link href={link} className="btn ">
        {linkContent}
      </Link>
    </div>
  );
};

export default Header;
