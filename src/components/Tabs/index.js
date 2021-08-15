import React from 'react';
import { Box, Tab, Tabs } from 'grommet';
import CardWithImage from '../CardImage';

const data = {
  tab1 :{
    image :'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80',
    text:'This view point atop the Marin Headlands has got to be my favorite view of the Golden Gate Bridge. I love to take family and friends here when they visit, mainly for the classic postcard view. The unobstructed views of the bridge make it perfect for photos! Parking is hit or miss here, but circling the area a few times is totally worth the wait for this breathtaking view.'
  },
  tab2 :{
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  },
  tab3 :{
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
}
export const TabsExample = () => {
  const [index, setIndex] = React.useState();
  const onActive = nextIndex => setIndex(nextIndex);

  return (
    <Box>
      <Tabs activeIndex={index} onActive={onActive} justify="start">
        <Tab title="Section A">
          <Box        
            align="left"
            pad="small"
            width="large"
            height="large"
            round="small"
            as="main">
            <CardWithImage cardImage={data.tab1.image} cardData={data.tab1.text}/>
            {/* You’ll probably recognize this iconic view of the Golden Gate Bridge peeping through two big, beautiful trees from Instagram. Well, here it is! Perfectly framed and great for the ‘gram, the Golden Gate Overlook can be reached by routing to the Langdon Court Parking Lot (parking is free). From the parking lot, follow the trail towards the bridge for this view. This spot gives you a beautiful head-on view of the Golden Gate Bridge. From here, you can venture around by foot to other areas for different perspectives of the bridge. */}
          </Box>
        </Tab>
        <Tab title="Section B">
          <Box 
            align="left"
            pad="small"
            height="large"
            width="large"
            round="small"
            as="main">
              {data.tab2.text}
            </Box>
        </Tab>
        <Tab title="Section C">
          <Box 
            align="left"
            pad="small"
            height="large"
            width="large"
            round="small"
            as="main">
            {data.tab3.text}
            </Box>
        </Tab>
      </Tabs>
    </Box>
  );
};

export default TabsExample;