export const Select2 = (props: {
  totalPage?: number
}) => {
  const {totalPage = 1} = props;
  return (
    <>
      <select 
        name="" 
        id=""
        className="py-[12px] px-[18px] border border-[#DEDEDE] bg-white rounded-[8px] font-[400] text-[16px] text-[#414042]"
      >
        {Array(totalPage).fill("").map((_, index) => (
          <option key={index} value={index + 1}>Trang {index + 1}</option>
        ))}
      </select>
    </>
  )
}