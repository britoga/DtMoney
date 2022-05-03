import { Header } from './components/Header/indesx';
import { GlobalStyle } from './styles/global';
import { Dashboard } from './components/dashboard';
export function App() {
	return (
		<div className="App">
			<Header />
			<Dashboard />
			<GlobalStyle />
		</div>
	);
}

export default App;
