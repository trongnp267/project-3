import Link from "next/link"
import { Tag1 } from "../tag/Tag1"
import { FaBriefcase, FaUserTie } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { Tag2 } from "../tag/Tag2"

export const JobCard = () => {
  return (
    <>
      <div className="card-item">
        <Link href="#">
          <img src="/assets/images/bg-card.svg" alt="" className="inner-bg" />
          <div className="inner-main">
            <div className="inner-image my-[20px] w-[116px] aspect-[1/1]">
              <img src="/assets/images/logo-company-1.png" alt="" />
            </div>
            <h3 className="font-[700] text-[18px] text-[#121212] text-center mx-[16px] mb-[6px]">
              Frontend Engineer (ReactJS)
            </h3>
            <div className="font-[400] text-[14px] text-[#121212] text-center mx-[16px] mb-[12px]">
              LG CNS Việt Nam
            </div>
            <div className="font-[600] text-[16px] text-[#0088FF] text-center mx-[16px] mb-[6px]">
              1.000$ - 1.500$
            </div>
            <div className="flex flex-col gap-[6px] mb-[12px] items-center">
              <Tag1
                icon={<FaUserTie className="text-[16px]" />}
                label="Fresher"
              />
              <Tag1
                icon={<FaBriefcase className="text-[16px]" />}
                label="Tại văn phòng"
              />
              <Tag1
                icon={<FaLocationDot className="text-[16px]" />}
                label="Ha Noi"
              />
            </div>
            <div className="flex justify-center gap-[8px] flex-wrap mb-[20px]">
              <Tag2
                label="ReactJS"
              />
              <Tag2
                label="NextJS"
              />
              <Tag2
                label="Javascript"
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}