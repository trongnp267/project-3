export const SelectGroup = (props: {
  label: string,
  name: string,
  id: string,
  className?: string
  options: {
    value: string,
    label: string
  }[]
}) => {
  const {label, name, id, className = "", options} = props;
  return (
    <>
      <div className={className}>
        <label htmlFor={id} className="font-[500] text-[14px] text-black">{label}</label>
        <select className="bg-white border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] w-full mt-[5px] font-[500] text-[14px]" name={name} id={id}>
          {options.map((item, index) => (
            <option key={index} value={item.value}>{item.label}</option>
          ))}
        </select>
      </div>
    </>
  )
}