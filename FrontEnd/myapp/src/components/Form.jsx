import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        lineHeight:6
      }}
    >
      <TextField fullWidth label="Your Name" id="fullWidth" />
      
      <TextField fullWidth label="Your Email" id="fullWidth" />
      <TextField fullWidth label="Your subject" id="fullWidth" />

      <TextField fullWidth label="Your Suggestion.." id="fullWidth" />

      <Button variant="contained"> Submit</Button>
    </Box>
  );
}
