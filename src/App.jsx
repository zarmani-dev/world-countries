import { useEffect, useState } from "react";
import AppBody from "./components/AppBody";
import data from "./data/data.json";
import useStore from "./store/useStore";
import TopArrow from "./components/TopArrow";

function App() {
  const { setData } = useStore();
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setData(data);
      setPending(false);
    };

    fetchData();
  }, [setData]);

  return (
    <div>
      <main className="container">
        {pending ? (
          <div className="text-white h-screen flex justify-center items-center text-4xl font-bold">
            Loading...
          </div>
        ) : (
          <AppBody />
        )}
      </main>
      <TopArrow />
    </div>
  );
}

export default App;
