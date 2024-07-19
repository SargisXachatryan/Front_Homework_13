import React from 'react'
import { getAllLectures } from '../lib/api'
import { LecturesList } from "@/app/lib/components/LecturesList";

export default function Lectures() {

  const lectures = getAllLectures()
  console.log(lectures);

  return <>
    <LecturesList lectures={lectures}/>
  </>
}
