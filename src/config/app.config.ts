import { VscGitPullRequestCreate } from "react-icons/vsc";
import { CiShop } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { SiZalo } from "react-icons/si";

export const AppConfig = {
  name: "Minh Hieu Trinh",
  username: "hieutm83", // should be GitHub username
  avatar: 'https://i.imgur.com/BBmK7YC.jpeg',
  verticalAvatar: 'https://i.imgur.com/yCthTcx.jpeg',
  introduction: `5+ years of experience in the e-commerce industry.\n` +
    `Working in scalable and high-performance technology systems.\n` +
    `Operations of e-commerce platforms such as TikTok, Shopee, Lazada & more.`,
  subscriptions: [{
    name: "Hire Me",
    price: "At any price",
    preferred: true,
  }, {
    name: "Freelance",
    price: "From $100"
  }],
  socialLinks: [{
    name: 'Zalo',
    url: 'https://https://https://zalo.me/0387654443',
    icon: SiZalo
  }, {
    name: 'Facebook',
    url: 'https://www.facebook.com/hiueee',
    icon: FiFacebook
  }],
  expertises: [{
    name: 'E-commerce platform operations.',
    icon: CiShop,
    description: 'TikTok Shop, Shopee, Lazada, etc.'
  }, {
    name: 'Infrastructure',
    icon: VscGitPullRequestCreate,
    description: 'Driving traffic, increasing conversions, optimizing ad cost, boosting revenue, designing banners, and managing live streams and videos, etc.'
  }],
  analytics: {
    gaId: 'G-NF39CSC1T1',
  },
  giscusEnabled: true,
}
