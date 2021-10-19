import React, { Component, Fragment } from "react";
import TaskCard from "../TaskCard/TaskCard";
import AddTaskWindow from "../AddTaskWindow/AddTaskWindow";
import "./style.css";
export default class TasksList extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      inProgress: [],
      done: [],
      showDetails: false,
      showAddTaskWindow: false,
    };
    this.addTaskWindowRef = React.createRef();
    this.taskCard = React.createRef();
    this.getTasks = this.getTasks.bind(this);
    this.addTaskToList = this.addTaskToList.bind(this);
    this.changeTaskList = this.changeTaskList.bind(this);
    this.showAddTaskWindow = this.showAddTaskWindow.bind(this);
    this.removeAddTaskWindow = this.removeAddTaskWindow.bind(this);
    this.getRef = this.getRef.bind(this)
  }
  getTasks() {
    fetch("http://localhost:3001/tasks/all/list", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((tasks) => {
        if (tasks.status === 200) {
          tasks.assignedTasks.forEach((task) => {
            switch (task.status) {
              case "todo":
                this.setState((prevState) => {
                  let array = [...prevState.todo];
                  array.push(
                    <TaskCard
                      ref={this.taskCard}
                      id={task._id}
                      tasks={task.tasks}
                      color={task.color}
                      status={task.status}
                      description={task.description}
                      title={task.title}
                      usersWhoPerforms={task.usersWhoPerforms}
                      userWhoCreated={task.userWhoCreated}
                      showDetails={this.createTaskDetailsWindow}
                    />
                  );
                  return {
                    ...prevState,
                    todo: array,
                  };
                });
                break;
              case "inProgress":
                this.setState((prevState) => {
                  let array = [...prevState.inProgress];
                  array.push(
                    <TaskCard
                      ref={this.taskCard}
                      id={task._id}
                      tasks={task.tasks}
                      color={task.color}
                      status={task.status}
                      description={task.description}
                      title={task.title}
                      usersWhoPerforms={task.usersWhoPerforms}
                      userWhoCreated={task.userWhoCreated}
                      showDetails={this.createTaskDetailsWindow}
                    />
                  );
                  return {
                    ...prevState,
                    inProgress: array,
                  };
                });
                break;
              case "done":
                this.setState((prevState) => {
                  let array = [...prevState.done];
                  array.push(
                    <TaskCard
                      ref={this.taskCard}
                      id={task._id}
                      tasks={task.tasks}
                      color={task.color}
                      description={task.description}
                      title={task.title}
                      usersWhoPerforms={task.usersWhoPerforms}
                      userWhoCreated={task.userWhoCreated}
                      showDetails={this.createTaskDetailsWindow}
                      status={task.status}
                    />
                  );
                  return {
                    ...prevState,
                    done: array,
                  };
                });
                break;
              default:
                break;
            }
          });
          tasks.myTasks.forEach((task) => {
            switch (task.status) {
              case "todo":
                this.setState((prevState) => {
                  let array = [...prevState.todo];
                  array.push(
                    <TaskCard
                      ref={this.taskCard}
                      tasks={task.tasks}
                      color={task.color}
                      description={task.description}
                      title={task.title}
                      usersWhoPerforms={task.usersWhoPerforms}
                      userWhoCreated={task.userWhoCreated}
                      showDetails={this.createTaskDetailsWindow}
                      status={task.status}
                    />
                  );
                  return {
                    ...prevState,
                    todo: array,
                  };
                });
                break;
              case "inProgress":
                this.setState((prevState) => {
                  let array = [...prevState.inProgress];
                  array.push(
                    <TaskCard
                      ref={this.taskCard}
                      tasks={task.tasks}
                      color={task.color}
                      description={task.description}
                      title={task.title}
                      usersWhoPerforms={task.usersWhoPerforms}
                      userWhoCreated={task.userWhoCreated}
                      showDetails={this.createTaskDetailsWindow}
                      status={task.status}
                    />
                  );
                  return {
                    ...prevState,
                    inProgress: array,
                  };
                });
                break;
              case "done":
                this.setState((prevState) => {
                  let array = [...prevState.done];
                  array.push(
                    <TaskCard
                      ref={this.taskCard}
                      tasks={task.tasks}
                      color={task.color}
                      description={task.description}
                      title={task.title}
                      usersWhoPerforms={task.usersWhoPerforms}
                      userWhoCreated={task.userWhoCreated}
                      showDetails={this.createTaskDetailsWindow}
                      status={task.status}
                    />
                  );
                  return {
                    ...prevState,
                    done: array,
                  };
                });
                break;
              default:
                break;
            }
          });
        }
      });
  }
  addTaskToList(task) {
    this.setState((prevState) => {
      return {
        ...prevState,
        todo: [
          ...prevState.todo,
          <TaskCard
            tasks={task.tasks}
            color={task.color}
            description={task.description}
            title={task.title}
            usersWhoPerforms={task.usersWhoPerforms}
            userWhoCreated={task.userWhoCreated}
            showDetails={this.createTaskDetailsWindow}
            status={task.status}
          />,
        ],
      };
    });
  }
  changeTaskList(e, to) {
    /**NIE ZMIENIA SIĘ STATUS ZADANIA, WIĘC PRZERZUCENIE 2x ZADANIA NIE DZIAŁA */
    e.preventDefault();
    const id = e.dataTransfer.getData("id"),
      from = e.dataTransfer.getData("status");

    let movedTask = this.state[from].filter((task) => {
      if (task.props.id === id) {
        return task;
      }
    });
    let array = this.state[from].filter((task) => {
      return task.props.id !== id ? task : null;
    });

    switch (to) {
      case "todo":
        this.taskCard.current.changeThisShit(to);
        this.setState((prevState) => {
          return {
            ...prevState,
            todo: [...prevState.todo, ...movedTask],
          };
        });
        fetch("http://localhost:3001/tasks/update/status", {
          method: "PUT",
          body: JSON.stringify({
            status: to,
            _id: id,
          }),
          credentials: "include",
          headers: {
            Accept: "*",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
          });
        break;
      case "inProgress":
        this.taskCard.current.changeThisShit(to);
        this.setState((prevState) => {
          return {
            ...prevState,
            inProgress: [...prevState.inProgress, ...movedTask],
          };
        });
        fetch("http://localhost:3001/tasks/update/status", {
          method: "PUT",
          body: JSON.stringify({
            status: to,
            _id: id,
          }),
          credentials: "include",
          headers: {
            Accept: "*",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
          });
        break;
      case "done":
        this.taskCard.current.changeThisShit(to);
        this.setState((prevState) => {
          return {
            ...prevState,
            done: [...prevState.done, ...movedTask],
          };
        });
        fetch("http://localhost:3001/tasks/update/status", {
          method: "PUT",
          body: JSON.stringify({
            status: to,
            _id: id,
          }),
          credentials: "include",
          headers: {
            Accept: "*",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
          });
        break;
      default:
        break;
    }
    switch (from) {
      case "todo":
        this.setState((prevState) => {
          return {
            ...prevState,
            todo: array,
          };
        });

        break;
      case "inProgress":
        this.setState((prevState) => {
          return {
            ...prevState,
            inProgress: array,
          };
        });

        break;
      case "done":
        this.setState((prevState) => {
          return {
            ...prevState,
            done: array,
          };
        });

        break;
      default:
        break;
    }
  }
  showAddTaskWindow() {
    this.setState((prevState) => {
      return {
        ...prevState,
        showAddTaskWindow: !this.state.showAddTaskWindow,
      };
    });
  }
  removeAddTaskWindow() {
    this.setState((prevState) => {
      return {
        ...prevState,
        showAddTaskWindow: !this.state.showAddTaskWindow,
      };
    });
  }
  getRef(ref) {
    this.addTaskWindowRef = ref;
  }
  componentDidMount() {
    this.getTasks();
  }
  render() {
    return (
      <Fragment>
        {this.state.showAddTaskWindow ? (
          <AddTaskWindow
            addTaskToList={this.addTaskToList}
            removeAddTaskWindow={this.removeAddTaskWindow}
            getRef={this.getRef}
          />
        ) : null}
        <div className="tasks__wrapper">
          <div className="belt">
            <div className="actions">
              <button className="add" onClick={this.showAddTaskWindow}>
                +
              </button>
            </div>
          </div>
          <div className="tasks__container">
            <div className="tasks-type__container">
              <div className="counter --todo">{this.state.todo.length}</div>
              <div
                className="tasks"
                onDrop={(e) => {
                  this.changeTaskList(e, "todo");
                }}
                onDragOver={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}>
                {this.state.todo.map((task) => task)}
              </div>
              <div className="status --todo">Do zrobienia</div>
            </div>
            <div className="tasks-type__container">
              <div className="counter --in-progress">
                {this.state.inProgress.length}
              </div>
              <div
                className="tasks"
                onDrop={(e) => {
                  this.changeTaskList(e, "inProgress");
                }}
                onDragOver={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}>
                {this.state.inProgress.map((task) => task)}
              </div>
              <div className="status --in-progress">W trakcie realizacji</div>
            </div>
            <div className="tasks-type__container">
              <div className="counter --done">{this.state.done.length}</div>
              <div
                className="tasks"
                onDrop={(e) => {
                  this.changeTaskList(e, "done");
                }}
                onDragOver={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}>
                {this.state.done.map((task) => task)}
              </div>
              <div className="status --done">Załatwione</div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
