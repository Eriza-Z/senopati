import React from "react";
import Image from "next/image";

function Link() {
  return (
    <section
      className={
        "content flex min-h-screen flex-col items-center pt-4 mx-16"
      }
      id="link-main"
    >
      <div className="top-picture">
        <Image
          src="https://ik.imagekit.io/erz/Senopati/head.jpg?updatedAt=1700715395048"
          alt="Senopati SMANSA"
          width={180}
          height={180}
          className="rounded-full"
        />
      </div>
      <h1 className="font-bold text-white py-1">Senopati SMANSA</h1>
      <h2 className="font-semibold text-white py-1">Social Media</h2>
      <div className={"button_area"}>
        <a
          href="https://instagram.com/senopatismansa/"
          className={"a"}
          rel="noopenner noreferrer"
        >
          Instagram
        </a>
      </div>
      <h2 className="font-semibold text-white py-1">Playlist</h2>
      <div className="button_area">
        <a
          href="https://open.spotify.com/playlist/5htaEm7mbbMs5DP3y54CAj"
          className={"a"}
          rel="noopenner noreferrer"
        >
          Spotify Playlist
        </a>
      </div>
    </section>
  );
}

export default Link;
