import Link from "next/link"
import { FaAngleDown, FaAngleRight, FaBars } from "react-icons/fa"

export const Header = () => {
  return (
    <>
      <header className="bg-[#000071] py-[15px]">
        <div className="contain">
          <div className="flex items-center lg:justify-between">
            <Link href="/" className="text-[#FFFFFF] font-[800] sm:text-[28px] text-[20px] lg:flex-none flex-1">IT.Jobs</Link>
            <nav className="menu">
              <ul>
                <li>
                  <Link href="#">Việc Làm IT</Link>
                  <FaAngleDown />
                  <ul>
                    <li>
                      <Link href="#">Việc làm IT theo kỹ năng</Link>
                      <FaAngleRight />
                      <ul>
                        <li>
                          <Link href="#">ReactJS</Link>
                        </li>
                        <li>
                          <Link href="#">NodeJS</Link>
                        </li>
                        <li>
                          <Link href="#">Javascript</Link>
                        </li>
                        <li>
                          <Link href="#">HTML5</Link>
                        </li>
                        <li>
                          <Link href="#">CSS3</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">Việc làm IT theo công ty</Link>
                      <FaAngleRight />
                    </li>
                    <li>
                      <Link href="#">Việc làm IT theo thành phố</Link>
                      <FaAngleRight />
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">Top Công Ty IT</Link>
                  <FaAngleDown />
                  <ul>
                    <li>
                      <Link href="#">Techcombank</Link>
                    </li>
                    <li>
                      <Link href="#">MB Bank</Link>
                    </li>
                    <li>
                      <Link href="#">Viettel</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">Nhà Tuyển Dụng</Link>
                  <FaAngleDown />
                  <ul>
                    <li>
                      <Link href="#">Đăng Nhập</Link>
                    </li>
                    <li>
                      <Link href="#">Đăng Ký</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="flex gap-[5px] text-[#FFFFFF] font-[600] sm:text-[16px] text-[12px]">
              <Link href="#">Đăng Nhập</Link>
              <span>/</span>
              <Link href="#">Đăng Ký</Link>
            </div>
            <button className="text-white text-[23px] lg:hidden ml-[12px] cursor-pointer">
              <FaBars />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}