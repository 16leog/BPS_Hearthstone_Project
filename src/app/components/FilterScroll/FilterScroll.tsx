import { useRef } from 'react';
type FilterScrollProps = {
  list: Array<string>;
  funct(atk: string): void;
};

export default function FilterScroll({ list, funct }: FilterScrollProps) {
  const ref = useRef(null);

  return (
    <div
      className={` bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 h-auto mt-12 p-0.5 z-40 w-32 lg:w-40 max-sm:mt-9 max-sm:h-32 absolute rounded-xl flex flex-col items-center`}
    >
      <div
        className="flex flex-col   bg-brown w-full z-50 max-h-80 overflow-y-auto no-scrollbar rounded-xl text-shadow-lg shadow-black"
        ref={ref}
      >
        {list.map((item) => (
          <button
            key={item}
            className=" hover:text-accents text-white text-md text-left px-2 py-1"
            onClick={() => funct(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
