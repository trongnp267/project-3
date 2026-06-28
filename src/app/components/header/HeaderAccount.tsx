import Link from "next/link"

export const HeaderAccount = () => {
  return (
    <>
      <div className="flex gap-[5px] text-[#FFFFFF] font-[600] sm:text-[16px] text-[12px]">
        {/* Chưa đăng nhập */}
        {/* <Link href="#">Đăng Nhập</Link>
        <span>/</span>
        <Link href="#">Đăng Ký</Link> */}

        {/* Đã đăng nhập */}
        <nav className="menu">
          <ul>
            <li>
              <Link href="#">LG Elect...</Link>
              <ul className="inner-right">
                <li>
                  <Link href="#">Thông tin công ty</Link>
                </li>
                <li>
                  <Link href="#">Quản lý công việc</Link>
                </li>
                <li>
                  <Link href="#">Quản lý CV</Link>
                </li>
                <li>
                  <Link href="#">Đăng xuất</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}