import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, Button, Card, Modal } from 'react-bootstrap';
import './App.css'; // Importación necesaria del archivo CSS externo

// Formulario reutilizable para Escritorio, Tablet y Phone
const GoalForm = () => (
  <Form className="text-center px-4">
    <Form.Group>
      <Form.Label className="form-custom-label">Name</Form.Label>
      <Form.Control type="text" className="form-custom-input" />
    </Form.Group>
    <Form.Group>
      <Form.Label className="form-custom-label">Description</Form.Label>
      <Form.Control as="textarea" rows={3} className="form-custom-input" />
    </Form.Group>
    <Form.Group>
      <Form.Label className="form-custom-label">Due Date</Form.Label>
      <Form.Control type="date" className="form-custom-input" />
    </Form.Group>
    <Button className="btn-purple mt-4">ADD GOAL</Button>
  </Form>
);

// Tarjeta individual para las metas establecidas
const GoalItem = ({ name, description, dueDate }) => (
  <Card className="goal-card shadow-sm">
    <Card.Body>
      <h5>Name</h5>
      <p>{name}</p>
      <h5>Description</h5>
      <p>{description}</p>
      <p className="due-date-text">Due Date: {dueDate}</p>
      <Button className="btn-purple w-100 mt-2">Remover</Button>
    </Card.Body>
  </Card>
);

export default function App() {
  // Estado para abrir/cerrar la ventana emergente en versión móvil
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // Datos quemados simulando la To Do List
  const goals = [
    { id: 1, name: "Proyecto de Curso de desarrollo web", description: "Elaborar una aplicación web responsive en la que se pueda llevar control de mis metas y tareas personales", dueDate: "31/05/2024" },
    { id: 2, name: "Terminar de leer libro", description: "Finalizar mi libro de react.", dueDate: "31/05/2024" },
    { id: 3, name: "Subir Actividad 1", description: "Responder el test en el GES correspondiente a la actividad 1", dueDate: "31/05/2024" }
  ];

  return (
    <>
      {/* Menú superior */}
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home"><span style={{ fontSize: '1.5rem', color: '#61dafb' }}>⚛</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#tasks">Tasks</Nav.Link>
              <Nav.Link href="#goals">Goals</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row>
          {/* Para la columna izquierda: formulario (Se oculta en móviles) */}
          <Col md={5} className="d-none d-md-block">
            <GoalForm />
          </Col>
          
          {/* Para la columna derecha: tarjetas y Botón Móvil */}
          <Col xs={12} md={7}>
            {/* Botón que activa la ventana emergente (solo visible en móviles) */}
            <div className="d-md-none mb-4 text-center">
              <Button className="btn-purple" onClick={handleShow} style={{ width: '80%' }}>
                ADD GOAL
              </Button>
            </div>
            
            {/* Lista de metas */}
            <div>
              {goals.map(g => <GoalItem key={g.id} name={g.name} description={g.description} dueDate={g.dueDate} />)}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Ventana emergente (Modal) para versión móvil */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body className="p-4">
          <GoalForm />
        </Modal.Body>
      </Modal>
    </>
  );
}
