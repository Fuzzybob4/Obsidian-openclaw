import Image from 'next/image';
import Link from 'next/link';
import { roomMapImage, rooms } from '@/data/rooms';
import { RoomCard } from '@/components/RoomCard';

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="title-block glass">
        <div className="eyebrow">OpenClaw / Mission Control</div>
        <h1 className="h1">Visual Operating System for Kal, agents, and every business.</h1>
        <div className="subtext">
          This Next.js starter uses the exact generated room images as the primary visual layer.
          Start on the main map, then drill into each room as its own view.
        </div>
        <div className="stats-row">
          <div className="stat-card"><div className="stat-label">Rooms</div><div className="stat-value">{rooms.length}</div></div>
          <div className="stat-card"><div className="stat-label">Businesses</div><div className="stat-value">5 Active</div></div>
          <div className="stat-card"><div className="stat-label">Mode</div><div className="stat-value">Prototype UI</div></div>
          <div className="stat-card"><div className="stat-label">Recommended next step</div><div className="stat-value">Wire live data</div></div>
        </div>
      </div>

      <section className="hero">
        <div className="map-card glass">
          <Image src={roomMapImage} alt="Mission Control map" width={1365} height={1024} priority />
        </div>

        <div className="side-card glass">
          <h2 className="section-title">Suggested build path</h2>
          <div className="kv-list">
            <div className="kv-item">
              <div className="kv-key">Phase 1</div>
              <div className="kv-value">Use these exact images as locked hero visuals and ship the navigation shell first.</div>
            </div>
            <div className="kv-item">
              <div className="kv-key">Phase 2</div>
              <div className="kv-value">Wire the Command Bridge, Core, Finance Tower, and Operations Deck to real data sources.</div>
            </div>
            <div className="kv-item">
              <div className="kv-key">Phase 3</div>
              <div className="kv-value">Add agent routing, task execution, and archive auto-capture.</div>
            </div>
            <div className="kv-item">
              <div className="kv-key">Repo use</div>
              <div className="kv-value">Drop this into a GitHub repo, run npm install, then npm run dev.</div>
            </div>
          </div>
          <div style={{ marginTop: 18 }}>
            <Link className="back-link" href="/rooms/command-bridge">Open the Command Bridge first</Link>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 20 }} className="panel glass">
        <h2 className="section-title">Rooms</h2>
        <div className="grid room-grid">
          {rooms.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>
      </section>

      <section style={{ marginTop: 20 }} className="panel glass">
        <h2 className="section-title">What Kal should do next</h2>
        <div className="code-box">
{`1. Turn room metadata into a database table.
2. Replace placeholder metrics with live sources.
3. Route each room to a dedicated service boundary.
4. Add auth, org scoping, and agent permissions.
5. Promote the Command Bridge into the default landing page.`}
        </div>
      </section>
    </main>
  );
}
