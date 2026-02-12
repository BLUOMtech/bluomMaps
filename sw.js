self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open('bluom-maps').then(cache=>{
      return cache.addAll(['./']);
    })
  );
});
