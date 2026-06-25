import Link from "next/link"
import { FaUserTie } from "react-icons/fa"

export const CompanyCard = () => {
  return (
    <div className="card-item">
      <Link href="#">
        <img src="/assets/images/bg-card.svg" alt="" className="inner-bg" />
        <div className="inner-main">
          <div className="inner-image w-[160px] aspect-square mt-[32px] mb-[24px]">
            <img src="/assets/images/logo-company-1.png" alt="" />
          </div>
          <h3 className="font-[700] text-[18px] text-[#121212] text-center mb-[24px] h-[50px] line-clamp-2 px-[16px]">
            LG Electronics Development Vietnam (LGEDV)
          </h3>
          <div className="bg-[#F7F7F7] py-[12px] px-[16px] flex items-center justify-between">
            <div className="font-[400] text-[#414042] text-[14px]">
              Ho Chi Minh
            </div>
            <div className="flex items-center gap-[6px] font-[400] text-[14px] text-[#121212]">
              <FaUserTie className="text-[#000096] text-[16px]" />
              5 Việc làm
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}