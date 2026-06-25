import { ButtonTag } from "@/app/components/button/ButtonTag";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Section 1 */}
      <div className="bg-[#000065] py-[60px]">
        <div className="contain">
          <h1 className="text-white font-[700] text-[28px] text-center mb-[30px]">
            887 Việc làm IT cho Developer "Chất"
          </h1>
          <form 
            action=""
            className="flex gap-x-[15px] gap-y-[15px] mb-[30px]"
          >
            <select 
              name="" 
              id=""
              className="bg-white w-[240px] h-[56px] rounded-[4px] px-[20px] text-[#121212] font-[500] text-[16px]"
            >
              <option value="ha-noi">Hà Nội</option>
              <option value="hcm">Hồ Chí Minh</option>
              <option value="da-nang">Đà Nẵng</option>
            </select>
            <input 
              type="text" 
              placeholder="Nhập từ khoá..."
              className="flex-1 rounded-[4px] h-[56px] px-[20px] text-[#121212] font-[500] text-[16px] bg-white placeholder:text-[#A8A8A8]"
            />
            <button
              className="bg-[#0088FF] rounded-[4px] w-[240px] h-[56px] flex items-center justify-center gap-[10px] font-[500] text-[16px] text-white"
            >
              <FaSearch className="text-[20px]" /> Tìm Kiếm
            </button>
          </form>
          <div
            className="flex items-center gap-x-[12px] gap-y-[12px] flex-wrap"
          >
            <div className="font-[500] text-[16px] text-[#DEDEDE]">
              Mọi người đang tìm kiếm:
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <ButtonTag link="#" label="ReactJS" />
              <ButtonTag link="#" label="Javascript" />
              <ButtonTag link="#" label="NodeJS" />
            </div>
          </div>
        </div>
      </div>
      {/* End Section 1 */}
    </>
  );
}
