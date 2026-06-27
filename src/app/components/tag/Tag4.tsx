import Link from "next/link"

export const Tag4 = (props: {
  className: string, 
  text: string,
  link: string
}) => {
  const {className, text, link} = props;
  return (
    <>
      <Link href={link} className={"inline-block px-[20px] py-[8px] rounded-[4px] font-[400] text-[14px] " + className}>
        {text}
      </Link>
    </>
  )
}