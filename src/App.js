import { useState } from "react";
import logo from "./images/logo.png";
import {
  AboutData,
  BlogsData,
  ContactData,
  ServiceData,
} from "./NavData/NavData";
import {
  FaCalendarAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa/";
import {
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineMenu,
} from "react-icons/ai/";
import { BsBoxArrowInUpRight, BsTelephone } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import styled from "styled-components";
import bannerImage from "./images/bannerImage.jpg";

const Header = styled.div`
  padding: 0 25px;
  border-bottom: 2px solid #eeeeee;
  position: relative;
  @media only screen and (max-width: 991px) {
    padding: 20px 25px;
  }
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  .header-logo {
    display: block;
    max-width: 155px;
  }
  .header-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .toggleBtn {
      display: none;
      height: 40px;
      width: 40px;
      border: 1px solid #f39400;
      border-radius: 10px;
      background: transparent;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        height: 24px;
        width: 24px;
        fill: #000;
      }
      @media only screen and (max-width: 991px) {
        display: flex;
      }
    }
  }
`;

const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0;
  list-style-type: none;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 991px) {
    position: absolute;
    top: 100%;
    background: #fff;
    left: 0;
    right: 0;
    border-top: 2px solid #eee;
    flex-direction: column;
    align-items: flex-start;
    display: none;
    &.activeMenu {
      display: block;
    }
  }
  & > li {
    padding: 30px 20px;
    box-sizing: border-box;
    @media only screen and (max-width: 991px) {
      padding: 8px 20px;
      display: block;
      width: 100%;
    }
    .menuLink {
      font-family: "Work Sans", sans-serif;
      font-size: 16px;
      text-decoration: none;
      padding: 8px 0;
      font-weight: 500;
      color: rgb(147, 128, 100);
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      svg {
        height: 18px;
        width: 18px;
      }
      &:hover {
        color: #f39400;
      }
    }
    &:hover {
      color: #f39400;
    }
    &.menuDropdown {
      position: relative;
    }
  }
`;

const MegaDropdown = styled.div`
  position: absolute;
  width: 100%;
  background: rgb(255, 255, 255);
  left: 0;
  top: calc(100% + 2px);
  padding: 50px 25px;
  box-sizing: border-box;
  border-bottom: 2px solid #eeeeee;
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 991px) {
    position: static;
    box-shadow: none;
    padding: 25px 0;
    border-bottom: none;
  }
  .foreCol {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
  .threeCol {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    @media only screen and (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
`;
const ViewCard = styled.div`
  background: #f39400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #f39400;
  transition: all 0.5s ease;
  a {
    padding: 30px;
    display: block;
    text-decoration: none;
    svg {
      height: 50px;
      width: 50px;
      fill: #fff;
      margin: 0 0 20px;
    }
  }
  .viewCardTitle {
    font-size: 20px;
    color: #fff;
    font-family: "Work Sans", sans-serif;
    margin: 0 0 20px;
  }
  p {
    font-family: "Work Sans", sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: #f3ece1;
    margin: 0;
  }
  button {
    border: 2px solid #fff;
    margin-top: 30px;
    padding: 9px 25px;
    background: transparent;
    color: #fff;
    border-radius: 10px;
    transition: all 0.5s ease;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);
    &:hover {
      background: #fff;
      color: #f39400;
    }
  }
  &:hover {
    border-color: #fff;
    box-shadow: 0px 2px 7px #d4d4d4;
  }
`;
const BlogBox = styled.div`
  border: 1px solid #eee;
  transition: all 0.5s ease;
  a {
    text-decoration: none;
  }
  img {
    height: 175px;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
  .blogContent {
    padding: 20px;
  }
  .blogTitle {
    font-family: "Work Sans", sans-serif;
    line-height: 24px;
    font-weight: 600;
    font-size: 18px;
    margin: 15px 0 0;
    transition: all 0.5s ease;
  }
  .blogDate {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 10px;
    font-family: "Work Sans", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #938064;
    svg {
      height: 16px;
      width: 16px;
      fill: #f39400;
    }
  }
  &:hover {
    border-color: #fff;
    box-shadow: 0px 2px 7px #d4d4d4;
    .blogTitle {
      color: #f39400;
    }
  }
`;
const ServiceCard = styled.div`
  h6 {
    font-family: "Work Sans", sans-serif;
    line-height: 24px;
    font-weight: 600;
    font-size: 18px;
    margin: 0 0 25px;
    transition: all 0.5s ease;
    display: flex;
    align-items: center;
    gap: 10px;
    svg {
      fill: #f39400;
      height: 30px;
      width: 30px;
    }
  }
  ul {
    padding: 0;
    list-style-type: none;
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
      &::before {
        content: "";
        height: 6px;
        width: 6px;
        display: block;
        border-radius: 50%;
        border: 1px solid #f39400;
      }
      a {
        font-family: "Work Sans", sans-serif;
        font-size: 14px;
        font-weight: 500;
        color: #938064;
        text-decoration: none;
        &:hover {
          color: #f39400;
        }
      }
    }
  }
`;

const ContactCard = styled.div`
  list-style-type: none;
  background: #fff;
  border: 1px solid #eee;
  padding: 30px;
  h4 {
    font-family: "Work Sans", sans-serif;
    line-height: 24px;
    font-weight: 600;
    font-size: 18px;
    margin: 0 0 25px;
  }
  ul {
    padding: 0;
    list-style-type: none;
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: "Work Sans", sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: #938064;
      text-decoration: none;
      &:hover {
        color: #f39400;
      }
      &:not(:last-child) {
        margin-bottom: 10px;
      }
      a {
        color: #938064;
        text-decoration: none;
      }
      svg {
        height: 16px;
        width: 16px;
        fill: #f39400;
      }
    }
    &.hrsList li {
      &::before {
        content: "";
        height: 6px;
        width: 6px;
        display: block;
        border-radius: 50%;
        border: 1px solid #f39400;
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 25px;
  a {
    height: 35px;
    width: 35px;
    border: 2px solid #f39400;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: #f39400;
    border-radius: 50%;
    transition: all 0.5s ease;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    &:hover {
      background: #fff;
      color: #f39400;
    }
  }
`;

const SingleMenu = styled.ul`
  list-style-type: none;
  background: #fff;
  border: 1px solid #eee;
  padding: 20px;
  position: absolute;
  top: 100%;
  left: 0;
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);
  min-width: 180px;
  @media only screen and (max-width: 991px) {
    position: static;
    box-shadow: none;
  }
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    &::before {
      content: "";
      height: 6px;
      width: 6px;
      display: block;
      border-radius: 50%;
      border: 1px solid #f39400;
    }
    a {
      font-family: "Work Sans", sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: #938064;
      text-decoration: none;
      &:hover {
        color: #f39400;
      }
    }
  }
`;

function App() {
  const [menuName, setMenuName] = useState("");
  const [showMenu, setShowMenu] = useState(true);

  /**
   * Open menu dyncamic data
   * @param {*} name 
   */
  const openMenuData=(name)=>{
    if (menuName !== "") setMenuName("")
    else setMenuName(name)
  }
  return (
    <>
      <Header>
        <div className="container">
          <HeaderInner>
            <div className="header-main">
              <a href="/" className="header-logo">
                <img src={logo} className="App-logo" alt="logo" />
              </a>
              <button
                className="toggleBtn"
                onClick={() => setShowMenu(!showMenu)}
              >
                {showMenu ? <AiOutlineMenu /> : <RxCross2 />}
              </button>
            </div>
            <HeaderMenu className={showMenu ? "" : "activeMenu"}>
              <li
                onClick={() => {
                  openMenuData("about")

                
                }}
                onMouseOut={() => setMenuName("")}
                onMouseOver={() => {
                  setMenuName("about")
                }}
                className="menuDropdown"
              >
                <div className="menuLink">
                  About{" "}
                  <MdOutlineKeyboardArrowDown
                    style={{
                      transform: menuName === "about" ? "rotate(180deg)" : "",
                    }}
                  />
                </div>
                {menuName === "about" && (
                  <SingleMenu>
                    {AboutData().map((about, index) => (
                      <li key={index}>
                        <a href="/">{about}</a>
                      </li>
                    ))}
                  </SingleMenu>
                )}
              </li>
              <li
                onClick={() => {
                  openMenuData("blogs")

                }}
                onMouseOver={() => setMenuName("blogs")}
                onMouseOut={() => setMenuName("")}
              >
                <div className="menuLink">
                  Blogs{" "}
                  <MdOutlineKeyboardArrowDown
                    style={{
                      transform: menuName === "blogs" ? "rotate(180deg)" : "",
                    }}
                  />
                </div>
                {menuName === "blogs" && (
                  <MegaDropdown>
                    <div className="container">
                      <div className="foreCol">
                        {BlogsData().map((blog, index) => (
                          <BlogBox key={index}>
                            <img src={blog?.image} alt={"blog"} />
                            <div className="blogContent">
                              <div className="blogDate">
                                <FaCalendarAlt />
                                {blog?.date}
                              </div>
                              <a href="/">
                                <h6 className="blogTitle">{blog?.title}</h6>
                              </a>
                            </div>
                          </BlogBox>
                        ))}
                        <ViewCard>
                          <a href="/">
                            <BsBoxArrowInUpRight />
                            <h4 className="viewCardTitle">Read all news</h4>
                            <p>
                              With this move we are hoping to reduce some of
                              processes and main. We are hoping to start.
                            </p>
                          </a>
                        </ViewCard>
                      </div>
                    </div>
                  </MegaDropdown>
                )}
              </li>
              <li
                onClick={() => {
                  openMenuData("service")

                }}
                onMouseOver={() => setMenuName("service")}
                onMouseOut={() => setMenuName("")}
              >
                <div className="menuLink">
                  Service{" "}
                  <MdOutlineKeyboardArrowDown
                    style={{
                      transform: menuName === "service" ? "rotate(180deg)" : "",
                    }}
                  />
                </div>
                {menuName === "service" && (
                  <MegaDropdown>
                    <div className="container">
                      <div className="foreCol">
                        {ServiceData().map((service, index) => (
                          <ServiceCard key={index}>
                            <h6 className="ServiceCardTitle">
                              {service?.icon} {service?.name}
                            </h6>
                            <ul>
                              {service?.value.map((value, index) => (
                                <li key={index}>
                                  <a href="/">{value}</a>
                                </li>
                              ))}
                            </ul>
                          </ServiceCard>
                        ))}
                      </div>
                    </div>
                  </MegaDropdown>
                )}
              </li>
              <li
                onClick={() => {
                  openMenuData("contact")

                }}
                onMouseOver={() => setMenuName("contact")}
                onMouseOut={() => setMenuName("")}
              >
                <div className="menuLink">
                  Contact{" "}
                  <MdOutlineKeyboardArrowDown
                    style={{
                      transform: menuName === "contact" ? "rotate(180deg)" : "",
                    }}
                  />
                </div>
                {menuName === "contact" && (
                  <MegaDropdown>
                    <div className="container">
                      <div className="threeCol">
                        <ViewCard>
                          <a href="/">
                            <h4 className="viewCardTitle">
                              Let's start conversation
                            </h4>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                            <button>Contact Us</button>
                          </a>
                        </ViewCard>
                        <ContactCard>
                          <h4>Contact Me</h4>
                          <ul>
                            <li>
                              <AiOutlineMail />
                              <a href="/">text@gmail.com</a>
                            </li>
                            <li>
                              <BsTelephone />
                              <a href="/">+91 912-945-9872</a>
                            </li>
                          </ul>
                          <SocialLinks>
                            <a href="/">
                              <FaFacebookF />
                            </a>
                            <a href="/">
                              <FaLinkedinIn />
                            </a>
                            <a href="/">
                              <AiOutlineTwitter />
                            </a>
                            <a href="/">
                              <FaInstagram />
                            </a>
                          </SocialLinks>
                        </ContactCard>
                        <ContactCard>
                          <h4>Working Hours</h4>
                          <ul className="hrsList">
                            {ContactData().map((contact, index) => (
                              <li key={index}>
                                {contact?.day + "-" + contact?.time}
                              </li>
                            ))}
                          </ul>
                        </ContactCard>
                      </div>
                    </div>
                  </MegaDropdown>
                )}
              </li>
            </HeaderMenu>
          </HeaderInner>
        </div>
      </Header>
      <div className="banner">
        <img
          src={bannerImage}
          alt="banner"
          style={{ width: "100%", minHeight: "350px", objectFit: "cover" }}
        />
      </div>
    </>
  );
}

export default App;
