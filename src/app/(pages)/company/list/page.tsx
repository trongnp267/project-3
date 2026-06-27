import { CompanyCard } from "@/app/components/card/CompanyCard";
import { Select2 } from "@/app/components/select/Select2";

export default function CompanyList() {
  return (
    <>
      <div className="py-[60px]">
        <div className="contain">
          <h2 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] mb-[30px] text-center">
            Danh sách công ty
          </h2>
          <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px] mb-[30px]">
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
          </div>
          <Select2 totalPage={5} />
        </div>
      </div>
    </>
  )
}