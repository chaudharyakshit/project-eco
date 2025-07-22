import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Select, MenuItem, Button, Grid } from '@material-ui/core';

const SearchFilters = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    make: '',
    model: '',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxYear: ''
  });

  const handleSearch = async () => {
    try {
      const res = await axios.get('/api/search', { params: searchParams });
      onSearch(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="search-filters">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Make"
            value={searchParams.make}
            onChange={(e) => setSearchParams({...searchParams, make: e.target.value})}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Model"
            value={searchParams.model}
            onChange={(e) => setSearchParams({...searchParams, model: e.target.value})}
            fullWidth
          />
        </Grid>
        {/* Add more filter fields */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchFilters;