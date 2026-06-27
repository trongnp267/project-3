import { Button2 } from "@/app/components/button/Button2";
import { InputGroup } from "@/app/components/form/InputGroup";
import { SelectGroup } from "@/app/components/form/SelectGroup";
import { TextareaGroup } from "@/app/components/form/TextareaGroup";
import Link from "next/link";

export default function CompanyJobCreate() {
  return (
    <>
      <div className="py-[60px]">
        <div className="contain">
          <div className="bg-white border border-[#DEDEDE] p-[20px] rounded-[8px]">
            <div className="flex justify-between items-center flex-wrap gap-[20px] mb-[20px]">
              <h1 className="font-[700] text-black text-[20px]">
                Thông tin công ty
              </h1>
              <Link href="#" className="font-[400] text-[14px] text-[#0088FF] underline">Quay lại danh sách</Link>
            </div>
            <form 
              action=""
              className="grid sm:grid-cols-2 gap-x-[20px] gap-y-[15px]"
            >
              <InputGroup
                name=""
                id=""
                label="Tên công việc *"
                className="sm:col-span-2"
              />
              <InputGroup
                name=""
                id=""
                label="Mức lương tối thiểu ($)"
              />
              <InputGroup
                name=""
                id=""
                label="Mức lương tối đa ($)"
              />
              <SelectGroup
                label="Cấp bậc *"
                name=""
                id=""
                options={[
                  {value: "intern", label: "Intern"},
                  {value: "fresher", label: "Fresher"},
                  {value: "senior", label: "Senior"},
                ]}
              />
              <SelectGroup
                label="Hình thức làm việc *"
                name=""
                id=""
                options={[
                  {value: "", label: "Tại văn phòng"},
                  {value: "", label: "Làm từ xa"},
                ]}
              />
              <InputGroup
                name=""
                id=""
                label="Các công nghệ"
                className="sm:col-span-2"
              />
              <InputGroup
                name=""
                id=""
                label="Danh sách ảnh *"
                type="file"
                className="sm:col-span-2"
              />
              <TextareaGroup
                name=""
                id=""
                label="Mô tả chi tiết"
                className="sm:col-span-2"
              />
              <Button2
                className="sm:col-span-2"
                label="Tạo mới"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}