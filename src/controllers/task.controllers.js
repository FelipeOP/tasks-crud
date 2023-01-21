import Task from "../models/Task";

export const renderTasks = async (request, response) => {
    try {
        const tasks = await Task.find().lean();
        response.render("index", {
            tasks,
        });
    } catch (error) {
        console.log({ error });
        return response.render("error", { errorMessage: error.message });
    }
};

export const createTask = async (request, response, next) => {
    try {
        const task = new Task(request.body);
        await task.save();
        response.redirect("/");
    } catch (error) {
        return response.render("error", { errorMessage: error.message });
    }
};

export const taskToggleDone = async (request, response, next) => {
    let { id } = request.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    response.redirect("/");
};

export const renderTaskEdit = async (request, response, next) => {
    const task = await Task.findById(request.params.id).lean();
    response.render("edit", { task });
};

export const editTask = async (request, response, next) => {
    const { id } = request.params;
    await Task.updateOne({ _id: id }, request.body);
    response.redirect("/");
};

export const deleteTask = async (request, response, next) => {
    let { id } = request.params;
    await Task.remove({ _id: id });
    response.redirect("/");
};