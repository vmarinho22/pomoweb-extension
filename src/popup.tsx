import Router from "~contexts/router";
import { CountButton } from "~features/count-button"

import "~styles/global.css"

const routes = [
  {
    prefix: 'home',
    component: CountButton,
    isDefault: true,
  }
];

function IndexPopup() {
  return (
    <div className="w-[364px] flex items-center justify-center">
      <Router routes={routes} />
    </div>
  )
}

export default IndexPopup
