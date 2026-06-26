export const Select1 = (props: {
  options: {
    value: string,
    label: string
  }[]
}) => {
  const {options} = props;
  return (
    <select 
      name="" 
      id=""
      className="bg-white border border-[#DEDEDE] py-[8px] px-[18px] font-[400] text-[16px] text-[#414042] rounded-[20px]"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}