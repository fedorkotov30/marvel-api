import { ROOT_MODAL } from "../../constants/root";
import "./Notification.css";
import "../App/App.css";

import imgCloseBlack from "../Notification/img/close-black.svg";

class Notification {
  render() {
    const htmlWrapper = `
        <div class="notification__container">
            <span>Нет контента</span>
            <button class="btn notification__close" onclick="modal.innerHTML = ''" style="background-image: url(${imgCloseBlack})"></button>
        </div>
    `;

    ROOT_MODAL.innerHTML = htmlWrapper;
  }
}

export default new Notification();
