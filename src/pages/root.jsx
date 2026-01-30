import { useEffect, useState } from 'react';
import FilterComponent from './components/Filter.jsx';
import HeaderComponent from './components/Header.jsx';
import CarsCatalog from './сars/CarsCatalog.jsx';

export function RootPage() {
  return (
    <>
      <HeaderComponent />
      <FilterComponent />
      <CarsCatalog />
    </>
  );
}
