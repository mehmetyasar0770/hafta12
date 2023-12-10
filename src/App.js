import Alert from "./ui-components/Alert";
import Card from "./ui-components/Card";
import Alert2 from 'react-bootstrap/Alert';

function App() {
  return (
    <section className="container my-3">
      <Alert tip="warning">
        Bu sayfadaki güncellemeler 1 gün sonra sisteme yansıyacaktır.
      </Alert>

      <Alert tip="info" ikon={false}>
        Bilgi: Daha fazla bilgi edinemk için <a href="#">buradan devam edin.</a>
      </Alert>

      <Alert2 dismissible={true} variant="warning">
        <Alert2.Heading>Hey, nice to see you</Alert2.Heading>
        Bu sayfadaki güncellemeler 1 gün sonra sisteme yansıyacaktır.
      </Alert2>

      <div className="row">

        <div className="col-3">
          <Card secenekler={ {imgPos:"bottom"} } card_title={"Card title 1"} card_text={"Some quick example text to build on the card title and make up the bulk of the card's content."} img_url={"https://picsum.photos/id/12/100/120"}>
              <a href="#" className="card-link">Sepete Ekle</a>
              <a href="#" className="card-link">Hemen Al</a>
          </Card>
        </div>

        <div className="col-3">
          <Card card_title={"Card title 2"} card_text={"Some quick example text to build on the card title and make up the bulk of the card's content."} img_url={"https://picsum.photos/id/22/100/120"}>
                <a href="#" className="card-link">Sepete Ekle</a>
                <a href="#" className="card-link">Hemen Al</a>
            </Card>
        </div>

      </div>
    </section>
  );
}

export default App;
