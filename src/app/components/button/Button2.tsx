export const Button2 = (props: {
  className?: string,
  label: string
}) => {
  const {className = "", label} = props;
  return (
    <>
      <div className={className}>
        <button className="w-full max-w-[115px] h-[48px] bg-[#0088FF] rounded-[4px] flex items-center justify-center font-[700] text-[16px] text-white">
          {label}
        </button>
      </div>
    </>
  )
}