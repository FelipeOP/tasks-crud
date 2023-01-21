import { Router } from 'express';
import {
    renderTasks,
    createTask,
    taskToggleDone,
    renderTaskEdit,
    editTask,
    deleteTask
} from '../controllers/task.controllers';

const router = Router();

// Render all tasks
router.get("/", renderTasks);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/toggleDone", taskToggleDone);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

export default router;