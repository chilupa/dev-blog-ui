import React, { useState, useEffect } from 'react';
import { Box, InputAdornment, TextField } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { SearchOutlined } from '@mui/icons-material';

const useStyles = makeStyles({
  searchBar: {
    width: 300,
  },
});

const Search = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const placeholderText = [
    'Gadgets',
    'Articles',
    'Logo designs',
    'Space',
    'CSS layouts',
  ];

  useEffect(() => {
    const timer = () => {
      setIndex((prevIndex) => {
        if (prevIndex === placeholderText.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    };
    setInterval(timer, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [placeholderText.length]);
  return (
    <Box>
      <TextField
        size="small"
        className={classes.searchBar}
        variant="outlined"
        color="secondary"
        placeholder={`Search "${placeholderText[index]}"`}
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Search;
