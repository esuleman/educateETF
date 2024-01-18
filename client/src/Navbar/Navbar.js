import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';

import NavbarStyle from './NavbarStyle'

import Educate from '../Educate/Educate'

const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen)
    }
    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            toggleSearch()
            searchFunction()
        }
    }
    
    const searchFunction = () => {
        console.log("Search for: ", searchTerm)
        // Implement your search logic here
    }
    
    return (
        <container style={NavbarStyle.container}>
            <Link to="/" style={NavbarStyle.textTitle}>EducateETF</Link>
            <Link to="Educate" style={NavbarStyle.textSubtitle}>Educate</Link>
            <Link to="Invest" style={NavbarStyle.textSubtitle}>Invest</Link>
            <Link to="Dashboard" style={NavbarStyle.textSubtitle}>Dashboard</Link>
            {isSearchOpen ? (
                <div style={NavbarStyle.searchContainerOpen}>
                    <input
                        type="text"
                        placeholder="Search"
                        style={NavbarStyle.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyUp={handleKeyPress}
                    />
                    <CancelIcon style={NavbarStyle.cancelIcon} onClick={toggleSearch}/>
                </div>
            ) : (
                <button style={NavbarStyle.searchContainerClosed} onClick={toggleSearch}>
                    <SearchIcon style={NavbarStyle.searchIcon}/>
                </button>
            )}
        </container>
    )
}

export default Navbar