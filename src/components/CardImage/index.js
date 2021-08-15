import React from 'react';
import { Box, Card, CardBody, Image, Text } from 'grommet';

export const CardWithImage = (props) => (
  <Card background="background-front">
    <Box height="small" width="medium">
      <Image
        src={props.cardImage}
        fit="cover"
      />
    </Box>
    <CardBody gap="xsmall">
      <Box>
        <Text color="text-strong">
        {props.cardData}
        </Text>
      </Box>
    </CardBody>
  </Card>
);

export default CardWithImage;