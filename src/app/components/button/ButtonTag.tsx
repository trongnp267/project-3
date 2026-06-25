import Link from "next/link";

export const ButtonTag = (props: {
  label: string,
  link: string
}) => {
  const {label, link} = props;

  return (
    <Link href={link} className="border border-[#414042] rounded-[20px] bg-[#121212] hover:bg-[#414042] py-[8px] px-[22px] font-[500] text-[16px] text-[#DEDEDE] hover:text-white">
      {label}
    </Link>
  )
}