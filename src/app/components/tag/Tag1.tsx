import { ReactNode } from "react"

export const Tag1 = (props: {
  icon: ReactNode,
  label: string
}) => {
  const {icon, label} = props;
  return (
    <>
      <div className="flex items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
        {icon} {label}
      </div>
    </>
  )
}