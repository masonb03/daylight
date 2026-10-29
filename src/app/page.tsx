
export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <main className="mx-auto flex w-full flex-col gap-8 px-4 py-10 font-sans sm:px-8">
      <header className="flex flex-col gap-2 p-4">
      <h2 className="text-sm text-text-secondary/70 font-sans">Monday, October 26th</h2>
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-4xl font-semibold tracking-light text-txet-primary sm:text5xl">FUCK.</p>
        <p className="text-text-secondary">Make today count.</p>
      </div>
      </header>
      <section className="relative overflow-hidden flex justify-between rounded-3xl  border border-white/5 bg-night-800 p-6 sm:p-8 ">
        <div className="relative z-10 flex flex-col gap-4">
            <p className="text-xl font-medium py-6 text-sun tracking-[0.3em]">TODAYS FOCUS</p>
            <div className="flex flex-col gap-2 pb-4">
              <h2 className="text-4xl font-semibold text-text-primary sm:text-6xl">Coding</h2>
              <p className="max-w-md text-text-secondary text-xl">Build something simple</p>
            </div>
            <button className="bg-sun/90 w-fit py-3 px-6 rounded-3xl font-light text-night-950 transition hover:bg-sun cursor-pointer">Start Focus</button>
        </div>
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
