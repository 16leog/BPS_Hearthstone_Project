import Image from 'next/image';
export interface IFilterButton {
  sampleTextProp: string;
}

type FilterButtonProps = {
  text: string;
  width: string;
  innerwidth: string;
  color: string;
  image?: string;
  image2?: string;
  funct?: () => void;
};

export default function FilterButton({
  text,
  width,
  innerwidth,
  color,
  image,
  image2,
  funct,
}: FilterButtonProps) {
  return (
    <>
      <button
        className={`bg-gradient-to-b p-0.5  from-gold via-gold_2 via-80% to-gold_3 rounded-full flex flex-col justify-center items-center`}
        onClick={funct}
      >
        <p
          className={` bg-${color}  text-white text-xs text-center max-lg:w-28 max-xl:w-36 h-10 xl:w-40 xl:h-10 rounded-full flex flex-row justify-center gap-1 items-center`}
        >
          {image && <Image src={image} alt="" width={20} height={20}></Image>}
          {text}
          {image2 && <Image src={image2} alt="" width={20} height={20} className=""></Image>}
        </p>
      </button>
    </>
  );
}