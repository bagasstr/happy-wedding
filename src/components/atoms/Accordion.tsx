"use client";
import cn from "@/lib/cn";
import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";

function Accordion({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='overflow-hidden'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          isOpen ? "text-primary" : "text-foreground",
          "w-full p-4 text-left font-semibold focus:outline-none"
        )}>
        <h1 className='flex gap-x-2 items-center'>
          <span>
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
          {title}
        </h1>
      </button>
      <div
        className={`overflow-hidden transition-all ease-in-out duration-300 ${
          isOpen ? "max-h-48" : "max-h-0"
        }`}>
        <div className='px-10 py-4'>
          <p>{content}</p>
        </div>
      </div>
      <hr className='my-2 border-primary border-opacity-30' />
    </div>
  );
}

export default Accordion;
