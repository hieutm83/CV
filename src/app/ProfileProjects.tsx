'use client';

import { useState } from 'react';
import { AppConfig } from '@/config/app.config';

function ProjectItem({ name, url, imageUrl }: { name: string; url: string; imageUrl: string }) {
  return (
    <div className={'bg-white border-neutral-200 p-4'}>
      <div className={'flex flex-row justify-between'}>
        <a href={url} className={'font-bold text-[15px] hover:text-primary'} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={name} className="w-6 h-6 mr-2 inline-block" />
          {name}
        </a>
      </div>
    </div>
  );
}

export default function ProfileProjects() {
  return (
    <div>
      <div className={'flex flex-col divide-y'}>
        <ProjectItem
          name="Shopee Store 1"
          url="https://vn.shp.ee/QuHkKCi"
          imageUrl="https://tiemquatiko.com/wp-content/uploads/2022/08/shopee-circle-logo-design-shopping-bag-13.png"
        />
        <ProjectItem
          name="Shopee Store 2"
          url="https://vn.shp.ee/Dw1afxu"
          imageUrl="https://tiemquatiko.com/wp-content/uploads/2022/08/shopee-circle-logo-design-shopping-bag-13.png"
        />
        <ProjectItem
          name="Tiktok Shop 1"
          url="https://vt.tiktok.com/ZMrvqXUNo/?page=TikTokShop"
          imageUrl="https://freepnglogo.com/images/all_img/1714299307tiktok-shop-icon-png.png"
        />
        <ProjectItem
          name="Tiktok Shop 2"
          url="https://vt.tiktok.com/ZMrvqmmtY/?page=TikTokShop"
          imageUrl="https://freepnglogo.com/images/all_img/1714299307tiktok-shop-icon-png.png"
        />
      </div>
    </div>
  );
}
