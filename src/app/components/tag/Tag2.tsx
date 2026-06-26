export const Tag2 = (props: {
  label: string
}) => {
  const {label} = props;
  return (
    <>
      <div className="rounded-[20px] border border-[#DEDEDE] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
        {label}
      </div>
    </>
  )
}