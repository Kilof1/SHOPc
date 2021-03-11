import { RefObject } from 'react';
import useEventListener from './useEventListener';

const useOutsideClick = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event?: E) => void,
) => {
  useEventListener(
    'mousedown',
    (event: any): void => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickAway(event);
      }
    },
    {
      passive: true,
      capture: false,
    },
  );

  useEventListener(
    'touchstart',
    (event: any): void => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickAway(event);
      }
    },
    {
      capture: false,
      passive: true
    },
  );
};

export default useOutsideClick;