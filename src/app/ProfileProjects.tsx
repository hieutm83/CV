'use client';

import { TbBrandShopee } from "react-icons/tb";
import { PiTiktokLogo } from "react-icons/pi";

function ProjectItem({
  name,
  url,
  imageUrl,
}: {
  name: string;
  url: string;
  imageUrl: string;
}) {
  return (
    <a 
      href={url} 
      className="flex items-center justify-between p-2 border-2 rounded-full border-[#00aff0] bg-white text-[#00aff0] text-[14px] w-full md:w-1/2 hover:w-full transition-all duration-200 hover:bg-[#00aff0] hover:text-white" 
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={imageUrl} alt={name} className="w-6 h-6 mr-2 rounded-full" />
      <span className="uppercase">{name}</span>
    </a>
  );
}

export default function ProfileProjects() {
  return (
    <div className="bg-white p-4 space-y-16">
      <div className="flex flex-col space-y-16">
        
        {/* TikTok Shop */}
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center mb-4">
            <PiTiktokLogo className="w-12 h-12 text-[#00aff0]" />
            <h2 className="text-sm font-bold text-[#00aff0] rounded-full px-5 py-3">
              TIKTOK SHOP
            </h2>
          </div>
          <div className="flex flex-col items-center space-y-3 w-full">
            <ProjectItem
              name="Lắp Đặt Camera Hà Nội"
              url="https://www.tiktok.com/@ldchanoi"
              imageUrl="https://i.imgur.com/9g96Rg3.png"
            />
            <ProjectItem
              name="Camera Gia Đình"
              url="https://www.tiktok.com/@camera.giadinh"
              imageUrl="https://i.imgur.com/Ftbmnyn.png"
            />
            <ProjectItem
              name="KHOCONGNGHE.86"
              url="https://www.tiktok.com/@khocongnghe86"
              imageUrl="https://i.imgur.com/IZzhKQi.png"
            />
          </div>
        </div>

        {/* Shopee */}
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center mb-4">
            <TbBrandShopee className="w-12 h-12 text-[#00aff0]" />
            <h2 className="text-sm font-bold text-[#00aff0] rounded-full px-5 py-3">
              SHOPEE
            </h2>
          </div>
          <div className="flex flex-col items-center space-y-3 w-full">
            <ProjectItem
              name="Lắp Đặt Camera Hà Nội"
              url="https://shopee.vn/lapdatcamerahanoi_ldc"
              imageUrl="https://i.imgur.com/9g96Rg3.png"
            />
            <ProjectItem
              name="Camera Gia Đình"
              url="https://shopee.vn/camera86giadinh"
              imageUrl="https://i.imgur.com/Ftbmnyn.png"
            />
            <ProjectItem
              name="KHOCONGNGHE.86"
              url="https://shopee.vn/khocongnghe86"
              imageUrl="https://i.imgur.com/IZzhKQi.png"
            />
          </div>
        </div>

        {/* Lazada */}
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center mb-4">
            <img
              src="https://i.pinimg.com/736x/a9/83/c6/a983c6de96bdcb65cd69ea1d4ed1ed8b.jpg"
              alt="Lazada"
              className="w-12 h-12 mr-2 rounded-full"
            />
            <h2 className="text-sm font-bold text-[#00aff0] rounded-full px-5 py-3">
              LAZADA
            </h2>
          </div>
          <div className="flex flex-col items-center space-y-3 w-full">
            <ProjectItem
              name="Lắp Đặt Camera Hà Nội"
              url="https://www.lazada.vn/shop/lap-dat-camera-ha-noi/?spm=a2o4n.pdp_revamp.seller.1.49932882T5pm13&itemId=2787171787&channelSource=pdp"
              imageUrl="https://i.imgur.com/9g96Rg3.png"
            />
            <ProjectItem
              name="Camera Gia Đình"
              url="https://www.lazada.vn/shop/x710lojf/?spm=a2o4n.pdp_revamp.seller.1.217c37e2U1PqyD&itemId=2569842199&channelSource=pdp"
              imageUrl="https://i.imgur.com/Ftbmnyn.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
