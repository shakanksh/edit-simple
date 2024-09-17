export default function Recipe() {
  return (
    <div className="aspect-video w-72">
      <div className="video-embed">
        <iframe
          src="https://player.vimeo.com/video/999623030?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          className="video-player"
          title="Roasted beets with yogurt lemon zest, dill &amp; pistachios   Ingredients-8-10 medium size beets1-2 cup fresh ...gurt 1-2 cup choppe"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
}
