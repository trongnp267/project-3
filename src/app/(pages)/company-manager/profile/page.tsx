import { Button2 } from "@/app/components/button/Button2";
import { InputGroup } from "@/app/components/form/InputGroup";
import { SelectGroup } from "@/app/components/form/SelectGroup";
import { TextareaGroup } from "@/app/components/form/TextareaGroup";

export default function CompanyProfile() {
  return (
    <>
      <div className="py-[60px]">
        <div className="contain">
          <div className="bg-white border border-[#DEDEDE] p-[20px] rounded-[8px]">
            <h1 className="font-[700] text-black text-[20px] mb-[20px]">
              Thông tin công ty
            </h1>
            <form 
              action=""
              className="grid sm:grid-cols-2 gap-x-[20px] gap-y-[15px]"
            >
              <InputGroup
                name=""
                id=""
                label="Tên công ty *"
                className="sm:col-span-2"
              />
              <InputGroup
                name=""
                id=""
                label="Logo"
                type="file"
                className="sm:col-span-2"
              />
              <SelectGroup
                label="Thành phố"
                name=""
                id=""
                options={[
                  {value: "ha-noi", label: "Hà Nội"},
                  {value: "hcm", label: "Hồ Chí Minh"},
                  {value: "da-nang", label: "Đà Nẵng"},
                ]}
              />
              <InputGroup
                name=""
                id=""
                label="Địa chỉ"
              />
              <InputGroup
                name=""
                id=""
                label="Mô hình công ty"
              />
              <InputGroup
                name=""
                id=""
                label="Quy mô công ty"
              />
              <InputGroup
                name=""
                id=""
                label="Thời gian làm việc"
              />
              <InputGroup
                name=""
                id=""
                label="Làm việc ngoài giờ"
              />
              <InputGroup
                name=""
                id=""
                label="Email *"
                type="email"
              />
              <InputGroup
                name=""
                id=""
                label="Số điện thoại"
              />
              <TextareaGroup
                name=""
                id=""
                label="Mô tả chi tiết"
                className="sm:col-span-2"
              />
              <Button2
                className="sm:col-span-2"
                label="Cập nhật"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}