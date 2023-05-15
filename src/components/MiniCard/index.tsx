import Link from "next/link";
import { IconBaseProps } from "react-icons/lib";

interface MiniCardProps {
  title: string;
  text: string;
  icon: IconBaseProps;
  social?: string;
  color?: "whatsapp" | "pombalstore";
  url?: string;
}

export function MiniCard({
  title,
  text,
  icon,
  social,
  url = "",
}: MiniCardProps) {
  return (
    <div className="flex gap-5">
      <>{icon}</>
      <ul className="flex flex-col gap-2">
        <li className="font-medium">{title}</li>
        <li className="text-sm md:text-base">{text}</li>
        {social ? (
          <Link
            href={url}
            className="mt-1 text-green-600 w-max"
            target="_blank"
          >
            {social}
          </Link>
        ) : null}
      </ul>
    </div>
  );
}
