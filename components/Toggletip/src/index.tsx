import React, { useEffect } from 'react';
import './index.scss';

const alignOptions = ['bottom', 'top', 'left', 'right'] as const;

interface Props {
  children: React.ReactNode;
  text: string;
  align: (typeof alignOptions)[number];
}

export const Toggletip = ({ children, text, align = alignOptions[0] }: Props) => {
  const tipsRef = React.useRef<(HTMLDivElement | null)[]>([]);
  console.log(align, alignOptions);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // const [entry] = entries;
        console.log(entries);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      },
    );

    if (tipsRef.current) tipsRef.current.forEach((tip) => tip && observer.observe(tip));

    return () => {
      if (tipsRef.current) tipsRef.current.forEach((tip) => tip && observer.unobserve(tip));
    };
  }, [tipsRef]);

  return (
    <div className="denhaag-toggletip">
      {alignOptions.map((opt, index) => (
        <div
          key={opt}
          ref={(el) => (tipsRef.current[index] = el)}
          className={`denhaag-toggletip__tip denhaag-table__tip--${opt}`}
        >
          {text}
        </div>
      ))}
      {children}
    </div>
  );
};

export default Toggletip;
