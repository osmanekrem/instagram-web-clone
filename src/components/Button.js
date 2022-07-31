export default function Button({type = "button", children, ...props}) {
  return (
    <button 
        {...props}
        type={type} 
        className="h-[30px] my-2 border border-transparent rounded flex justify-center items-center w-full text-sm font-semibold px-[9px] py-[5px] bg-link-light disabled:opacity-40 text-white"
    >
        {children}
    </button>
  )
}
