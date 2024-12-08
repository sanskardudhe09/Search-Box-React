import React, { useState, useCallback, useEffect } from 'react'
import './Search.css';
const Search = ({ data }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCategory, setFilteredCategory] = useState('all');
    const [results, setResult] = useState(data);
    const handleSearch = useCallback(() => {
        const filteredResults = data.filter(item => {
            const filterByQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase())
            || item.content.toLowerCase().includes(searchQuery.toLowerCase());
            const filterByCategory = filteredCategory === 'all' || item.category === filteredCategory;
            return filterByQuery && filterByCategory;
        });
        setResult(filteredResults);
    }, [filteredCategory, searchQuery, data])
    useEffect(() => {
        handleSearch();
    }, [handleSearch]);
    return (
        <div className='search-container'>
            <input
                type='text'
                placeholder='Search...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}  
            />
            <div className='filter-section'>
                <select value={filteredCategory} onChange={(e) => setFilteredCategory(e.target.value)}>
                    <option value='all'>All Categories</option>
                    <option value='Programming'>Programming</option>
                    <option value='Design'>Design</option>
                    <option value='Cloud Computing'>Cloud Computing</option>
                    <option value='Blockchain'>Blockchain</option>
                    <option value='Marketing'>Marketing</option>
                    <option value='AI'>AI</option>
                    <option value='Cybersecurity'>Cybersecurity</option>
                </select>
            </div>
            <div className='results-section'>
                {
                    results.length > 0 ? (
                        results.map((item, idx) => (
                            <div key={idx} className='result-item'>
                                <h3>{item.title}</h3>
                                <p>{item.category}</p>
                                <span>{item.content}</span>
                            </div>
                        ))
                    ) : (
                         <p className='noresult-section'> No results found...</p>
                    )
                }
            </div>
        </div>
    )
}

export default Search