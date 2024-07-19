import { handleUpdate } from '@/app/lib/actions/actions'
import { getLectureById } from '@/app/lib/api'
import { PickImages } from '@/app/lib/components/PickImages'
import Image from 'next/image'
import React from 'react'

interface IProps {
    params: { id: number }
}

export default function EditPage({ params }: IProps) {

    const lecture = getLectureById(params.id)
    return <>
        <h1 className="is-size-4">Edit Lecture No.{params.id}</h1>
        <div className="columns">
            <div className="column is-two-fifths">
                <form className="box my-5" action={handleUpdate.bind(null, params.id)}>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="enter a name"
                            className="input is-dark"
                            defaultValue={lecture.name}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            name="surname"
                            placeholder="enter a surname"
                            className="input is-dark"
                            defaultValue={lecture.surname}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="number"
                            name="age"
                            placeholder="enter a age"
                            className="input is-dark"
                            defaultValue={lecture.age}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="string"
                            name="profession"
                            placeholder="enter a profession"
                            className="input is-dark"
                            defaultValue={lecture.profession}
                        />
                    </div>

                    <div className="field my-4">
                        <Image
                            src={"/"+lecture.photo}
                            width={200}
                            height={300}
                            alt={`Lecturer's photo`}
                        />
                    </div>

                    <div className="field my-4">
                        <PickImages />
                    </div>

                    <div className="field my-4">
                        <button className="button is-danger">submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}
