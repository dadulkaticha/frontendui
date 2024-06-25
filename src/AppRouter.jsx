import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { UserPage, UserEditPage, UserRolesEditPage, GroupPage, GroupEditPage, GroupRolesEditPage } from "./Pages";
import { SearchPage } from "./Pages/SearchPage";
import { SurveyPage } from "./Pages/SurveyPage";
import { SurveyEditPage } from "./Pages/SurveyEditPage";
import { SurveyQuestionsPage } from "./Pages/SurveyQuestionsPage";
import { base } from "./config";
import { SurveyAnswersViewPage } from "./Pages/SurveyAnswersViewPage";
import { SurveyAnswerEditPage } from "./Pages/SurveyAnswerEditPage";
import { UserAnswersPage } from "./Pages/UserAnswersPage";

// import { UserPage, GroupPage } from "./Pages";

export const Routes = [
    {
        path: base + "/",
        errorElement: <SearchPage />,
        element: <SearchPage />
    },
    {
        path: base + "/user/view/:id",
        element: <UserPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/survey/view/:id",
        element: <SurveyPage />,
        //errorElement: <SearchPage />,
    },
    {
        path: base + "/useranswers/edit/:id",
        element: <UserAnswersPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/question/view/:id",
        element: <SurveyQuestionsPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/query/view/:id",
        element: <SurveyQuestionsPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/user/edit/:id",
        element: <UserEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/survey/edit/:id",
        element: <SurveyEditPage />,
        //errorElement: <SearchPage />,
    },
    {
        path: base + "/answers/view/:id",
        element: <SurveyAnswersViewPage  />,
        //errorElement: <SearchPage />,
    },
    {
        path: base + "/answer/edit/:id",
        element: <SurveyAnswerEditPage  />,
        //errorElement: <SearchPage />,
    },
    {
        path: base + "/userroles/edit/:id",
        element: <UserRolesEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/group/view/:id",
        element: <GroupPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/group/edit/:id",
        element: <GroupEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/grouproles/edit/:id",
        element: <GroupRolesEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/search",
        element: <SearchPage />,
        errorElement: <SearchPage />,
    },
    {
      path: base + "/search/:phrase",
      element: <SearchPage />,
      errorElement: <SearchPage />,
    },    
]

//const router = createBrowserRouter(Routes, {basename: "/surveys"});
// const router = createBrowserRouter(Routes);
const router = createBrowserRouter(Routes);
export const AppRouter = () => <RouterProvider router={router} />