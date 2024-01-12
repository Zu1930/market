import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

import CategoryItem from './CategoryItem';

function CategoriesPage(): JSX.Element {
  const categories = useSelector((dZfxcvbnm: RootState) => dZfxcvbnm.categories.categories);
  return (
    <div>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
      <h3>pusto</h3>
    </div>
  );
}

export default CategoriesPage;
