cd svelte-client/
npm run build
cd ..

rm -rvf ./static/*

cp -v svelte-client/public/global.css ./static/
cp -rv svelte-client/public/build/ ./static/