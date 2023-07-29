import { useRef } from 'react';
type FilterScrollProps = {
  list: Array<string>;
  funct?: () => void;
};

export default function FilterScroll({ list, funct }: FilterScrollProps) {
  const ref = useRef(null);

  return (
    <div
      className={` bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 h-auto mt-20 p-0.5 z-10 w-52 max-sm:hidden lg:absolute rounded-xl flex flex-col items-center`}
    >
      <div
        className="flex flex-col   bg-brown w-full z-50 max-h-80 overflow-y-auto rounded-xl text-shadow-lg shadow-black"
        ref={ref}
      >
        {list.map((item) => (
          <button
            key={item}
            className=" hover:text-accents text-white text-left px-2 py-1"
            onClick={funct}
            onBlur={funct}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
