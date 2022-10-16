import web3 from "./web3";
import ProjectFactory from "./build/ProjectFactory.json";

const instance = new web3.eth.Contract(
  ProjectFactory.abi,
  "0x20C1B53294a0BC688D48f21c00F1Ac2D8474B340"
);

export default instance;
