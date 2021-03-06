import { Subject } from "./abstract/Subject";
import { RealSubject } from "./concrete/RealSubject";
import { Proxy } from "./concrete/Proxy";

function clientCode(subject: Subject) {
  subject.request();
}

console.log("Client: Executing the client code with a real subject:");
const realSubject = new RealSubject();
clientCode(realSubject);

console.log("Client: Executing the same client code with a proxy:");
const proxy = new Proxy(realSubject);
clientCode(proxy);
