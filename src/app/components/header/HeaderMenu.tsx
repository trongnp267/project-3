import Link from "next/link"
import { FaAngleDown, FaAngleRight } from "react-icons/fa"

export const HeaderMenu = () => {
  const data = [
    {
      label: "Việc Làm IT",
      link: "#",
      children: [
        {
          label: "Việc làm IT theo kỹ năng",
          link: "#",
          children: [
            {
              label: "ReactJS",
              link: "#",
              children: []
            },
            {
              label: "NodeJS",
              link: "#",
              children: []
            },
            {
              label: "Javascript",
              link: "#",
              children: []
            },
            {
              label: "HTML5",
              link: "#",
              children: []
            },
            {
              label: "CSS3",
              link: "#",
              children: []
            }
          ]
        },
        {
          label: "Việc làm IT theo công ty",
          link: "#",
          children: []
        },
        {
          label: "Việc làm IT theo thành phố",
          link: "#",
          children: []
        }
      ]
    },
    {
      label: "Top Công Ty IT",
      link: "#",
      children: [
        {
          label: "Techcombank",
          link: "#",
          children: []
        },
        {
          label: "MB Bank",
          link: "#",
          children: []
        }
        ,
        {
          label: "Viettel",
          link: "#",
          children: []
        }
      ]
    },
    {
      label: "Nhà Tuyển Dụng",
      link: "#",
      children: [
        {
          label: "Đăng Nhập",
          link: "#",
          children: []
        },
        {
          label: "Đăng Ký",
          link: "#",
          children: []
        }
      ]
    }
  ]
  return (
    <>
      <nav className="menu">
        <ul>
          {data.map((child, index) => (
            <li key={index}>
              <Link href={child.link}>{child.label}</Link>
              {child.children.length > 0 && (
                <>
                  <FaAngleDown />
                  <ul>
                    {child.children.map((child1, index1) => (
                      <li key={index1}>
                        <Link href={child1.link}>{child1.label}</Link>
                        {child1.children.length > 0 && (
                          <>
                            <FaAngleRight />
                            <ul>
                              {child1.children.map((child2, index2) => (
                                <li key={index2}>
                                  <Link href={child2.link}>{child2.label}</Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}