import blog1 from "../images/blog1.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";
import { MdDesignServices } from "react-icons/md";
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

export const AboutData = () => {
  return ["Our Company", "Gallery", "Referral Rewards"];
};

export const ServiceData = () => {
  return [
    {
      icon: <FaMobileAlt />,
      name: "Mobile App",
      value: [
        "Native iOS Apps",
        "Native Android Apps",
        "Cross Platform",
        "Hybrid Apps",
        "PWA",
      ],
    },
    {
      icon: <FaLaptopCode />,
      name: "Web Development",
      value: [
        "Enterprise Solutions",
        "ECommerce",
        "CMS",
        "API & Backend",
        "Custom Development",
        "WordPress Development",
      ],
    },
    {
      icon: <MdDesignServices />,
      name: "UI/UX Design",
      value: [
        "Discovery Workshop",
        "Analysis",
        "WireFrame",
        "UI/UX Design",
        "Branding Design",
      ],
    },
    {
      icon: <FaLink />,
      name: "Blockchain Service",
      value: [
        "DeFi App",
        "Tokenization",
        "Rollups Development",
        "NFT and Metaverse",
        "Supply Chains",
        "Blockchain Explorer",
      ],
    },
  ];
};

export const BlogsData = () => {
  return [
    {
      image: blog1,
      date: "February 21,2023",
      title: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      image: blog2,
      date: "February 21,2023",
      title: "Lorem Ipsum is not simply random text",
    },
    {
      image: blog3,
      date: "February 21,2023",
      title: "There are many variations of passages of Lorem Ipsum",
    },
  ];
};

export const ContactData = () => {
  return [
    { day: "Mon-Fri", time: "10:00-7:00" },
    { day: "Sat", time: "10:00-5:00" },
  ];
};
