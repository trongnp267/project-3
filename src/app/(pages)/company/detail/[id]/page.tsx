import { JobCard } from "@/app/components/card/JobCard";
import { Tag3 } from "@/app/components/tag/Tag3";
import { FaLocationDot } from "react-icons/fa6";

export default function CompanyDetail() {
  return (
    <>
      <div className="pt-[30px] pb-[60px]">
        <div className="contain">
          {/* Thông tin công ty */}
          <div className="border border-[#DEDEDE] rounded-[8px] bg-white p-[20px]">
            <div className="flex items-center gap-[16px] mb-[20px] sm:flex-nowrap flex-wrap">
              <img src="/assets/images/logo-company-2.png" alt="" className="w-[100px] aspect-[1/1] rounded-[4px]" />
              <div className="sm:flex-1">
                <h1 className="font-[700] text-[28px] text-[#121212] mb-[10px]">
                  LG CNS Việt Nam
                </h1>
                <div className="flex items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                  <FaLocationDot className="text-[16px]" /> Tầng 15, tòa Keangnam Landmark 72, Mễ Trì, Nam Tu Liem, Ha Noi
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <Tag3
                className="flex gap-[5px] items-center"
                text1="Mô hình công ty:"
                text2="Sản phẩm"
              />
              <Tag3
                className="flex gap-[5px] items-center"
                text1="Quy mô công ty:"
                text2="151 - 300 nhân viên"
              />
              <Tag3
                className="flex gap-[5px] items-center"
                text1="Thời gian làm việc:"
                text2="Thứ 2 - Thứ 6"
              />
              <Tag3
                className="flex gap-[5px] items-center"
                text1="Làm việc ngoài giờ:"
                text2="Không có OT"
              />
            </div>
          </div>
          {/* Hết Thông tin công ty */}

          {/* Mô tả chi tiết */}
          <div className="border border-[#DEDEDE] rounded-[8px] bg-white p-[20px] mt-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maiores excepturi expedita voluptate veniam, mollitia eligendi cupiditate suscipit, aperiam aliquam itaque quidem sunt soluta sed maxime, nam ducimus dignissimos dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex nobis excepturi. Accusamus corrupti adipisci quisquam suscipit, quibusdam fuga sunt possimus, exercitationem voluptates quasi, explicabo est. Dicta tempore saepe sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ullam repudiandae nihil accusantium temporibus dolor quae earum dolore soluta, vitae corporis inventore laudantium. Nostrum, vitae! Tenetur et alias officia doloremque.
          </div>
          {/* Hết Mô tả chi tiết */}

          {/* Việc làm */}
          <div className="mt-[30px]">
            <h2 className="font-[700] text-[28px] text-[#121212] mb-[20px]">
              Công ty có 6 việc làm
            </h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[20px]">
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
            </div>
          </div>
          {/* Hết Việc làm */}
        </div>
      </div>
    </>
  )
}