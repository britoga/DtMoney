import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './components/services/api';

interface Transaction {
	id: number;
	title: string;
	amount: number;
	type: string;
	category: string;
	createdAt: string;
}

interface TransactionsProviderProps {
	children: ReactNode;
}

export const TransactionContext = createContext<Transaction[]>([]);

export function TransactionProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api.get('transactions').then((response) => setTransactions(response.data.transactions));
	}, []);

	return <TransactionContext.Provider value={transactions}></TransactionContext.Provider>;
}
