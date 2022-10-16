import web3 from "./web3";
import ProjectFactory from "./build/ProjectFactory.json";

const instance = new web3.eth.Contract(
  ProjectFactory.abi,
  "0xbB50AbE45161f4aE4Bddc7B810d279b5c9272299"
);

export default instance;
