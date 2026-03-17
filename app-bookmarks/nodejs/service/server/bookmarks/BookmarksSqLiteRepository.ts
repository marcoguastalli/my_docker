const sqlite3 = require('sqlite3').verbose()

/**
 * Repository
 */
export class BookmarksSqLiteRepository {
    static _path: string = "./bookmarks.sqlite3"
    static _database: any
    static _tables: any[] = []

    constructor() {
        BookmarksSqLiteRepository._tables.push(`
            CREATE TABLE IF NOT EXISTS "bookmarks" (
                "id"                        INTEGER NOT NULL,
                "title"                     TEXT    NOT NULL,
                "uri"                       TEXT    NOT NULL,
                "folder"                    TEXT    NOT NULL,
                "icon"                      TEXT,
                "status"                    REAL    NOT NULL DEFAULT 200,
                "create_time"               TEXT    NOT NULL DEFAULT CURRENT_TIMESTAMP,
                "update_time"               TEXT    NOT NULL DEFAULT "",
                PRIMARY KEY ("id")
            )
        `)
    }

    static async open(): Promise<boolean> {
        // Check if the database is already open.
        if (this._database) {
            return true
        }
        this._database = new sqlite3.Database(this._path, (err: { message: any }) => {
            if (err) {
                console.error(err.message)
            }
        })
        console.log(`[Database] Opened ${this._path}`)
        // Put the database into Write Ahead Log mode.
        const walModeActivated = await this.execute({ command: "PRAGMA journal_mode = WAL" })
        if (!walModeActivated) {
            return false
        }
        console.log(`[Database] Journal Mode for ${this._path} changed to WAL`)
        // Put the database into normal synchronisation mode.
        const normalSyncModeActivated = await this.execute({ command: "PRAGMA synchronous = normal" })
        if (!normalSyncModeActivated) {
            return false
        }
        console.log(`[Database] Synchronisation Mode for ${this._path} changed to NORMAL`)
        // Save temporary indices in memory instead of disk.
        const memoryTempStoreActivated = await this.execute({ command: "PRAGMA temp_store = memory" })
        if (!memoryTempStoreActivated) {
            return false
        }
        console.log(`[Database] Temporary index storage for ${this._path} changed to MEMORY`)
        // Change the page size to 32KB.
        const pageSizeChanged = await this.execute({ command: "PRAGMA page_size = 32768" })
        if (!pageSizeChanged) {
            return false
        }
        console.log(`[Database] Page Size for ${this._path} changed to 32KB`)
        // Make sure the table structure of the database is created.
        const databaseStructureCreated = await this.create()
        console.log(`[Database] ${databaseStructureCreated} == databaseStructureCreated`)
        if (!databaseStructureCreated) {
            return false
        }
        console.log(`[Database] ${this._path} is ready`)
        return true
    }

    public static close(): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            if (this._database) {
                this._database.close((err: { message: any }) => {
                    if (err) {
                        console.log(err)
                        resolve(false)
                    } else {
                        console.log(`[Database] Closed ${this._path}`)
                        resolve(true)
                    }
                })
            } else {
                resolve(true)
            }
        })
    }

    public static execute(executeOptions: { command: string, params?: any }): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            this._database.run(executeOptions.command, executeOptions.params, (err: { message: any }) => {
                if (err) {
                    console.log(err)
                    resolve(false)
                } else {
                    resolve(true)
                }
            })
        })
    }

    public static get(getOptions: { command: string, params: any }): Promise<any | null> {
        return new Promise<any | null>((resolve) => {
            this._database.get(getOptions.command, getOptions.params, async (err: { message: any }, sqliteData: any[] | PromiseLike<any[]>) => {
                if (err) {
                    console.log(err)
                    resolve(null)
                } else {
                    resolve(sqliteData)
                }
            })
        })
    }

    public static all(allOptions: { command: string, params: any }): Promise<any[] | null> {
        return new Promise<any[] | null>((resolve) => {
            this._database.all(allOptions.command, allOptions.params, async (err: any, sqliteData: any[] | PromiseLike<any[]>) => {
                if (err) {
                    console.log(err)
                    resolve(null)
                } else {
                    resolve(sqliteData)
                }
            })
        })
    }

    private static async create(): Promise<boolean> {
        for (const table of this._tables) {
            const created = await this.execute({ command: table })
            if (!created) {
                return false
            }
        }
        return true
    }

}
