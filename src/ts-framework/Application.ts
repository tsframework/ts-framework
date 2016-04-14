/// <reference path="../../typings/main.d.ts" />

import * as Express from "express";
import {Configuration} from "./Configuration";
import {Router} from "./Router";

/**
 * TS-Framework application
 * This class is a wrapper around the default express server
 * It will load controllers, models and routes automatically
 */
export class Application
{
    /**
     * Default port used by the application in development mode
     * @type {number}
     */
    public static DEFAULT_PORT = 3000;

    /**
     * Router object
     * @type {Router}
     */
    public router: Router;

    /**
     * Configuration object
     * @type {Configuration}
     */
    private config: Configuration;

    /**
     * Express server we're creating a wrapper for
     * @type {Express.Application}
     */
    private express: Express.Application;


    /**
     * Application constructor
     * Developer must define the default root directory of the application
     * @param {string} rootDirectory
     */
    public constructor(private rootDirectory: string)
    {
        // Initialize router and configuration manager
        this.config = new Configuration();
        this.router = new Router(rootDirectory);

        // Define default settings
        this.config.set('env', Application.getEnvironment());
        this.config.set('port', Application.DEFAULT_PORT);
        this.config.set('static.path', 'public');
        this.config.set('view.path', 'app/views');
        this.config.set('view.engine', 'ejs');
        this.config.set('view.layout', false);
    }

    /**
     * Checks wether the project should run as development mode or production mode
     * @returns {string}
     */
    private static getEnvironment()
    {
        return ((process.env.NODE_ENV == null) ? 'development' : process.env.NODE_ENV);
    }

    /**
     * Add or override a pre-defined route
     * @param {string} path
     * @param {string} action
     * @returns {void}
     */
    public addRoute(path: string, action: string)
    {
        // ...
    }

    /**
     * Registers all controllers and models accordingly, and starts the express server
     * @param {number|null} port
     * @returns {void}
     */
    public start(port: number = null): void
    {
        // If no port was given, fetch from config or use the default port
        if (port == null) {
            port =  this.config.get("port") || Application.DEFAULT_PORT;
        }

        // Make express listen
        this.express.listen(port);

        // Display a start message
        console.log("TS-Framework started");
        console.log("Server listening on port: %d", port);
    }
}