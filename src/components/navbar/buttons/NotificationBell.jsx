import { BellIcon } from '@heroicons/react/24/outline';

export const NotificationBell = () => {
  return (
    <div className="flex items-center flex-grow">
      <div className="flex items-center px-2 py-2 rounded-full bg-PRIMARY">
        <button>
          <BellIcon className="w-6 h-6 text-HIGHLIGHT"/>
        </button>
      </div>
    </div>
  );
}