import "./App.css";
import styles from "./style";
import Header from "./constants/Header";
import Hero from "./component/Hero/Hero.jsx";
// import Details from "./component/Details/Details";
import Detail from "./component/Detail/Detail"
function App() {
  return (
    <div className="bg-secondary w-full overflow-hidden">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>
      <div className="py-8 px-8 bg-heroColor">
        <Hero />
      </div>
      <div>
       <Detail />
        {/* <Details className="bg-heroColor" /> */}
      </div>
    </div>
  );
}

export default App;
