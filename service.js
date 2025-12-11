export function concatMessage(name) {
    const appName = process.env.APP_NAME;
    return `Welcome back ${name} from ${appName}`
}