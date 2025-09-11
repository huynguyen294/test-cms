import { useEffect, useState } from "react";

const baseUrl = import.meta.env.VITE_SERVER_URL;

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      fetch(baseUrl + "/products")
        .then((res) => res.json())
        .then((json) => setData(json));
    })();
  }, []);

  return <div>From cms: {data && JSON.stringify(data)}</div>;
};

export default App;
