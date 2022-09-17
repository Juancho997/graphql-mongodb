import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { v4 as uuid } from 'uuid';
import { CreateStudentInput } from './create-student.input';

@Injectable()
export class StudentService {

    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>
    ) { }

    async getAllStudents(): Promise<Student[]> {
        return this.studentRepository.find()
    }

    async getStudent(id: string): Promise<Student> {
        return this.studentRepository.findOne({
            where: {
                id: id
            }
        })
    }

    async createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
        const { firstName, lastName } = createStudentInput;

        const student = this.studentRepository.create({ id: uuid(), firstName, lastName })

        return await this.studentRepository.save(student);
    };

};