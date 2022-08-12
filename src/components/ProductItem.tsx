import React from "react";

export const ProductItem = ({ product }) => {
  const discount = product.discount ? true : false;
  return (
    <div key="{product}" className="col-6 col-sm-4 col-lg-3 card-container">
      <div className="card card-espaciado">
        <div className="card-imagen">
          <img className="card-img-top" src={product.image} alt={product.name} title={product.name}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "/images/no_image_web.png";
            }}
          />
        </div>
        <div className="card-body card-center">
          <h5 className="card-title card-title">{product.name}</h5>
          {discount && (
            <><p className="card-text card-precio-tachado">{product.price.toString().replace('.', ',')} &euro;</p><p className="card-text card-precio-descuento">{product.salePrice.toString().replace('.', ',')} &euro; (-{product.discount}%)</p></>
          )}
          {!discount && (
            <><p className="card-text card-price">{product.salePrice.toString().replace('.', ',')} &euro;</p></>
          )}
          <p className="card-text"><a href="#" className="card-more-colors">más colores</a></p>

          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={'#productItemModal' + product.id}>AÑADIR</button>
        </div>
      </div>

      <div className="modal fade" id={'productItemModal' + product.id} tabIndex={-1} aria-labelledby="productItemModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="productItemModalLabel">Artículo agregado a la cesta</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body row modal-container">
              <div className="col-3">
                <img className="card-img-top modal-image" src={product.image} alt={product.name} title={product.name}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "/images/no_image_web.png";
                  }}
                />
              </div>
              <div className="col-9">
                <div className="modal-text">{product.name}</div>
                <div className="modal-price">{product.salePrice.toString().replace('.', ',')} &euro;</div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
