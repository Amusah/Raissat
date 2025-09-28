import { useParams } from 'react-router';

import Container from '../Components/Container';
import { services } from '../constants';

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = services.find(service => service.id === serviceId);

  if (!service) {
    return <div>Page not found</div>;
  }

  return (
    <Container>
      <section>
        <img src="" alt="" />
        <div>
          <h1>Service Title</h1>
          <p>Service Description</p>
          <span>
            Why it Stands out: <p></p>
          </span>
        </div>
        
      </section>
    </Container>
  )
}

export default ServicePage