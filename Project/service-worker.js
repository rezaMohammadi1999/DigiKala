// all structure service worker in this file execution
// console.log(self);
self.addEventListener('install', (event) => {
    console.log('installing service worker', event);
    console.log('ey babajkjk');
});

self.addEventListener('activate', (event) => {
    console.log('activate service worker', event);
});

self.addEventListener('fetch', (event) => {
    console.log('fetch data ', event);
})