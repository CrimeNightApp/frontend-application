import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Search = () => {
  return (
    <div className="flex items-center flex-grow">
      <div className="flex items-center pl-2 rounded-full bg-PRIMARY w-full max-w-xl">
        <button>
          <div className="flex items-center justify-center w-8 h-8 bg-SECONDARY rounded-full">
            <MagnifyingGlassIcon className="w-5 h-4 text-HIGHLIGHT"/>
          </div>
        </button>
        <input className="w-full py-3 pl-3 pr-5 bg-transparent placeholder-TEXT-DULL outline-none" placeholder="Search"/>
      </div>
    </div>
  );
}

export default Search;
