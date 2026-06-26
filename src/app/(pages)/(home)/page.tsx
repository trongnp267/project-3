import { CompanyCard } from "@/app/components/card/CompanyCard";
import { Section1 } from "@/app/components/section/Section1";

export default function Home() {
  return (
    <>
      {/* Section 1 */}
      <Section1 />
      {/* End Section 1 */}

      {/* Section 2 */}
      <div className="py-[60px]">
        <div className="contain">
          <h2 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] mb-[30px] text-center">
            Nhà tuyển dụng hàng đầu
          </h2>
          <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
          </div>
        </div>
      </div>
      {/* End Section 2 */}
    </>
  );
}
