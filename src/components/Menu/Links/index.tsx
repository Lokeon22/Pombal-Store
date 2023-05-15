import Link from "next/link";

interface LiLinkProps {
  text: string;
  category: string;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  home?: boolean;
}

export function LiLink({ text, category, home, setMenu }: LiLinkProps) {
  return (
    <li>
      <Link
        className="hover:text-blue-300 hover:duration-300"
        onClick={() => setMenu(false)}
        href={home ? "/" : `/collections/${category}`}
      >
        {text}
      </Link>
    </li>
  );
}
