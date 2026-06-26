import { Button1 } from "@/app/components/button/Button1";
import { Tag1 } from "@/app/components/tag/Tag1";
import { Tag2 } from "@/app/components/tag/Tag2";
import { Tag3 } from "@/app/components/tag/Tag3";
import Link from "next/link";
import { FaBriefcase, FaUserTie } from "react-icons/fa";
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";

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

                {/* Mô tả chi tiết */}
                <div className="p-[20px] bg-white border border-[#DEDEDE] rounded-[8px] mt-[20px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum hic est minima, quos optio tenetur ea mollitia quam et laboriosam dolore obcaecati ducimus, cumque pariatur similique tempore minus veniam accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi praesentium vel nesciunt quam soluta officia veritatis cupiditate nam? Voluptas ea itaque fugit dignissimos autem quod amet molestiae sed fugiat impedit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dicta sapiente inventore assumenda ex illum quasi porro voluptates quisquam, est nobis laudantium voluptas, ipsam dolores quia voluptatum maiores dignissimos libero?
                </div>
                {/* Hết Mô tả chi tiết */}
              </div>
              <div>
                {/* Thông tin công ty */}
                <div className="bg-white border border-[#DEDEDE] p-[20px] rounded-[8px]">
                  <div className="flex gap-[8px] mb-[20px]">
                    <img src="/assets/images/logo-company-2.png" alt="" className="w-[100px] aspect-[1/1] rounded-[4px] object-contain" />
                    <div className="flex-1">
                      <div className="font-[700] text-[18px] text-[#121212] mb-[10px]">
                        LG CNS Việt Nam
                      </div>
                      <Link href="#" className="font-[400] text-[16px] text-[#0088FF] flex gap-[8px] items-center">
                        Xem công ty <FaArrowRightLong className="text-[16px]" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <Tag3
                      className="flex justify-between"
                      text1="Mô hình công ty"
                      text2="Sản phẩm"
                    />
                    <Tag3
                      className="flex justify-between"
                      text1="Quy mô công ty"
                      text2="151 - 300 nhân viên"
                    />
                    <Tag3
                      className="flex justify-between"
                      text1="Thời gian làm việc"
                      text2="Thứ 2 - Thứ 6"
                    />
                    <Tag3
                      className="flex justify-between"
                      text1="Làm việc ngoài giờ"
                      text2="Không có OT"
                    />
                  </div>
                </div>
                {/* Hết Thông tin công ty */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}