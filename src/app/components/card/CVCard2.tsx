import { FaBriefcase, FaCheckCircle, FaUserTie } from "react-icons/fa"
import { Tag1 } from "../tag/Tag1"
import { Tag4 } from "../tag/Tag4"

export const CVCard2 = () => {
  return (
    <>
      <div className="card-item">
        <img src="/assets/images/bg-card.svg" alt="" className="inner-bg" />
        <div className="inner-main py-[20px]">
          <h3 className="font-[700] text-[18px] text-[#121212] text-center mx-[16px] mb-[12px]">
            Frontend Engineer (ReactJS)
          </h3>
          <div className="font-[400] text-[14px] text-black mb-[6px] text-center mx-[16px]">
            Công ty: <b>Công ty ABC</b>
          </div>
          <div className="font-[600] text-[16px] text-[#0088FF] text-center mx-[16px] mb-[6px]">
            1.000$ - 1.500$
          </div>
          <div className="flex flex-col gap-[6px] mb-[12px] items-center mx-[16px]">
            <Tag1
              icon={<FaUserTie className="text-[16px]" />}
              label="Fresher"
            />
            <Tag1
              icon={<FaBriefcase className="text-[16px]" />}
              label="Tại văn phòng"
            />
            <Tag1
              icon={<FaCheckCircle className="text-[16px]" />}
              label="Chưa duyệt"
            />
          </div>
          <div className="flex justify-center gap-[8px] flex-wrap mx-[16px]">
            <Tag4
              text="Xem"
              className="bg-[#0088FF] text-white"
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