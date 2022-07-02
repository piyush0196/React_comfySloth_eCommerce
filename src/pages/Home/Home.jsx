import CustomButton from 'components/ui-kit/Button/index'
import CustomTypography from 'components/ui-kit/Typography/index'
import { Box } from '@mui/material'
import { JumbotronBox } from './styles'

const Home = () => {
  return (
    <JumbotronBox>
      <Box sx={{ width: '50%' }}>
        <CustomTypography
          variant='h4'
          value='Design Your Comfort Zone'
          display='block'
        />
        <CustomTypography
          variant='subtitle1'
          value='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?'
          display='block'
        />
        <CustomButton
          type='button'
          variant='contained'
          size='small'
        >
          SHOP NOW
        </CustomButton>
      </Box>
      <Box>
        <img src='images/hero-bcg.jpeg' alt='hero' style={{ height: '500px', borderRadius: '5px' }} />
      </Box>
    </JumbotronBox>
  )
}

export default Home
