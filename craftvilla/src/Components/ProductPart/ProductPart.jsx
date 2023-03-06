import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import "./ProductPart.css";

export const ProductPart = () => {

  return (
    <div className='Main-div'>
        
            <SimpleGrid columns={[1,1,1,2,2]} gap="20px">
              <Box >
                <img src="https://cdn.plotch.io/image/upload/C/V/1671110234_SG9tZWRlY29yLnBuZw==.png" alt=""/>
              </Box>
              <Box>
                <img src="https://cdn.plotch.io/image/upload/C/V/1671110241_NS5wbmc=.png" alt=""/>
              </Box>
              <Box>
                <img src="https://cdn.plotch.io/image/upload/C/V/1671110248_Ni5wbmc=.png" alt=""/>
              </Box>
              <Box>
                <img src="https://cdn.plotch.io/image/upload/C/V/1671110264_My5wbmc=.png" alt=""/>
              </Box>

            </SimpleGrid>
        
    </div>
  )
}
