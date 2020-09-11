import React from 'react';
import { Title } from '../Title';
import {
  StyledCompanyWrapper,
  StyledCompanyInitial,
  StyledCompanyDetails,
} from './styled';

export const ExpandedCompanyCard = (props) => {
  const {
    initial,
    country,
    city,
    description,
    sharePrice,
    category,
    photo,
    ...other
  } = props;
  const companyDetails = [
    { primaryName: 'Country', secondaryName: country },
    { primaryName: 'City', secondaryName: city },
    { primaryName: 'Share price', secondaryName: sharePrice.toLocaleString() },
    { primaryName: 'Category', secondaryName: category },
    { primaryName: 'Description', secondaryName: description },
  ];
  return (
    <StyledCompanyWrapper {...other}>
      <StyledCompanyInitial bgImage={photo}>
        <Title
          style={{ textTransform: 'uppercase', textShadow: '2px 2px black' }}
          color="#fff"
          size="4.813rem"
        >
          {initial}
        </Title>
      </StyledCompanyInitial>
      {companyDetails.map((company, index) => (
        <StyledCompanyDetails key={`${company.primaryName}_${index}`}>
          <Title margin="10px 0 0 0" align="left">
            {company.primaryName}:
          </Title>
          <Title margin="10px 0 0 5px" color="#8d8c8c" size="18px" align="left">
            {company.secondaryName}
          </Title>
        </StyledCompanyDetails>
      ))}
    </StyledCompanyWrapper>
  );
};
