import React from 'react'
import Image from "next/image";

function Link() {
  return (
    <section className={'content flex min-h-screen flex-col items-center justify-between pt-8 mx-16'} id='link-main'>
        <div className="top-picture mb-3">
          <Image
            src="https://ik.imagekit.io/erz/head.jpg?updatedAt=1690815901380"
            alt="Senopati SMANSA"
            width={180}
            height={180}
            className="rounded-full"
          />
        </div>
        <h1 className='my-3'>Senopati SMANSA</h1>
        <h2>Social Media</h2>
        <div className={'button_area'}>
          <a
            href="https://instagram.com/senopatismansa/"
            className={'a'}
            rel="noopenner noreferrer"
          >
            <Image src='https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg' width={25} height={25}/>
            Instagram
          </a>
        </div>
        <h2>Playlist</h2>
        <div className='button_area'>
          <a href='https://l.instagram.com/?u=https%3A%2F%2Fopen.spotify.com%2Fplaylist%2F5htaEm7mbbMs5DP3y54CAj%3Fsi%3DxLu0GhjqS9-VX-XGi2O3pw%26utm_source%3Dcopy-link&e=AT313TocokaxkrrfI73Y3qD7qsGiLPpNp18Xjqj6OS7E9e_GTrVXwcE7C1aDu6L9Eoa1LcUERxkl7HbMyNBvKSCf59D9w7lLfbwWSFA' className={'a'} rel='noopenner noreferrer'>
            <Image src="https://www.svgrepo.com/show/475684/spotify-color.svg" alt="Spotify Playlist" width={25} height={25} className='justify-center' />Spotify Playlist</a>
        </div>
      </section>
  )
}

export default Link