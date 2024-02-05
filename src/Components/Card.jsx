import React from "react";
import pg1 from "../assets/pg1.png";
import pg2 from "../assets/pg-2.png";
import pg3 from "../assets/pg-3.png";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import lg1 from "../assets/lg1.png";
import lg2 from "../assets/lg-2.png";
import lg3 from "../assets/lg-3.png";
import lg4 from "../assets/lg-4.png";
import { FaCalendarAlt } from "react-icons/fa";
import { PiBagLight } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa6";
import { MdShare } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";

const Card = () => {
  const cm = [
    {
      id: 1,
      src: pg1,
      tag: "✍️ Article",
      mm: <HiOutlineDotsHorizontal size={32} />,
      sm: lg1,
      mext: "Sarthak Kamra",
      com: "What if famous brands had regular fonts? Meet RegulaBrands!",
      cmd: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      tm: "1.4k views",
      eye: <FaRegEye />,
      share: <MdShare size={25} />,
    },
    {
      id: 2,
      src: pg2,
      tag: "🔬️ Education ",
      mm: <HiOutlineDotsHorizontal size={32} />,
      sm: lg2,
      eye: <FaRegEye />,

      com: "Tax Benefits for Investment under National Pension Scheme launched by Government",
      cmd: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      mext: "Sarah West",
      tm: "1.4k views",
      share: <MdShare size={25} />,
    },
    {
      id: 3,
      src: pg3,
      tag: "🗓️ Meetup",
      sm: lg3,
      com: "Finance & Investment Elite Social Mixer @Lujiazui",
      mext: "Ronal Jones",
      dm: "Fri, 12 Oct, 2018",
      aq: <FaCalendarAlt />,
      tm: "1.4k views",
      eye: <FaRegEye />,
      share: <MdShare size={25} />,
      lo: "Ahmedabad, India",
      lm: <MdOutlineLocationOn size={20} />,
      vm: "Visit Website",
      style: "text-danger",
    },
    {
      id: 4,

      tag: "💼️ Job",
      sm: lg4,
      com: "Software Developer",
      mext: "Joseph Gray",
      dm: "Innovaccer Analystists Private Limited",
      aq: <PiBagLight size={20} />,
      tm: "1.4k views",
      eye: <FaRegEye />,
      share: <MdShare size={25} />,
      lo: "Noida India",
      lm: <MdOutlineLocationOn size={20} />,
      vm: "Apply on Timesjobs",
      style: "text-success",
    },
  ];
  return (
    <div className="container ">
      <div className="row">
        <div className="col-10">
          {cm.map(
            ({
              id,
              src,
              tag,
              com,
              cmd,
              mm,
              sm,
              mext,
              dm,
              aq,
              tm,
              eye,
              share,
              lo,
              lm,
              vm,
              style,
            }) => (
              <div
                key={id}
                className="d-flex m-2 flex-wrap align-items-center justify-content-center justify-content-lg-start "
              >
                <div className="card" style={{ width: "60rem" }}>
                  <img src={src} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{tag}</h5>
                    <p
                      className="card-text"
                      style={{ fontFamily: "Sans-serif", fontWeight: "bold" }}
                    >
                      {com} <span style={{ paddingLeft: "200px" }}>{mm}</span>
                    </p>
                    <span>{cmd}</span>
                    <div className="ps-2 pt-2 pb-2">
                      {aq}{" "}
                      <span className="ps-2">
                        {dm}
                        <span style={{ paddingLeft: "12rem" }}>
                          {lm}
                          {lo}
                        </span>
                      </span>
                    </div>

                    <div>
                      <button
                        type="button"
                        class={`btn btn-light p-2 ${style}`}
                        style={{ width: "55rem" }}
                      >
                        {vm}
                      </button>
                    </div>
                    <div className="m-2">
                      <img
                        src={sm}
                        alt="sfsd"
                        width={40}
                        height={39}
                        className="rounded-circle"
                      />
                      <span className="ps-2">{mext}</span>

                      <span style={{ paddingLeft: "37rem" }}>
                        <span>{eye}</span> {tm}
                        <span className="ps-4">{share}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
       <div className="col-2">
       <input type="text" style={{border:"none", borderBottom:"2px solid"}}  placeholder=" Noida India " /> 
       <div className="m-4"><MdErrorOutline/>
       Your location will help us serve better and extend a personalised experience.
       </div>
        
       </div>
      </div>
    </div>
  );
};

export default Card;
