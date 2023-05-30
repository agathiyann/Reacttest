import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const channel = [
    {
      value: 'A2',
      label: 'A2',
    },
    {
      value: 'EOGL',
      label: 'EOGL',
    },
    {
        value: 'C3',
        label: 'C3',
      },
    {
      value: 'EOGR',
      label: 'EORG',
    },
    {
      value: 'EMG',
      label: 'EMG',
    },
    {
        value: 'Null',
        label: 'Null',
      },
      {
        value: 'N/A',
        label: 'N/A',
      },
      {
        value: 'Select Channel',
        label: 'Select Channel',
      },
  ];

 function SavePreview () {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h1>  </h1>

        
        <TextField
          id="read-only-input"
          defaultValue="C3-A2"
          InputProps={{
            readOnly: true,
          }}
          variant='outlined'
        />
        <TextField
          id="outlined-select-currency-native"
          select
          
          defaultValue="Select Channel"
          SelectProps={{
            native: true,
          }}
        >
          {channel.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          id="outlined-select-currency-native"
          select
          
          defaultValue="Select Channel"
          SelectProps={{
            native: true,
          }}
        >
          {channel.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

          </div>

      <div>

        
        <TextField
          id="filled-read-only-input"
          defaultValue="C4-A1"
          InputProps={{
            readOnly: true,
          }}
       
        />
                <TextField
          id="outlined-select-currency-native"
          select
          
          defaultValue="Select Channel"
          SelectProps={{
            native: true,
          }}
        >
          {channel.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          
          defaultValue="Select Channel"
          SelectProps={{
            native: true,
          }}
        >
          {channel.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="read-only-input"
          defaultValue="EOGL-A2"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-select-currency-native"
          select
          
          defaultValue="Select Channel"
          SelectProps={{
            native: true,
          }}
        >
          {channel.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          
          defaultValue="Select Channel"
          SelectProps={{
            native: true,
          }}
        >
          {channel.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        
      </div>
      <div>
        <TextField
          id="read-only-input"
          defaultValue="EOGR-A1"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-select-currency-native"
          select
          
          defaultValue="Select Channel"
          SelectProps={{
            native: true,
          }}
        >
          {channel.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          
          defaultValue="Select Channel"
          SelectProps={{
            native: true,
          }}
        >
          {channel.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        
      </div>
      <div>
        <TextField
          id="read-only-input"
          defaultValue="EMG"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-select-currency-native"
          select
          
          defaultValue="Select Channel"
          SelectProps={{
            native: true,
          }}
        >
          {channel.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          
          defaultValue="Select Channel"
          SelectProps={{
            native: true,
          }}
        >
          {channel.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        
      </div>
    </Box>
      );
    }

    export default SavePreview ;
