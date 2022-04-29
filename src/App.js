import "./styles.css";
import { Header } from "./components/header";
import { NewsSection } from "./section/newsSection";
import { ShowSection } from "./section/showSection";
import { AskSection } from "./section/askSection";
import { JobSection } from "./section/jobSection";
import { TopList } from "./pages/topList";
import { NewsList } from "./pages/newsList";
import { ShowList } from "./pages/showList";
import { AskList } from "./pages/askList";
import { JobList } from "./pages/jobList";
import { Article } from "./pages/article";
import { UserInfo } from "./pages/userInfo";
import { Navbar } from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";

export default function App() {
  const ids = {
    new: useFetch("newstories.json"),
    top: useFetch("topstories.json"),
    show: useFetch("showstories.json"),
    ask: useFetch("askstories.json"),
    job: useFetch("jobstories.json"),
  };

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
                <NewsSection topIds={ids.top} newIds={ids.new} />
                <ShowSection ids={ids.show} />
                <AskSection ids={ids.ask} />
                <JobSection ids={ids.job} />
              </main>
            </>
          }
        ></Route>
        <Route
          path="/Top/:page"
          element={
            <main>
              <Header />
              <TopList ids={ids.top} />
            </main>
          }
        ></Route>
        <Route
          path="/News/:page"
          element={
            <main>
              <Header />
              <NewsList ids={ids.new} />
            </main>
          }
        ></Route>
        <Route
          path="/Show/:page"
          element={
            <main>
              <Header />
              <ShowList ids={ids.show} />
            </main>
          }
        ></Route>
        <Route
          path="/Ask/:page"
          element={
            <main>
              <Header />
              <AskList ids={ids.ask} />
            </main>
          }
        ></Route>
        <Route
          path="/Job/:page"
          element={
            <main>
              <Header />
              <JobList ids={ids.job} />
            </main>
          }
        ></Route>
        <Route path="/:section/:page/:id" element={<Article />}></Route>
        <Route
          path="/user/:id"
          element={
            <main>
              <Header />
              <UserInfo />
            </main>
          }
        ></Route>
      </Routes>
      <Navbar />
    </div>
  );
}
