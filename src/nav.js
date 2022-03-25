import React from 'react';
import { Link } from 'gatsby'

// styles
import {
    navitem,
    nav,
    lastnav,
  } from './pages/index.module.css'

export class Nav extends React.Component {
    render(){
        return(
            <div className={nav}>
          {/* essentially a nav component*/}
          <div className={navitem}>
            <Link to ="/tempblog">
              words
            </Link>
          </div>
          <div className={navitem}>
            <Link to ="/tempblog">
              projects
            </Link>
          </div>
          <div className={navitem}>
            <Link to ="/tempblog">
              thoughts
            </Link>
          </div>
          <div className={navitem}>
            <Link to ="/tempblog">
              friends
            </Link>
          </div>
          <div className={navitem} id={lastnav}>
            <Link to ="/tempblog">
              home
            </Link>
          </div>
        </div>
        )
    }
}
