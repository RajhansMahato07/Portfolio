@echo off
title Rajhans Mahato Portfolio Dev Server
echo ========================================================
echo   Launching Rajhans Mahato - Full Stack Portfolio
echo   Local Address: http://localhost:5173/
echo ========================================================

start "" "http://localhost:5173/"

set "PATH=C:\Program Files\nodejs;%PATH%"
npm run dev -- --host 127.0.0.1 --port 5173
pause
