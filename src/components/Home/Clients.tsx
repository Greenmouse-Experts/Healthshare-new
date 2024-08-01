
function Clients() {
  return (
    <section className="flex flex-col items-center justify-center gap-12">
      <h1>Our Products’ Lines</h1>

      <div className="flex gap-8">
        <div>
          <img src="/img/client1.png" alt="" className="w-[80%] object-cover" />
        </div>
        <div>
          <img
            src="/img/client2.png"
            alt=""
            className="w-[80%]  -mt-10 object-cover"
          />
        </div>
        <div>
          <img src="/img/client3.png" alt="" className="w-[80%] object-cover" />
        </div>
        <div>
          <img src="/img/client4.png" alt="" className="w-[80%] object-cover" />
        </div>
      </div>
    </section>
  );
}

export default Clients
