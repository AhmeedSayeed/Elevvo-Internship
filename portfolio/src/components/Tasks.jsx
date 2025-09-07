import { TASKS_DATA } from "../tasks.js";
import Task from './Task.jsx';

export default function Tasks() {
    return <section className="flex flex-col items-center justify-center gap-6 p-6 mx-10 my-8 bg-gradient-content rounded-2xl shadow-dark">
        <h2 className="text-2xl text-light-tertiary text-medium mb-4 border-b-[2px]">Featured Tasks</h2>
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 mb-6">
            {TASKS_DATA.map(task => <Task key={task.id} {...task} />)}
        </div>
    </section>
}