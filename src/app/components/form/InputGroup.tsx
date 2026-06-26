export const InputGroup = (props: {
  type?: string,
  label: string,
  name: string,
  id: string
}) => {
  const {type = "text", label, name, id} = props;
  return (
    <>
      <div>
        <label htmlFor={id} className="font-[500] text-[14px] text-black">{label}</label>
        <input type={type} className="bg-white border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] w-full mt-[5px] font-[500] text-[14px]" name={name} id={id} />
      </div>
    </>
  )
}