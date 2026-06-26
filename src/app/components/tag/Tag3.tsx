export const Tag3 = (props: {
  className?: string,
  text1: string,
  text2: string
}) => {
  const {className = "", text1, text2} = props;
  return (
    <>
      <div className={className}>
        <div className="font-[400] text-[16px] text-[#A6A6A6]">
          {text1}
        </div>
        <div className="font-[400] text-[16px] text-[#121212]">
          {text2}
        </div>
      </div>
    </>
  )
}