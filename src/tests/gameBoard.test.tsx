import React from "react";
import { render, screen } from "@testing-library/react"
import GameBoard from "../components/gameBoard"
import gameMap from "../images/gameMap.jpg"

// investigate pre test setup and post test clean up
// beforeEach(() => {
//     // test setup
// })

test('game map renders', () => {
    // Arrange
    render(<GameBoard/>);

    // Act
    const mapImage = screen.getByRole('img', { name: "game map"});

    //Assert
    expect(mapImage).toBeInTheDocument();
});