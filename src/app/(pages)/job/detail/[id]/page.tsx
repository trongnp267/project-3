import { Button1 } from "@/app/components/button/Button1";
import { Tag1 } from "@/app/components/tag/Tag1";
import { Tag2 } from "@/app/components/tag/Tag2";
import { FaBriefcase, FaUserTie } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function JobDetail() {
  return (
    <>
      <div className="pt-[30px] pb-[60px]">
        <div className="contain">
          <div>
            <div className="grid grid-cols-[770fr_395fr] gap-[20px]">
              <div>
                {/* Thông tin công việc */}
                <div className="p-[20px] bg-white border border-[#DEDEDE] rounded-[8px]">
                  <h1 className="font-[700] text-[28px] text-[#121212] mb-[10px]">
                    Front End Developer ( Javascript, ReactJS)
                  </h1>
                  <div className="font-[400] text-[16px] text-[#414042] mb-[10px]">
                    LG CNS Việt Nam
                  </div>
                  <div className="font-[700] text-[20px] text-[#0088FF] mb-[20px]">
                    1.000$ - 1.500$
                  </div>
                  <Button1 label="Ứng tuyển" />
                  <div className="my-[20px] grid grid-cols-3 gap-[16px]">
                    <img src="/assets/images/banner-1.png" alt="" className="rounded-[4px] object-cover" />
                    <img src="/assets/images/banner-2.png" alt="" className="rounded-[4px] object-cover" />
                    <img src="/assets/images/banner-3.png" alt="" className="rounded-[4px] object-cover" />
                  </div>
                  <div className="flex flex-col gap-[10px] mb-[10px]">
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
                      label="Tầng 15, tòa Keangnam Landmark 72, Mễ Trì, Nam Tu Liem, Ha Noi"
                    />
                  </div>
                  <div className="flex gap-[8px] flex-wrap">
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
                {/* Hết Thông tin công việc */}
              </div>
              <div>
                Phai
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}