function updateClock() {
  const now = new Date();
  const clock = document.getElementById('clock');
  const date = document.getElementById('date');

  // Format and set the time
  const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
  clock.textContent = now.toLocaleString(undefined, timeOptions);

  // Format and set the date
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  date.textContent = now.toLocaleString(undefined, dateOptions);
}

updateClock();
setInterval(updateClock, 1000);


function updateWallpaper() {
  fetch(
    `https://api.unsplash.com/photos/random?client_id=ORclfsYGXZrNFishTkGC7HVrjC_Fe1iPTfn484yBsUs&query=nature%20landscape&orientation=landscape`
  )
    .then((response) => response.json())
    .then((data) => {
      const wallpaperDiv = document.getElementById('wallpaper');
      const imageUrl = data.urls.regular; // Use the regular-sized ,  full sized image URL
      wallpaperDiv.style.backgroundImage = `url('${imageUrl}')`;
    })
    .catch((error) => {
      console.error('Error fetching wallpaper:', error);
    });
}

updateWallpaper();