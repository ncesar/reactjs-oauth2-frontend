import React from 'react';
import { withRouter } from 'react-router-dom';
import { TopBarSearch } from '../../components/TopBarSearch';
import { ExpandedCompanyCard } from '../../components/ExpandedCompanyCard';
import { StyledSearchWrapper } from './styled';

const SearchPage = ({ location, history }) => {
  if (location.state === undefined) window.location.href = '/';
  const { state = [] } = location;
  const { company = {} } = state;
  const initialName =
    company.enterprise_name.charAt(0) + company.enterprise_name.slice(-1);

  return (
    <StyledSearchWrapper>
      <TopBarSearch
        companyName={company.enterprise_name}
        onArrowClick={() => history.goBack()}
      />
      <ExpandedCompanyCard
        photo={company.photo}
        initial={initialName}
        country={company.country}
        city={company.city}
        description={company.description}
        sharePrice={company.share_price}
        category={company.enterprise_type.enterprise_type_name}
      />
    </StyledSearchWrapper>
  );
};

export default withRouter(SearchPage);
