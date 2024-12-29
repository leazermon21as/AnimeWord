import React from "react";
import data from "../../data/animeDate.json";
import "../../HomePage/Populary/Anime.css";

// ANIME ===========================

export default function Popular() {
    return (
    <>
        <div className="galary">
    {data.map((item) => {
        return (
            <div className="ser" key={item.id}>
                <div className="container">
                    <div className="block">
                        <div className="animesh">
                            <p className="tv">TV</p>
                            <img src={item.image} alt={item.name} />
                            <p className="sub">Sub</p>
                            <p className="item">{item.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    })}
</div>
    </>
    );
}
