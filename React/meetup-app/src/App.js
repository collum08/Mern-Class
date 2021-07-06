import { Route, Switch } from "react-router-dom";
import AllMeetUps from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetUps from "./pages/NewMeetups";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        {/*! exact tell react router to not check the other route as part of the
        path */}
        <Route path="/" exact>
          <AllMeetUps />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUps />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
