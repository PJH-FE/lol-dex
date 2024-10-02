import { ChampionRotation } from '@/types/ChampionRotation';

export async function GET() {
  const res = await fetch('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations', {
    headers: {
      'Content-Type': 'application/json',
      'X-Riot-Token': process.env.RIOT_API_KEY as string
    }
  });
  const data: ChampionRotation[] = await res.json();

  return Response.json({ data });
}
