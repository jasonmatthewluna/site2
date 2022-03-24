import * as React from 'react'

// icons
import { default as Bird } from '../birb.svg'
import { default as Sun } from '../starshine.svg'
import { default as Moon } from '../moon.svg'

// components
import {
  Nav
} from '../nav.js'

// styles
import {
  page,
  left,
  right,
  header,
  body,
  content,
  icon,
  navitem,
  nav,
  lastnav,
  contact,
} from './index.module.css'

// markup
const IndexPage = () => {
  return (
    // holds everything
    <div className={page}>
      {/* left side */}
      <div className={left}>
        {/* holds content */}
        <div className={content}>
          {/* icons */}
          <div>
            <img  className={icon} src={Bird}/>
            <img  className={icon} src={Sun}/>
            <img  className={icon} src ={Moon}/>
          </div>
          {/* text */}
          <div>
            <h1 className={header}>Jason Luna</h1>
            <div className={body}>
            <div>
              <p>Recent UCLA Communication grad working as a Linguist and Content Marketer. I’m interested in creative writing, the social effects of tech, & language of all types.</p>
              <p>Currently making way too many skip-the-line loans on Libby, sippin’ on Kirkland kombucha, and feeding my gacha game addiction.</p>
              <p>I also write Every Thought Sent Forth, a sporadic newsletter I devote a lot of thought toward.</p>
            </div>
            <div className={contact}>
              <p>@inorganicjay on Twitter</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      
      {/* right side */}
      <div className={right}>
        {/* temp nav */}
        <Nav/>
      </div>

    </div>
  );
}

export default IndexPage
