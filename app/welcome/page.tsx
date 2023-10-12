// fonts
export default function WelcomePage() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="container mx-auto text-center">
        <h1 className={`text-5xl font-bold p-5`}>Welcome</h1>
        <p>
          The EcoScape project aims at modeling animal (and perhaps, in the
          future, plant) habitats, study their connectivity, and more.
        </p>
      </div>
    </main>
  );
}
