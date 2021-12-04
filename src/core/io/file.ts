import { readFileSync, promises } from "fs"
import { join } from "path"
import { Context } from "../../@types/context"
import { getProjectRootFolder } from "./folders"

export const readFileSyncUtf8 = (path: string) => readFileSync(path, { encoding: 'utf8' })
export const readFileUtf8 = async(path: string) => promises.readFile(path, { encoding: 'utf8' })
export const readPackageJson = (context: Context) => JSON.parse(readFileSyncUtf8(join(getProjectRootFolder(context.config), 'package.json')))