"use server"

import { createWriteStream } from "fs"
import { InputLecture, addLecture, updateLectureById } from "../api"
import { redirect } from "next/navigation"

export const handleAdd = async (data: FormData) => {
    const photo = data.get('photo') as File
    const fileName = Date.now() + "." + photo.type.split('/').at(-1)
    const stream = createWriteStream("public/images/" + fileName)
    const bufferImg = await photo.arrayBuffer()
    stream.write(Buffer.from(bufferImg))

    const lecture: InputLecture = {
        name: data.get('name') as string,
        surname: data.get('surname') as string,
        age: +(data.get('age') as string),
        profession: data.get('profession') as string,
        photo: "images/" + fileName
    }

    addLecture(lecture)
    redirect("/lectures")
}


export const handleUpdate = async (id: number, data: FormData) => {
    const lecture: Partial<InputLecture> = {
        name: data.get('name') as string,
        surname: data.get('surname') as string,
        age: +(data.get('age') as string),
        profession: data.get('profession') as string,
    }

    const photo = data.get("photo") as File
    if (photo.size > 0) {
        const fileName = Date.now() + "." + photo.type.split('/').at(-1)
        const stream = createWriteStream("public/images/" + fileName)
        const bufferImg = await photo.arrayBuffer()
        lecture.photo="images/"+fileName
        stream.write(Buffer.from(bufferImg))
    }


    updateLectureById(id, lecture)
    redirect("/lectures")
}