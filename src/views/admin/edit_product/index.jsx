import { LoadingOutlined } from '@ant-design/icons';
import { useDocumentTitle, useProduct, useScrollTop } from '@/hooks';
import PropTypes from 'prop-types';
import React, { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { editProduct } from '@/redux/actions/productActions';
import { Navigate } from 'react-router-dom'; // Import Navigate instead of Redirect

const ProductForm = lazy(() => import('../components/ProductForm'));

const EditProduct = ({ match }) => {
  useDocumentTitle('Edit Product | Salinaka');
  useScrollTop();
  const { product, isLoading } = useProduct(match.params.id);
  const dispatch = useDispatch();

  const onSubmitForm = (updates) => {
    dispatch(editProduct(product.id, updates));
  };

  if (!product) {
    return (
      <div className="loader" style={{ minHeight: '80vh' }}>
        <h6>Loading ... </h6>
        <br />
        <LoadingOutlined />
      </div>
    );
  }

  return (
    <div className="product-form-container">
      <h2>Edit Product</h2>
      <Suspense fallback={(
        <div className="loader" style={{ minHeight: '80vh' }}>
          <h6>Loading ... </h6>
          <br />
          <LoadingOutlined />
        </div>
      )}
      >
        <ProductForm
          isLoading={isLoading}
          onSubmit={onSubmitForm}
          product={product}
        />
      </Suspense>
    </div>
  );
};

EditProduct.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired
};

export default EditProduct;
