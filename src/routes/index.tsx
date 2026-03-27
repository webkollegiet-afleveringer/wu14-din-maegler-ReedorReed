import { createFileRoute } from "@tanstack/react-router";
import hero from "../assets/hero_1.png";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <section className="isolate bg-multiply-color4 grid *:[grid-area:1/1] justify-center items-center">
      <figure>
        <img
          src={hero}
          alt="Hero image of a beautiful house"
          className="w-dvw object-cover mix-blend-soft-light"
        />
      </figure>
      <article className="isolate">
        <h1 className="main-heading-02 text-general-color1 text-center py-10">
          Søg efter din drømmebolig
        </h1>
        <article className="flex flex-col gap-4 p-8 max-w-4xl mx-auto bg-general-color1 h-fit ">
          <h2 className="head-04 text-heading-color2">
            Søg blandt 158 boliger til salg i 74 butikker
          </h2>
          <p className="para-02 text-paragraph-color1">
            Hvad skal din næste bolig indeholde
          </p>
          <form className="flex gap-4">
            <input
              type="search"
              placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
              className="w-182 h-12 border border-shape-color1 p-3 para-02"
            />
            <button
              type="submit"
              className="bg-primary-color1 text-white w-30 h-12 cursor-pointer"
            >
              Søg
            </button>
          </form>
        </article>
      </article>
    </section>
  );
}
