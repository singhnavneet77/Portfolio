import React, { useEffect } from 'react';
import '../assets/styles/Loader.scss'
interface LoaderProps {
  onFinish: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish();
    }, 1000); // Loader's animation duration

    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div className="aminWrapper-sc-design-0 cirAlign" id="loader">
      <div className="aminCircle-sc-design-1 revCircle"></div>
    </div>
  );
};

export default Loader;
