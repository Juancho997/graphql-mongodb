import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver(of => StudentType)
export class StudentResolver {
    constructor(
        private studentService: StudentService
    ) { }

    @Query(returns => [StudentType])
    getAllStudents() {
        return this.studentService.getAllStudents();
    }

    @Query(returns => StudentType)
    getStudent(
        @Args('id') id: string
    ) {
        return this.studentService.getStudent(id);
    };

    @Mutation(returns => StudentType)
    createStudent(
        @Args('createStudentInput') createStudentInput: CreateStudentInput
    ) {
        return this.studentService.createStudent(createStudentInput);
    };

}