import * as React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Task } from "../../../Interfaces/Task";
import { useConfigContext } from "../../../Context/taskContext";
import "./style.css";

const UpdateTaskView: React.FC = () => {
  const { id }: { id: string } = useParams();
  const [name, setName] = React.useState<string>("");
  const [finishTask, setFinishTask] = React.useState<number>(0);
  const [objUpdate, setObjUpdate] = React.useState<Task>({} as Task);
  const history = useHistory();
  const { updateTask, getTasks } = useConfigContext();

  function updateTaskResponse() {
    let done = finishTask === 1 ? true : false;
    let objUp: Task = {
      id: Number(id),
      name,
      finish: done,
      dtCreate: new Date(),
    };
    updateTask(Number(id), objUp);
    history.push("/");
  }

  function getTaskById() {
    getTasks().map((itens) => {
      if (itens.id === Number(id)) {
        setName(itens.name);
        setFinishTask(itens.finish ? 1 : 0);
        setObjUpdate(itens);
      }
    });
  }

  React.useEffect(() => {
    getTaskById();
  }, []);

  return (
    <span className="boxInputTask">
      <h3 className="styleTitleTasks">Editar tarefa</h3>
      <div className="mainNewTaskStyle">
        <input
          type="text"
          value={name}
          onChange={(value) => setName(value.target.value)}
          placeholder={"Nova tarefa..."}
          className="inputStyleNameTask"
        />
        <select
          className="styleInfoSelectTask"
          onChange={(finish) => {
            setFinishTask(parseInt(finish.target.value));
          }}
        >
          <option value={1} selected={finishTask === 1}>Atividade feita</option>
          <option value={0} selected={finishTask === 0}>Atividade não feita</option>
        </select>

        <button onClick={updateTaskResponse} className="btnNewTaskPlus">
          Salvar Tarefa
        </button>
      </div>
    </span>
  );
};
export default UpdateTaskView;
