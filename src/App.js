import React, { useState, useEffect } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import RenderComponent from './component/mainfile';

const endPointUrl = "http://assessment-json.s3-website-us-east-1.amazonaws.com/data.json";

function App() {
  const [data, setData] = useState();
 
  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(endPointUrl)
      const data = await response.json()
      setData(data?.Result?.Fields?.$values);
    }
    getApiData()
  }, []);
console.log('data', data)
  return (
    <div className="App">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '100%',
          },
        }}
      >
        <div>
          {data &&
            <Paper className='box-container'>
              <p className='header-text'>{"Chest Pain"}</p>
              <p className='text'>
                {data[0]?.StartText}&nbsp;
                {data[0]?.HasChild && <RenderComponent data={data[0]} />}&nbsp;
                {data[0]?.EndText}&nbsp;

                {data[1]?.StartText}&nbsp;
                {data[1]?.HasChild && <RenderComponent data={data[1]} />}&nbsp;
                {data[1]?.EndText}&nbsp;

                {data[2]?.StartText}&nbsp;
                {data[2]?.HasChild && <RenderComponent data={data[2]} />}&nbsp;
                {data[2]?.EndText}&nbsp;

                {data[3]?.StartText}&nbsp;
                {data[3]?.HasChild && <RenderComponent data={data[3]} />}&nbsp;
                {data[3]?.EndText}&nbsp;

                {data[4]?.StartText}&nbsp;
                {data[4]?.HasChild && <RenderComponent data={data[4]} />}&nbsp;
                {data[4]?.EndText}&nbsp;

                {data[5]?.StartText}&nbsp;
                {data[5]?.HasChild && <RenderComponent data={data[5]} />}
                {data[5]?.EndText}&nbsp;

                {data[6]?.StartText}&nbsp;
                {data[6]?.HasChild && <RenderComponent data={data[6]} />}&nbsp;
                {data[6]?.EndText}&nbsp;

                {data[7]?.StartText}&nbsp;
                {data[7]?.HasChild && <RenderComponent data={data[7]} />}&nbsp;
                {data[7]?.EndText}&nbsp;


                {data[8]?.StartText}&nbsp;
                {data[8]?.HasChild && <RenderComponent data={data[8]} />}&nbsp;
                {data[8]?.EndText}&nbsp;

                {data[9]?.StartText}&nbsp;
                {data[9]?.HasChild && <RenderComponent data={data[9]} />}&nbsp;
                {data[9]?.EndText}&nbsp;

                {data[10]?.StartText}&nbsp;
                {data[10]?.HasChild && <RenderComponent data={data[10]} />}&nbsp;
                {data[10]?.EndText}&nbsp;

                {data[11]?.StartText}&nbsp;
                {data[11]?.HasChild === true && <RenderComponent data={data[11]} />}&nbsp;
                {data[11]?.EndText}{" "}&nbsp;
              </p>
            </Paper >}
        </div>
      </Box>
    </div>
  );
}

export default App;
