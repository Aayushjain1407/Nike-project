import {Hero, PopularProducts, SuperQuality, Services, SpeacialOffers, CustomerReviews, Subscribe, Footer} from './sections';
import Nav from './components/Nav';
const App= () => (
 <main className="relative">
  <Nav />

  <section className="x1:padding-1 
  wide:padding -r padding -b">
    <Hero />
  </section>
  <section className="padding">
    <PopularProducts />
  </section>
  <section className="padding">
    <SuperQuality />
  </section>
  <section className="nature container-aqua">
    <Services />
  </section>
  <section className="padding">
    <SpeacialOffers />
  </section>
  <section className="customer-dark">
   <CustomerReviews />
  </section>
  <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe />
  </section>
  <section className="bg-black padding-x padding-t pb-8 ">
    <Footer />
  </section>
  
 </main> 
)

export default App;
