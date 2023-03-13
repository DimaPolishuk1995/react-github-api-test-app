import { BrowserRouter } from 'react-router-dom';

import RepositoryList from './components/RepositoryList';
import Container from './components/Container';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Container>
                    <RepositoryList/>
                </Container>
            </div>
        </BrowserRouter>
    );
}

export default App;
