import React from "react";
import { useState } from "react";
import Card from "../Card";
import "./style.css";

function Game() {
  const [arr] = useState([
    {
      name: "plants1",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2pug749MNFCiQnMYlXPuRuXyvPAsdBXvHAqlH3P-ytyXMa7aOg9xwc4QmDo7cdFlGRTs&usqp=CAU",
      isSucssed: true,
      card:1,
    },
    {
      name: "plants2",
      src: "https://img-cdn.majarah.com/post/9255543845435846_110864764043691_909149921428189_8873684819100115_Majarah_science_.jpg",
      isSucssed: false,
    },
    {
      name: "plants3",
      src: "https://besthqwallpapers.com/Uploads/31-3-2018/46606/thumb2-jupiter-4k-planets-galaxy-nebula.jpg",
      isSucssed: false,
    },
    {
      name: "plants4",
      src: "https://www.almrsal.com/wp-content/uploads/2019/03/%D8%A7%D9%84%D8%BA%D9%84%D8%A7%D9%81-%D8%A7%D9%84%D8%AC%D9%88%D9%8A-%D9%84%D9%83%D9%88%D9%83%D8%A8-%D8%A7%D9%84%D9%85%D8%B4%D8%AA%D8%B1%D9%89.jpg",
      isSucssed: false,
    },
    {
      name: "plants5",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0XY3U8y_IczhRKEoelQzlfvHuCHBXg0B3ty6g-UQV7lKlIh4SzPa8Rd_d3kIqTZ3WeCw&usqp=CAU",
      isSucssed: false,
    },
    {
      name: "plants6",
      src: "https://scx2.b-cdn.net/gfx/news/2020/1-earth.jpg",
      isSucssed: false,
    },
  ]);
  const [arr2] = useState([
    {
      name: "plants1",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2pug749MNFCiQnMYlXPuRuXyvPAsdBXvHAqlH3P-ytyXMa7aOg9xwc4QmDo7cdFlGRTs&usqp=CAU",
      isSucssed: true,
    },
    {
      name: "plants2",
      src: "https://img-cdn.majarah.com/post/9255543845435846_110864764043691_909149921428189_8873684819100115_Majarah_science_.jpg",
      isSucssed: false,
    },
    {
      name: "plants3",
      src: "https://besthqwallpapers.com/Uploads/31-3-2018/46606/thumb2-jupiter-4k-planets-galaxy-nebula.jpg",
      isSucssed: false,
    },
    {
      name: "plants4",
      src: "https://www.almrsal.com/wp-content/uploads/2019/03/%D8%A7%D9%84%D8%BA%D9%84%D8%A7%D9%81-%D8%A7%D9%84%D8%AC%D9%88%D9%8A-%D9%84%D9%83%D9%88%D9%83%D8%A8-%D8%A7%D9%84%D9%85%D8%B4%D8%AA%D8%B1%D9%89.jpg",
      isSucssed: false,
    },
    {
      name: "plants5",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0XY3U8y_IczhRKEoelQzlfvHuCHBXg0B3ty6g-UQV7lKlIh4SzPa8Rd_d3kIqTZ3WeCw&usqp=CAU",
      isSucssed: false,
    },
    {
      name: "plants6",
      src: "https://scx2.b-cdn.net/gfx/news/2020/1-earth.jpg",
      isSucssed: false,
    },
  ]);
  const [arr3] = useState(arr.concat(arr2));
  // arr3= arr.concat(arr2)

  arr3.map((elem) => (elem.id = Math.floor(Math.random() * 300 + 1)));
  arr3.sort((a, b) => a.id - b.id);
  console.log(arr);

  return (
    <div className="grand">
      <div className="gap"></div>
      <div className="gap"></div>
      <h1>Game Section</h1>
      <div className="gap"></div>
      <div className="gap"></div>

      <div className="gameBox">
        {arr3.map((elem, i) => (
          <Card className="card" elem={elem} />
        ))}
      </div>
    </div>
  );
}

export default Game;
