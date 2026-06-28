import { CVCard2 } from "@/app/components/card/CVCard2";
import { Select2 } from "@/app/components/select/Select2";

export default function UserCVList() {
  return (
    <>
      <div className="py-[60px]">
        <div className="contain">
          <h1 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] mb-[20px]">
            Quản lý CV
          </h1>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[20px] mb-[30px]">
            <CVCard2 />
            <CVCard2 />
            <CVCard2 />
            <CVCard2 />
            <CVCard2 />
            <CVCard2 />
          </div>
          <Select2 totalPage={3} />
        </div>
      </div>
    </>
  )
}