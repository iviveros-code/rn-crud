import React from "react";

import { firebaseApp } from "./src/utils/firebase";
import DrawerNavigation from "./src/navigations/drawer/DrawerNavigation";

export default function App() {
  return <DrawerNavigation />;
}
