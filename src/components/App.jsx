'use client'
import React, {useState, useEffect} from 'react'
import styles from '../app/page.module.css'
import SearchBar from '@/components/SearchBar'
import axios from 'axios';
import UserCard from './UserCard';

const App = () => {

    const [filterText, setFilterText] = useState('')
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            const {data} = await axios.get('https://random-data-api.com/api/v2/users?size=20');
            setUsers(data)
        }

        fetchUsers();
    }, [])

    function handleChange(e) {
        setFilterText(e.target.value.toLowerCase());
    }

  return (
    <div className={styles.main}>
      <SearchBar handleChange={handleChange} />
      <ul className={styles.list}>
        {users && users
        .filter(user => user.first_name.toLowerCase().includes(filterText))
        .map(user => <UserCard key={user.id} user={user}/>)}
      </ul>
    </div>
  )
}

export default App