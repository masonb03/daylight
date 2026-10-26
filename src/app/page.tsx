
export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <main className="mx-auto flex min-h-screen w-3/4 flex-col gap-8 px-6 py-10 font-sans sm:px-10">
      <header className="flex flex-col gap-2 p-4">
      <h2 className="text-lg text-text-secondary/50 font-sans">Monday, October 26th</h2>
      <div className="flex items-center justify-between gap-2">
        <p className="text-5xl">Good Evening.</p>
        <span className="text-text-secondary">Make today count.</span>
      </div>
      </header>
      <section className="border border-white/5 bg-night-800 p-6 sm:p-8  rounded-3xl flex flex-col">
        <p className="text-2xl font-medium py-4">TODAYS FOCUS</p>
        <div className="flex flex-col gap-2 py-6">
          <h2 className="text-3xl font-semibold text-text-primary sm:text-4xl">Coding</h2>
          <p className="max-w-md text-text-secondary">Build something simple</p>
        </div>
        <button className="bg-sun w-fit py-3 px-6 rounded-xl font-semibold text-night-950 transition hover:bg-sun/90 cursor-pointer">Start Focus</button>
      </section>
      <section className="p-4">
        <h2 className="text-2xl font-medium ">Todays Anchors</h2>
        <ul className="flex flex-col gap-2">
          <li>Work</li>
          <li>Train</li>
          <li>Coding</li>
          <li>Clean</li>
        </ul>
      </section>
      </main>
    </div>
  );
}
