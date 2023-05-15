import { IconBaseProps } from "react-icons/lib";

interface ButtonContainerProps {
  text: string;
  icon: IconBaseProps;
  elementType: "button" | "p";
}

export function ButtonIconsContainer({
  text,
  icon,
  elementType,
}: ButtonContainerProps) {
  return (
    <div className="flex items-center gap-2">
      <>{icon}</>
      {elementType === "button" ? (
        <button type="button" className="hidden xl:block text-sm">
          {text}
        </button>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
}
