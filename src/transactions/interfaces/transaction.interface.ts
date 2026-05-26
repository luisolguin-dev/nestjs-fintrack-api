export interface transaction {
    id: number; 
    descirption: string;
    amount: number; 
    type: "income" | "expense";
    category: string; 
    date: string;  
}