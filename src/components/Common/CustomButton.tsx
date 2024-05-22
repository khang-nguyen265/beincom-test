import React from 'react';

interface CustomButtonProps {
  onClick: () => void;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
   onClick,
    isLoading=false, 
    children, 
    className }) => {
  const buttonClasses = ` overflow-hidden ${isLoading && 'relative'  } ${className || ''}`;

  return (
    <button
      id="custom-button"
      onClick={onClick}
      className={buttonClasses}
      disabled={isLoading}
    >
      {children}
      {isLoading && (
        <span className="absolute inset-0 flex justify-center items-center">
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.717L6.427 17.55a7.968 7.968 0 01-2.755-2.259l1.668-1.668a5.985 5.985 0 002.53 1.396l1.465 2.463z"
            ></path>
          </svg>
        </span>
      ) }
    </button>
  );
};

export default CustomButton;
