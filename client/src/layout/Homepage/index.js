import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { TopBar } from '../../components/TopBar';
import { Title } from '../../components/Title';
import { CompanyCard } from '../../components/CompanyCard';
import { HomepageContext } from './HomepageContext';
import { StyledHomepageWrapper } from './styled';

const Homepage = ({ history }) => {
  const [data, setData] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchedValue, setSearchedValue] = useState('');

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem('authData'));
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}enterprises`,
      headers: {
        'content-type': 'application/json',
        'access-token': authData.accessToken,
        client: authData.client,
        uid: authData.uid,
      },
    })
      .then(function (response) {
        setData(response.data.enterprises);
      })
      .catch(function () {
        localStorage.removeItem('authData');
        window.location.href = '/';
      });
  }, []);
  const homepageContext = {
    searchClicked,
    setSearchClicked,
    searchedValue,
    setSearchedValue,
  };
  const filterByValue = (array, value) => {
    return array.filter(
      (data) =>
        JSON.stringify(data).toLowerCase().indexOf(value.toLowerCase()) !== -1,
    );
  };
  const exitHandler = () => {
    localStorage.removeItem('authData');
    window.location.href = '/';
  };

  return (
    <HomepageContext.Provider value={homepageContext}>
      <TopBar onExitClick={exitHandler} />
      <StyledHomepageWrapper adjustHeight={searchClicked && true}>
        {!searchClicked ? (
          <Title size="2rem">Clique na busca para iniciar.</Title>
        ) : filterByValue(data, searchedValue).length > 0 ? (
          filterByValue(data, searchedValue).map((company, index) => {
            const initial =
              company.enterprise_name.charAt(0) +
              company.enterprise_name.slice(-1);
            return (
              <CompanyCard
                key={`${company.id}_${index}`}
                initial={initial}
                name={company.enterprise_name}
                category={company.enterprise_type.enterprise_type_name}
                country={company.country}
                photo={company.photo}
                onClick={() =>
                  history.push(`/search/${company.id}`, { company })
                }
              />
            );
          })
        ) : (
          <Title color="#b5b4b4" size="2rem" margin="6rem 0 0">
            Nenhuma empresa foi encontrada para a busca realizada.
          </Title>
        )}
      </StyledHomepageWrapper>
    </HomepageContext.Provider>
  );
};

export default withRouter(Homepage);
