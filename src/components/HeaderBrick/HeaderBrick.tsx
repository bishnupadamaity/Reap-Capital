import { Badge } from "../ui/badge";

const HeaderBrick = ({ text }: { text: string }) => {
  return (
    <Badge
      variant="outline"
      className="mb-4 bg-white rounded-[20px_5px_5px_5px] border-[#1caa7b] text-[#109157] px-6 py-2 font-semibold text-base"
    >
      {text}
    </Badge>
  );
};

export default HeaderBrick;
