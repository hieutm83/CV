import {FiCloud, FiCode, FiCpu, FiFacebook, FiGithub} from 'react-icons/fi';

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
    name: 'GitHub',
    url: 'https://https://github.com/hieutm83',
    icon: FiGithub
  }, {
    name: 'Facebook',
    url: 'https://www.facebook.com/hiueee/',
    icon: FiFacebook
  }, {
    name: 'Zalo',
    url: 'https://zalo.me/0387654443',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Zalo_Logo.png'
  }],
  expertises: [{
    name: 'E-commerce platform operations.',
    icon: FiCode,
    description: 'TikTok Shop, Shopee, Lazada, etc.'
  }, {
    name: 'Infrastructure',
    icon: FiCloud,
    description: 'Driving traffic, increasing conversions, optimizing ad cost, boosting revenue, designing banners, and managing live streams and videos, etc.'
  }],
  analytics: {
    gaId: 'G-NF39CSC1T1',
  },
  giscusEnabled: true,
}
