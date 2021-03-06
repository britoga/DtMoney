import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outCome from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionContext } from '../../TransactionsContext';
import React, { useContext } from 'react';
export function Summary() {
	const transactions = useContext(TransactionContext);
	console.log(transactions);

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
				</header>
				<strong>R$ 1000,00</strong>
			</div>

			<div>
				<header>
					<p>Saídas</p>
					<img src={outCome} alt="Saidas" />
				</header>
				<strong> - R$ 500,00</strong>
			</div>

			<div className="highlight-components">
				<header>
					<p>Total</p>
					<img src={totalImg} alt="Total" />
				</header>
				<strong>R$ 500,00</strong>
			</div>
		</Container>
	);
}
