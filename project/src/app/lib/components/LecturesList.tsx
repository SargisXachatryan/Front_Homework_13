"use client";
import styles from "@/app/page.module.css";
import { ILecture } from '../api';
import Image from "next/image";
import Link from "next/link";

interface IProps {
    lectures: ILecture[];
}

export const LecturesList = ({ lectures }: IProps) => {
    return <main className={styles.main}>
        <h1 className='is-size-3 my-1'>Lectures</h1>
        <div className="container my-1">
            <div className="columns is-multiline">
                {lectures.map((lecture) => (
                    <div key={lecture.id} className="column is-one-third">
                        <div className="box">
                            <figure>
                                <Image
                                    src={"/" + lecture.photo}
                                    width={1024}
                                    height={1024}
                                    alt={`${lecture.name} ${lecture.surname}`}
                                />
                            </figure>
                            <h3 className="title is-5">{`${lecture.name} ${lecture.surname}`}</h3>
                            <p className="subtitle is-6">Age: {lecture.age}</p>
                            <p>{lecture.profession}</p>
                            <Link href={`lectures/edit/${lecture.id}`} className="button is-success"><button>Edit</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </main>
}
