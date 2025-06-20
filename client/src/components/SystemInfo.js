
import React, { useEffect, useState } from 'react';

function SystemInfo() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/sysinfo')
      .then(res => res.json())
      .then(setInfo)
      .catch(console.error);
  }, []);

  if (!info) return <p>Lade Informationen...</p>;

  const formatBytes = (bytes) => (bytes / 1024 / 1024 / 1024).toFixed(2) + ' GB';

  return (
    <div style={{
      background: 'linear-gradient(270deg, #000000, #0f0f0f, #000000)',
      color: '#00ffe7',
      padding: '2rem',
      borderRadius: '15px',
      fontFamily: 'Segoe UI',
      maxWidth: '900px',
      margin: 'auto',
      boxShadow: '0 0 25px #00ffe7'
    }}>
      <h1 style={{ textAlign: 'center' }}>🖥️ Windows Systeminformationen</h1>

      <section>
        <h2>🔧 CPU</h2>
        <p><strong>Hersteller:</strong> {info.cpu.manufacturer}</p>
        <p><strong>Modell:</strong> {info.cpu.brand}</p>
        <p><strong>Kerne:</strong> {info.cpu.cores}</p>
        <p><strong>Taktfrequenz:</strong> {info.cpu.speed} GHz</p>
        <p><strong>Virtualisierung:</strong> {info.cpu.virtualization ? 'Ja' : 'Nein'}</p>
      </section>

      <section>
        <h2>💾 Arbeitsspeicher</h2>
        <p><strong>Gesamt:</strong> {formatBytes(info.mem.total)}</p>
        <p><strong>Verwendet:</strong> {formatBytes(info.mem.used)}</p>
        <p><strong>Frei:</strong> {formatBytes(info.mem.free)}</p>
        <p><strong>Swap:</strong> {formatBytes(info.mem.swaptotal)}</p>
      </section>

      <section>
        <h2>🧩 Betriebssystem</h2>
        <p><strong>Name:</strong> {info.os.distro}</p>
        <p><strong>Version:</strong> {info.os.release}</p>
        <p><strong>Build:</strong> {info.os.build}</p>
        <p><strong>Architektur:</strong> {info.os.arch}</p>
        <p><strong>Hostname:</strong> {info.os.hostname}</p>
        <p><strong>UEFI:</strong> {info.os.uefi ? 'Ja' : 'Nein'}</p>
        <p><strong>Hypervisor:</strong> {info.os.hypervisor ? 'Ja' : 'Nein'}</p>
      </section>

      <section>
        <h2>⏱️ Systemzeit & Laufzeit</h2>
        <p><strong>Aktuelle Zeit:</strong> {new Date(info.time.current).toLocaleString()}</p>
        <p><strong>Uptime:</strong> {(info.time.uptime / 3600).toFixed(2)} Stunden</p>
        <p><strong>Zeitzone:</strong> {info.time.timezoneName}</p>
      </section>
    </div>
  );
}

export default SystemInfo;
