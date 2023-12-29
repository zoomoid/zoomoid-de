import Image from "next/image";

export interface CloudProps {
  // width: string;
  // position?: string;
  // margin?: string;
  animationDuration?: string;
  animationDelay?: string;
  src?: string;
  className?: string;
}

export default function Cloud({
  animationDelay = "1s",
  animationDuration = "10s",
  src = "/img/all-things-must-end/assets/cloud.png",
  className,
}: CloudProps) {
  return (
    <div
      className={`${className} absolute mix-blend-hard-light cloud`}
      style={{
        animationDuration: animationDuration,
        animationDelay: animationDelay,
        // width: width,
        // margin: margin,
      }}
    >
      <Image
        src={src}
        alt=""
        width={2000}
        height={1339}
        className=""
        style={{
          filter: "saturate(0) contrast(0.3)",
        }}
      ></Image>
    </div>
  );
}
