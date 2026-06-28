import { Button2 } from "@/app/components/button/Button2";
import { InputGroup } from "@/app/components/form/InputGroup";

export default function UserProfile() {
  return (
    <>
      <div className="py-[60px] sm:min-h-[calc(100vh-121px-72px)] min-h-[calc(100vh-121px-60px)]">
        <div className="contain">
          <div className="bg-white border border-[#DEDEDE] p-[20px] rounded-[8px]">
            <h1 className="font-[700] text-black text-[20px] mb-[20px]">
              Thông tin cá nhân
            </h1>
            <form 
              action=""
              className="grid sm:grid-cols-2 gap-x-[20px] gap-y-[15px]"
            >
              <InputGroup
                name=""
                id=""
                label="Họ tên *"
                className="sm:col-span-2"
              />
              <InputGroup
                name=""
                id=""
                label="Avatar"
                type="file"
                className="sm:col-span-2"
              />
              <InputGroup
                name=""
                id=""
                label="Email *"
              />
              <InputGroup
                name=""
                id=""
                label="Số điện thoại"
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