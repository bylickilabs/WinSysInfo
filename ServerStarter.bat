@echo off
echo Starte WinSysInfo Backend und Frontend...

REM Server starten
start "Backend (Node.js)" cmd /k "cd /d %~dp0server && npm install && node index.js"

REM Client starten
start "Frontend (React)" cmd /k "cd /d %~dp0client && npm install && npm start"

exit