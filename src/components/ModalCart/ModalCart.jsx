import React, { useContext } from 'react';
import scss from './ModalCart.module.scss';
import { useMediaQuery } from 'react-responsive';
import { CounterCart } from 'components/CounterCart/CounterCart';
import { DataContext } from 'components/App';

export const ModalCart = () => {
  const { products, refreshProducts } = useContext(DataContext);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let modalStyle = scss.modal;
  let cartStyle = scss.modal__cart;

  if (isDesktop) {
    modalStyle += ` ${scss.modalDesktop}`;
    cartStyle += ` ${scss.modalDesktop__cart}`;
  } else if (isTablet) {
    modalStyle += ` ${scss.modalTablet}`;
    cartStyle += ` ${scss.modalTablet__cart}`;
  } else if (isMobile) {
    modalStyle += ` ${scss.modalMobile}`;
    cartStyle += ` ${scss.modalMobile__cart}`;
  }

  const formatPrice = price => {
    return price.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const handleDeleteProduct = productId => {
    const newList = products.filter(pr => pr.id !== productId);
    localStorage.setItem('products', JSON.stringify(newList));
    refreshProducts();
  };

  const handleDelete = () => {
    localStorage.removeItem('products');
    refreshProducts();
  };

  const handlePlus = productId => {
    const newList = products.map(pr => {
      if (pr.id === productId) {
        return { ...pr, count: pr.count + 1 };
      }
      return pr;
    });
    localStorage.setItem('products', JSON.stringify(newList));
    refreshProducts();
  };

  const handleMinus = productId => {
    const product = products.find(pr => pr.id === productId);

    if (product.count <= 1) {
      handleDeleteProduct(productId);
    } else {
      const newList = products.map(pr => {
        if (pr.id === productId) {
          return { ...pr, count: pr.count - 1 };
        }
        return pr;
      });
      refreshProducts();
      localStorage.setItem('products', JSON.stringify(newList));
    }
  };

  return (
    <div className={modalStyle}>
      <div className={cartStyle}>
        <div className={scss.modal__cartHeader}>
          <p className={scss.modal__amount}>cart ({products.length})</p>
          <button
            type="button"
            className={scss.modal__btnClear}
            onClick={handleDelete}
          >
            Remove all
          </button>
        </div>
        <div className={scss.modal__productsContainer}>
          {products.map(pr => (
            <div key={pr.id} className={scss.modal__product}>
              <div className={scss.modalPrImageText}>
                <div
                  className={`${scss[pr.slug]} ${scss.modal__prImage}`}
                ></div>
                <div className={scss.modal__prText}>
                  <h4 className={scss.modal__prTitle}>{pr.shortName}</h4>
                  <p className={scss.modal__prPrice}>
                    $ {formatPrice(pr.price)}
                  </p>
                </div>
              </div>
              <CounterCart
                count={pr.count}
                minus={() => handleMinus(pr.id)}
                plus={() => handlePlus(pr.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
