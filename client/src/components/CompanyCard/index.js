import React from 'react';
import {
  StyledCompanyWrapper,
  StyledCompanyInitial,
  StyledInformationWrapper,
  StyledTitle,
  StyledInformationTitle,
} from './styled';

export const CompanyCard = (props) => {
  const { initial, name, category, country, photo, ...other } = props;
  return (
    <StyledCompanyWrapper {...other}>
      <StyledCompanyInitial bgImage={photo}>
        <StyledTitle
          color="#fff"
          size="4rem"
          style={{ textTransform: 'uppercase', textShadow: '2px 2px black' }}
        >
          {initial}
        </StyledTitle>
      </StyledCompanyInitial>
      <StyledInformationWrapper>
        <StyledInformationTitle
          size="1.875rem"
          weight="bold"
          margin="0 0 0.064rem 0"
          color="#1a0e49"
          align="left"
        >
          {name}
        </StyledInformationTitle>
        <StyledInformationTitle
          size="1.5rem"
          margin="0 0 0.25rem 0"
          color="#8d8c8c"
        >
          {category}
        </StyledInformationTitle>
        <StyledInformationTitle size="1.5rem" color="#8d8c8c" margin="0">
          {country}
        </StyledInformationTitle>
      </StyledInformationWrapper>
    </StyledCompanyWrapper>
  );
};
