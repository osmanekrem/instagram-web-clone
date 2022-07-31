import SVG from "react-inlinesvg";

export default function Icon({name, size = 16, ...props}) {
  return (
    <SVG 
        width={size} 
        height={size} 
        src={`${process.env.PUBLIC_URL}/icons/${name}.svg`}
        {...props}
    />
  )
}
