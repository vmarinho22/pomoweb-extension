import Router from "~contexts/router";
import { CountButton } from "~features/count-button"
import Home from "~pages/Home";

import "~styles/global.css"

const routes = [
  {
    prefix: 'home',
    component: Home,
    isDefault: true,
  }
];

function IndexPopup() {
  return (
    <div className="w-[364px] flex items-center justify-center rounded-lg">
      <Router routes={routes} />
    </div>
  )
}

export default IndexPopup
