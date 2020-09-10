import React from 'react';
import {
  StyledCompanyWrapper,
  StyledInitial,
  StyledCompanyInitial,
  StyledInformationWrapper,
} from './styled';
import { Title } from '../../components/Title';

export const CompanyCard = (props) => {
  const { initial, name, category, country, ...other } = props;
  return (
    <StyledCompanyWrapper {...other}>
      <StyledCompanyInitial>
        <StyledInitial>{initial}</StyledInitial>
      </StyledCompanyInitial>
      <StyledInformationWrapper>
        <Title
          size="1.875rem"
          weight="bold"
          margin="0 0 0.064rem 0"
          color="#1a0e49"
        >
          {name}
        </Title>
        <Title size="1.5rem" margin="0 0 0.25rem 0" color="#8d8c8c">
          {category}
        </Title>
        <Title size="1.5rem" color="#8d8c8c" margin="0">
          {country}
        </Title>
      </StyledInformationWrapper>
    </StyledCompanyWrapper>
  );
};
