import React from "react";
import Image from "next/image";

function Bazar() {
  return (
    <section
      className={"content flex min-h-screen flex-col items-center pt-8 mx-4"}
      id="bazar"
    >
      <div className="my-4">
        <div className="[font-family:'Readex_Pro-Bold',Helvetica] font-bold text-[16px]">
          ARASPATI
          <br />
          Warung Panas Senopati
        </div>
      </div>
      <div className="my-4 px-4">
        <Image
          src="https://s6.imgcdn.dev/RtH5O.jpg"
          alt="Bazar Senopati SMANSA"
          width={224}
          height={398}
        />
      </div>
      <div>
        <p className="[font-family:'Montserrat_Subrayada-Bold',Helvetica] font-bold text-[24px]">We serve hot cooked on site</p>
      </div>
    </section>
  );
}

export default Bazar;
