import { useEffect, useState } from 'react';

const SubTabCard = ({ title, icon, color, delay, onClick }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getIcon = () => {
    switch (icon) {
      case 'book':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 w-full justify-center items-center">
            <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
          </svg>
        );
      case 'document':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 w-full justify-center items-center">
            <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z" clipRule="evenodd" />
          </svg>
        );
      case 'bookmark':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 w-full justify-center items-center">
            <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
          </svg>
        );
      case 'superman':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6 w-full justify-center items-center" viewBox="0 0 48 48">
            <path fill="#C62828" d="M0 15L8 7 40 7 48 15 24 43z"/>
            <path fill="#FFEB3B" d="M33 15c-.1-3.4-3.8-6-9.7-6-5.9-.1-8.4 2.8-8.4 2.8s-4.5 4.9 10 4.9 14 5.8 14 5.8l6.3-7.5L41 10.8V15H33zM13 9H8.8l-6.1 6.1.2.2L6 18.9C7.7 11.8 13 9 13 9zM17.3 32.1l.2.2 6.5 7.6 5.6-6.6.9-1.2C30.6 32.2 24.8 34 17.3 32.1z"/>
            <path fill="#FFEB3B" d="M34.1 11.2c.5-.5 1-2.2 1-2.2h-3C32 9 33.4 10.1 34.1 11.2zM23.5 29c14 .7 9.8-3.4 9.8-3.4s-.5-.8-11-1.4c-10.5-.6-13.2-1.8-13.2-1.8l5.2 6.1C15.8 26.9 20.7 25.9 23.5 29z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`subtab-card bg-${color}-50 rounded-lg p-4 cursor-pointer hover:bg-${color}-100 border border-${color}-200 ${show ? 'show' : ''}`}
      onClick={onClick}
    >
      <div className="text-center">
        <span className="text-xl mb-2 block">
          {getIcon()}
        </span>
        <h4 className="font-medium text-gray-800">{title}</h4>
      </div>
    </div>
  );
};

export default SubTabCard;