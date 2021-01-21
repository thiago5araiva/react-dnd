import { CONSTANTS } from "../actions";

function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

const INITIAL_STATE = {
  lanes: [
    {
      id: "1",
      title: "Fila de Pedidos",
      cards: [
        {
          id: randomInt(1, 99),
          id_pedido: "#678976890 [1]",
          platform: "Ifood",
          timeStart: "23h45",
          timeEnd: "23h45",
        },
        {
          id: randomInt(1, 99),
          id_pedido: "#678976891 [2]",
          platform: "Ifood",
          timeStart: "23h45",
          timeEnd: "23h45",
        },
      ],
    },
    {
      id: "1",
      title: "Pedidos aceitos",
      cards: [
        {
          id: randomInt(1, 99),
          id_pedido: "#678976890 [2]",
          platform: "Ifood",
          timeStart: "23h45",
          timeEnd: "23h45",
        },
        {
          id: randomInt(1, 99),
          id_pedido: "#678976891 [3]",
          platform: "Ifood",
          timeStart: "23h45",
          timeEnd: "23h45",
        },
      ],
    },
    {
      id: "1",
      title: "Preparação",
      cards: [
        {
          id: randomInt(1, 99),
          id_pedido: "#678976890 [2]",
          platform: "Ifood",
          timeStart: "23h45",
          timeEnd: "23h45",
        },
        {
          id: randomInt(1, 99),
          id_pedido: "#678976891 [3]",
          platform: "Ifood",
          timeStart: "23h45",
          timeEnd: "23h45",
        },
      ],
    },
    {
      id: "1",
      title: "Despachados",
      cards: [
        {
          id: randomInt(1, 99),
          id_pedido: "#678976890 [2]",
          platform: "Ifood",
          timeStart: "23h45",
          timeEnd: "23h45",
        },
        {
          id: randomInt(1, 99),
          id_pedido: "#678976891 [3]",
          platform: "Ifood",
          timeStart: "23h45",
          timeEnd: "23h45",
        },
      ],
    },
    {
      id: "1",
      title: "Concluídos",
      cards: [
        {
          id: randomInt(1, 99),
          id_pedido: "#678976890 [2]",
          platform: "Ifood",
          timeStart: "23h45",
          timeEnd: "23h45",
        },
        {
          id: randomInt(1, 99),
          id_pedido: "#678976891 [3]",
          platform: "Ifood",
          timeStart: "23h45",
          timeEnd: "23h45",
        },
      ],
    },
    {
      id: "1",
      title: "Cancelados",
      cards: [
        {
          id: randomInt(1, 99),
          id_pedido: "#678976890 [2]",
          platform: "Ifood",
          timeStart: "23h45",
          timeEnd: "23h45",
        },
        {
          id: randomInt(1, 99),
          id_pedido: "#678976891 [3]",
          platform: "Ifood",
          timeStart: "23h45",
          timeEnd: "23h45",
        },
      ],
    },
  ],
};

const listsReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANTS.UPDATE_CARD_POSITION:
      console.log(action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
};

export default listsReducers;
