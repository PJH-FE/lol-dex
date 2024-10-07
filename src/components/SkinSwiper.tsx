'use client';

import { ChampionDetail } from '@/types/ChampionDetail';
import { Swiper, SwiperSlide } from 'swiper/react';
import SkinCard from './Skin';
type DetailProps = {
  championInfo: ChampionDetail;
};
const SkinSwiper: React.FC<DetailProps> = ({ championInfo }) => {
  return (
    <Swiper spaceBetween={24} slidesPerView={3.6} className="w-full">
      {championInfo.skins.map((skin) => {
        return (
          <SwiperSlide key={skin.id} className="!flex flex-col items-center gap-3">
            <SkinCard skin={skin} name={championInfo.name} championId={championInfo.id} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default SkinSwiper;
