import { Button1 } from "@/app/components/button/Button1";
import { InputGroup } from "@/app/components/form/InputGroup";

export default function CompanyLogin() {
  return (
    <>
      <div className="py-[60px] sm:min-h-[calc(100vh-121px-72px)] min-h-[calc(100vh-121px-60px)]">
        <div className="contain">
          <div className="bg-white border border-[#DEDEDE] py-[50px] px-[20px] rounded-[8px] w-full max-w-[602px] mx-[auto]">
            <h1 className="font-[700] text-black text-[20px] mb-[20px] text-center">
              Đăng nhập (Nhà tuyển dụng)
            </h1>
            <form 
              action=""
              className="grid gap-[15px]"
            >
              <InputGroup
                name=""
                id=""
                label="Email *"
                type="email"
              />
              <InputGroup
                name=""
                id=""
                label="Mật khẩu *"
                type="password"
              />
              <Button1
                label="Đăng nhập"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}