import { screen, render } from "@testing-library/vue";
import GameView from "@/views/GameView.vue";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

let mockFetch = jest.fn();
beforeAll(() => {
  global.fetch = mockFetch;
});

beforeEach(() => {
  jest.clearAllMocks();
});

const questions = [
  {
    id: 1,

    question:
      "Dans quelles aventures retrouve-t-on les personnages de Loïs et Clark (super série)?",

    propositions: ["Superman", "Spider-Man", "Hulk", "Batman"],

    réponse: "Superman",

    anecdote:
      "Dans « Superman », Clark Kent et Loïs Lane, deux des héros de la saga, sont journalistes au « Daily Planet ».",
  },

  {
    id: 2,

    question:
      "Dans les X-Men, quelle substance constitue le squelette principal de Wolverine ?",

    propositions: ["Adamantium", "Vibranium", "Cavorite", "Neutronium"],

    réponse: "Adamantium",

    anecdote:
      "L'adamantium, alliage de métal imaginaire le plus résistant de tous les métaux imaginaires connus, ne s'oxyde pas et ne rouille pas.",
  },

  {
    id: 3,

    question:
      "Quel est le nom de Spider-Man, apparu pour la première fois en 1962 ?",

    propositions: ["Peter Parker", "John Parker", "Alan Parker", "Tom Parker"],

    réponse: "Peter Parker",

    anecdote:
      "Peter Parker est le fils unique de Richard et Mary Parker, tués alors qu'il était encore fort jeune.",
  },
];

describe("Test GameView page", () => {
  it("Test if game view page is rendering", () => {
    render(GameView);
    expect(screen.getByText("New Quizz")).toBeInTheDocument();
  });
  it("Should test if 1st question is rendering ", () => {
    mockFetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(questions),
    });
  });
  expect(
    screen.getByText(
      "Dans quelles aventures retrouve-t-on les personnages de Loïs et Clark (super série)?"
    )
  ).toBeInTheDocument();
});
