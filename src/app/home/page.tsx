export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-noto-sans-display)]">
      <main className="flex flex-col flex-nowrap gap-[32px] row-start-2 items-center sm:items-start w-[50%] h-[100%]">
        <div className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-noto-sans-display)]">
          <div className="text-white mb-2 tracking-[-.01em] text-4xl">
            Hello,
          </div>
          <br></br>
          <div className="text-white tracking-[-.01em] text-2xl">
            Welcome to my very humble website. Sometimes I get bored, delete everything, and try to develop something interesting. 
            However, my <a className="underline" href="/resume">resumé</a> is the only interesting thing available at the moment. I apologize to the 729 <s>bots</s> players 
            enjoying my tower defence game. Maybe we can bring it back seasonally like taco bell nacho fries. This font looked way 
            better with smaller text I swear.
          </div>
        </div>

      </main>
      <footer>
      </footer>
    </div>
  );
}
