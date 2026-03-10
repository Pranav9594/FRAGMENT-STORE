@echo off
REM Fragment Store - Windows Stop Script
REM This script stops all Node.js processes for the app

echo ========================================
echo    Fragment Store - Stopping Servers
echo ========================================
echo.

echo [INFO] Stopping Node.js processes...

REM Kill all node processes (be careful - this kills ALL node processes)
taskkill /F /IM node.exe >nul 2>nul

if %ERRORLEVEL% EQU 0 (
    echo [INFO] All Node.js processes stopped successfully
) else (
    echo [INFO] No Node.js processes were running
)

echo.
echo ========================================
echo    Servers Stopped
echo ========================================
echo.
pause