export default function Separator({label = "OR"}) {
  return (
    <div className="mt-2.5 mb-[18px] flex items-center">
        <div className="bg-db h-px flex-1"></div>
        <span className="font-semibold text-8e text-[13px] mx-[18px]">{label}</span>
        <div className="bg-db h-px flex-1"></div>
    </div>
  )
}
