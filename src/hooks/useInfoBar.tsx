import { useEffect, useState } from 'react';

export function useInfoBarStatus() {
  const [hidden, setHidden] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHidden(
        sessionStorage.getItem('info-bar-hidden') === 'true' ? true : false
      );
      setIsLoading(false);
    }
  }, []);

  const toggleVisibility = () => {
    setHidden((prev) => {
      const newVisibility = !prev;
      sessionStorage.setItem('info-bar-hidden', String(newVisibility));
      return newVisibility;
    });
  };

  return {
    visible: !isLoading && !hidden,
    toggleVisibility,
  };
}
