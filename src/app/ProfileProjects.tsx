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
      className="flex items-center justify-between p-2 border-2 rounded-full border-[#00aff0] bg-white text-[#00aff0] text-[14px] w-full md:w-1/2 hover:w-full hover:bg-[#00aff0] hover:text-white transition-all duration-200" 
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
      <div className="flex flex-col space-y-16 items-center md:items-start"> {/* Thay đổi ở đây */}
        {/* TikTok Shop */}
        <div className="w-full md:w-1/2 transform transition-transform duration-300 hover:scale-120 space-y-8">
          <div className="p-4 bg-white rounded-lg">
            <div className="flex items-center mb-4">
              <PiTiktokLogo className="w-12 h-12 mr-2 text-[#00aff0]" />
              <h2 className="text-sm font-bold text-[#00aff0] rounded-full px-5 py-3">
                TIKTOK SHOP
              </h2>
            </div>
            <div className="space-y-3">
              <ProjectItem
                name="Lắp Đặt Camera Hà Nội"
                url="https://www.tiktok.com/@ldchanoi"
                imageUrl="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/9973881cfae458c32e5bb2f35a381741.jpeg?lk3s=a5d48078&nonce=97328&refresh_token=a949dfaac730d318103341800013e1e3&x-expires=1734490800&x-signature=hGZdFbWDusUyOMT%2B6QF83s7yp9U%3D&shp=a5d48078&shcp=81f88b70"
              />
              <ProjectItem
                name="Camera Gia Đình"
                url="https://www.tiktok.com/@camera.giadinh"
                imageUrl="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f1d81a6964884377c92697e475f4402f~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=3604&refresh_token=0e565e481c66a32e25ce72269a255e8e&x-expires=1734490800&x-signature=yEJeLiLrbSLgc4aFStQ02ee5lfM%3D&shp=a5d48078&shcp=81f88b70"
              />
              <ProjectItem
                name="KHOCONGNGHE.86"
                url="https://www.tiktok.com/@khocongnghe86"
                imageUrl="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/bd4160940411c1904a636023f5cbedff.jpeg?lk3s=a5d48078&nonce=99124&refresh_token=f6c62c4bdbafa8749858781d4b85ca21&x-expires=1734490800&x-signature=QNifYN8BJAIiS7eTFsLyb%2F34JT0%3D&shp=a5d48078&shcp=81f88b70"
              />
            </div>
          </div>
        </div>

        {/* Shopee */}
        <div className="w-full md:w-1/2 transform transition-transform duration-300 hover:scale-120 space-y-8">
          <div className="p-4 bg-white rounded-lg">
            <div className="flex items-center mb-4">
              <TbBrandShopee className="w-12 h-12 mr-2 text-[#00aff0]" />
              <h2 className="text-sm font-bold text-[#00aff0] rounded-full px-5 py-3">
                SHOPEE
              </h2>
            </div>
            <div className="space-y-3">
              <ProjectItem
                name="Lắp Đặt Camera Hà Nội"
                url="https://shopee.vn/lapdatcamerahanoi_ldc"
                imageUrl="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/9973881cfae458c32e5bb2f35a381741.jpeg?lk3s=a5d48078&nonce=97328&refresh_token=a949dfaac730d318103341800013e1e3&x-expires=1734490800&x-signature=hGZdFbWDusUyOMT%2B6QF83s7yp9U%3D&shp=a5d48078&shcp=81f88b70"
              />
              <ProjectItem
                name="Camera Gia Đình"
                url="https://shopee.vn/camera86giadinh"
                imageUrl="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f1d81a6964884377c92697e475f4402f~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=3604&refresh_token=0e565e481c66a32e25ce72269a255e8e&x-expires=1734490800&x-signature=yEJeLiLrbSLgc4aFStQ02ee5lfM%3D&shp=a5d48078&shcp=81f88b70"
              />
              <ProjectItem
                name="KHOCONGNGHE.86"
                url="https://shopee.vn/khocongnghe86"
                imageUrl="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/bd4160940411c1904a636023f5cbedff.jpeg?lk3s=a5d48078&nonce=99124&refresh_token=f6c62c4bdbafa8749858781d4b85ca21&x-expires=1734490800&x-signature=QNifYN8BJAIiS7eTFsLyb%2F34JT0%3D&shp=a5d48078&shcp=81f88b70"
              />
            </div>
          </div>
        </div>

        {/* Lazada */}
        <div className="w-full md:w-1/2 transform transition-transform duration-300 hover:scale-120 space-y-8">
          <div className="p-4 bg-white rounded-lg">
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
            <div className="space-y-3">
              <ProjectItem
                name="Lắp Đặt Camera Hà Nội"
                url="https://www.lazada.vn/shop/lap-dat-camera-ha-noi/?spm=a2o4n.pdp_revamp.seller.1.49932882T5pm13&itemId=2787171787&channelSource=pdp"
                imageUrl="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/9973881cfae458c32e5bb2f35a381741.jpeg?lk3s=a5d48078&nonce=97328&refresh_token=a949dfaac730d318103341800013e1e3&x-expires=1734490800&x-signature=hGZdFbWDusUyOMT%2B6QF83s7yp9U%3D&shp=a5d48078&shcp=81f88b70"
              />
              <ProjectItem
                name="Camera Gia Đình"
                url="https://www.lazada.vn/shop/x710lojf/?spm=a2o4n.pdp_revamp.seller.1.217c37e2U1PqyD&itemId=2569842199&channelSource=pdp"
                imageUrl="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f1d81a6964884377c92697e475f4402f~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=3604&refresh_token=0e565e481c66a32e25ce72269a255e8e&x-expires=1734490800&x-signature=yEJeLiLrbSLgc4aFStQ02ee5lfM%3D&shp=a5d48078&shcp=81f88b70"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
