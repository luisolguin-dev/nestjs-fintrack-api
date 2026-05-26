import { IsString, IsNumber, IsIn, IsPositive } from 'class-validator'

export class CreateTransactionDto {
    @IsString()
    description!: string; 

    @IsNumber()
    @IsPositive()
    amount!: number; 

    @IsIn(['income', 'expense'])
    type!: "income" | "expense"; 

    @IsString()
    category!: string; 
}