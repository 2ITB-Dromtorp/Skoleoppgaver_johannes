// EnturJourneyPlanner.js
import React, { useState } from 'react';
import axios from 'axios';

const EnturJourneyPlanner = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        'https://api.entur.io/journey-planner/v2/graphql',
        {
          query: query,
        }
      );

      setResult(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleQueryChange} />
      <button onClick={handleSearch}>Search</button>

      {result && (
        <div>
          <h2>Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default EnturJourneyPlanner;
