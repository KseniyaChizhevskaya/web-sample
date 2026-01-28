import { useEffect, useState } from 'react';
import CarCatalog from './CarCatalog.jsx';
import FilterComponent from './components/Filter.jsx';
import HeaderComponent from './components/Header.jsx';

export function RootPage() {
  return (
    <>
      <HeaderComponent />
      <FilterComponent />
      <CarCatalog />
    </>
  );
}
