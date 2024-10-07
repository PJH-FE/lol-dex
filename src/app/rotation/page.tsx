'use client';

import Card from '@/components/Card';
import { Champion } from '@/types/Champion';
import { getChampionRotation } from '@/utils/riotApi';
import { useEffect, useState } from 'react';

const Rotation = () => {
  const [rotateChampion, setRotateChampion] = useState<Champion[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const rotation = await getChampionRotation();
    setRotateChampion(rotation);
  };

  return (
    <>
      <h1>Champion Rotations</h1>

      <div className="flex gap-6 flex-wrap">
        {rotateChampion?.map((champion) => {
          return <Card key={champion.key} champion={champion} />;
        })}
      </div>
    </>
  );
};
export default Rotation;
