@echo off
cd /d "%~dp0"
py -3 --version >nul 2>nul
if not errorlevel 1 (
    py -3 "%~dp0preview_server.py"
    goto :done
)
python --version >nul 2>nul
if not errorlevel 1 (
    python "%~dp0preview_server.py"
    goto :done
)
echo Python 3 is required to preview the website.
:done
echo.
pause
