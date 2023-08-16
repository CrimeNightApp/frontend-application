import { MoonIcon } from '@heroicons/react/24/outline';

const Logo = () => {
  return (
    <div className="pl-6">
      <a href="/" className="flex items-center py-7 px-2">
        <MoonIcon className="h-6 w-6 mr-3"/>
        <span className="font-medium text-xl">Crimenight</span>
      </a>
    </div>
  );
}

export default Logo;
