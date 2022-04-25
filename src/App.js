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
import { UserInfo } from "./pages/userInfo";
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
                <NewsSection />
                <ShowSection />
                <AskSection />
                <JobSection />
              </main>
            </>
          }
        ></Route>
        <Route
          path="/News"
          element={
            <main>
              <Header />
              <NewsList />
            </main>
          }
        ></Route>
        <Route
          path="/Show"
          element={
            <main>
              <Header />
              <ShowList />
            </main>
          }
        ></Route>
        <Route
          path="/Ask"
          element={
            <main>
              <Header />
              <AskList />
            </main>
          }
        ></Route>
        <Route
          path="/Job"
          element={
            <main>
              <Header />
              <JobList />
            </main>
          }
        ></Route>
        <Route path="/:section/:id" element={<Article />}></Route>
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
