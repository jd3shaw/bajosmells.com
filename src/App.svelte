<script>
	let showVideo = false;
	
	function handleKeyDown(event) {
		if (event.key === 'Enter' || event.key === ' ') {
		playVideo();
		}
	}
	function playVideo() {
	  showVideo = true;
	  const video = document.querySelector('video');
	  if (video) {
		video.play();
	  }
	}
  
	function stopVideo() {
	  showVideo = false;
	  const video = document.querySelector('video');
	  if (video) {
		video.pause();
		video.currentTime = 0;
	  }
	}
  </script>
  
  <div class="app">
	<div class="background" on:click={playVideo} on:keydown={handleKeyDown}>
	  <img src="bajosmells.jpg" />
	</div>
	<div class="click-text">
	  Clickies
	</div>
	{#if showVideo}
	<div class="hidden" id="caption-description">
		This video contains built-in captions, which should be sufficient for accessibility purposes.
	</div>
	<video autoplay on:ended={stopVideo} aria-describedby="caption-description">
		<source src="bajosmells.mp4" type="video/mp4" />
	</video>
	{/if}
	<div>
	  <a class="twitch-link" href="https://www.twitch.tv/bajo" target="_blank">Visit Bajo's Twitch Channel</a>
	</div>
  </div>