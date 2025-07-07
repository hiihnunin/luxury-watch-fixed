const brandList = document.getElementById('brand-list');
const watchList = document.getElementById('watch-list');

Object.keys(watchData).forEach(brand => {
  const brandDiv = document.createElement('div');
  brandDiv.className = 'brand';
  brandDiv.textContent = brand;
  brandDiv.onclick = () => showWatches(brand);
  brandList.appendChild(brandDiv);
});

function showWatches(brand) {
  brandList.style.display = 'none';
  watchList.innerHTML = '';
  watchList.classList.remove('hidden');

  const watches = watchData[brand].filter(w => w.inStock);
  watches.forEach(watch => {
    const watchDiv = document.createElement('div');
    watchDiv.className = 'watch';
    watchDiv.innerHTML = `
      <img src="\${watch.img}" alt="\${watch.name}">
      <div class="watch-name">\${watch.name}</div>
    `;
    watchList.appendChild(watchDiv);
  });
}
