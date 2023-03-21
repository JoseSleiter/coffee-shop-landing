import bgTitle from "../../public/BRUSH-32.png";
import icon1 from "../../public/Group-596.png";
import icon2 from "../../public/Group-597.png";
import icon3 from "../../public/Group-598.png";
import logo from "../../public/Logo.png";
import CustomImage from "../custom/image";
import TitleWithImg from "../title-with-img";
import SocialNetwork from "./social-network";
import heroBackground from "../../public/hero.png";

import heroBackground2 from "../../public/BRUSH-32.png";


const socialIcons = [
  {
    icon: icon1,
    href: "https://www.linkedin.com/in/jose-sleiter-rios-905447165/",
    target: "_blank"
  },
  {
    icon: icon2,
    href: "https://www.linkedin.com/in/jose-sleiter-rios-905447165/",
    target: "_blank"
  },
  {
    icon: icon3,
    href: "https://www.linkedin.com/in/jose-sleiter-rios-905447165/",
    target: "_blank"
  }
]

const CustomHead = () => {
  return (
    <>
      <div
        className={'container'}
      // style={{ position: "relative", height: "750px", width: "100%", maxHeight: "720px" }}
      >
        <div className={'container-header'}>
          <div className={'navbar'}>
            <div className={'social-network'}>
              <SocialNetwork socialIcons={socialIcons} />
            </div>
            <CustomImage styles={'logo'} image={logo} alt="logo" width="150" height="90" />{" "}
          </div>
          <div className="title-page">
            <TitleWithImg image={bgTitle} imgStyles={'absolute2'} height={'200'} width={'1000'} title={"El secreto de tu cocina"} />
            <div></div>
          </div>
          <CustomImage styles={'coverImage'} image={heroBackground} alt="heroBackground" layout="responsive" />
        </div>
      </div>
    </>
  );
};

export default CustomHead;
