:: @echo off
::if you want to run the next one after the last one is finished, you can use call
echo "Packaging VueJS ==============================="
call npm install

echo "Starting VueJS ================================"
call npm run dev