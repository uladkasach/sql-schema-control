import util from 'util';
import fs from 'fs';

// export these from a seperate file to make testing easier (i.e., easier to define the mocks)
export const mkdir = util.promisify(fs.mkdir);
export const writeFile = util.promisify(fs.writeFile);
export const readFile = util.promisify(fs.readFile);
