import { screen, render } from "@testing-library/vue";
import HomeView from "@/views/HomeView.vue";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

let mockFetch = jest.fn();
beforeAll(() => {
  global.fetch = mockFetch;
});

beforeEach(() => {
  jest.clearAllMocks();
});

const users = [
  {
    id: 1,
    name: "Nicolas Doe",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Paul Graham",
    username: "Pauldu59",
    email: "Sincere@april.biz",
  },
];

describe("Tests for HomePage ", () => {
  it("should test if the HomePage is correctly rendering", () => {
    render(HomeView);
    expect(screen.getByText("Fabulous Quizz")).toBeInTheDocument();
  });
  it("should test if the HomePage is the start game button is present", () => {
    render(HomeView);
    expect(screen.getByText("Load users")).toBeInTheDocument();
  });
  it("Should test api is calling when button is clicked", async () => {
    mockFetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(users),
    });
    render(HomeView);
    await userEvent.click(screen.getByText("Load users"));
    expect(await screen.findByText("Nicolas Doe")).toBeInTheDocument();
  });
});
