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
      className={`p-4 border-2 rounded-full shadow-lg transform transition-transform duration-200 hover:scale-105 ${borderColor} bg-[#00aff0]`}
    >
      <a
        href={url}
        className="flex items-center text-white text-[14px] hover:text-white"
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
      <div className="flex flex-col space-y-16">
        {/* TikTok Shop */}
        <div className="w-full transform transition-transform duration-300 hover:scale-105 space-y-8">
          <div className="p-4 bg-white rounded-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://i0.wp.com/khiyalee.com/wp-content/uploads/2023/12/tiktok-shop-logo-png.png?fit=3245%2C3523&ssl=1?v=1722525099"
                alt="TikTok Shop"
                className="w-12 h-12 mr-3"
              />
              <h2 className="text-xl font-bold text-[#00aff0] rounded-full px-4 py-2">
                TikTok Shop
              </h2>
            </div>
            <div className="space-y-8">
              <ProjectItem
                name="Lắp Đặt Camera Hà Nội"
                url="https://www.tiktok.com/@ldchanoi"
                imageUrl="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/9973881cfae458c32e5bb2f35a381741.jpeg?lk3s=a5d48078&nonce=97328&refresh_token=a949dfaac730d318103341800013e1e3&x-expires=1734490800&x-signature=hGZdFbWDusUyOMT%2B6QF83s7yp9U%3D&shp=a5d48078&shcp=81f88b70"
                borderColor="border-[#00aff0]"
              />
              <ProjectItem
                name="Camera Gia Đình"
                url="https://www.tiktok.com/@camera.giadinh"
                imageUrl="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f1d81a6964884377c92697e475f4402f~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=3604&refresh_token=0e565e481c66a32e25ce72269a255e8e&x-expires=1734490800&x-signature=yEJeLiLrbSLgc4aFStQ02ee5lfM%3D&shp=a5d48078&shcp=81f88b70"
                borderColor="border-[#00aff0]"
              />
              <ProjectItem
                name="KHOCONGNGHE.86"
                url="https://www.tiktok.com/@khocongnghe86"
                imageUrl="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/bd4160940411c1904a636023f5cbedff.jpeg?lk3s=a5d48078&nonce=99124&refresh_token=f6c62c4bdbafa8749858781d4b85ca21&x-expires=1734490800&x-signature=QNifYN8BJAIiS7eTFsLyb%2F34JT0%3D&shp=a5d48078&shcp=81f88b70"
                borderColor="border-[#00aff0]"
              />
            </div>
          </div>
        </div>

        {/* Shopee */}
        <div className="w-full transform transition-transform duration-300 hover:scale-105 space-y-8">
          <div className="p-4 bg-white rounded-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOUpMRGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--39d48a02f976805620ddc50092a330d97a314636/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--15c3f2f3e11927673ae52b71712c1f66a7a1b7bd/shopee-logo.png"
                alt="Shopee"
                className="w-12 h-12 mr-3"
              />
              <h2 className="text-xl font-bold text-[#00aff0] rounded-full px-4 py-2">
                Shopee
              </h2>
            </div>
            <div className="space-y-8">
              <ProjectItem
                name="Lắp Đặt Camera Hà Nội"
                url="https://shopee.vn/lapdatcamerahanoi_ldc"
                imageUrl="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/9973881cfae458c32e5bb2f35a381741.jpeg?lk3s=a5d48078&nonce=97328&refresh_token=a949dfaac730d318103341800013e1e3&x-expires=1734490800&x-signature=hGZdFbWDusUyOMT%2B6QF83s7yp9U%3D&shp=a5d48078&shcp=81f88b70"
                borderColor="border-[#00aff0]"
              />
              <ProjectItem
                name="Camera Gia Đình"
                url="https://shopee.vn/camera86giadinh"
                imageUrl="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f1d81a6964884377c92697e475f4402f~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=3604&refresh_token=0e565e481c66a32e25ce72269a255e8e&x-expires=1734490800&x-signature=yEJeLiLrbSLgc4aFStQ02ee5lfM%3D&shp=a5d48078&shcp=81f88b70"
                borderColor="border-[#00aff0]"
              />
              <ProjectItem
                name="KHOCONGNGHE.86"
                url="https://shopee.vn/khocongnghe86"
                imageUrl="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/bd4160940411c1904a636023f5cbedff.jpeg?lk3s=a5d48078&nonce=99124&refresh_token=f6c62c4bdbafa8749858781d4b85ca21&x-expires=1734490800&x-signature=QNifYN8BJAIiS7eTFsLyb%2F34JT0%3D&shp=a5d48078&shcp=81f88b70"
                borderColor="border-[#00aff0]"
              />
            </div>
          </div>
        </div>

        {/* Lazada */}
        <div className="w-full transform transition-transform duration-300 hover:scale-105 space-y-8"> {/* Tăng khoảng cách giữa các nội dung */}
          <div className="p-4 bg-white rounded-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://bizweb.dktcdn.net/100/032/885/themes/955383/assets/lazada.png?1731156124159"
                alt="Lazada"
                className="w-12 h-12 mr-3"
              />
              <h2 className="text-xl font-bold text-[#00aff0] rounded-full px-4 py-2">
                Lazada
              </h2>
            </div>
            <div className="space-y-8"> {/* Tăng khoảng cách giữa các mục */}
              <ProjectItem
                name="Lắp Đặt Camera Hà Nội"
                url="https://www.lazada.vn/lapdatcamerahanoi_ldc"
                imageUrl="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/9973881cfae458c32e5bb2f35a381741.jpeg?lk3s=a5d48078&nonce=97328&refresh_token=a949dfaac730d318103341800013e1e3&x-expires=1734490800&x-signature=hGZdFbWDusUyOMT%2B6QF83s7yp9U%3D&shp=a5d48078&shcp=81f88b70"
                borderColor="border-[#00aff0]"
              />
              <ProjectItem
                name="Camera Gia Đình"
                url="https://www.lazada.vn/camera86giadinh"
                imageUrl="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f1d81a6964884377c92697e475f4402f~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=3604&refresh_token=0e565e481c66a32e25ce72269a255e8e&x-expires=1734490800&x-signature=yEJeLiLrbSLgc4aFStQ02ee5lfM%3D&shp=a5d48078&shcp=81f88b70"
                borderColor="border-[#00aff0]"
              />
              <ProjectItem
                name="KHOCONGNGHE.86"
                url="https://www.lazada.vn/khocongnghe86"
                imageUrl="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/bd4160940411c1904a636023f5cbedff.jpeg?lk3s=a5d48078&nonce=99124&refresh_token=f6c62c4bdbafa8749858781d4b85ca21&x-expires=1734490800&x-signature=QNifYN8BJAIiS7eTFsLyb%2F34JT0%3D&shp=a5d48078&shcp=81f88b70"
                borderColor="border-[#00aff0]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
