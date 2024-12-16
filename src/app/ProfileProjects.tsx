'use client';

function ProjectItem({
  name,
  url,
  imageUrl,
  borderColor,
}: {
  name: string;
  url: string;
  imageUrl: string;
  borderColor: string;
}) {
  return (
    <div
      className={`p-4 border rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105`}
      style={{ borderColor }}
    >
      <a
        href={url}
        className="flex items-center text-[15px] hover:text-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imageUrl} alt={name} className="w-6 h-6 mr-2 rounded-full" />
        <span>{name}</span>
      </a>
    </div>
  );
}

export default function ProfileProjects() {
  return (
    <div className="bg-white p-4 space-y-16">
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
        {/* Cột 1: TikTok Shop */}
        <div className="w-full md:w-1/2">
          <div className="p-4 border border-black rounded-xl bg-gray-200">
            <div className="flex items-center mb-4">
              <img
                src="https://i0.wp.com/khiyalee.com/wp-content/uploads/2023/12/tiktok-shop-logo-png.png?fit=3245%2C3523&ssl=1?v=1722525099"
                alt="TikTok Shop"
                className="w-12 h-12 mr-3"
              />
              <h2 className="text-xl">TikTok Shop</h2>
            </div>
            <div className="space-y-4">
              <ProjectItem
                name="Lắp Đặt Camera Hà Nội"
                url="https://www.tiktok.com/@ldchanoi"
                imageUrl="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/9973881cfae458c32e5bb2f35a381741.jpeg?lk3s=a5d48078&nonce=97328&refresh_token=a949dfaac730d318103341800013e1e3&x-expires=1734490800&x-signature=hGZdFbWDusUyOMT%2B6QF83s7yp9U%3D&shp=a5d48078&shcp=81f88b70"
                borderColor="black"
              />
              <ProjectItem
                name="Camera Gia Đình"
                url="https://www.tiktok.com/@camera.giadinh"
                imageUrl="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f1d81a6964884377c92697e475f4402f~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=3604&refresh_token=0e565e481c66a32e25ce72269a255e8e&x-expires=1734490800&x-signature=yEJeLiLrbSLgc4aFStQ02ee5lfM%3D&shp=a5d48078&shcp=81f88b70"
                borderColor="black"
              />
              <ProjectItem
                name="KHOCONGNGHE.86"
                url="https://www.tiktok.com/@khocongnghe86"
                imageUrl="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/bd4160940411c1904a636023f5cbedff.jpeg?lk3s=a5d48078&nonce=99124&refresh_token=f6c62c4bdbafa8749858781d4b85ca21&x-expires=1734490800&x-signature=QNifYN8BJAIiS7eTFsLyb%2F34JT0%3D&shp=a5d48078&shcp=81f88b70"
                borderColor="black"
              />
            </div>
          </div>
        </div>

        {/* Cột 2: Shopee và Lazada */}
        <div className="w-full md:w-1/2 space-y-8">
          {/* Shopee */}
          <div className="p-4 border border-orange-500 rounded-xl bg-orange-100">
            <div className="flex items-center mb-4">
              <img
                src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOUpMRGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--39d48a02f976805620ddc50092a330d97a314636/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--15c3f2f3e11927673ae52b71712c1f66a7a1b7bd/shopee-logo.png"
                alt="Shopee"
                className="w-12 h-12 mr-3"
              />
              <h2 className="text-xl">Shopee</h2>
            </div>
            <div className="space-y-4">
              <ProjectItem
                name="Lắp Đặt Camera Hà Nội"
                url="https://shopee.vn/lapdatcamerahanoi_ldc"
                imageUrl="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/9973881cfae458c32e5bb2f35a381741.jpeg?lk3s=a5d48078&nonce=97328&refresh_token=a949dfaac730d318103341800013e1e3&x-expires=1734490800&x-signature=hGZdFbWDusUyOMT%2B6QF83s7yp9U%3D&shp=a5d48078&shcp=81f88b70"
                borderColor="orange"
              />
              <ProjectItem
                name="Camera Gia Đình"
                url="https://shopee.vn/camera86giadinh"
                imageUrl="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f1d81a6964884377c92697e475f4402f~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=3604&refresh_token=0e565e481c66a32e25ce72269a255e8e&x-expires=1734490800&x-signature=yEJeLiLrbSLgc4aFStQ02ee5lfM%3D&shp=a5d48078&shcp=81f88b70"
                borderColor="orange"
              />
              <ProjectItem
                name="KHOCONGNGHE.86"
                url="https://shopee.vn/khocongnghe86"
                imageUrl="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/bd4160940411c1904a636023f5cbedff.jpeg?lk3s=a5d48078&nonce=99124&refresh_token=f6c62c4bdbafa8749858781d4b85ca21&x-expires=1734490800&x-signature=QNifYN8BJAIiS7eTFsLyb%2F34JT0%3D&shp=a5d48078&shcp=81f88b70"
                borderColor="orange"
              />
            </div>
          </div>

          {/* Lazada */}
          <div className="p-4 border border-blue-500 rounded-xl bg-blue-100">
            <div className="flex items-center mb-4">
              <img
                src="https://classic.vn/wp-content/uploads/2022/04/logo-lazada.png"
                alt="Lazada"
                className="w-12 h-12 mr-3"
              />
              <h2 className="text-xl">Lazada</h2>
            </div>
            <div className="space-y-4">
              <ProjectItem
                name="Lắp Đặt Camera Hà Nội"
                url="https://www.lazada.vn/shop/lap-dat-camera-ha-noi"
                imageUrl="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/9973881cfae458c32e5bb2f35a381741.jpeg?lk3s=a5d48078&nonce=97328&refresh_token=a949dfaac730d318103341800013e1e3&x-expires=1734490800&x-signature=hGZdFbWDusUyOMT%2B6QF83s7yp9U%3D&shp=a5d48078&shcp=81f88b70"
                borderColor="blue"
              />
              <ProjectItem
                name="Camera Gia Đình"
                url="https://www.lazada.vn/shop/x710lojf/?spm=a2o4n.pdp_revamp.seller.1.15fa37e2IUK9Pd&itemId=2569842199&channelSource=pdp"
                imageUrl="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f1d81a6964884377c92697e475f4402f~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=3604&refresh_token=0e565e481c66a32e25ce72269a255e8e&x-expires=1734490800&x-signature=yEJeLiLrbSLgc4aFStQ02ee5lfM%3D&shp=a5d48078&shcp=81f88b70"
                borderColor="blue"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
