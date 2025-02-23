"use client";

import Image from "next/image"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { Task } from "./data/schema"
import { PageDtToolbarPropsToolbar } from "./page-dt-toolbar"
import React from "react"

export default function TaskPage() {

const tasks: Task[] = [
  {
    "id": "TASK-8782",
    "title": "You can't compress the program without quantifying the open-source SSD pixel!",
    "status": "in progress",
    "label": "documentation",
    "priority": "medium"
  },
  {
    "id": "TASK-7878",
    "title": "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    "status": "backlog",
    "label": "documentation",
    "priority": "medium"
  },
  {
    "id": "TASK-7839",
    "title": "We need to bypass the neural TCP card!",
    "status": "todo",
    "label": "bug",
    "priority": "high"
  },
];

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
        </div>
        <DataTable DataTableToolbar={PageDtToolbarPropsToolbar} data={tasks} columns={columns} 
         />
      </div>
    </>
  )
}
