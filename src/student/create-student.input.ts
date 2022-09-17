import { InputType, Field } from "@nestjs/graphql";
import { MinLength, IsString } from 'class-validator';


@InputType()
export class CreateStudentInput {

    @Field()
    @MinLength(1)
    @IsString()
    firstName: string;

    @Field()
    @MinLength(1)
    @IsString()
    lastName: string;

}