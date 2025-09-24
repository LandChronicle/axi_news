@echo off
echo Starting AXI News development server...
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    echo.
)

REM Try different methods to start Next.js
echo Method 1: Direct next command
call .\node_modules\.bin\next dev
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Method 2: Using npx
    npx next dev
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo Method 3: Node direct execution
        node .\node_modules\next\dist\bin\next dev
    )
)

pause