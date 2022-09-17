import { InputType, Field } from "@nestjs/graphql";
import { MinLength, IsString, IsDateString } from 'class-validator';


@InputType()
export class CreateLessonInput {

    @Field()
    @MinLength(1)
    @IsString()
    name: string;

    @Field()
    @IsDateString()
    startDate: string;

    @Field()
    @IsDateString()
    endDate: string;
}