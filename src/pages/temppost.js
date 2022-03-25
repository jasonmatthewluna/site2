import * as React from 'react'

import {
    headline,
    subhead,
    body,
    bgtop,
    bgleft,
    bgdown,
    page,
    content,
} from './temppost.module.css'

const TempBlog = () => {
    return (
        // contains everything
        <div className={page}>
            {/* left */}
            <div className={bgleft}>
                {/* go back to blog page */}
                <div>
                    <p><a href='./'>X</a></p>
                </div>
            </div>
            {/* right */}
            <div className={content}>
                {/* top */}
                <div className={bgtop}>
                    <h1 className={headline}>Animal Crossing: New Horizons' Conversations are an Existential Nightmare</h1>
                    <p className={subhead}>As a Villager since the series' GameCube days, I've been a part of so many villages, cities, islands... and spoken with so many villagers. It might be nostalgia, but I miss the sass and severity of older villagers instead of the existential nightmares of New Horizons.</p>
                </div>

                {/* bottom */}
                <div className={bgdown}>
                <p className={body}>I remember rushing home from school, inputting the 30,000 bell cheats for my mom so I could play on a weekday, and helping her get the golden statue before my older brother did for more brownie points.</p>
                <p className={body}>I remember how furious my brother was when he won the Fishing Tournament... and was subsequently robbed of his first place trophy by a bird or duck villager. (I swear it was Piper).</p>
                <p className={body}>And I remember how much I loved all of my original villagers.</p>
                <p className={body}>Even though I did end up allowing him to leave because of how little affection I had for the Jock personality type in New Horizons, I was so excited to have Boots as one of my first fellow islanders.</p>
                <p className={body}>I was absolutely ecstatic when I got Goldie, whom, in the GameCube version, I would spam talk to until she got angry.</p>
                <p className={body}>But in Animal Crossing's latest installment, even a couple of interactions will lead villagers to question you: "Hey, didn't I just talk to you...?"</p>
                <p className={body}>And it's without the same personality, the same sass GameCube characters would drop on you.</p>
                <p className={body}>Even worse is that the conversations leading up to that repetitive message telling you to wait before you can get a new interaction is having your jock villager tell you about their abs or work out routine... for the seventh time.</p>
                <p className={body}>These conversations aren't terrible, but I do miss when villagers could get legitimately angry at you and had unique dialogue.</p>
                <p className={body}>In New Horizons, raising your friendship level solves this to some extent, but there simply isn't enough variation or unique dialogue for specific villagers.</p>
                <p className={body}>And, some villagers will suddenly have an existential crisis: "They say the island is just a game... just to amuse somebody else."</p>
                <p className={body}>It's a fun little piece of trivia the first time they comment on the insanity behind Tom Nook's financial plan, but sometimes, you just want a peaceful, escapist grind. Especially in today's time.</p>
                <p className={body}>New Horizons' beauty promises that, but its conversations will break that immersion and remind you that these are characters, not neighbors.</p>
                </div>
            </div>
        </div>
    );
}

export default TempBlog