import web3 from "./web3";
import ProjectFactory from "./build/ProjectFactory.json";

const instance = new web3.eth.Contract(
  ProjectFactory.abi,
  "0xF462386Ca759Ab8D582A2ad939602bB263F12d2b"
);

export default instance;
