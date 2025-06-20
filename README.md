|![GitHub](https://img.shields.io/badge/GitHub-bylickilabs-181717?style=for-the-badge&logo=github)|![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)|![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)|
|---|---|---|

|![UI](https://img.shields.io/badge/UI-Neon%20Style-ff00ff?style=for-the-badge)|![Localhost](https://img.shields.io/badge/Localhost-3000/5000-critical?style=for-the-badge)|![React](https://img.shields.io/badge/Framework-React-61DAFB?logo=react)|![Status](https://img.shields.io/badge/Status-Stable-brightgreen?style=for-the-badge)|![Platform](https://img.shields.io/badge/Platform-Windows%2011-0078D6?style=for-the-badge&logo=windows)|
|---|---|---|---|---|

|![Frontend](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react)|![Backend](https://img.shields.io/badge/Backend-Express-000000?style=for-the-badge&logo=express)|![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript)|![API](https://img.shields.io/badge/API-RESTful-ff9800?style=for-the-badge)|![System](https://img.shields.io/badge/Systeminformation-v1.0.0-informational?style=for-the-badge)|
|---|---|---|---|---|

## 🖥️ WinSysInfo

|![WinSysInfo_github](https://github.com/user-attachments/assets/7cd1ec13-fbc6-434d-9cc7-84e88ec2a0e0)|
|---|

**WinSysInfo** ist eine modulare Windows-Systemdiagnose-Anwendung bestehend aus einem modernen React-Frontend und einem Express-Node.js-Backend. Sie erfasst und visualisiert lokale Systeminformationen wie CPU, RAM, Betriebssystemdaten und Systemzeit – stilvoll dargestellt im Neon-UI-Stil.

<br>

---

<br>

> 🚀 Features

- 🔧 Echtzeit-Erfassung von CPU-Daten (Marke, Cores, Geschwindigkeit, Virtualisierung)
- 💾 RAM-Status (Gesamt, genutzt, frei, Swap)
- 🧩 Detaillierte Betriebssysteminformationen (Name, Build, Architektur, UEFI)
- ⏱️ Systemzeit, Uptime, Zeitzone
- ⚡ REST-basierte API (`/sysinfo`)
- 🎨 Neon-inspiriertes React-Frontend
- 🔒 Lokale Ausführung ohne Cloud- oder Internetverbindung
- 🪛 Automatischer Start via Batch-Datei

<br>

---

<br>

> 📊 Verwendete Technologien (geschätzt)

```yarn
🟨 JavaScript     ███████████████████████████████  85%  
🌐 HTML           █████                           10%  
📄 Batchfile      ▓▓                              3%  
🧾 JSON           ▓                               2%  
```

<br>

---

<br>

# 🛠️ Installation
  - Voraussetzungen

- 📦 Node.js (v18+)
- 💻 Windows 10 oder 11
- 📂 Paketmanager: `npm`

<br>

---

<br>

2. Backend (Server)

```yarn
cd server
npm install
node index.js
```

> 📍 Läuft auf: http://localhost:5000/sysinfo

<br>

---

<br>

3. Frontend (React)

```yarn
cd client
npm install
npm start
```

> 🌐 Öffnet unter: http://localhost:3000

<br>

---

<br>

4. Beides automatisch starten (nur Windows)

```yarn
start-all.bat
```

- Startet Client + Server in getrennten Terminals.

<br>

---

<br>

📦 API-Endpunkt

```yarn
{
  "cpu": { "manufacturer": "AMD", "brand": "Ryzen", "cores": 16, ... },
  "mem": { "total": 51462053888, "used": 11318571008, ... },
  "os": { "distro": "Windows 11 Home", "arch": "x64", ... },
  "time": { "current": 1750431590210, "uptime": 189288.578, ... }
}
```

<br>

---

<br>

> 🔐 Sicherheitshinweise
- Diese Anwendung ist für den lokalen Einsatz konzipiert. Für produktive Szenarien sollten folgende Maßnahmen ergriffen werden:
- CORS auf localhost:3000 beschränken
- API-Key-Authentifizierung für /sysinfo
- Sensible Felder wie serial, hostname ausblenden
- Serverzugriff nur über Loopback erlauben

<br>

---

<br>

> 📁 Projektstruktur

```yarn
WinSysInfo/
├── client/                     # Frontend
│   ├── public/
│   │   └── index.html          # Einstiegspunkt für React
│   ├── src/
│   │   ├── App.js              # Root-Komponente
│   │   ├── index.js            # ReactDOM-Render
│   │   └── components/
│   │       └── SystemInfo.js   # Darstellung der Daten
│   └── package.json            # React-Abhängigkeiten
│
├── server/                     # Backend
│   ├── index.js                # Express-API
│   └── package.json            # Server-Abhängigkeiten
│
├── start-all.bat               # Startet Server + Client gleichzeitig
├── README.md                   # Diese Datei
```

<br>

---

<br>

📃 Lizenz
MIT License – [LICENSE](LICENSE)

---
