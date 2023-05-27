'use client'
import React from 'react'
import styles from '../app/page.module.css'

const SearchBar = ({handleChange}) => {
  return (
    <input type='search' placeholder='Search' className={styles.search_bar} onChange={handleChange}></input>
  )
}

export default SearchBar