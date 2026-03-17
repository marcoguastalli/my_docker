import { Bookmarks } from './Bookmarks'
import { BookmarksSqLiteRepository } from './BookmarksSqLiteRepository'

/**
 * Service
 */
export class BookmarksService {

    public getAll = async () => {
        const result: Bookmarks[] | null = await BookmarksSqLiteRepository.all({
            command: `
            SELECT
                "id",
                "title",
                "uri",
                "folder",
                "icon",
                "status",
                "create_time",
                "update_time"
            FROM "bookmarks";`,
            params: {}
        });
        return result
    }

    public getById = async (id: number) => {
        const result: Bookmarks[] | null = await BookmarksSqLiteRepository.get({
            command: `
            SELECT
                "id",
                "title",
                "uri",
                "folder",
                "icon",
                "status",
                "create_time",
                "update_time"
            FROM "bookmarks"
            WHERE
                "id" = $id;`,
            params: {
                $id: id
            }
        });
        return result
    }

    public save = async (_json: any) => {
        await BookmarksSqLiteRepository.execute({
            command: `
                INSERT INTO "bookmarks" (
                    "title",
                    "uri",
                    "folder",
                    "icon",
                    "status",
                    "create_time"
                ) VALUES (
                    $title,
                    $uri,
                    $folder,
                    $icon,
                    $status,
                    $create_time
                )`,
            params: {
                $title: _json.title,
                $uri: _json.uri,
                $folder: _json.folder,
                $icon: _json.icon,
                $status: _json.status,
                $create_time: _json.create_time
            }
        })
    }
}