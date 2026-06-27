import { JobCard2 } from "@/app/components/card/JobCard2";
import { Select2 } from "@/app/components/select/Select2";
import Link from "next/link";

export default function CompanyJobList() {
  return (
    <>
      <div className="py-[60px]">
        <div className="contain">
          <div className="flex justify-between items-center gap-[20px] flex-wrap mb-[20px]">
            <h1 className="font-[700] sm:text-[28px] text-[24px] text-[#121212]">
              Quản lý công việc
            </h1>
            <Link href="#" className="w-full max-w-[107px] h-[34px] rounded-[4px] bg-[#0088FF] font-[400] text-[14px] text-white flex items-center justify-center">
              Thêm mới
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[20px] mb-[30px]">
            <JobCard2 />
            <JobCard2 />
            <JobCard2 />
            <JobCard2 />
            <JobCard2 />
            <JobCard2 />
          </div>
          <Select2 totalPage={3} />
        </div>
      </div>
    </>
  )
}