import "./styles.css";
import { Header } from "./components/header";
import { NewsSection } from "./section/newsSection";
import { ShowSection } from "./section/showSection";
import { AskSection } from "./section/askSection";
import { JobSection } from "./section/jobSection";
import { NewsList } from "./pages/newsList";
import { ShowList } from "./pages/showList";
import { AskList } from "./pages/askList";
import { JobList } from "./pages/jobList";
import { Article } from "./pages/article";
import { Navbar } from "./components/navbar";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main>
                <strong className="welcome">Welcome!</strong>
                <NewsSection category={"top"} />
                <ShowSection />
                <AskSection />
                <JobSection />
              </main>
            </>
          }
        ></Route>
        <Route
          path="/top"
          element={
            <main>
              <Header />
              <NewsList category={"top"} />
            </main>
          }
        ></Route>
        <Route
          path="/new"
          element={
            <main>
              <Header />
              <NewsList category={"new"} />
            </main>
          }
        ></Route>
        <Route
          path="/show"
          element={
            <main>
              <Header />
              <ShowList />
            </main>
          }
        ></Route>
        <Route
          path="/ask"
          element={
            <main>
              <Header />
              <AskList />
            </main>
          }
        ></Route>
        <Route
          path="/job"
          element={
            <main>
              <Header />
              <JobList />
            </main>
          }
        ></Route>
        <Route path="/item/:id" element={<Article />}></Route>
      </Routes>
      <Navbar />
    </div>
  );
}
