import { IDatabaseDriver, IDatabaseDriverEnd, IDatabaseDriverUnique, IDatabaseDriverRaw } from "./DatabaseDriver";
import { IModelValidation } from "./IModelValidation";
import { INoResultCallback } from "./INoResultCallback";
import { ISingleResultCallback } from "./ISingleResultCallback";

/**
 * TS-Framework Model
 * This class contains definitons of methods for comunication with DatabaseDriver
 */

export class Model<T>
{
    /**
     * WL collection
     */
    private collection: T[];

    /**
     * Save flag
     * @param {ISingleResultCallback<T>} callback
     */
    //save:<T> (callback: ISingleResultCallback<T>) => void;

    /**
     * Destroy flag
     * @param {INoResultCallback<T>} callback
     */
    //destroy:<T> (callback: INoResultCallback<T>) => void;

    /**
     * Model Save
     * @param {T} model
     * @param {ISingleResultCallback<T>} callback
     */
    public save<T>(model: T, callback: ISingleResultCallback<T>) {
        //...
    }

    /**
     * Model Sestroy
     * @param {T} model
     * @param {INoResultCallback<T>} callback
     */
    public destroy<T>(model: T, callback: INoResultCallback<T>) {
        //...
    }

    /**
     * Model All
     * @param {T} model
     * @param {IDatabaseDriverEnd<T>} callback
     */
    public all<T>() : IDatabaseDriverEnd<T> {
        return null;
    }

    /**
     * Model Where
     * @param {} query
     */
    public where(query: {}) {
        //...;
    }

    /**
     * Model Get
     * @param {T} model
     * @param {IDatabaseDriverUnique<T>} callback
     */
    public get(id: number) : IDatabaseDriverUnique<any> {
        return null;
    }

    /**
     * Model First
     * @param {number} id
     * @return {IDatabaseDriverUnique<T>} callback
     */
    public first<T>(id: number) : IDatabaseDriverUnique<T> {
        return null;
    }

    /**
     * Model Find
     */
    public find<T>() : IDatabaseDriver<T> {
        return null;
    }

    /**
     * Model Query
     * @param {number} id
     * @return {IDatabaseDriverRaw<T>}
     */
    public query<T>(id: number) : IDatabaseDriverRaw<T> {
        return null;
    }

    /**
     * Model validate
     * @param {string} attr
     * @param {IModelValidation} options
     */
    public validate(attr: string, options: IModelValidation);

    /**
     * Model validate
     * @param {string[]} attrs
     * @param {IModelValidation} definition
     */

    public validate(attrs: string[], definition: IModelValidation);

    /**
     * Model validate
     * @param {any} obj
     * @param {IModelValidation} definition
     */

    public validate(obj: any, definition: IModelValidation) {
        //...
    }
}