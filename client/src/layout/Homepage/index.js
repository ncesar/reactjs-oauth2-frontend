import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TopBar } from '../../components/TopBar';
import { StyledHomepageWrapper } from './styled';
import { Title } from '../../components/Title';
import { HomepageContext } from './HomepageContext';
import { CompanyCard } from '../../components/CompanyCard';

const Homepage = () => {
  const [data, setData] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchedValue, setSearchedValue] = useState('');

  // this is probably going to /search route
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
        console.log(response);
      })
      .catch(function (error) {
        window.location.href = '/';
        localStorage.removeItem('authData');
      });
  }, []);
  const homepageContext = {
    searchClicked,
    setSearchClicked,
    searchedValue,
    setSearchedValue,
  };
  function filterByValue(array, value) {
    return array.filter(
      (data) =>
        JSON.stringify(data).toLowerCase().indexOf(value.toLowerCase()) !== -1,
    );
  }
  return (
    <HomepageContext.Provider value={homepageContext}>
      <TopBar />
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
                key={`${company.enterprise_name}_${index}`}
                initial={initial}
                name={company.enterprise_name}
                category={company.enterprise_type.enterprise_type_name}
                country={company.country}
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

export default Homepage;
