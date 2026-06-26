import { JobCard } from "@/app/components/card/JobCard";
import { Section1 } from "@/app/components/section/Section1";
import { Select1 } from "@/app/components/select/Select1";
import { Select2 } from "@/app/components/select/Select2";

export default function Search() {
  return (
    <>
      {/* Section 1 */}
      <Section1 />
      {/* End Section 1 */}

      {/* Kết quả tìm kiếm */}
      <div className="py-[60px]">
        <div className="contain">
          <h2 className="font-[700] text-[28px] text-[#121212] mb-[30px]">
            76 việc làm <span className="text-[#0088FF]">reactjs</span>
          </h2>
          <div 
            className="bg-white rounded-[8px] py-[10px] px-[20px] flex gap-[12px] flex-wrap mb-[30px]" 
            style={{
              boxShadow: "0px 4px 20px 0px #0000000F;"
            }}
          >
            <Select1
              options={[
                {value: "", label: "Cấp bậc"},
                {value: "intern", label: "Intern"},
                {value: "fresher", label: "Fresher"},
                {value: "junior", label: "Junior"},
                {value: "middle", label: "Middle"},
                {value: "senior", label: "Senior"},
                {value: "manager", label: "Manager"},
              ]}
            />
            <Select1
              options={[
                {value: "", label: "Hình thức làm việc"},
                {value: "", label: "Tại văn phòng"},
                {value: "", label: "Làm từ xa"},
                {value: "", label: "Linh hoạt"},
              ]}
            />
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[20px] mb-[30px]">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
          <Select2 totalPage={4} />
        </div>
      </div>
      {/* Hết Kết quả tìm kiếm */}
    </>
  )
}