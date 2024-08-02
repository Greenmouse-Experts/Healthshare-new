import Accordion from "./Accordion";

function Questions() {
  return (
    <section className="lg:flex  items-start justify-between  space-y-6">
      <div className="lg:w-[40%]">
        <h1 className="lg:w-[50%]">
          Have  questions?
        </h1>
      </div>

      <div className="lg:w-[60%] ">
        <Accordion />
      </div>
    </section>
  );
}

export default Questions
