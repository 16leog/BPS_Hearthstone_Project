import Image from 'next/image';
import { useRouter } from 'next/navigation';
import searchIcon from 'public/Search.svg';
import { FormEvent, useState } from 'react';

export interface ISearchbar {
  sampleTextProp: string;
}

export default function Searchbar({ sampleTextProp }: ISearchbar) {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
    setSearch('');
    router.push(`/search/${search}?q=${search}`);
  };
  return (
    <form
      className="flex w-1/2 max-sm:w-5/6 rounded-full h-16 bg-navbarColor mb-10"
      onSubmit={handleSubmit}
    >
        <button>
          <Image
            src={searchIcon}
            alt=""
            className="flex flex-row justify-center ml-2"
          />
        </button>
        <input
          className="m-6 max-sm:ml-1 w-11/12 bg-transparent focus:outline-none opacity-80 text-white text-l p-2 align-middle"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search cards"
        />
        <button className="max-sm:mr-4 mr-8 text-goldFont opacity-50">
          SEARCH
        </button>
      
    </form>
  );
}
