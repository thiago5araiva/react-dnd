import React, { useState } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4";

const itemsFromBackend = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" },
  { id: uuid(), content: "Fifth task" },
  { id: uuid(), content: "Fifth task" },
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Fila de Pedidos",
    items: itemsFromBackend,
  },
  [uuid()]: {
    name: "Pedidos Aceitos",
    items: [],
  },
  [uuid()]: {
    name: "Preparação",
    items: [],
  },
  [uuid()]: {
    name: "Despachados",
    items: [],
  },
  // [uuid()]: {
  //   name: "Concluidos",
  //   items: [],
  // },
  // [uuid()]: {
  //   name: "Cancelados",
  //   items: [],
  // },
};

export default function TrelloList() {
  const [columns, setColumns] = useState(columnsFromBackend);
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => (
          <Droppable droppableId={columnId} key={columnId}>
            {(provided) => (
              <Col
                xl={3}
                className="trello"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <div className="trello__title">
                  <h1>{column.name}</h1>
                  <img src={require("../assets/images/minus.svg")} alt="" />
                </div>
                <div className="trello__cards">
                  <div className="trello__cards-span">
                    <h4>Todos os canais</h4>
                    <img src={require("../assets/images/Down.svg")} />
                  </div>
                  {column.items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Card className="card">
                            <div className="tag"></div>
                            <Card.Body>
                              <Row>
                                <Card.Title className="card__id">
                                  Id do Pedido: {item.id}
                                </Card.Title>
                              </Row>
                              <Row>
                                <img
                                  src={require("../assets/images/ifood.svg")}
                                  alt="ifood"
                                  className="card__platform"
                                />
                                <div className="card__initialTime">
                                  <img
                                    src={require("../assets/images/Clock.svg")}
                                    alt="ifood"
                                  />
                                  <p>23h35</p>
                                </div>
                                <div className="card__deliveryTime">
                                  <img
                                    src={require("../assets/images/motoboy.svg")}
                                    alt="ifood"
                                  />
                                  <p>23h35</p>
                                </div>
                              </Row>
                            </Card.Body>
                          </Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </Col>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </>
  );
}
