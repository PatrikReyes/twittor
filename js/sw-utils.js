function actualizaCacheDinamico(dynamicCache, req, res) {
  if (res.ok) {
    return caches.open(dynamicCache).then((chache) => {
      chache.put(req, res.clone());
      return res.clone();
    });
  } else {
    return res;
  }
}
