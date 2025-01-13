import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, ListGroup, InputGroup } from "react-bootstrap";
import "./App.css";


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Add a task to the list
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  // Delete a task from the list
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Toggle the completion status of a task
  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col md={6}>
          <Card className="bg-dark text-white shadow-lg">
            <Card.Body>
              <h3 className="text-center mb-4 text-info">React To-Do List</h3>
              <InputGroup className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="Enter a task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  className="bg-dark text-white border-secondary"
                />
                <Button variant="info" onClick={handleAddTask}>
                  Add Task
                </Button>
              </InputGroup>
              {tasks.length > 0 ? (
                <ListGroup variant="flush">
                  {tasks.map((task, index) => (
                    <ListGroup.Item
                      key={index}
                      className="d-flex align-items-center justify-content-between bg-dark text-white border-secondary"
                    >
                      <div className="d-flex align-items-center ggwp">
                        <Form.Check
                          type="checkbox"
                          className="me-3"
                          checked={task.completed}
                          onChange={() => toggleTaskCompletion(index)}
                          style={{ accentColor: "#17a2b8" }}
                        />
                        <span
                          style={{
                            textDecoration: task.completed ? "line-through" : "none",
                            fontSize: "1rem",
                          }}
                        >
                          {task.text}
                        </span>
                      </div>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDeleteTask(index)}
                      >
                        Delete
                      </Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p className="text-center text-muted mt-4">
                  No tasks yet! Add a new task to get started.
                </p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
