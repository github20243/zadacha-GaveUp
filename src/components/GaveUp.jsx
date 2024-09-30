import React from 'react';
import { Box, styled, TextField, Button, useMediaQuery, useTheme, backdropClasses } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Cards from './UI/Cards';
import { cardsData } from '../data/data';

export const GaveUpPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Wrapper>
      <ContentWrapper>
        <SearchContainer>
          <StyledTextField
            placeholder="Поиск"
            variant="outlined"
          />
          <ClearButton
            variant="contained"
            color="error"
            endIcon={<DeleteIcon />}
          >
            Очистить
          </ClearButton>
        </SearchContainer>
        <StyledDiv />
        <StyledBox>
          {cardsData.map(card => (
            <StyledContainerCart key={card.id}>
              <Cards
                name={card.name}
                percentage={card.percentage}
                imageSrc={card.imageSrc}
              />
            </StyledContainerCart>
          ))}
        </StyledBox>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const ContentWrapper = styled(Box)(({ theme }) => ({
  width: '1200px',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: '100wh',
    padding: '0 10px',
    marginLeft: "120px"
  },
}));
const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: "100%",
  marginBottom: '20px',
  marginTop: '30px',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: "100%",
    justifyContent: "space-between",
    gap: "20px",
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '256px',
  height: '42px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    height: '42px',
    border: '1px solid #000000',
  },
  '& .MuiInputBase-input': {
    padding: '10px 14px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '180px',
    marginTop: '40px',
  },
}));

const ClearButton = styled(Button)(({ theme }) => ({
  height: '42px',
  width: '150px',
  backgroundColor: '#FF0000',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#D50000',
  },
  [theme.breakpoints.down('sm')]: {
    width: '120px',
    padding: '10px 19px',
    fontSize: '0.8rem',
    marginTop: "40px"
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '16px',
  padding: '40px 0',
  margin: '0 auto',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '13px',
  },
  [theme.breakpoints.down('xs')]: {
    gridTemplateColumns: '1fr',
  },
}));

const StyledContainerCart = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '5px',
  [theme.breakpoints.down('sm')]: {
    padding: '15px',
  },
}));

const StyledDiv = styled('div')(({ theme }) => ({
  marginLeft: '40px',
  backgroundColor: '#D9D9D9',
  width: '100%',
  height: '1px',
  position: 'absolute', 
  top: '100px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '-10px',
    width: '100%',
    top: '140px',
  },
}));