function Footer() {
  return (
    <section
      className={` bg-[url('/img/footer.png')] bg-cover bg-center  w-full  h-[35rem] overflow-hidden grid place-content-center text-white`}
    >
      <div className="flex items-center justify-center flex-col">
        <h2 className="">Join the Community</h2>
        <p>
          Receive updates and news from Healthshare Nigeria directly in your
          email
        </p>
      </div>
      <div></div>
    </section>
  );
}

export default Footer;
