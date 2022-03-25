import * as React from 'react'

// components
import {
    Nav
  } from '../nav.js'

// styles
import {
    background,
    pageheader,
    headline,
    content,
    title,
    right,
    left,
    up,
    down,
    name,
} from './tempblog.module.css'

const TempBlog = () => {
    return (
        // background
        <div className={background}>
            <p className={[left, up, name].join(' ')}>Jason Luna</p>
            <p className={[left, down, name].join(' ')}>Jason Luna</p>
            <p className={[right, up, name].join(' ')}>Jason Luna</p>
            <p className={[right, down, name].join(' ')}>Jason Luna</p>
            {/* content */}
            <div className={content}>
                {/* header */}
                <div className={pageheader}>
                    <h1 className={title}>&nbsp;words&nbsp;</h1>
                </div>
                {/* titles */}
                <div className={headline}>
                    <p><a href='../temppost'>Temp Title</a></p>
                    <p>Inordinate Length is Added to This Temp Title</p>
                    <p>Wahoo Wahoo Yes, This is a Title</p>
                    <p>Temp Title</p>
                    <p>Inordinate Length is Added to This Temp Title</p>
                    <p>Wahoo Wahoo Yes, This is a Title</p>
                    <p>Temp Title</p>
                    <p>Inordinate Length is Added to This Temp Title</p>
                    <p>Wahoo Wahoo Yes, This is a Title</p>
                    <p>Temp Title</p>
                    <p>Inordinate Length is Added to This Temp Title</p>
                    <p>Wahoo Wahoo Yes, This is a Title</p>
                </div>
            </div>

            {/* nav bar (TEMPORARY UNTIL TITLE BECOMES CLICKABLE, EVEN THO THAT'S BAD UX */}
            <Nav></Nav>
        </div>
    );
}

export default TempBlog