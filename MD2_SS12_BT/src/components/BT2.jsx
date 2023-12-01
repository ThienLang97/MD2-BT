import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function BT2() {
    const tasks = useSelector(store1 => store1);
    console.log(tasks,"123321");
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const addTask = () => {
        dispatch({
            type: "Thêm cv",
            payload: {
                id: 1,
                task: task
            }
        });
    };

    return (
        <div>
            <input type="text" value={task} onChange={handleChange} />
            <button onClick={addTask}>Thêm việc</button>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Công việc</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => {
                        return (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.task}</td>
                                <td>Sửa và xóa</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}