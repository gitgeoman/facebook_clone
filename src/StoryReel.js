import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="sctoryReel">
      <Story
        image="https://www.tygodnikpowszechny.pl/files/marekkondrat-kw.jpg"
        profileSrc=""
        title="Marek"
      />
      <Story
        image="https://ocdn.eu/pulscms-transforms/1/Xlgk9kuTURBXy81NDM0ZTMzNS00YTAzLTQ3MmMtYWFlMy1iZmZkYzIyNTE0ODEuanBlZ5KVAwAAzQsTzQY7kwXNA0jNAfqCoTABoTEB"
        profileSrc=""
        title="Ola"
      />
      <Story
        image="https://s-trojmiasto.pl/zdj/galeria/31/520565.jpg"
        profileSrc=""
        title="Dorotka"
      />
      <Story
        image="data:image/jpeg;base64,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"
        profileSrc=""
        title="Krzyś"
      />
    </div>
  );
}

export default StoryReel;