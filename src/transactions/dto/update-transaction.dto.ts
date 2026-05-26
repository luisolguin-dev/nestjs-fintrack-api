import { IsString, IsNumber, IsIn, IsPositive, IsOptional } from 'class-validator';

export class UpdateTransactionDto {
    @IsOptional()
    @IsString()
    description?: string; 

    @IsOptional()
    @IsNumber()
    @IsPositive()
    amount?: number; 

    @IsOptional()
    @IsIn(["income", "expense"])
    type?: "income" | "expense";
    
    @IsOptional()
    @IsString()
    category?: string; 
}