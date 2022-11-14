import "../styles/playerMain-styles.css";

import React, { useState } from "react";
import ItemInfo from './ItemInfo'


function PlayerMain({ data, isFetch, handleMouseLeave }) {
    
  function toggle(id, key) {
    const item = document.getElementsByClassName("item")[key];
    (item.style.boxShadow =
      id.quality.name === "Epic"
        ? "rgba(197,15,249,0.56) 0px 0px 40px 25px"
        : id.quality.name === "Legendary"
        ? "rgba(238,119,1, 0.56) 0px 0px 40px 25px"
        : id.quality.name === "Rare"
        ? "rgba(0,128,254, 0.56) 0px 0px 40px 25px"
        : "rgba(0, 0, 0, 0.56) 0px 0px 40px 25px"),

    
    setItemInfo({
      name: id.name,
      type: id.inventory_type.name,
      ilvl: id.level.value,
      stats: id.stats,
      boe: id.binding.name,
      quality: id.quality.name,
      arrmor_type: id.item_subclass.name,
      durability: id.durability?.display_string,
      weapon_dmg: id?.weapon?.damage?.display_string,
      spell: id?.spells === undefined ? "" : id?.spells[0]?.description,
      armor: id?.armor?.display?.display_string,
      attack_speed: id?.weapon?.attack_speed?.display_string,
      dps: id?.weapon?.dps?.display_string
    });
  }

  const [itemInfo, setItemInfo] = useState({
    name: "",
    type: "",
    ilvl: "",
    stats: [],
    boe: "",
    quality: "",
    arrmor_type: "",
    durability: "",
    weapon_dmg: "",
    spell: "",
    armor: "",
    attack_speed: "",
    dps: ""
  });

  return (
    <div className="player">
      <div
        className="player-img"
        style={{
          backgroundImage: `url(${data.media.assets[3].value})`,
        }}
      >
        <div className="eq">
          {isFetch &&
            data?.media_eq?.map((item, key) => {
              return (
                <div
                  className="item"
                  key={key}
                  style={{
                    backgroundImage: `url(${item.assets[0].value})`,
                  }}
                  onMouseEnter={() => toggle(data.eq.equipped_items[key], key)}
                  onMouseLeave={() => handleMouseLeave(key)}
                >
                  <ItemInfo itemInfo={itemInfo}/>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default PlayerMain;
