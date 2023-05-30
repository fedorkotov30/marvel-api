import "./Characters.css";
import "../App/App.css";

import Notification from "../Notification/Notification";
import imgCloseWhite from "../Characters/img/close-white.svg";

import { IMG_STANDART_XLARGE } from "../../constants/api.js";
import { ROOT_MODAL } from "../../constants/root";

import { getDataApi } from "../../utils/getDataApi.js";

console.log(imgCloseWhite);

class Characters {
  renderContent(data) {
    let htmlContent = "";
    data.forEach(({ name, thumbnail: { path, extension } }) => {
      const imgSrc = path + "/" + IMG_STANDART_XLARGE + "." + extension;

      htmlContent += `
        <li class="characters__item">
            <img class="img-cover characters__img" src="${imgSrc}"/>
            <span class="characters__name">${name}</span>
        </li>
      `;
    });

    const htmlWrapper = `s
    <div class="wrapper">
        <ul class="characters__container">
            ${htmlContent}
        </ul>
        <button class="btn characters__close" onclick="modal.innerHTML = ''" style="background-image: url(${imgCloseWhite})"></button>
    </div>    
    `;

    ROOT_MODAL.innerHTML = htmlWrapper;
  }

  async render(uri) {
    const data = await getDataApi.getData(uri);

    data.length ? this.renderContent(data) : Notification.render();
  }
}

export default new Characters();
