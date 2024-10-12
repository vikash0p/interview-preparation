'use client'
import Placeholder from "@/components/TestProject/Placeholder";

export interface GridProps {
  color?: string;
  size?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}



export default function Grid({color = "#cacaca",size = 20,children,className,style = { backgroundColor: "white",},}: GridProps) {
  return (
    <div
      style={{
        ...style,
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(to right, ${color} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
      className={className} >
      {children ?? <Placeholder size={size} />}
    </div>
  );
}
