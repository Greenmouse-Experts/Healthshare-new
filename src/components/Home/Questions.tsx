import Accordion from "./Accordion";

function Questions() {
  return (
    <section className="flex items-start justify-between ">
      <div className="w-[40%]">
        <h1>
          Have <br /> questions?
        </h1>
      </div>

      <div className="w-[60%]">
        <Accordion />
      </div>
    </section>
  );
}

export default Questions
