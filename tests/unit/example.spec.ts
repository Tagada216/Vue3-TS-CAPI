import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import "@testing-library/jest-dom";
describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";

    render(HelloWorld, { props: { msg } });
    expect(screen.getByText(msg)).toEqual(msg);
    expect(screen.getByText("Installed CLI Plugins")).toBeInTheDocument();
  });
});
