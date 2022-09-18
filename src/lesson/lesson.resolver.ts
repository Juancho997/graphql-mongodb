import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { StudentService } from '../student/student.service';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver {
    constructor(
        private lessonService: LessonService,
        private studentService: StudentService
    ) { }

    @Query(returns => [LessonType])
    getAllLessons() {
        return this.lessonService.getAllLessons();
    }

    @Query(returns => LessonType)
    getLesson(
        @Args('id') id: string
    ) {
        return this.lessonService.getLesson(id);
    };

    @Mutation(returns => LessonType)
    createLesson(
        @Args('createLessonInput') createLessonInput: CreateLessonInput
    ) {
        return this.lessonService.createLesson(createLessonInput);
    };

    @Mutation(returns => LessonType)
    assingnStudentsToLesson(
        @Args('assignStudentsToLessonInput') assingnStudentsToLessonInput: AssignStudentsToLessonInput
    ) {
        const { lessonId, studentsIds } = assingnStudentsToLessonInput;

        return this.lessonService.assignStudentsToLesson(lessonId, studentsIds)
    }

    @ResolveField()
    async students(@Parent() lesson: Lesson) {
        return this.studentService.getManyStudents(lesson.students);
    }


}