import mongoose, { model, Model, PaginateModel, Schema, SchemaTypes } from "mongoose";

export interface ITeacher{
    name: String;
    courseID: String;
}


export const TeacherSchema = new Schema(
  {
    name: { type: String },
    courseID: { type: String },
  },
  { timestamps: true, minimize: false }
);

//#region INDEXES
TeacherSchema.index({ name: 1 });

export const Teacher =  mongoose.model<ITeacher>('teachers', TeacherSchema);