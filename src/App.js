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
            <>
              <Header />
              <NewsList category={"top"} />
            </>
          }
        ></Route>
        <Route
          path="/new"
          element={
            <>
              <Header />
              <NewsList category={"new"} />
            </>
          }
        ></Route>
        <Route
          path="/show"
          element={
            <>
              <Header />
              <ShowList />
            </>
          }
        ></Route>
        <Route
          path="/ask"
          element={
            <>
              <Header />
              <AskList />
            </>
          }
        ></Route>
        <Route
          path="/job"
          element={
            <>
              <Header />
              <JobList />
            </>
          }
        ></Route>
        <Route path="/item/:id" element={<Article />}></Route>
      </Routes>
      <Navbar />
    </div>
  );
}
