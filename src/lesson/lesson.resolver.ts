import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { threadId } from 'worker_threads';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver {
    constructor(
        private lessonService: LessonService
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





}