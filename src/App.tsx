import { Experience, Header, Hero, Projects } from "./components";

function App() {
  return (
    <div className="app-container w-full flex flex-col">
      <Header />

      <main>
        <Hero />

        <div className="space-y-24">
          <Experience />
          <Projects />
        </div>
      </main>
    </div>
  );
}

export default App;
