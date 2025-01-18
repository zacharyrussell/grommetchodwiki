import React from "react";
import Accordion from "./accordion";
import './App.css';

const CreaturesPage = () => {
    const accordionItems = [
        {
            name: "Buford",
            icon: "./images/icons/tode.gif",
            typeIcon: "./images/types/CHUD.png",
            content: [
                [
                    <img src="./images/forward/Buford.gif" alt="Buford Forward" />,
                    <img src="./images/backward/Buford.gif" alt="Buford Backward" />,
                ],
                ["Buford is a slimy individual who likes to stick around"],
                ["Move 1", "Slimy Bubble", "A slimy bubble is spat at opponents, inflicting damage and lowering their speed."],
                ["Move 2", "Moisten", "Buford coats himself in chod allowing his moist skin to regenerate wounds."],
                ["Ability", "Camouflage", "Blends into the surroundings to become invisible."],
            ],
        },
        {
            name: "Bee",
            icon: "./images/icons/tode.gif",
            typeIcon: "./images/types/NATURAL.png",
            content: [
                [
                    <img src="./images/forward/Bee.gif" alt="Buford Forward" />,
                    <img src="./images/backward/Bee.gif" alt="Buford Backward" />,
                ],
                ["Buford is a slimy individual who likes to stick around"],
                ["Move 1", "Slimy Bubble", "A slimy bubble is spat at opponents, inflicting damage and lowering their speed."],
                ["Move 2", "Moisten", "Buford coats himself in chod allowing his moist skin to regenerate wounds."],
                ["Ability", "Camouflage", "Blends into the surroundings to become invisible."],
            ],
        },


        // Add other creatures here
    ];

    return (
        <div>
            <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
                Creature Encyclopedia
            </h1>
            <Accordion items={accordionItems} />
        </div>
    );
};

export default CreaturesPage;
