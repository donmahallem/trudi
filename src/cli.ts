/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressServer
 */

import * as nconf from "nconf";
import { IServerConfig } from "./config";
import { loadConfigFromFile } from "./config-loader";
import { TrapezeServer } from "./trapeze-server";
const nconfConfig: nconf.Provider = new nconf.Provider({})
    .argv({
        c: {
            alias: "config",
            demand: true,
            describe: "the config to use",
        },
        p: {
            alias: "port",
            demand: false,
            describe: "the port to use",
        },
    })
    .defaults({
        endpoint: undefined,
        port: 3000,
    });
const filename: string = nconfConfig.get("config");
const config: IServerConfig = loadConfigFromFile(filename);
if (nconfConfig.get("port")) {
    config.port = nconfConfig.get("port");
}
const server: TrapezeServer = new TrapezeServer(config);
// tslint:disable-next-line:no-console
server.start().then(() => console.log("started"));
