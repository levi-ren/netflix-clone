import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  setActiveMovie: (e: any) => void;
  data: any;
  children: ReactNode;
}

// const el = document.createElement("div");

export default function Modal({ data, setActiveMovie, children }: ModalProps) {
  const cointainer = document.getElementById("modal-container")!;
  const me = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById("modal-container");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (me.current && data && mounted) {
      const meRect = me.current.getClientRects()[0];
      const meX = meRect.width / 2;
      const meY = meRect.height / 2;

      let centerX = data.thumbnailX - meX;
      let centerY = data.thumbnailY - meY;

      me.current.style.left = `${centerX}px`;
      me.current.style.top = `${centerY}px`;
      me.current.style.visibility = `visible`;
    }
  }, [data, mounted]);

  return (
    <>
      {mounted
        ? createPortal(
            <div
              ref={me}
              className="invisible fixed w-full max-w-[19.8vw] overflow-hidden rounded  transition-all duration-300"
              onMouseEnter={() => {}}
              onPointerLeave={() => {
                setTimeout(() => {
                  setActiveMovie(null);
                }, 200);
              }}
            >
              {children}
            </div>,
            cointainer
          )
        : null}
    </>
  );
}
