import React from 'react';
import { Box, Button, Heading, Grommet } from 'grommet';
import { Hpe, Notification } from 'grommet-icons';
import HeaderExample from './components/Header';
import TabsExample from './components/Tabs';

const AppBar = (props) => (
     <Box
       tag='header'
       direction='row'
       align='center'
       justify='between'
       background='brand'
       pad={{ left: 'medium', right: 'small', vertical: 'small' }}
       elevation='medium'
       style={{ zIndex: '1' }}
       {...props}
     />
   );
  

function App() {
  
  const theme = {
    global: {
      colors: {
        brand: '#228BE6',
      },
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };
  return (
    <div className="App">

    <Grommet theme={Hpe} full>
     <Box fill>
    <AppBar>
      {/* <Heading level='3' margin='none'>My App</Heading> */}
      <HeaderExample />
      <Button icon={<Notification />} onClick={() => {}} />
    </AppBar>
       <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
         <Box flex align='center' justify='center'>
           <TabsExample />
           
         </Box>
       </Box>
     </Box>
</Grommet>

    </div>
  );
}

export default App;
