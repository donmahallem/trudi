/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressServer
 */

import * as fs from "fs";
import { validate, ValidatorResult } from "jsonschema";
import * as configSchema from "./config-schema.json";
import { IServerConfig } from "./config.js";
export const loadConfigFromFile: (filename: string) => IServerConfig = (filename: string): IServerConfig => {
    const data: string = fs.readFileSync(filename, { encoding: "utf-8" });
    const parsed: any = JSON.parse(data);
    const result: ValidatorResult = validate(parsed, configSchema);
    if (result.valid) {
        return parsed;
    } else {
        throw new Error("no valid config provided");
    }
};
