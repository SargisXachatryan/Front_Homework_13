import Database from "better-sqlite3";

const db = new Database("lectures.db")

export interface ILecture {
    id: number
    name: string
    surname: string
    age: number
    profession: string
    photo: string
}

export type InputLecture = Omit<ILecture, 'id'>

export const getAllLectures = (): ILecture[] => {
    return db
        .prepare(`SELECT * FROM lectures`)
        .all() as ILecture[]
}

export const addLecture = (lecture: InputLecture) => {
    db
        .prepare(`
        INSERT INTO lectures(name,surname,age,profession,photo)
        VALUES(@name,@surname,@age,@profession,@photo)
    `)
        .run(lecture)
}

export const getLectureById = (id: number): ILecture => {
    return db
        .prepare(`SELECT *FROM lectures WHERE id=?`)
        .get(id) as ILecture
}

export const updateLectureById = (id: number, body: Partial<InputLecture>) => {
    if (!body.photo) {
        return db
            .prepare(`UPDATE lectures set name=? ,surname =? ,age=?,profession=? WHERE id = ?`)
            .run(body.name, body.surname, body.age, body.profession, id)
    }
    return db
    .prepare(`UPDATE lectures set name=? ,surname =? ,age=?,profession=?,photo=? WHERE id = ?`)
    .run(body.name, body.surname, body.age, body.profession,body.photo, id)
}