import React, { useContext, useEffect, useState } from 'react'
import { navList } from '../constants/navList'
import { ScrollContext } from '../Context/ScrollState'
import '../public/style/NavItems.css'


function NavItems() {
  const {id, setId} = useContext(ScrollContext);
  return (
    <>
        {navList.map((item) => (
            <a className={`nav-item ${item.id === id ? 'active' : ''}`} key={item.id} href={'#'+item.id} onClick={() => setId(item.id)}>{item.label}</a>
        ))}
    </>
  )
}

export default NavItems
