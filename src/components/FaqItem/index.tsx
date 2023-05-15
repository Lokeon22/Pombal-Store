interface FaqListProps {
  title: string;
  text: string;
}

export function FaqList({ title, text }: FaqListProps) {
  return (
    <li>
      <h2 className="text-gray-50 font-medium text-lg">{title}</h2>
      <p className="text-gray-300 mt-2">{text}</p>
    </li>
  );
}
