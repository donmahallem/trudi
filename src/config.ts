/*!
 * Source https://github.com/donmahallem/TrapezeApiExpressServer
 */

import { CorsOptions } from "cors";
import { IHelmetConfiguration } from "helmet";
/**
 * General Server Configuration
 */
export interface IServerConfig {
    /**
     * Options to be used for cors header
     */
    cors?: CorsOptions;
    /**
     * Helmet configuration
     */
    helmet?: IHelmetConfiguration;
    /**
     * port to run on
     */
    port: number;
    /**
     * endpoint to query data from
     */
    endpoint: string;
}
