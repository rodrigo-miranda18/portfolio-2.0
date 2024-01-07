import { useEffect, RefObject, MouseEvent } from 'react';

export default function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent<HTMLElement>) => void,
) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
}
