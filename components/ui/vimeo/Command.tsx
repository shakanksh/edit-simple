export default function Command() {
  return (
    <div className="aspect-video w-72">
      <div className="video-embed">
        <iframe
          src="https://player.vimeo.com/video/999623168?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          className="video-player"
          title="Command2"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
}
