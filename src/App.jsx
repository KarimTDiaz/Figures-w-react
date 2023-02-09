import Circle from './components/circle-1/Circle-1';
import Circle2 from './components/circle-2/Circle-2';
import Square1 from './components/square-1/Square-1';
import Square2 from './components/square-2/Square-2';
import ContainerStyled from './components/container/container-styled';

const App = () => {
	return (
		<>
			<ContainerStyled>
				<Circle />
				<Circle2 />
				<Square1 />
				<Square2 />
			</ContainerStyled>
		</>
	);
};

export default App;
