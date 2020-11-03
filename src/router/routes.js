import { CharacterList } from "../pages/CharactersList";
import { CharacterInfo } from "../pages/CharacterInfo";
import { BlockLayout } from "../pages/BlockLayout";
import { Home } from "../pages/Home";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/characters/:id",
    component: CharacterInfo,
    exact: true,
  },
  {
    path: "/characters",
    component: CharacterList,
    exact: true,
  },
  {
    path: "/block-layout",
    component: BlockLayout,
    exact: true,
  },
];
