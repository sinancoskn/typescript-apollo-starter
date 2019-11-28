import {ITeacher,Teacher} from '../../model/TeacherModel';

export async function getTeachers():Promise<any>{
    var result = await Teacher.find({});
    return result;
}

export async function newTeachers(teacher:ITeacher):Promise<any>{

}