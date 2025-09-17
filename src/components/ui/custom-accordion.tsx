import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "../../lib/utils";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface CustomAccordionProps {
  items: AccordionItem[];
  className?: string;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  items,
  className,
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id);

        return (
          <div
            key={item.id}
            className={cn(
              "border bg-gray-100 border-solid border-gray-200 p-2 rounded-3xl cursor-pointer transition-all duration-300 ease-in-out",
              isOpen && " hover:border-green-600"
            )}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className={cn(
                "w-full cursor-pointer bg-white shadow-sm px-6 py-4 text-left text-gray-800 font-medium transition-all duration-600 ease-in-out",
                "flex items-center justify-between",
                isOpen && "bg-white rounded-t-2xl",
                !isOpen && "rounded-2xl"
              )}
            >
              <span className="flex-1 text-left text-lg">{item.question}</span>
              <div className="shrink-0 ml-4 ">
                <div className="relative h-5 w-5">
                  <Plus
                    className={cn(
                      "absolute inset-0 h-8 w-8 text-green-600 transition-all duration-700 ease-in-out translate-y-[-20%]",
                      isOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
                    )}
                  />
                  <Minus
                    className={cn(
                      "absolute inset-0 h-8 w-8 text-green-600 transition-all duration-700 ease-in-out",
                      isOpen
                        ? "rotate-0 opacity-100"
                        : "-rotate-45 opacity-0 translate-y-[-55%]"
                    )}
                  />
                </div>
              </div>
            </button>

            <div
              className={cn(
                "overflow-hidden transition-all duration-600 ease-in-out",
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="px-6 py-4 text-gray-700 bg-white rounded-b-2xl">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomAccordion;
