import Link from "next/link";

interface CategoryProps {
  text: string;
  url: string;
}

export function CategoryContainer({ text, url }: CategoryProps) {
  return (
    <div className="flex items-center justify-between my-8 md:my-10 px-2">
      <h2 className="border-b-4 border-blue-400 text-xl">{text}</h2>
      <Link
        className="text-sm hover:text-blue-400 hover:duration-300"
        href={url}
      >
        Ver Mais
      </Link>
    </div>
  );
}
