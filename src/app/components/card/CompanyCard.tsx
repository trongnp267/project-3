import Link from "next/link"
import { FaUserTie } from "react-icons/fa"

export const CompanyCard = () => {
  return (
    <div className="card-item">
      <Link href="#">
        <img src="/assets/images/bg-card.svg" alt="" className="inner-bg" />
        <div className="inner-main">
          <div className="inner-image sm:w-[160px] w-[125px] aspect-square sm:mt-[32px] mt-[20px] sm:mb-[24px] mb-[16px]">
            <img src="/assets/images/logo-company-1.png" alt="" />
          </div>
          <h3 className="font-[700] sm:text-[18px] text-[14px] text-[#121212] text-center sm:mb-[24px] mb-[16px] sm:h-[50px] h-[40px] line-clamp-2 sm:px-[16px] px-[8px]">
            LG Electronics Development Vietnam (LGEDV)
          </h3>
          <div className="bg-[#F7F7F7] py-[12px] sm:px-[16px] px-[8px] flex items-center justify-between sm:flex-row flex-col gap-[12px]">
            <div className="font-[400] text-[#414042] sm:text-[14px] text-[12px]">
              Ho Chi Minh
            </div>
            <div className="flex items-center gap-[6px] font-[400] sm:text-[14px] text-[12px] text-[#121212]">
              <FaUserTie className="text-[#000096] text-[16px]" />
              5 Việc làm
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}