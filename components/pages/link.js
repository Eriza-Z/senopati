import React from 'react'
import Image from "next/image";
import style from "../../styles/Home.module.scss";

function Link() {
  return (
    <div className={style.content}>
        <div className="top-picture">
          <Image
            src="https://ik.imagekit.io/erz/head.jpg?updatedAt=1690815901380"
            alt="Senopati SMANSA"
            width={180}
            height={180}
            className="rounded-full"
          />
        </div>
        <h1>Senopati SMANSA</h1>
        <h2>Social Media</h2>
        <div className={style.button_area}>
          <a
            href="https://instagram.com/senopatismansa/"
            className={style.a}
            rel="noopenner noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
  )
}

export default Link