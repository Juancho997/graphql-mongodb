import { InputType, Field, ID } from "@nestjs/graphql";
import { MinLength, IsString, IsDateString, IsUUID } from 'class-validator';


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

    @IsUUID('4', { each: true })
    @Field(() => [ID], { defaultValue: [] })
    students: string[]

}