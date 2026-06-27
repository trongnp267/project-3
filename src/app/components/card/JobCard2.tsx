import { FaBriefcase, FaUserTie } from "react-icons/fa"
import { Tag1 } from "../tag/Tag1"
import { Tag2 } from "../tag/Tag2"
import Link from "next/link"
import { Tag4 } from "../tag/Tag4"

export const JobCard2 = () => {
  return (
    <>
      <div className="card-item">
        <img src="/assets/images/bg-card.svg" alt="" className="inner-bg" />
        <div className="inner-main py-[20px]">
          <h3 className="font-[700] text-[18px] text-[#121212] text-center mx-[16px] mb-[6px]">
            Frontend Engineer (ReactJS)
          </h3>
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
          <div className="flex justify-center gap-[12px] flex-wrap">
            <Tag4
              text="Sửa"
              className="bg-[#FFB200] text-black"
              link="#"
            />
            <Tag4
              text="Xóa"
              className="bg-[#FF0000] text-white"
              link="#"
            />
          </div>
        </div>
      </div>
    </>
  )
}