import {createContext, useEffect, useState, ReactNode, useContext} from 'react'
import { api } from '../services/api';

interface Transaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

//herda todos os campos, menos o id e createdAt
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

//ou podemos fazer desse jeito
// type TransactionInput = Pick<Transaction, 'title'| 'amount'| 'type'| 'category'>;


interface TransactionsProviderProps{
    children: ReactNode;
}

interface TransactionsContextData{
    transactions: Transaction[],
    createTransaction: (transaction : TransactionInput) => Promise<void>;
}


const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);


export function TransactionsProvider({children} :TransactionsProviderProps){
    const [transactions, setTransaction] = useState<Transaction[]>([]);
    //consumindo api do miragejs
    useEffect(() => {
        api.get('transactions')
            .then(response => setTransaction(response.data))
    }, []);

    async function createTransaction(transactionInput: TransactionInput){

        const response = await api.post('transactions', {...transactionInput, createdAt: new Date()});
        const {transaction} = response.data;

        //imutabilidade, copia o que já estão lá dentro e adiciona a nova informação no final
        setTransaction([
            ...transactions,
            transaction,
        ])
    }

    return(
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>

    );
}

export function useTransactions(){
    const context = useContext(TransactionsContext);    
    return context;
}