export const Button1 = (props: {
  label: string
}) => {
  const {label} = props;
  return (
    <>
      <button className="bg-[#0088FF] rounded-[4px] font-[700] text-[16px] text-white h-[48px] w-full px-[10px]">
        {label}
      </button>
    </>
  )
}