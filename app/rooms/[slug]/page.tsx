import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getRoomBySlug, rooms } from '@/data/rooms';

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) notFound();

  return (
    <main className="page-shell">
      <div className="top-nav">
        <Link href="/" className="back-link">← Back to Mission Control</Link>
        <div className="pill">{room.status}</div>
      </div>

      <div className="title-block glass">
        <div className="eyebrow">{room.shortName} / Level {room.level}</div>
        <h1 className="h1">{room.name}</h1>
        <div className="subtext">{room.summary}</div>
      </div>

      <section className="room-layout">
        <div className="room-image-card glass">
          <Image src={room.image} alt={room.name} width={1365} height={1024} priority />
        </div>

        <div className="grid">
          <div className="panel glass">
            <h2 className="section-title">Room profile</h2>
            <div className="kv-list">
              <div className="kv-item"><div className="kv-key">Purpose</div><div className="kv-value">{room.purpose}</div></div>
              <div className="kv-item"><div className="kv-key">Owner</div><div className="kv-value">{room.owner}</div></div>
              <div className="kv-item"><div className="kv-key">Status</div><div className="kv-value">{room.status}</div></div>
            </div>
          </div>

          <div className="panel glass">
            <h2 className="section-title">Primary metrics</h2>
            <div className="tag-wrap">
              {room.metrics.map((metric) => (
                <div key={metric} className="tag">{metric}</div>
              ))}
            </div>
          </div>

          <div className="panel glass">
            <h2 className="section-title">Core systems</h2>
            <div className="tag-wrap">
              {room.systems.map((system) => (
                <div key={system} className="tag">{system}</div>
              ))}
            </div>
          </div>

          <div className="panel glass">
            <h2 className="section-title">Build notes</h2>
            <div className="kv-list">
              {room.notes.map((note) => (
                <div key={note} className="kv-item"><div className="kv-value">{note}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
