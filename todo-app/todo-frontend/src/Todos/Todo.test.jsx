import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

const todo = { text: "Buy milk", done: false };

test("renders todo text", () => {
  render(
    <Todo
      todo={todo}
      onClickDelete={() => () => {}}
      onClickComplete={() => () => {}}
    />,
  );
  expect(screen.getByText("Buy milk")).toBeInTheDocument();
});

test("shows Set as done button when not done", () => {
  render(
    <Todo
      todo={todo}
      onClickDelete={() => () => {}}
      onClickComplete={() => () => {}}
    />,
  );
  expect(screen.getByText("Set as done")).toBeInTheDocument();
});

test("does not show Set as done button when done", () => {
  const doneTodo = { text: "Buy milk", done: true };
  render(
    <Todo
      todo={doneTodo}
      onClickDelete={() => () => {}}
      onClickComplete={() => () => {}}
    />,
  );
  expect(screen.queryByText("Set as done")).not.toBeInTheDocument();
});
