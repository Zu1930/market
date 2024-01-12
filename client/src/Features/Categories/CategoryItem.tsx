import React from 'react';
import { Link } from 'react-router-dom';
import type { Category } from './types/type';

type CategoryItemProps = {
  category: Category;
};

function CategoryItem({ category }: CategoryItemProps): JSX.Element {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{category.title}</h3>
        <Link className="card-button" to={`/categories/${category.id}/products`}>
          Подробнее
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;
