import "../../styles/productservice.css";
import Image from "next/image";
import matras from '../../assets/images/product_service/matras.webp'

const ProductService: React.FC = () => {
  return (
    <section className="productservice">
      <div className="container">
        <div className="productservice__header">
          <h1>Produk dan Layanan Kami</h1>
        </div>
        <div className="productservice__content">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="content__header">
                <h3>Layanan</h3>
              </div>
              <div className="content__body">
                <div className="col1">
                  <ul>
                    <li>Pre & Post Natal Class</li>
                    <li>Swimming Class</li>
                    <li>Aerobic Class</li>
                  </ul>
                </div>
                <div className="col2">
                  <ul>
                    <li>Dance Fitness Class</li>
                    <li>Yoga Class</li>
                    <li>etc</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mt-4 mt-md-0">
              <div className="content__header">
                <h3>Produk</h3>
              </div>
              <div className="content__body2">
                <Image src={matras} alt="matras" width={350} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductService;
