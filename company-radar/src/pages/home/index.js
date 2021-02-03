import React, { useState, useEffect } from 'react';
import { FaBuilding, FaSpinner } from 'react-icons/fa';
import Carousel from '../../components/Carousel';
import PeopleSearching from '../../assets/images/search.svg';

import {
  Container,
  TitleContainer,
  Title,
  Button,
  SearchContainer,
  Input,
  ResultsContainer,
  EmptyResult,
} from './styles';

import api from '../../services/api';

export default function Home() {
  const [newCompany, setNewCompany] = useState('');
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const SavedCompanies = localStorage.getItem('companies');
    if (SavedCompanies) {
      setCompanies(JSON.parse(SavedCompanies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('companies', JSON.stringify(companies));
  }, [companies]);

  const handleInputChange = (e) => {
    setNewCompany(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      if (newCompany === '') throw new Error('Você precisa indicar um CNPJ');

      const hasComp = companies.find((r) => r.name === newCompany);

      if (hasComp) throw new Error('Está emoresa ja foi pesquisada');

      const response = await api.get(`${newCompany}`);

      const data = {
        name: response.data.nome,
        cnpj: response.data.cnpj,
        cep: response.data.cep,
        neighborhood: response.data.bairro,
        state: response.data.uf,
        city: response.data.municipio,
        street: response.data.logradouro,
        number: response.data.numero,
      };
      setCompanies([...companies, data]);
      setNewCompany('');
    } catch (erro) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container>
      <TitleContainer>
        <FaBuilding size={48} color=" #3a8970" />
        <Title>Localizador de Empresas</Title>
      </TitleContainer>

      <SearchContainer onSubmit={handleSubmit} error={error}>
        <Input placeholder="CNPJ...." onChange={handleInputChange} />
        <Button loading={loading}>
          {loading ? <FaSpinner color="#fff" size={14} /> : 'LOCALIZAR'}
        </Button>
      </SearchContainer>

      <ResultsContainer>
        {companies.length !== 0 ? (
          <Carousel companies={companies} />
        ) : (
          <EmptyResult>
            <img src={PeopleSearching} alt="searching" width={200} />
            <p>Localize acima a primeira empresa</p>
          </EmptyResult>
        )}
      </ResultsContainer>
    </Container>
  );
}
