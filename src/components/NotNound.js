import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container>
      <h2>404 - Not Found</h2>
      <Link to="/">
        Go Home
      </Link>
    </Container>
  );
}

export default NotFound;