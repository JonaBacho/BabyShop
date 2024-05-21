import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './StocksSearchBar.css'

const StocksSearchBar = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [code, setCode] = useState('');

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSearch = () => {
    // Add search logic here
    console.log('Searching with:', { year: selectedYear, month: selectedMonth, code });
  };

  return (
    <div className="search-bar" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <select style={{ width: '150px', height: '30px'}}value={selectedYear} onChange={handleYearChange}>
        <option value="">Year</option>
        {years.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>

      <select style={{ width: '150px', height: '30px' }}value={selectedMonth} onChange={handleMonthChange}>
        <option value="">Month</option>
        {months.map((month, index) => (
          <option key={index} value={month}>{month}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Product Code"
        value={code}
        onChange={handleCodeChange}
        maxLength="6"
        style={{ width: '150px', height: '30px'}}
      />

      <button onClick={handleSearch} style={{ width: '50px', height: '30px'}}>
        <FaSearch />
      </button>
    </div>
  );
};

export default StocksSearchBar;
