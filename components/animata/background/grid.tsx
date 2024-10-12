'use client'




export interface GridProps {
  color?: string;
  size?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}



export default function Grid({color = "#cacaca",size = 20,children,className,style = { backgroundColor: "white",},}: GridProps) {
  const widthSpread = 100;
  const heightSpread = 20;
  return (
    <div
      style={{
        ...style,
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(to right, ${color} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
      className={className}
    >
      <div
        style={{
          width: `${widthSpread * size + 1}px`,
          height: `${heightSpread * size + 1}px`,
        }}
        className=" min-h-screen max-w-full    "
      >
      {children}
      </div>
    </div>
  );
}
