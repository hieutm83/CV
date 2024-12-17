import {AppConfig} from '@/config/app.config';
import {FiMenu, FiShare} from 'react-icons/fi';
import {OpenMenuButton, siderRef} from '@/components/Sider';

export default function ProfileHeader() {
  return <div className={'bg-white border-b'}>
    <div
      className={'h-[200px] bg-cover bg-center'}
      style={{
        backgroundImage: `url(https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/400364211_723175456510276_7066175574184611203_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=bd9a62&_nc_eui2=AeH7aua3VRTSFx0G5vGo_aM1c7eVLHz554pzt5UsfPnnijpqXS_8Slet4JTItxnzjZO-Xkw1rOOn1tratkMy2tzv&_nc_ohc=5AkUaQ8l9rEQ7kNvgFRMAjc&_nc_zt=23&_nc_ht=scontent.fhan5-10.fna&_nc_gid=ANdQwA7VXEeo3oBXBZ2c9tw&oh=00_AYA66_4tlYLlDzCvBf3XhnVVx9VLGqeWKqlGj9gweQ8N5Q&oe=6766FF38)`,
      }}
    >

      <div className="bg-gradient-to-b from-black/60 to-transparent h-[80%] w-full text-white p-4">

        <div className={'flex flex-row items-center'}>
          <OpenMenuButton/>
          <div className={'md:px-4'}>
            <div className={'font-semibold'}>
              Minh Hieu Trinh
            </div>
            <div className={'text-[12px]'}>
              Contact: minhhieu.832k@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={'flex flex-row justify-between px-4'}>
      <div
        className={'overflow-hidden rounded-full w-[100px] h-[100px] bg-cover bg-center border-2 border-white -mt-[32px]'}
        style={{
          backgroundImage: `url('${AppConfig.avatar}')`
        }}
      />
      <div className={'pt-4'}>
        <div className={'border border-neutral-200 w-12 h-12 rounded-full flex justify-center items-center'}>
          <FiShare width="24px"/>
        </div>
      </div>
    </div>
    <div className={'p-4'}>
      <div className={'text-[20px] font-semibold'}>
        {AppConfig.name}
      </div>
      <div className={'flex flex-row text-neutral-500 gap-1 items-center'}>
        <div className={'text-[12px]'}>
          @{AppConfig.username}
        </div>
        <div>
          •
        </div>
        <div className={'text-[12px]'}>
          Available to work <span className={'underline'}>remotely</span>
        </div>
      </div>
      <div className={'text-[14px] mt-1 flex flex-col gap-0.5'}>
        <p className={'leading-relaxed whitespace-pre-wrap line-clamp-3'}>
          {AppConfig.introduction}
        </p>
        <div className={'text-primary font-medium text-[12px] cursor-pointer mt-2'}>
          More info
        </div>
      </div>
    </div>
  </div>;
}
