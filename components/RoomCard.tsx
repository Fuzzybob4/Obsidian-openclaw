import Link from 'next/link';
import type { Room } from '@/data/rooms';

export function RoomCard({ room }: { room: Room }) {
  return (
    <Link href={`/rooms/${room.slug}`} className="room-tile">
      <div className="room-title-row">
        <div className="room-name">{room.name}</div>
        <div className="pill">L{room.level}</div>
      </div>
      <div className="room-desc">{room.summary}</div>
      <div className="link-row">
        <span>{room.purpose}</span>
        <span>Open →</span>
      </div>
    </Link>
  );
}
