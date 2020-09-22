import React from "react";
import { render, screen } from "@testing-library/react";
import PageTitle from "./PageTitle";

describe("PageTitle", () => {
  test("render PageTitle component", () => {
    render(<PageTitle pageTitle="hello"/>)
    screen.getByText("banana")
  })
})